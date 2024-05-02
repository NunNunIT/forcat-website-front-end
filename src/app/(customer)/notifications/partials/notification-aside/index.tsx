"use client";

// import libs
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames/bind";
import { usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

// import utils
import { isActiveClassWithBool } from "@/utils";

// import css
import styles from "./notification-aside.module.css";

const cx = classNames.bind(styles);

const asideNavData = [
  {
    url: "/notifications",
    text: "Tất cả",
  },
  {
    url: "/notifications?type=order",
    text: "Đơn hàng",
  },
  {
    url: "/notifications?type=promotion",
    text: "Khuyến mãi",
  },
];

export default function NotificationAside() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const [userName, setUserName] = useState<string | null>(null);
  const [userAvatar, setUserAvatar] = useState<string | null>(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser") as string);
    setUserName(user?.user_name);
    setUserAvatar(user?.user_avt_img);
  }, []);

  const type = searchParams.get("type");
  const currentURL: string = [pathName, type ? `?type=${type}` : ""].join("");

  return (
    <aside className={cx("notification__aside")}>
      <div className={cx("notification__avatar")}>
        <div className={cx("notification__avatar-container")}>
          {userAvatar ? <Image src={userAvatar} alt="Avatar" fill /> : null}
        </div>
        <span className={cx("notification__user-name")}>
          {userName ? userName : "Khách"}
        </span>
      </div>
      <hr />
      <nav>
        <ul className={cx("notification__aside-nav")}>
          {(asideNavData ?? []).map((navData, index) => (
            <li key={index}>
              <Link
                href={navData.url}
                className={cx(
                  "notification__aside-nav-item",
                  isActiveClassWithBool(navData.url === currentURL)
                )}>
                <span>{navData.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
