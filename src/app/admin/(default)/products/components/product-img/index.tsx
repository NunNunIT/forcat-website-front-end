"use client";

import { CldImage } from "next-cloudinary";
import classNames from "classnames/bind";

// import css
import styles from "./product-img.module.css";

// use css
const cx = classNames.bind(styles);

export default function ProductImage({ productImg }: { productImg: any }) {
  return (
    <div className={cx("product-page-table__img-div")}>
      <CldImage
        className={cx("product-page-table__img")}
        src={productImg.link}
        alt={productImg.alt}
        fill={true}
      />
    </div>
  );
}
