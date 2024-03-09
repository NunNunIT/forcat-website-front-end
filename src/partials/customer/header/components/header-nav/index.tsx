// import Link 
import Link from "next/link";

// import components
import { Logo } from "@/components/customer";

// use bind from classnames
import classNameNames from "classnames/bind";
import styles from "./header-nav.module.css";
const cx = classNameNames.bind(styles);

export default function HeaderNav() {
  return (
    <nav className={cx("header__nav")}>
      <div className={cx("header__nav-container")}>
        <div className={cx("header__support-info")}>
          <div className={cx("dropdown-help")}>
            <a href="#">
              <span className="material-symbols-outlined">help</span>
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
            <span className="material-symbols-outlined">call</span>
            Hotline: 1900 123 789
          </a>
        </div>
        <div className={cx("header__logo--top")}>
          <Logo white />
        </div>
        <div className={cx("header__about-account")}>
          <div className={cx("dropdown-noti")}>
            <a href="/notification/order" className={cx("header__notifications")}>
              <span className="material-symbols-outlined">notifications</span>
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
            <span className="material-symbols-outlined">account_circle</span>
            <Link href="/auth/login" className={cx("header__auth-login")}> Đăng nhập</Link>
            <span>|</span>
            <Link href="/auth/register" className={cx("header__auth-register")}>Đăng ký</Link>
          </div>
        </div >
      </div>
      <div className={cx("header__nav--disable")}>
        <a href="/notification/order" className={cx("noti--disable")}>
          <span className="material-symbols-outlined" title="Thông báo">notifications</span>
        </a>
        <a href="#" className={cx("help--disable")}>
          <span className="material-symbols-outlined" title="Hỗ trợ">help</span>
        </a>
      </div>
    </nav>
  )
}
