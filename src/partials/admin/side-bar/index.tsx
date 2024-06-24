"use client";

// use bind from classnames
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// use scss
import styles from "./styles.module.css";

const cx = classNames.bind(styles);

const sidebarItems = [
  {
    path: '/admin',
    label: 'Dashboard',
    icon: 'space_dashboard',
    active: true, // Assuming this is for the active link
  },
  {
    path: '/admin/feature_development', // Placeholder for future implementation
    label: 'Danh mục',
    icon: 'category',
  },
  {
    path: '/admin/products',
    label: 'Sản phẩm',
    icon: 'inventory_2',
  },
  {
    path: '/admin/orders',
    label: 'Đơn hàng',
    icon: 'shopping_bag',
  },
  {
    path: '/admin/articles',
    label: 'Bài viết',
    icon: 'newspaper',
  },
  {
    path: '/admin/feature_development', // Placeholder for future implementation
    label: 'Khách hàng',
    icon: 'groups',
  },
  {
    path: '/admin/feature_development', // Placeholder for future implementation
    label: 'Đánh giá',
    icon: 'rate_review',
  },
  {
    path: '/admin/logout',
    label: 'Đăng xuất',
    icon: 'logout',
  },
];

function isActivePath(currentPath: string, targetPath: string) {
  if (currentPath === "/admin/feature_development")
    return false;
  if (targetPath === "/admin")
    return currentPath === "/admin";

  return currentPath.slice(0, targetPath.length) === targetPath;
}

export default function AdminSideBar(props: ILogoProps) {
  const pathName = usePathname();
  return (
    <aside id="admin-sidebar" className={cx("admin-sidebar")}>
      <div className={cx("admin-sidebar__header")}>
        <div className={cx("admin__logo-wrapper")}>
          <Image
            className={cx("logo__img")}
            src={`/logo${props.white ? "-white" : "-brown"}.webp`}
            alt="Logo"
            fill
          />
        </div>
        <span className="material-icons-round" id="close-sidebar">
          close
        </span>
      </div>

      <div className={cx("admin-sidebar__content")}>
        <div className={cx("admin-sidebar__profile")}>
          <img
            className={cx("profile__img")}
            src="/imgs/test.png"
            alt="avt_admin"
          />
        </div>

        <div className={cx("admin-sidebar__list")}>
          {sidebarItems.map((item, index) => (
            <Link
              key={index} // Add unique key for React reconciliation
              className={cx(
                "admin-sidebar__list-item",
                isActivePath(pathName, item.path) ? "active" : ""
              )}
              href={item.path}
            >
              <span className={"material-icons-round"}>{item.icon}</span>
              <p>{item.label}</p>
            </Link>
          ))}

        </div>
      </div>
    </aside>
  );
}
