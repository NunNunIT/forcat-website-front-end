// import libs
import classNames from "classnames/bind";

// import components
import { AdminHeader, AdminFooter, AdminSidebar } from "@/partials";

// import css
import styles from "./layout.module.css";

const cx = classNames.bind(styles);

export default function AdminLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <div className={`${cx("admin-layout")} scrollbar`}>
      <AdminSidebar />
      <div className={`${cx("admin-layout-content")} scrollbar`}>
        <AdminHeader />
        {children}
        <AdminFooter />
      </div>
    </div>
  )
};
