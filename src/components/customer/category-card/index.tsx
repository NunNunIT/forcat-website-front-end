"use client";
// import libs
import Link from "next/link";
import classNames from "classnames/bind";
import Image from "next/image";

// import css
import styles from "./style.module.css";

const cx = classNames.bind(styles);

export default function CustomerCategoryCard({
  variant,
  ...props
}: {
  variant: ICategoryCardProps;
}) {
  return (
    <div className={cx("card")}>
      <Link href="#" className={cx("custom-link")}>
        <Image
          className={cx("product--image")}
          src={variant.url}
          width={1200}
          height={120}
          alt="product image"
        />
        <p className={cx("card-Name")}>{variant.name}</p>
      </Link>
    </div>
  );
}
