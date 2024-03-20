"use client";
// import libs
import Link from "next/link";
import classNames from "classnames/bind";
import Image from "next/image";

// import css
import styles from "./style.module.css";

const cx = classNames.bind(styles);

export default function CustomerCategoryCard({
  initValue,
  ...props
}: {
  initValue: ICategoryCardProps;
}) {
  return (
    <div className={cx("categoryCard-container")}>
      <Link href="#" className={cx("categoryCard__link")}>
        <div className="categoryCard-image-div">
          <Image
            className={cx("categoryCard__link-image")}
            src={initValue.url}
            alt="product image"
            fill={true}
          />
        </div>
        <p className={cx("categoryCard__link-name")}>{initValue.name}</p>
      </Link>
    </div>
  );
}
