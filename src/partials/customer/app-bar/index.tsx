"use client";

// use bind from classnames
import classNames from "classnames/bind";
import Link from "next/link";
import { usePathname } from "next/navigation";

// use scss
import styles from "./styles.module.css";

const cx = classNames.bind(styles);

const appBarData = [
  {
    url: "/",
    iconData: "home",
    text: "Trang chủ",
  },
  {
    url: "/category",
    iconData: "category",
    text: "Danh mục",
  },
  {
    url: "/search-result",
    iconData: "local_fire_department",
    text: "HOT",
  },
  {
    url: "/news",
    iconData: "article",
    text: "Tin tức",
  },
  {
    url: [
      "/account/mobile-account",
      "/account/information",
      "/account/purchase-history",
      "/account/change-password",
      "/login",
      "/register",
      "/forgot",
    ],
    iconData: "account_circle",
    text: "Tài khoản",
  },
];

export default function AppBar() {
  const pathName = usePathname();

  return (
    <div className={cx("app-bar")}>
      <div className={cx("app-bar__container")}>
        {(appBarData ?? []).map((navData, index) => {
          let isActive;
          if (index === 0) {
            isActive = appBarData.slice(-4).every((data) => {
              if (Array.isArray(data.url)) {
                return !data.url.some((url) => pathName.includes(url));
              } else {
                return !pathName.includes(data.url);
              }
            });
          } else {
            isActive = Array.isArray(navData.url)
              ? navData.url.some((url) => pathName.includes(url))
              : pathName.includes(navData.url);
          }
          const url = Array.isArray(navData.url) ? navData.url[0] : navData.url;
          return (
            <div
              key={`${navData.text}-${navData.iconData}`}
              className={cx("app-bar__element")}>
              <Link href={url} className={cx({ active: isActive })}>
                <span
                  className={cx("material-icons-outlined nav__icon", {
                    active: isActive,
                  })}>
                  {navData.iconData}
                </span>
              </Link>
              <Link href={url} className={cx({ active: isActive })}>
                {navData.text}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}