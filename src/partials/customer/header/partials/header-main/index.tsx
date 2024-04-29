"use client";

// import libs
import classNames from "classnames/bind";
import { Suspense, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// import components, partials
import { CustomerLogo } from "@/components";
import { CustomerSearchBar } from "./partials";

// import css
import styles from "./header-main.module.css";

const cx = classNames.bind(styles);

export default function CustomerHeaderMain() {
  const [currentUser, setCurrentUser] = useState<IUserLocal | null>(null); // Định nghĩa biến currentUser ở đây

  const getCurrentUser = (): IUserLocal | null => {
    const storedUser = localStorage.getItem("currentUser");
    const currentUser = storedUser ? JSON.parse(storedUser) : null;
    return currentUser;
  };

  useEffect(() => {
    const user: IUserLocal | null = getCurrentUser();
    setCurrentUser(user);
  }, []);

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
          title="Giỏ hàng">
          <div className={cx("header__cart")}>
            <span className="material-icons">shopping_cart</span>
            {currentUser && (
              <span
                className={cx("header__cart-quantity", "header-cart-quantity")}>
                {currentUser.cart.length < 100
                  ? currentUser.cart.length
                  : "99+"}
              </span>
            )}
          </div>
        </Link>
        <div className={cx("dropdown-cart__content-container")}>
          <div className={cx("dropdown-cart__content")}>
            {currentUser ? (
              <>
                {" "}
                {
                  <div className={cx("dropdown-cart__auth-user")}>
                    {currentUser.cart.length > 0 ? (
                      <>
                        <div className={cx("unauth-user__img-container")}>
                          <Image
                            src="/imgs/icon-ATC.webp"
                            alt="Hình ảnh của bạn có sản phẩm trong giỏ hàng"
                            fill
                          />
                        </div>
                        <span className={cx("content__cart")}>
                          Bấm <Link href="/cart">vào đây</Link>
                          <br />
                          để kiểm tra giỏ hàng nhé!
                        </span>
                      </>
                    ) : (
                      <>
                        <div className={cx("unauth-user__img-container")}>
                          <Image
                            src="/imgs/nothing-result.png"
                            alt="Hình ảnh của bạn chưa có sản phẩm trong giỏ hàng"
                            fill
                          />
                        </div>
                        <span className={cx("content__cart")}>
                          Bạn chưa có sản phẩm
                          <br /> trong giỏ hàng
                        </span>
                      </>
                    )}
                  </div>
                }
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
