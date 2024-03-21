// use bind from classnames
import classNames from "classnames/bind";

// use scss
import styles from "./styles.module.css";

const cx = classNames.bind(styles);

export default function AppBar() {
    return (
        <div className={cx("app-bar")}>
            <div className={cx("app-bar__container")}>
                <div className={cx("app-bar__element")}>
                    <span className={cx("material-icons-outlined nav__icon")}>home</span>
                    <a href="/">Trang chủ</a>
                </div>
                <div className={cx("app-bar__element")}>
                    <span className={cx("material-icons-outlined nav__icon")}>category</span>
                    <a href="/category">Danh mục</a>
                </div>
                <div className={cx("app-bar__element")}>
                    <span className={cx("material-icons-outlined nav__icon")}>local_fire_department</span>
                    <a href="/search/results?hotProduct=true">HOT</a>
                </div>
                <div className={cx("app-bar__element")}>
                    <span className={cx("material-icons-outlined nav__icon")}>account_circle</span>
                    <a href="/account/mobile-account">Tài khoản</a>
                </div>
                <div className={cx("app-bar__element")}>
                    <span className={cx("material-icons-outlined nav__icon")}>account_circle</span>
                    <a href="/account/information">Unknown</a>
                </div>

            </div>
        </div>
    );
}
