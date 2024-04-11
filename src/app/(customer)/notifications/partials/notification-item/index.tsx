"use client";

// import libs
import Image from "next/image";
import classNames from "classnames/bind";
import { useState } from "react";
import {
  convertDateToFormatHHMMDDMMYYYY,
  isActiveClassWithBool,
} from "@/utils";

// import partials, components
import { CustomerModal } from "..";

// import css
import styles from "./notification-item.module.css";

const cx = classNames.bind(styles);

export default function NotificationItem(props: INotiProps) {
  console.log("data props:", props);

  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const handleOnClickRead = () => {
    setIsShowModal(true);
  };

  return (
    <>
      <div className={cx("notification-item")}>
        <div className={cx("notification-item__cover-container")}></div>
        <div className={cx("notification-item__content-wrapper")}>
          <h5 className={cx("notification-item__title")}>
            {props.notification_name}
          </h5>
          <p className={cx("notification-item__short-description")}>
            {props.notification_description}
          </p>
          <div className={cx("notification-item__supported-information")}>
            <span className={cx("notification-item__date")}>
              {convertDateToFormatHHMMDDMMYYYY(new Date(props.updatedAt))}
            </span>
            <button onClick={handleOnClickRead}
              className="btn_ btn--outlined_ pri_">
              <span>Xem chi tiết</span>
            </button>
          </div>
        </div>
      </div>
      {isShowModal && (
        <CustomerModal onClose={() => setIsShowModal(false)}>
          {props.notification_description}
        </CustomerModal>
      )}
    </>
  );
}
