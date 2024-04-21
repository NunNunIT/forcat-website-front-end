"use client";

// import libs
import classNames from "classnames/bind";
import { useState, useEffect } from "react";

// import utils
import {
  convertDateToFormatHHMMDDMMYYYY,
  isActiveClassWithBool,
} from "@/utils";
import { BACKEND_URL } from "@/utils/commonConst";

// import partials
import { CustomerModal } from "..";

// import css
import styles from "./notification-item.module.css";
import 'react-loading-skeleton/dist/skeleton.css';

const cx = classNames.bind(styles);

export default function NotificationItem({
  user_id,
  allRead,
  ...props
}: INotiProps) {
  // console.log("data props:", props);
  const [isRead, setIsRead] = useState<boolean>(props.is_read);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (read_all) setIsUnread(false);
  }, [read_all]);

  const handleOnClickRead = async () => {
    setIsShowModal(true);
    isUnread && await fetch(`${BACKEND_URL_NOTIFICATIONS}/${props._id}/read?user_id=${user_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    setIsUnread(false);
  };

  return (
    <>
      <div className={cx("notification-item", isActiveClassWithBool(!isUnread))}>
        <div className={cx("notification-item__cover-container")}></div>
        <div className={cx("notification-item__content-wrapper")}>
          <h5 className={cx("notification-item__title")}>
            {props.notification_name}
          </h5>
          <p className={cx("notification-item__short-description")}
            dangerouslySetInnerHTML={{ __html: props.notification_description }}
          />
          <div className={cx("notification-item__supported-information")}>
            <span className={cx("notification-item__date")}>
              {convertDateToFormatHHMMDDMMYYYY(new Date(props.updatedAt))}
            </span>
            <button
              onClick={handleOnClickRead}
              className="btn_ btn--outlined_ pri_">
              <span>Xem chi tiết</span>
            </button>
          </div>
        </div>
      </div>
      {isShowModal && (
        <CustomerModal onClose={() => setIsShowModal(false)}>
          <h5 className={cx("notification-item__title")}>
            {props.notification_name}
          </h5>
          <p dangerouslySetInnerHTML={{ __html: props.notification_description }} />
          <p>{convertDateToFormatHHMMDDMMYYYY(new Date(props.updatedAt))}</p>
        </CustomerModal>
      )}
    </>
  );
}
