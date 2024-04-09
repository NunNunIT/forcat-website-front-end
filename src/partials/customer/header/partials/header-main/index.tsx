"use client";
// import libs
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classNameNames from "classnames/bind";

// import components
import { CustomerLogo, CustomerHeaderItemUlt } from "@/components";

// import css
import styles from "./header-main.module.css";

const cx = classNameNames.bind(styles);

export default function CustomerHeaderMain() {
  const [showSmartSearch, setShowSmartSearch] = useState(false);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setShowSmartSearch(inputValue !== ""); // Kiểm tra xem input có giá trị không
  };

  return (
    <div className={cx("header__main")}>
      <CustomerLogo className={cx("header__logo")} />
      <div className={cx("header__search-bar-wrapper")}>
        <form
          className={cx("header__search-bar__main")}
          action="/search/results"
          method="GET">
          <div className={cx("header__search-bar")}>
            <input
              className={cx("header__search-input")}
              id="header__search-input"
              type="search"
              name="searchKey"
              placeholder="Bạn tìm gì..."
              onChange={handleInputChange}
            />
            <button className={cx("header__search-btn")} type="submit">
              <span className="material-icons-outlined">search</span>
            </button>
          </div>
        </form>
        <div
          className={cx("header__smart-search-wrapper", {
            "display-block": showSmartSearch, // Sử dụng điều kiện để thêm class 'display-block' khi showSmartSearch là true
          })}
          id="header__smart-search-wrapper"
          style={{ display: showSmartSearch ? "block" : "none" }}>
          {" "}
          {/* Thay đổi thuộc tính display dựa vào giá trị của showSmartSearch */}
          <div className={cx("header__suggest-results-content")}>
            <CustomerHeaderItemUlt />
            <CustomerHeaderItemUlt />
          </div>
          <div className={cx("header__suggest-results-more")}>
            <Link className={cx("header__suggest-results-more-link")} href="#">
              Xem thêm <span className={cx("highlight")}>31</span> sản phẩm
            </Link>
          </div>
        </div>
      </div>

      <div className={cx("dropdown-cart")}>
        <a
          href="/cart"
          className={cx("header__cart-container")}
          title="Giỏ hàng">
          <div className={cx("header__cart")}>
            <span className="material-icons">shopping_cart</span>
          </div>
        </a>
        <div className={cx("dropdown-cart__content-container")}>
          <div className={cx("dropdown-cart__content")}>
            <div className={cx("dropdown-cart__unauth-user")}>
              <div className={cx("unauth-user__img-container")}>
                <Image
                  className={cx("unauth-user__img")}
                  src="/imgs/unauth-user.png"
                  alt="unauth-user"
                  fill
                />
              </div>
              <span className={cx("unauth-content__cart")}>
                Đăng nhập để xem Giỏ hàng
              </span>
            </div>
            <div className={cx("unauth-content__btn")}>
              <a href="/login">Đăng nhập</a>
              <a href="/register">Đăng ký</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
