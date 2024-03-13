"use client";
// import libs
import Link from "next/link";
import classNames from "classnames/bind";
import Image from "next/image";

// import css
import styles from "./style.module.css";

const cx = classNames.bind(styles);
export default function Product({ ...props }) {
  const { name, url, description } = props;
  return (
    <div className={cx("card")}>
      <Link href="#" className={cx("custom-link")}>
        <Image
          className={cx("product--image")}
          src={url}
          width={1200}
          height={120}
          alt="product image"
        />
        <p className={cx("card-Name")}>{name}</p>
      </Link>
    </div>
  );
}
