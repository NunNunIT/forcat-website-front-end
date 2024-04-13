"use client";
// import libs
import Link from "next/link";
import classNames from "classnames/bind";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import { convertNumberToMoney } from "@/utils";
import { CustomerStarRating } from "@/components";

// import css
import styles from "./style.module.css";

// use classnames
const cx = classNames.bind(styles);

export default function CustomerProductCard({ product }) {
  return (
    <div className={cx("product-card")}>
      <Link href={`/${product.product_slug}?pid=${product.product_id}`}
        className={cx("product__card-main")}>
          {product.highest_discount ? (
            <div className={cx("product__card--badge")}>
              - {product.highest_discount} %
            </div>
          ) : null}
          <div className={cx("product__card--top")}>
            <div className={cx("product-tumb")}>
              <CldImage
                src={product.product_img.link}
                alt={product.product_img.alt}
                fill={true}
              />
            </div>
            <div className={cx("product-details")}>
              <span className={cx("product-category")}>
                {product.category_name > 0 ? product.category_name : "FORCAT"}
              </span>
              <div className={cx("product-rate")}>
                <CustomerStarRating rating={product.product_avg_rating} />
              </div>
              <h4 title={product.product_name}>{product.product_name}</h4>
            </div>
          </div>
          <div className={cx("product-bottom-details")}>
            <div className={cx("product-price")}>
              {product.highest_discount ? (
                <>
                  {convertNumberToMoney(product.lowest_price)}đ
                  <small>{convertNumberToMoney(product.product_price)}đ</small>
                </>
              ) : (
                <>{convertNumberToMoney(product.product_price)}đ</>
              )}
            </div>
          </div>
      </Link>
    </div>
  );
}
