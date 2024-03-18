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
    <div className={cx("categoryCard")}>
      <Link href="#" className={cx("categoryCard__link")}>
        <Image
          className={cx("categoryCard__link-image")}
          src={initValue.url}
          alt="product image"
          width={1200}
          height={100}
        />
        <p className={cx("categoryCard__link-name")}>{initValue.name}</p>
      </Link>
    </div>
  );
}
