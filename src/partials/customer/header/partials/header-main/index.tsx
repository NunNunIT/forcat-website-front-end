"use client";

// import libs
import classNames from "classnames/bind";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

// import components, partials
import { CustomerLogo } from "@/components";
import { CustomerSearchBar } from "./partials";

// import css
import styles from "./header-main.module.css";

const cx = classNames.bind(styles);

export default function CustomerHeaderMain() {
  return (
    <div className={cx("header__main")}>
      <CustomerLogo className={cx("header__logo")} />
      <Suspense>
        <CustomerSearchBar />
      </Suspense>

      <div className={cx("dropdown-cart")}>
        <Link
          href="/cart"
          className={cx("header__cart-container")}
          title="Giỏ hàng"
        >
          <div className={cx("header__cart")}>
            <span className="material-icons">shopping_cart</span>
          </div>
        </Link>
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
              <Link href="/login">Đăng nhập</Link>
              <Link href="/register">Đăng ký</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
