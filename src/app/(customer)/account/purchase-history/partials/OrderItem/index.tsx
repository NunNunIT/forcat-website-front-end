// import libs
import Link from "next/link";
import classNames from "classnames/bind";
import {
  convertOrderStatusToStr, parseNumToCurrencyStr,
  convertOrderStatusToIconData,
} from '@/utils';

// import components
import { CustomerProductItemInOrderItem } from "@/components";

// import css
import styles from "./order-item.module.css";

const cx = classNames.bind(styles);

export default function OrderItem(props: IOrderItemProps) {
  const { _id, order_process_info, order_total_cost, order_details } = props;
  const { status: order_status } = order_process_info.slice(-1)[0];

  return (
    <div className={cx("order-item")}>
      <span className={cx("order-item--top")}>
        Đơn hàng:
        <span className={cx("order-item__id")}>#{_id}</span>
        <span className={cx("order-item__status", order_status)}>
          <span className="material-icons">{convertOrderStatusToIconData(order_status)}</span>
          {convertOrderStatusToStr(order_status)}
        </span>
      </span>
      <hr />
      <div className={cx("order-item__product-list")}>
        {order_details.map(
          (product: IProductItemInOrderItemProps, index: number) =>
            <CustomerProductItemInOrderItem key={index} {...product} />
        )}
      </div>
      <hr />
      <div className={cx("order-item--bottom")}>
        <div className={cx("order-item__total-price")}>
          Thành tiền: {parseNumToCurrencyStr(order_total_cost)} đ
        </div>
        <div className={cx("order-item__button-wrapper")}>
          <Link className={`btn btn--outlined pri ${cx("order-item__button")}`}
            href={`/account/purchase-history/${_id}`}
          >
            <span>Xem chi tiết</span>
          </Link>
          <button className={`btn btn--filled sec ${cx("order-item__button")}`}>
            <span>Đánh giá</span>
          </button>
        </div>
      </div>
    </div>
  )
}