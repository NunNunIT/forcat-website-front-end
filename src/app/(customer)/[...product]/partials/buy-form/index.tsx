"use client";

// import libs
import classNames from "classnames/bind";
import { useState, useEffect } from "react";

// import components
import { CustomerQuantityInputGroup, CustomerRatingFull } from "@/components";
import { ProductVariant } from "../../components";

// import utils
import { convertNumberToMoney } from "@/utils";

// import css
import styles from "./buy-form.module.css";

// import interfaces
import { IBuyForm } from "../../interfaces";

// use css
const cx = classNames.bind(styles);

function filterCurrentVariant(productInfo, currentVariantSlug) {
  return productInfo.product_variants.filter(
    (variant) => variant.variant_name == decodeURIComponent(currentVariantSlug)
  )[0];
}

export default function ProductBuyForm({
  productInfo,
  currentVariantSlug,
  mobileOnly,
  ...props
}: {
  productInfo: IBuyForm;
  currentVariantSlug: string;
  mobileOnly?: string;
}) {
  const [quantityValue, setQuantityValue] = useState(1);

  const currentVariant = filterCurrentVariant(
    productInfo,
    currentVariantSlug
  );

  return (
    <section className={cx("product-buy-form", "product", mobileOnly)}>
      <h1 className={cx("product__name")}>{productInfo.product_name}</h1>
      <CustomerRatingFull
        initValue={{
          fontSize: "24px",
          rating: productInfo.product_avg_rating,
        }}></CustomerRatingFull>
      <div className={cx("product__unit-price-div")}>
        <p className={cx("product__unit-price")}>
          {convertNumberToMoney(currentVariant.price)}
        </p>
        <p className={cx("product__discount-amount")}>
          -{currentVariant.discount_amount}%
        </p>
      </div>
      <div className={cx("product__variants", "variants")}>
        <h3 className={cx("variants__title")}>Loại sản phẩm</h3>
        <div className={cx("variants__group")}>
          {productInfo.product_variants.map((item, index) => {
            return (
              <ProductVariant
                variant={{
                  name: item.variant_name,
                  url: `/${productInfo.product_slug}/${item.variant_name}`,
                  image: {
                    url: item.variant_ims[0],
                    alt: `${productInfo.product_name} - ${item.variant_name}`,
                  },
                }}></ProductVariant>
            );
          })}
        </div>
      </div>
      <div className={cx("product__quantity")}>
        <h3>Số lượng</h3>
        <CustomerQuantityInputGroup
          initValue={{
            defaultValue: quantityValue,
            minValue: 1,
            maxValue: 100,
          }}></CustomerQuantityInputGroup>
        <p className={cx("product__is-stock")}>
          {currentVariant.in_stock} sản phẩm có thể mua
        </p>
      </div>
      <div className={cx("product__total-price-div")}>
        <h3>Tạm tính</h3>
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
