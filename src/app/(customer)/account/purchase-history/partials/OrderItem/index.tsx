// import libs
import Image from "next/image";
import classNames from "classnames/bind";
import { convertOrderStatusToStr, parseNumToCurrencyStr } from '@/utils';

// import css
import styles from "./order-item.module.css";

const cx = classNames.bind(styles);

function ProductItemInOrderItem(props: ProductItemInOrderItemProps) {
  const { url, product_name, product_sub_category, quantity, unit_price, price_discount } = props;
  const price_final = price_discount ?? unit_price;

  return (
    <div className={cx("product-item")}>
      <div className={cx("product-item__img-container")}>
        <Image src={url ?? '/imgs/test.png'}
          alt={`Hình ảnh sản phẩm của ${product_name ?? 'sản phẩm cho mèo'}`}
          fill
        />
      </div>
      <div className={cx("product-item__detail")}>
        <h5>{product_name ?? 'Sản phẩm cho mèo'}</h5>
        <span>Phân loại hàng: {product_sub_category ?? 'Hàng nhỏ'}</span>
        <span>x{quantity}</span>
      </div>
      <div className={cx("product-item__prices")}>
        {price_discount && <span className={cx("product-item__price-base")}>
          {parseNumToCurrencyStr(unit_price)} đ
        </span>}
        <span className={cx("product-item__price-discounted")}>
          {parseNumToCurrencyStr(price_final)} đ
          </span>
      </div>
    </div>
  )
}

export default function OrderItem(props: OrderItemProps) {
  const { order_id, order_status, order_total_price, order_detail } = props;

  return (
    <div className={cx("order-item")}>
      <span className={cx("order-item--top")}>
        Đơn hàng:
        <span className={cx("order-item__id")}>{order_id}</span>
        <span className={cx("order-item__status", order_status)}>
          {convertOrderStatusToStr(order_status)}
        </span>
      </span>
      <hr />
      <div className={cx("order-item__product-list")}>
        {order_detail.map(
          (product: ProductItemInOrderItemProps, index: number) =>
            <ProductItemInOrderItem key={index} {...product} />
        )}
      </div>
      <hr />
      <div className={cx("order-item--bottom")}>
        <div className={cx("order-item__total-price")}>
          Thành tiền: {parseNumToCurrencyStr(order_total_price)} đ
        </div>
        <div className={cx("order-item__button-wrapper")}>
          <button className={cx("order-item__button")}>Xem chi tiết</button>
          <button className={cx("order-item__button")}>Đánh giá</button>
        </div>
      </div>
    </div>
  )
}