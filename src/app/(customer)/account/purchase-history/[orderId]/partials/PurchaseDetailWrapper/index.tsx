"use client";

// import libs
import { notFound } from "next/navigation";
import useSWR, { Fetcher } from "swr";
import Skeleton from "react-loading-skeleton";

// import utils
import { BACKEND_URL_ORDERS } from "@/utils/commonConst";
import {
  convertDateToFormatHHMMDDMMYYYY,
  convertOrderStatusToStr,
  parseNumToCurrencyStr,
  convertOrderStatusToIconData,
} from "@/utils";

// import components
import { CustomerProductItemInOrderItem } from "@/components";

// import css
import "react-loading-skeleton/dist/skeleton.css";

interface IOrderDetailProps {
  _id: string;
  order_buyer: { order_name: string; order_phone: string };
  order_address: {
    street: string;
    ward: string;
    district: string;
    province: string;
  };
  order_details: IProductItemInOrderItemProps[];
  order_total_cost: number;
  order_status: string;
  payment_id: string;
  createdAt: string;
}

const getFullBackendURLOrder = (orderId: string): string => {
  return `${BACKEND_URL_ORDERS}/${orderId}`;
};

const fetcher: Fetcher<IOrderDetailProps, string> = async (url: string) => {
  try {
    const res: Response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const json: IResponseJSON = await res.json();
    if (!json.success) {
      throw json;
    }

    return json.data as IOrderDetailProps;
  } catch (error) {
    console.error(error);
    return notFound();
  }
};

export default function PurchaseDetailPage(props: { orderId: string }) {
  const fullURL: string = getFullBackendURLOrder(props.orderId);
  const { data, error, isLoading } = useSWR(
    fullURL,
    fetcher
  )

  if (isLoading) {
    return <SkeletonPurchaseDetailPage {...props} />
  }

  return (
    <main className="order-detail">
      <div className="order-detail--top">
        <span className="order-detail__overview">
          <h2>Chi tiết hóa đơn: #{props.orderId}</h2>
          <span>
            Đặt lúc: {convertDateToFormatHHMMDDMMYYYY(new Date(data.createdAt))}
          </span>
        </span>
        <span className={`order-detail__status ${data.order_status}`}>
          <span className="material-icons">
            {convertOrderStatusToIconData(data.order_status)}
          </span>
          {convertOrderStatusToStr(data.order_status)}
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
              <td>{data.order_buyer.order_name}</td>
            </tr>
            <tr>
              <th>Số điện thoại:</th>
              <td>{data.order_buyer.order_phone}</td>
            </tr>
            <tr>
              <th>Địa chỉ: </th>
              <td>
                {[
                  data.order_address.street,
                  data.order_address.ward,
                  data.order_address.district,
                  data.order_address.province
                ].join(", ")}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="order-detail__paying-method">
        <h2>
          <span className="material-icons">credit_card</span>
          <span>Thông tin thanh toán</span>
        </h2>
        <span>Thanh toán bằng thẻ tín dụng</span>
      </div>
      <div className="order-detail__products">
        <h2>
          <span className="material-icons">shopping_bag</span>
          <span>Thông tin sản phẩm</span>
        </h2>
        <div className="order-detail__products-wrapper">
          {(data.order_details ?? []).map((product) => (
            <CustomerProductItemInOrderItem
              key={product.product_id_hashed}
              {...product}
            />
          ))}
        </div>
        <hr />
        <table className="order-detail__cost">
          <tbody>
            <tr>
              <th>Tạm tính:</th>
              <td>{parseNumToCurrencyStr(data.order_total_cost)} đ</td>
            </tr>
            <tr>
              <th>Thành tiền:</th>
              <td>{parseNumToCurrencyStr(data.order_total_cost)} đ</td>
            </tr>
            <tr>
              <th>Số tiền phải thanh toán:</th>
              <td>{parseNumToCurrencyStr(data.order_total_cost)} đ</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}

function SkeletonPurchaseDetailPage(props: { orderId: string }) {
  return (
    <main className="order-detail">
      <div className="order-detail--top">
        <span className="order-detail__overview">
          <h2>Chi tiết hóa đơn: #{props.orderId}</h2>
          <Skeleton />
        </span>
        <Skeleton className="order-detail__status unpaid" />
      </div>
      <div className="order-detail__info-receive">
        <h2>
          <span className="material-icons">location_on</span>
          <span>Thông tin nhận hàng</span>
        </h2>
        <Skeleton count={3} />
      </div>
      <div className="order-detail__paying-method">
        <h2>
          <span className="material-icons">credit_card</span>
          <span>Thông tin thanh toán</span>
        </h2>
        <Skeleton />
      </div>
      <div className="order-detail__products">
        <h2>
          <span className="material-icons">shopping_bag</span>
          <span>Thông tin sản phẩm</span>
        </h2>
        <div className="order-detail__products-wrapper">
          <Skeleton count={3} />
        </div>
        <hr />
        <div className="order-detail__cost--skeleton">
          <Skeleton count={3} />
        </div>
      </div>
    </main>
  )
}