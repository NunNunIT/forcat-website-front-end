"use client";

// import libs
import classNames from "classnames/bind";
import { useState } from "react";

// import components
import {
  CustomerProductVariant,
  CustomerQuantityInputGroup,
  CustomerRatingFull,
} from "@/components";

// import css
import styles from "./styles.module.css";

// use css
const cx = classNames.bind(styles);

export default function ProductBuyForm() {
  const [quantityValue, setQuantityValue] = useState(1);

  const handleQuantityChange = (changedValue: number) => {
    setQuantityValue(changedValue);
  };

  return (
    <section className={cx("product-buy-form", "product")}>
      <h1 className={cx("product__name")}>
        Điện thoại Xiaomi Redmi Note 12 (8GB/128GB)
      </h1>
      <CustomerRatingFull fontSize="24px"></CustomerRatingFull>
      <div className={cx("product__unit-price-div")}>
        <p className={cx("product__unit-price")}>3.000.000đ</p>
        <p className={cx("product__discount-amount")}>-20%</p>
      </div>
      <div className={cx("product__variants", "variants")}>
        <h4 className={cx("variants__title")}>Loại sản phẩm</h4>
        <div className={cx("variants__group")}>
          <CustomerProductVariant
            variant={{
              name: "7 sắc cầu vồng",
              url: "/7-sac-cau-vong",
              image: { url: "/imgs/test.png", alt: "7 sắc cầu vồng" },
            }}></CustomerProductVariant>
          <CustomerProductVariant
            variant={{
              name: "8 sắc cầu vồng",
              url: "/8-sac-cau-vong",
              image: { url: "/imgs/test.png", alt: "8 sắc cầu vồng" },
            }}></CustomerProductVariant>
          <CustomerProductVariant
            variant={{
              name: "9 sắc cầu vồng",
              url: "/9-sac-cau-vong",
              image: { url: "/imgs/test.png", alt: "7 sắc cầu vồng" },
            }}></CustomerProductVariant>
          <CustomerProductVariant
            variant={{
              name: "10 sắc cầu vồng",
              url: "/10-sac-cau-vong",
              image: { url: "/imgs/test.png", alt: "8 sắc cầu vồng" },
            }}></CustomerProductVariant>
          <CustomerProductVariant
            variant={{
              name: "11 sắc cầu vồng",
              url: "/11-sac-cau-vong",
              image: { url: "/imgs/test.png", alt: "7 sắc cầu vồng" },
            }}></CustomerProductVariant>
          <CustomerProductVariant
            variant={{
              name: "12 sắc cầu vồng",
              url: "/12-sac-cau-vong",
              image: { url: "/imgs/test.png", alt: "8 sắc cầu vồng" },
            }}></CustomerProductVariant>
        </div>
      </div>
      <div className={cx("product__quantity")}>
        <h4>Số lượng</h4>
        <CustomerQuantityInputGroup
          initValue={{
            defaultValue: quantityValue,
            minValue: 1,
            maxValue: 100,
            onValueChange: handleQuantityChange,
          }}></CustomerQuantityInputGroup>
        <p className={cx("product__is-stock")}>789 sản phẩm có thể mua</p>
      </div>
      <div className={cx("product__total-price-div")}>
        <h4>Tạm tính</h4>
        <p className={cx("product__total-price")}>3.000.000đ</p>
      </div>
      <div className={cx("product__buy-btns", "buy-btns")}>
        <div className={cx("buy-btns__add-cart", "add-cart-btn", "buy-btn")}>
          <span className={cx("material-icons-round", " buy-btn-icon")}>
            add_shopping_cart
          </span>
          <span className={cx("buy-btn-text")}>Giỏ hàng</span>
        </div>
        <div className={cx("buy-btns__buy-now", "buy-now-btn", "buy-btn")}>
          <span className={cx("material-icons-round", "buy-btn-icon")}>
            savings
          </span>
          <span className={cx("buy-btn-text")}>Mua ngay</span>
        </div>
      </div>
    </section>
  );
}
