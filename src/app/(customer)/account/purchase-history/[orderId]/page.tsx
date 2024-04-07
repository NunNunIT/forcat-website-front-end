'use client'

// import libs
import useSWR, { Fetcher } from "swr";
import { BACKEND_URL } from "@/utils/commonConst";
import {
  convertDateToFormatHHMMDDMMYYYY, convertOrderStatusToStr,
  convertPaymentToStr,
  parseNumToCurrencyStr,
  convertOrderStatusToIconData,
} from "@/utils";

// import components
import { CustomerProductItemInOrderItem } from '@/components';

// import css
import './page.css';

interface IOrderDetailProps {
  _id: string;
  order_buyer: { order_name: string, order_phone: string };
  order_address: { street: string, ward: string, district: string, province: string };
  order_process_info: { status: string, date: Date }[];
  order_details: { product_id: string, quantity: number, unit_price: number, price_discount?: number }[];
  order_total_cost: number;
  payment_id: string;
}

const fetcher: Fetcher<IOrderDetailProps, string> = async (url: string) => {
  const res: IResponseJSON = await fetch(url).then(res => res.json());

  if (!res.success)
    throw res;

  return res.data as IOrderDetailProps;
}

export default function PurchaseDetailPage({ params }: { params: { orderId: string } }) {
  const { data, error, isLoading } = useSWR(
    BACKEND_URL + '/purchases/' + params.orderId,
    fetcher
  );

  if (isLoading) return <p>Đang tải dữ liệu...</p>;
  if (error) return <p>Có lỗi xảy ra: {error.message}</p>;

  const { _id, order_buyer, order_process_info, payment_id, order_details, order_total_cost, order_address } = data;
  const { date: order_date } = order_process_info[0];
  const { status: order_status } = order_process_info.slice(-1)[0];
  const { order_name, order_phone } = order_buyer;
  const { street, ward, district, province } = order_address;

  return (
    <main className="order-detail">
      <div className="order-detail--top">
        <span className="order-detail__overview">
          <h2>Chi tiết hóa đơn: #{_id}</h2>
          <span>Đặt lúc: {convertDateToFormatHHMMDDMMYYYY(new Date(order_date))}</span>
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
        {/* <PaymentType id={payment_id} /> */}
        <span>Thanh toán bằng thẻ tín dụng</span>
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

function ProductItems({ order_details }: {
  order_details: {
    product_id: string,
    quantity: number,
    unit_price: number,
    price_discount?: number
  }[]
}) {
  return (
    <>
      {order_details.map(product =>
        <CustomerProductItemInOrderItem
          key={product.product_id}
          {...product}
        />
      )}
    </>
  )
}