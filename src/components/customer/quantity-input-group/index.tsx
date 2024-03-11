"use client";

// import libs
import classNames from "classnames/bind";

// import css
import styles from "./styles.module.css";

// use css
const cx = classNames.bind(styles);

export default function CustomerQuantityInputGroup() {
  return (
    <div className={cx("quantity-input-group")}>
      <div className={cx("quantity-input-group__btn-remove", "btn-quantity")}>
        <span className="material-icons-round">remove</span>
      </div>
      <input
        className={cx("quantity-input-group__input", "input-quantity")}
        type="text"
        value="1"
      />
      <div className={cx("quantity-input-group__btn-add", "btn-quantity")}>
        <span className="material-icons-round">add</span>
      </div>
    </div>
  );
}
