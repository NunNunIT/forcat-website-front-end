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

const convertJSONToDOM = (props: {
  type: string;
  content?: string;
  alt?: string;
  caption?: string;
  url?: string;
}) => {
  return (
    <>
      {props.type == "h1" && <h1>{props.content}</h1>}
      {props.type == "h2" && <h2>{props.content}</h2>}
      {props.type == "h3" && <h3>{props.content}</h3>}
      {props.type == "h4" && <h4>{props.content}</h4>}
      {props.type == "h5" && <h5>{props.content}</h5>}
      {props.type == "h6" && <h6>{props.content}</h6>}
      {props.type == "p" && <p>{props.content}</p>}
      {props.type == "span" && <span>{props.content}</span>}

      {props.type == "img" && (
        <figure>
          <div className="img-container">
            <Image src={props.url ?? "a"} alt={props?.alt ?? "alt"} fill />
          </div>
          <figcaption>{props?.caption}</figcaption>
        </figure>
      )}
    </>
  );
};

// export default function NotificationItem() {
//   // const [isRead, setIsRead] = useState<boolean>(props.is_read);
//   const [isShowModal, setIsShowModal] = useState<boolean>(false);

//   // const {
//   //   notification_id, notification_title,
//   //   notification_short_desc, notification_url_img,
//   //   notification_desc, notification_date,
//   // } = props;

//   const handleOnClickRead = () => {
//     // setIsRead(true);
//     setIsShowModal(true);
//   }

//   return (
//     <>
//       <div className={cx("notification-item", isActiveClassWithBool(isRead))}>
//         <div className={cx("notification-item__cover-container")}>
//           <Image src={notification_url_img}
//             alt={`Ảnh hiển thị cho thông báo ${notification_title}`} fill
//           />
//         </div>
//         <div className={cx("notification-item__content-wrapper")}>
//           <h5 className={cx("notification-item__title")}>{notification_title}</h5>
//           <p className={cx("notification-item__short-description")}>{notification_short_desc}</p>
//           <div className={cx("notification-item__supported-information")}>
//             <span className={cx("notification-item__date")}>{convertDateToFormatHHMMDDMMYYYY(notification_date)}</span>
//             <button onClick={handleOnClickRead} className="btn_ btn--outlined_ pri_">
//               <span>Xem chi tiết</span>
//             </button>
//           </div>
//         </div>
//       </div>
//       {isShowModal && <CustomerModal onClose={() => setIsShowModal(false)}>
//         {notification_desc.map((data, index) => convertJSONToDOM(data))}
//       </CustomerModal>}
//     </>
//   )
// }

export default function NotificationItem(props) {
  const {
    _id,
    notification_name,
    notification_description,
    createdAt,
    is_read, // Thêm is_read vào danh sách các props
  } = props;
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
            {notification_name}
          </h5>
          <div className={cx("notification-item__supported-information")}>
            <span className={cx("notification-item__date")}>
              {convertDateToFormatHHMMDDMMYYYY(createdAt)}
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
          {notification_description}
        </CustomerModal>
      )}
    </>
  );

  // return (
  //   <>
  //     {props.notifications_descriptions}
  //     "Ten la kha"
  //     <div className={cx("notification-item__content-wrapper")}>
  //       {props.notifications_descriptions}
  //       "Ten la kha"
  //       <div className={cx("notification-item__supported-information")}>
  //         <button
  //           onClick={handleOnClickRead}
  //           className="btn_ btn--outlined_ pri_">
  //           <span>{props.notifications_descriptions}</span>
  //         </button>
  //       </div>
  //     </div>
  //     {isShowModal && (
  //       <CustomerModal onClose={() => setIsShowModal(false)}>
  //         {props.notification_description}
  //       </CustomerModal>
  //     )}
  //   </>
  // );
}
