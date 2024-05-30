// import libs
import classNames from "classnames/bind";

// import components
import { buttonVariants } from "@/components/admin/ui/button";

// import styles
import styles from "./sidebar.module.css";
import Link from "next/link";

const cx = classNames.bind(styles);

const navLinks = [
  { href: "/admin/orders", label: "Quản lý đơn hàng" },
  { href: "/admin/articles", label: "Quản lý bài viết" },
]

export default function Sidebar() {
  return <aside className={`${cx("admin-aside")} p-4 flex flex-col gap-2`}>
    <h2>
      Sidebar cho Admin
    </h2>
    {navLinks.map((item, index) => (
      <Link
        key={index}
        className={`${buttonVariants({ variant: "link", size: "default" })} text-left`}
        href={item.href}
      >
        {item.label}
      </Link>
    ))
    }
    {/* <Link className={buttonVariants({ variant: "link", size: "md" })} href="/admin/orders">
      Quản lý đơn hàng
    </Link>
    <Link href="/admin/articles">
      Quản lý bài viết
    </Link> */}
  </aside>
}