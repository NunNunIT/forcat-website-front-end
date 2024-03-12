"use client";
import styles from "./styles.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
export default function CustomerSliderCard({ ...props }) {
  const { url, description } = props;
  return (
    <div className={cx("image_container")}>
      <img className={cx("image_container-img")} src={url} alt={description} />
    </div>
  );
}
