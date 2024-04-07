// import libs
import Image from "next/image";
import classNames from "classnames/bind";
import { parseNumToCurrencyStr } from '@/utils';

// import css
import styles from "./product-item-in-order-item.module.css";

const cx = classNames.bind(styles);

export default function ProductItemInOrderItem(props: IProductItemInOrderItemProps) {
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
