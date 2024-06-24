// import libs
import classNames from "classnames/bind";

// import css
import styles from "./admin-footer.module.css";

const cx = classNames.bind(styles);

export default function Footer() {
  return <header className={cx("admin-footer")}>
    <h2>AdminFooter</h2>
  </header>
};
