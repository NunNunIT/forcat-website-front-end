// import libs
import classNames from "classnames/bind";

// import css
import styles from "./admin-header.module.css";

const cx = classNames.bind(styles);

export default function Header() {
  return <header className={cx("admin-header")}>
    <h2>AdminHeader</h2>
  </header>
};
