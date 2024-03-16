// import libs
import Image from "next/image"
import classNameNames from "classnames/bind";

// import components
import { CustomerLogo } from "@/components";

// import css
import styles from "./header-main.module.css";

const cx = classNameNames.bind(styles);

export default function CustomerHeaderMain() {
  return (
    <div className={cx("header__main")}>
      <div className={cx("header__logo-container")}>
        <CustomerLogo className={cx("header__logo")} />
      </div>
      <form
        className={cx("header__search-bar-wrapper")}
        action="/search/results"
        method="GET"
      >
        <div className={cx("header__search-bar")}>
          <input className={cx("header__search-input")}
            type="search"
            name="searchKey"
            placeholder="Bạn tìm gì..." />
          <button className={cx("header__search-btn")} type="submit">
            <span className="material-icons-outlined">search</span>
          </button>
        </div>
      </form>

      <div className={cx("dropdown-cart")}>
        <a
          href="/order/cart"
          className={cx("header__cart-container")}
          title="Giỏ hàng"
        >
          <div className={cx("header__cart")}>
            <span className="material-icons">shopping_cart</span>
          </div>
        </a>
        <div className={cx("dropdown-cart__content-container")}>
          <div className={cx("dropdown-cart__content")}>
            <div className={cx("dropdown-cart__unauth-user")}>
              <div className={cx("unauth-user__img-container")}>
                <Image className={cx("unauth-user__img")}
                  src="/imgs/unauth-user.png" alt="unauth-user"
                  fill
                />
              </div>
              <span className={cx("unauth-content__cart")}>Đăng nhập để xem Giỏ hàng</span>
            </div>
            <div className={cx("unauth-content__btn")}>
              <a href="/auth/login">Đăng nhập</a>
              <a href="/auth/register">Đăng ký</a>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}