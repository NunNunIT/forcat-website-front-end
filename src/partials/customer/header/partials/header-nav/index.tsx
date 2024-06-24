"use client";

// import libs
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import classNameNames from "classnames/bind";
import Cookies from "js-cookie";

// import components
import { CustomerLogo } from "@/components";

// import css
import styles from "./header-nav.module.css";

// import constant
import { BACKEND_URL } from "@/utils/commonConst";

const cx = classNameNames.bind(styles);

export default function CustomerHeaderNav() {
  const router = useRouter();
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

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BACKEND_URL}/auth/logout`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        console.error("Logout failed:", await res.text());
        return;
      }

      localStorage.removeItem("currentUser");
      localStorage.removeItem("addCartItem");
      const headerCartQuantity = document.querySelector(".header-cart-quantity");
      if (headerCartQuantity)
        headerCartQuantity.outerHTML = "";

      Cookies.remove("currentUser");
      setCurrentUser(null);
      // window.location.reload(); // Đặt currentUser thành null sau khi đăng xuất
      router.refresh();

      return;
    } catch (error) {
      // console.error("Logout error:", error);
    }
  };

  const optionsInHeaderAuth = [
    { text: "Thông tin cá nhân", href: "/account/information" },
    { text: "Lịch sử đơn mua", href: "/account/purchase-history" },
    { text: "Đổi mật khẩu", href: "/account/change-password" },
  ];

  return (
    <nav className={cx("header__nav")}>
      <div className={cx("header__nav-container")}>
        <div className={cx("header__support-info")}>
          <div className={cx("dropdown-help")}>
            <Link rel="canonical" href="/contact">
              <span className="material-icons-outlined">help</span>
              Hỗ trợ
            </Link>
            <div className={cx("dropdown-help__content-container")}>
              <div className={cx("dropdown-help__content")}>
                <div className={cx("dropdown-help__qr-code-container")}>
                  <Image src="/imgs/icon-ATC.webp" alt="help" fill />
                </div>
                <span>
                  Nhấp{" "}
                  <Link rel="canonical" href="/contact">
                    vào đây
                  </Link>{" "}
                  để được hỗ trợ nhé!!!
                </span>
              </div>
            </div>
          </div>
          <Link
            rel="canonical"
            href="tel: 0559 695 594"
            className={cx("header__support-info__hotline")}>
            <span className="material-icons-outlined">call</span>
            Hotline: 0559 695 594
          </Link>
        </div>
        <CustomerLogo className={cx("header--mobile__logo")} white />
        <div className={cx("header__about-account")}>
          <div className={cx("dropdown-noti")}>
            <Link
              rel="canonical"
              className={cx("header__notifications")}
              href="/notifications"
              title="Trang thông báo">
              <span
                className={`material-icons ${cx("header__notification-icon")}`}>
                notifications
                {currentUser && currentUser.recent_notification.length > 0 && (
                  <span className={cx("header__notification-dot")}></span>
                )}
              </span>
              Thông báo
            </Link>
            <div className={cx("dropdown-noti__content-container")}>
              <div className={cx("dropdown-noti__content")}>
                {currentUser ? (
                  <>
                    {currentUser.recent_notification.length > 0 ? (
                      <>
                        <div className={cx("dropdown-noti--")}>
                          <Image
                            src="/imgs/icon-ATC.webp"
                            alt="Hình ảnh của bạn có thông báo mới"
                            fill
                          />
                        </div>
                        <span className={cx("content__noti")}>
                          Bạn đang có thông báo mới nè!!!
                          <br />
                          Bấm{" "}
                          <Link rel="canonical" href="/notifications">
                            vào đây
                          </Link>{" "}
                          để kiểm tra ngay nhé!
                        </span>
                      </>
                    ) : (
                      <>
                        <div className={cx("dropdown-noti--")}>
                          <Image
                            src="/imgs/nothing-result.png"
                            alt="Hình ảnh của bạn không có thông báo mới"
                            fill
                          />
                        </div>
                        <span className={cx("content__noti")}>
                          Bạn chưa có thông báo mới nào
                        </span>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <div className={cx("dropdown-noti__unauth-user")}>
                      <div className={cx("unauth-user__img-container")}>
                        <Image
                          src="/imgs/unauth-user.png"
                          alt="unauth-user"
                          fill
                        />
                      </div>
                      <span className={cx("unauth-content__noti")}>
                        Đăng nhập để xem Thông báo
                      </span>
                    </div>
                    <div className={cx("unauth-content__btn")}>
                      <Link rel="canonical" href="/login">
                        Đăng nhập
                      </Link>
                      <Link rel="canonical" href="/register">
                        Đăng ký
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          {currentUser ? (
            <div className={cx("header__auth")}>
              <span className={cx("header__auth-avatar")}>
                <Image
                  src={currentUser?.user_avt_img}
                  alt="Avatar của bạn"
                  fill
                />
              </span>
              <Link
                rel="canonical"
                href="/account/information"
                className={cx("header__auth-login")}>
                {currentUser.user_name}
              </Link>
              <Link href="/admin" >
                <span className="material-icons-outlined">admin_panel_settings</span>
              </Link>
              <div className={cx("header__auth-dropdown-container")}>
                <div className={cx("header__auth-dropdown")}>
                  {(optionsInHeaderAuth ?? []).map((option) => (
                    <Link
                      rel="canonical"
                      key={option.text}
                      className={cx("header__auth-dropdown-item")}
                      href={option.href}
                      title={`Trang ${option.text}`}>
                      {option.text}
                    </Link>
                  ))}
                  <form
                    className={cx("header__auth-dropdown-item")}
                    onSubmit={handleLogout}>
                    <button
                      type="submit"
                      className={cx("header__auth-logout-btn")}>
                      Đăng xuất
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <div className={cx("header__unauth")}>
              <span className="material-icons-outlined">account_circle</span>
              <Link
                rel="canonical"
                href="/login"
                className={cx("header__auth-login")}>
                Đăng nhập
              </Link>
              <span>|</span>
              <Link
                rel="canonical"
                href="/register"
                className={cx("header__auth-register")}>
                Đăng ký
              </Link>
            </div>
          )}
        </div>
        <div className={cx("header--mobile__noti-support")}>
          <Link
            rel="canonical"
            href="/notifications"
            className={cx("noti--mobile")}>
            <span
              className={`material-icons ${cx("header__notification-icon")}`}
              title="Thông báo">
              notifications
              {currentUser && currentUser.recent_notification.length > 0 && (
                <span className={cx("header__notification-dot")}></span>
              )}
            </span>
          </Link>
          <Link rel="canonical" href="/contact" className={cx("help--mobile")}>
            <span className="material-icons-outlined" title="Hỗ trợ">
              help
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
