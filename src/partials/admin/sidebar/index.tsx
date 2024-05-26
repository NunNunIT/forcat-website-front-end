// import libs
import classNames from "classnames/bind";

// import styles
import styles from "./sidebar.module.css";
import Link from "next/link";

const cx = classNames.bind(styles);

export default function Sidebar() {
  return <aside className={`${cx("admin-aside")} p-4`}>
    <h2>
      Sidebar cho Admin
    </h2>
    <Link href="/admin/orders">
      Quản lý đơn hàng
    </Link>
  </aside>
}