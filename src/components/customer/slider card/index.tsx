"use client";
// import libs
import classNames from "classnames/bind";
import Image from "next/image";

// import css
import styles from "./styles.module.css";

const cx = classNames.bind(styles);
export default function CustomerSliderCard({ ...props }) {
  const { url, description } = props;
  return (
    <div className={cx("image_container")}>
      <Image
        className={cx("image_container-img")}
        width={1280}
        height={200}
        src={url}
        alt={description}
      />
    </div>
  );
}
