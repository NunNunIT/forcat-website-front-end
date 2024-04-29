"use client";

// import libs
import classNames from "classnames/bind";
import { CldImage } from "next-cloudinary";

// import css
import styles from "./category-image.module.css";

// use css
const cx = classNames.bind(styles);

export default function CategoryImage({
  url,
  alt,
}: {
  url: string;
  alt: string;
}) {
  return (
    <div className={cx("sub-category__img-div")}>
      <CldImage
        className={cx("sub-category__img")}
        src={url}
        alt={alt}
        fill={true}
      />
    </div>
  );
}
