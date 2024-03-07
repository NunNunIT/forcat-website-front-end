"use client";
import React from "react";
import Link from 'next/link'
import styles from "./style.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
export default function Product({ ...props }) {
    const { name, url, description } = props;
    return (
      <div className={cx("card")}>
        <Link href="#" className={cx("custom-link")}>
          <img className={cx("product--image")} src={url} alt="product image" />
          <p className={cx("card-Name")}>{name}</p>
        </Link>
      </div>
    );
  }