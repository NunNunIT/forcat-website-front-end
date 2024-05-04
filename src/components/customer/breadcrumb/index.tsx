"use client";

// import libs
import classNames from "classnames/bind";
import Link from "next/link";
import { Suspense } from "react";
import { usePathname } from "next/navigation";

// import css
import styles from "./breadcrumb.module.css";

const cx = classNames.bind(styles);

const decryptNamePage = (namePage: string, prevNamePage: string) => {
  const data = {
    " ": { text: "Trang chủ", url: "/" },
    news: { text: "Tin tức", url: "/news" },
    account: { text: "Tài khoản", url: "/account/mobile-account" },
    information: { text: "Thông tin cá nhân", url: "/account/information" },
    "purchase-history": {
      text: "Lịch sử đơn hàng",
      url: "/account/purchase-history",
    },
    "change-password": {
      text: "Đổi mật khẩu",
      url: "/account/change-password",
    },
    "search-result": { text: "Kết quả tìm kiếm" },
    cart: { text: "Giỏ hàng", url: "/cart" },
    "order-information": { text: "Đặt hàng", url: "/order-information" },
    review: { text: "Đánh giá sản phẩm" },
    notifications: { text: "Thông báo", url: "/notifications" },
    category: { text: "Danh mục sản phẩm", url: "/category" },
    contact: { text: "Liên hệ", url: "/contact" },
    "about-us": { text: "Về chúng tôi", url: "/about-us" },
    "term-of-use": { text: "Điều khoản chung", url: "term-of-use" },
    "privacy-policy": { text: "Chính sách bảo mật", url: "privacy-policy" }
  };

  if (namePage === "mobile-account") {
    return null;
  }

  if (!Object.keys(data).includes(namePage) && prevNamePage == " ") {
    return { text: "Chi tiết sản phẩm" };
  }

  if (!data[namePage] && data[prevNamePage]) {
    return { text: `Chi tiết ${data[prevNamePage].text.toLowerCase()}` };
  }

  return data[namePage];
};

export default function Breadcrumb() {
  const pathName: string = " " + usePathname();
  const namePage: string[] = pathName.split("/");
  let data = [{ text: "Trang chủ", url: "/" }];
  for (let i = 1; i < namePage.length; ++i) {
    data.push(decryptNamePage(namePage[i], namePage[i - 1]));
  }

  return (
    <Suspense fallback={<>Đang nạp dữ liệu</>}>
      <nav className={cx("breadcrumb__container", "breadcrumb-container")}>
        <ul className={cx("breadcrumb")}>
          {data.map((d, index: number) => {
            return (
              d && (
                <li key={index}>
                  {d.url ? (
                    <Link href={d?.url}>{d.text}</Link>
                  ) : (
                    <span>{d?.text}</span>
                  )}
                </li>
              )
            );
          })}
        </ul>
      </nav>
    </Suspense>
  );
}
