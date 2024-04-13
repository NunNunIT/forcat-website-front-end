"use client";

// import libs
import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";

// import css
import styles from "./order-product.module.css";

// use css
const cx = classNames.bind(styles);

export default function OrderProduct() {
  return (
    <div className={cx("order-product__element__cover")}>
      <div className={cx("order-product__element")}>
        <a href="#">
          <div className={cx("order-product__element--left")}>
            <div className={cx("order-product__img__cover")}>
              <Image
                className={cx("order-product__img")}
                fill={true}
                src="/imgs/test.png"
                alt="ten san pham"
              />
            </div>

            <div className={cx("order-product__product-detail")}>
              <h4 className={cx("order-product__product-name")}>
                Tên sản phẩm
              </h4>
              <p className={cx("order-product__variant")}>
                Phân loại hàng: Phân loại 1
              </p>
              <p className={cx("order-product__amount")}>x1</p>
            </div>
          </div>
        </a>

        <h5 className={cx("order-product__price")}>
          <small className={cx("order-product__price--small")}>
            1.000.000đ
          </small>
          777.000đ
        </h5>
      </div>
      <hr />
    </div>
  );
}
