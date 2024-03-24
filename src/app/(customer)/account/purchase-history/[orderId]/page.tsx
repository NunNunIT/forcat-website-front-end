// import libs
import { Suspense } from "react";
import {
  convertDateToFormatHHMMDDMMYYYY, convertOrderStatusToStr,
  convertPaymentToStr, parseNumToCurrencyStr,
  convertOrderStatusToIconData
} from "@/utils";

// import components
import { CustomerProductItemInOrderItem } from '@/components';

// import css
import './page.css';

function fetchDataDemo(url: string, { id }: { id: string }) {
  const mapData = {
    'order_url': {
      order_id: id,
      order_buyer: {
        order_name: "Lê Trung Hiếu",
        order_phone: "0123456789",
        order_address: {
          street: "Khu phố 6",
          ward: "Phường Linh Trung",
          district: "Thành phố Thủ Đức",
          province: "Thành phố Hồ Chí Minh"
        }
      },
      order_details: [
        { product_id: 1, quantity: 1, unit_price: 11800000, price_discount: 1200000 },
        { product_id: 2, quantity: 1, unit_price: 11800000 },
      ],
      payment_id: "1",
      order_process_info: [
        { status: 'created', date: new Date("2024-02-20 17:30") },
        { status: 'finished', date: new Date("2024-02-23 12:34") },
      ],
      order_total_cost: 13000000,
    },
    'payment_url': {
      payment_id: id,
      payment_type: 'credit_card',
    },
    'product_url': [
      {
        product_id: 1, product_name: 'Sản phẩm cho mèo', product_imgs: [
          { link_avt: '/imgs/test.png', alt: 'Hình ảnh cho mèo', },
        ],
      },
    ]
  }

  return Promise.resolve({
    json: async () => Promise.resolve({ data: mapData[url] }),
  })
}

export default async function PurchaseDetailPage({ params }: { params: { orderId: string } }) {
  const order_url = "order_url";
  const order = await fetchDataDemo(order_url, { id: params.orderId }).then(res => res.json()).then(json => json.data);
  const { order_id, order_buyer, order_process_info, payment_id, order_details, order_total_cost } = order;
  const { date: order_date } = order_process_info[0];
  const { status: order_status } = order_process_info.slice(-1)[0];
  const { order_name, order_phone, order_address } = order_buyer;
  const { street, ward, district, province } = order_address;

  return (
    <main className="order-detail">
      <div className="order-detail--top">
        <span className="order-detail__overview">
          <h2>Chi tiết hóa đơn: #{order_id}</h2>
          <span>Đặt lúc: {convertDateToFormatHHMMDDMMYYYY(order_date)}</span>
        </span>
        <span className={`order-detail__status ${order_status}`}>
          <span className="material-icons">{convertOrderStatusToIconData(order_status)}</span>
          {convertOrderStatusToStr(order_status)}
        </span>
      </div>
      <div className="order-detail__info-receive">
        <h2>
          <span className="material-icons">location_on</span>
          <span>Thông tin nhận hàng</span>
        </h2>
        <table className="order-detail__info-receive-data">
          <tbody>
            <tr>
              <th>Người nhận: </th>
              <td>{order_name}</td>
            </tr>
            <tr>
              <th>Số điện thoại:</th>
              <td>{order_phone}</td>
            </tr>
            <tr>
              <th>Địa chỉ: </th>
              <td>{[street, ward, district, province].join(', ')}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="order-detail__paying-method">
        <h2>
          <span className="material-icons">credit_card</span>
          <span>Thông tin thanh toán</span>
        </h2>
        <PaymentType id={payment_id} />
      </div>
      <div className="order-detail__products">
        <h2>
          <span className="material-icons">shopping_bag</span>
          <span>Thông tin sản phẩm</span>
        </h2>
        <div className="order-detail__products-wrapper">
          <ProductItems order_details={order_details} />
        </div>
        <hr />
        <table className="order-detail__cost">
          <tbody>
            <tr>
              <th>Tạm tính:</th>
              <td>{parseNumToCurrencyStr(order_total_cost)} đ</td>
            </tr>
            <tr>
              <th>Thành tiền:</th>
              <td>{parseNumToCurrencyStr(order_total_cost)} đ</td>
            </tr>
            <tr>
              <th>Số tiền phải thanh toán:</th>
              <td>{parseNumToCurrencyStr(order_total_cost)} đ</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

async function PaymentType({ id }: { id: string }) {
  const url = 'payment_url';
  const { payment_type } = await fetchDataDemo(url, { id }).then(res => res.json()).then(json => json.data);
  return (
    <Suspense fallback={<>Đang tải dữ liệu</>}>
      <p>Thanh toán bằng {convertPaymentToStr(payment_type)}</p>
    </Suspense>
  )
}

async function ProductItems({ order_details }: {
  order_details: {
    product_id: string,
    quantity: number,
    unit_price: number,
    price_discount?: number
  }[]
}) {
  const product_ids = order_details.map(order_detail => order_detail.product_id);
  const url = 'product_url';
  const products = product_ids.map(async product_id => (
    await fetchDataDemo(url, { id: product_id }).then(res => res.json()).then(json => json.data)
  ))

  const combineArr = products.map((product, index: number) => ({ ...product, ...order_details[index] }))

  return (
    <Suspense fallback={<>Đang tải dữ liệu...</>}>
      {combineArr.map((order_detail, index: number) =>
        <CustomerProductItemInOrderItem key={index} {...order_detail} />
      )}
    </Suspense>
  )
}