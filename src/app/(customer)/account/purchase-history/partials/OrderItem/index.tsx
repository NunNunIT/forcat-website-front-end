"use client";

// import libs
import Link from "next/link";
import axios from "axios";
import classNames from "classnames/bind";
import {
  convertOrderStatusToStr, parseNumToCurrencyStr,
  convertOrderStatusToIconData,
} from "@/utils";
import {
  BACKEND_URL_ORDERS
} from "@/utils/commonConst";

// import components
import { CustomerProductItemInOrderItem } from "@/components";

// import css
import styles from "./order-item.module.css";

const cx = classNames.bind(styles);

export default function OrderItem(props: IOrderItemProps) {
  const setCancel = async () => {
    try {
      const url: string = `${BACKEND_URL_ORDERS}/${props._id}/cancel`;
      const JSON: IResponseJSON = await axios.post(url).then(res => res.data);
      props?.mutate();
      return JSON;
    } catch (err) {
      return err;
    }
  }

  return (
    <div className={cx("order-item")}>
      <span className={cx("order-item--top")}>
        Đơn hàng:
        <span className={cx("order-item__id")}>#{props._id}</span>
        <span className={cx("order-item__status", props.order_status)}>
          <span className="material-icons">{convertOrderStatusToIconData(props.order_status)}</span>
          {convertOrderStatusToStr(props.order_status)}
        </span>
      </span>
      <hr />
      <div className={cx("order-item__product-list")}>
        {props.order_details.map(
          (product: IProductItemInOrderItemProps) =>
            <CustomerProductItemInOrderItem key={product.product_id} {...product} />
        )}
      </div>
      <hr />
      <div className={cx("order-item--bottom")}>
        <div className={cx("order-item__total-price")}>
          Thành tiền: {parseNumToCurrencyStr(props.order_total_cost)} đ
        </div>
        <div className={cx("order-item__button-wrapper")}>
          <Link className={`btn btn--outlined pri ${cx("order-item__button")}`}
            href={`/account/purchase-history/${props._id}`}
          >
            <span>Xem chi tiết</span>
          </Link>
          {props.order_status == "unpaid" &&
            <button className={`btn btn--outlined danger ${cx("order-item__button")}`}
              onClick={setCancel}
            >
              <span>Hủy đơn</span>
            </button>}
          {props.order_status == "delivering" &&
            <button className={`btn btn--filled sec ${cx("order-item__button")}`}
              disabled={true}
            >
              <span>Đánh giá</span>
            </button>
          }
          {props.order_status == "finished" &&
            <Link className={`btn btn--filled sec ${cx("order-item__button")}`}
              href={`/account/purchase-history/${props._id}/review`}
            >
              <span>Đánh giá</span>
            </Link>}
        </div>
      </div>
    </div>
  )
}