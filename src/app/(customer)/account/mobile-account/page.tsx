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

  const fetchUser = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/user/getInfo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await response.json();
      return data.user;
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
          <div className="user_name">
            <h5>{user_name}</h5>
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
  );
}
