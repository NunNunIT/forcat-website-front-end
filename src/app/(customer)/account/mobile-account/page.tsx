"use client";
// import libs
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// import partials
import { MobileLogout } from "./partials";
import { BACKEND_URL } from "@/utils/commonConst";

// import css
import "./page.css";

export default function MobileAccountPage() {
  const [user, setUser] = useState(null);

  const fetchUser = () => {
    try {
      const currentUser = localStorage.getItem("currentUser");
      if (currentUser) {
        return JSON.parse(currentUser);
      }
      return null;
    } catch (error) {
      console.error("Error in fetchUser:", error);
      return null;
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const user = await fetchUser();
      if (user) {
        setUser(user);
      }
    };

    getUser();
  }, []);

  const { user_name = "Đang tải...", user_avt_img = "" } = user ?? {};

  return (
    <>
      <main className="none-mobile-account-container">
        <div className="none-mobile-account-container__img-container">
          <Image
            src="/imgs/icon-ATC.webp"
            alt="Hình ảnh kêu gọi hành động"
            fill
          />
        </div>
        <div className="none-mobile-account-container__text">
          <span className="material-icons">arrow_back</span>
          <span>Bạn hãy điều hướng bằng cách chọn vào phần điều hướng bên cạnh nhé!!!</span>
        </div>
      </main>
      <main className="mobile-account-container">
        <aside className="account-aside" id="sidebar">
          <Link href="#" className="avatar">
            <span className="image-container">
              <Image
                className="avatarimg"
                src={user_avt_img}
                alt={`avatar ${user_name}`}
                fill={true}
              />
            </span>
            <div>
              <h5 className="user_name">{user_name}</h5>
            </div>
          </Link>

          <ul className="side-menu top">
            <li>
              <Link href="/account/information" id="info-link">
                <span className="material-icons-outlined">
                  perm_contact_calendar
                </span>
                <span className="text">Thông tin cá nhân</span>
                <span className="material-icons-outlined arrow-icon">
                  navigate_next
                </span>
              </Link>
            </li>

            <li>
              <Link href="/account/purchase-history">
                <span className="material-icons-outlined"> shopping_bag </span>
                <span className="text">Lịch sử đơn mua</span>
                <span className="material-icons-outlined arrow-icon">
                  navigate_next
                </span>
              </Link>
            </li>
            <li>
              <Link href="/account/change-password">
                <span className="material-icons-outlined"> settings </span>
                <span className="text">Đổi mật khẩu</span>
                <span className="material-icons-outlined arrow-icon">
                  navigate_next
                </span>
              </Link>
            </li>
          </ul>
          <MobileLogout></MobileLogout>
        </aside>
      </main>
    </>
  );
}
