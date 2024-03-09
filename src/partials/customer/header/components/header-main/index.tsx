// import components
import { Logo } from "@/components/customer";

// use bind from classnames
import classNameNames from "classnames/bind";
import styles from "./header-main.module.css";
const cx = classNameNames.bind(styles);

export default function HeaderMain() {
  return (
    <div className={cx("header__main")}>
      <Logo className={cx("header__logo")} />
      <form
        className={cx("header__search-bar")}
        action="/search/results"
        method="GET"
      >
        <input type="search"
          name="searchKey"
          placeholder="Bạn tìm gì..." />
        <button className={cx("header__search-btn")} type="submit">
          <span className="material-symbols-outlined">search</span>
        </button>
      </form>

      <div className={cx("dropdown-cart")}>
        <a
          href="/order/cart"
          className={cx("header__cart-container")}
          title="Giỏ hàng"
        >
          <div className={cx("header__cart")}>
            <span className="material-symbols-outlined">shopping_cart</span>
          </div>
        </a>
        <div className={cx("dropdown-cart__content-container")}>
          <div className={cx("dropdown-cart__content")}>
            <div className={cx("dropdown-cart__unauth-user")}>
              <img
                className={cx("unauth-user__img")}
                src="/imgs/unauth-user.png" alt="unauth-user"
              />
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