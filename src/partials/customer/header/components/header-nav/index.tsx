// import libs
import Link from "next/link";
import classNameNames from "classnames/bind";

// import components
import { CustomerLogo } from "@/components/customer";

// import css
import styles from "./header-nav.module.css";

const cx = classNameNames.bind(styles);

export default function CustomerHeaderNav() {
  return (
    <nav className={cx("header__nav")}>
      <div className={cx("header__nav-container")}>
        <div className={cx("header__support-info")}>
          <div className={cx("dropdown-help")}>
            <a href="#">
              <span className="material-icons-outlined">help</span>
              Hỗ trợ
            </a>
            <div className={cx("dropdown-help__content-container")}>
              <div className={cx("dropdown-help__content")}>
                <img src="/imgs/qr-zalo.png" alt="help" />
                <p>Quét mã QR để gửi thông tin cần hỗ trợ đến chúng tôi</p>
              </div>
            </div>
          </div>
          <a href="#" className={cx("header__support-info__hotline")}>
            <span className="material-icons-outlined">call</span>
            Hotline: 1900 123 789
          </a>
        </div>
        <div className={cx("header--mobile__logo")}>
          <CustomerLogo white />
        </div>
        <div className={cx("header__about-account")}>
          <div className={cx("dropdown-noti")}>
            <a href="/notification/order" className={cx("header__notifications")}>
              <span className="material-icons-outlined">notifications</span>
              Thông báo
            </a>
            <div className={cx("dropdown-noti__content-container")}>
              <div className={cx("dropdown-noti__content")}>
                <div className={cx("dropdown-noti__unauth-user")}>
                  <img className={cx("unauth-user__img")}
                    src="/imgs/unauth-user.png"
                    alt="unauth-user" />
                  <span className={cx("unauth-content__noti")}>Đăng nhập để xem Thông báo</span>
                </div>
                <div className={cx("unauth-content__btn")}>
                  <Link href="/auth/login">Đăng nhập</Link>
                  <Link href="/auth/register">Đăng ký</Link>
                </div>
              </div>
            </div>
          </div >
          <div className={cx("header__auth")}>
            <span className="material-icons-outlined">account_circle</span>
            <Link href="/auth/login" className={cx("header__auth-login")}> Đăng nhập</Link>
            <span>|</span>
            <Link href="/auth/register" className={cx("header__auth-register")}>Đăng ký</Link>
          </div>
        </div>
        <div className={cx("header--mobile__noti-support")}>
          <a href="/notification/order" className={cx("noti--mobile")}>
            <span className="material-icons-outlined" title="Thông báo">notifications</span>
          </a>
          <a href="#" className={cx("help--mobile")}>
            <span className="material-icons-outlined" title="Hỗ trợ">help</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
