// import libs
import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { getCurrentUser } from "@/middleware";
import Cookies from "js-cookie";

// import css
import "./page.css";
import { BACKEND_URL } from "@/utils/commonConst";

export const metadata: Metadata = {
  description:
    "Quản lý và cập nhật thông tin cá nhân của bạn trên ForCat Shop.",
};
export default async function InformationPage() {
  // const currentUser = getCurrentUser();
  const userID = await Cookies.get("currentUser");
  console.log("Bé yêu", userID);

  fetch(`${BACKEND_URL}/user/getInfo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Thêm header Content-Type để xác định loại dữ liệu gửi đi
    },
    body: JSON.stringify({ user_id: userID }), // Đặt đối tượng user_id trong hàm JSON.stringify()
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((data) => {
      console.log("Dữ liệu lấy về cho trang information", data.data);
      // Xử lý dữ liệu nhận được từ máy chủ
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      // Xử lý lỗi
    });

  return (
    <main className="account-information__main">
      <section className="information__main">
        <div className="information__main__item">
          <div className="information-item">
            <div className="information-item--top">
              <div className="information-item__info">
                <h3>Thông tin cá nhân</h3>
              </div>
              <h3>
                <Link
                  className="information-item__edit"
                  href="/account/edit-information">
                  Sửa
                </Link>
              </h3>
            </div>
            <div className="information-item__main">
              <div className="information-item__product-detail">
                <div className="information-item__product-name">
                  <h5>Tên người dùng:</h5>
                  <span>Lê Trung Hiếu</span>
                </div>
                <div className="information-item__product-name">
                  <h5>Ngày sinh:</h5>
                  <span>01/01/1990</span>
                </div>

                <div className="information-item__product-name">
                  <h5>Giới tính:</h5>
                  <span>NAM</span>
                </div>

                <div className="information-item__product-name">
                  <h5>Email:</h5>
                  <span>A@GMAIL.COM</span>
                </div>

                <div className="information-item__product-name">
                  <h5>Số điện thoại:</h5>
                  <span>0123456789</span>
                </div>

                <div className="information-item__product-name">
                  <h5>Địa chỉ:</h5>
                  <span>1, ĐƯỜNG 1, QUẬN 1, TP.HCM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
