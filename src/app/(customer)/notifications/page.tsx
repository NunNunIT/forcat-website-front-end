"use client";

// import libs
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import NotFound from "@/app/not-found";

// import partials, components
import { CustomerNotificationItem } from "./partials";

// import utils
import { BACKEND_URL } from "@/utils/commonConst";

// import css
import "./page.css";

const notificationTypes = ["", "orders", "promotions"];

// const fetchData = [];
function fetchData() {
  return fetch(`${BACKEND_URL}/noti/getNoti/661389d3b2fa25087f9d5455`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch notifications");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching notifications:", error);
      throw error;
    });
}

// export default function NotificationPage() {
//   // const resData = fetchData();
//   const resData =  fetch(
//     `${BACKEND_URL}/noti/getNoti/661389d3b2fa25087f9d5455`
//   ); // Thay thế URL bằng URL thực tế của bạn
//   console.log("data: ", resData);
//   const searchParams = useSearchParams();
//   const [notifications, setNotifications] = useState(fetchData);
//   const type = searchParams.get("type") ?? "";

//   const handleOnClickReadAll = () => {
//     const updateNotifications = resData.map((notification) => ({
//       ...notification,
//       is_read: true,
//     }));

//     setNotifications(updateNotifications);
//   };

//   useEffect(() => {}, [resData]);

//   // if (!notificationTypes.includes(type)) {
//   //   return NotFound();
//   // }

//   return (
//     <>
//       <section className="notification__content">
//         <div className="notification__content--top">
//           <h2 className="notification__title">Thông báo</h2>
//           <button className="btn_ pri_" onClick={handleOnClickReadAll}>
//             <span>Đánh dấu tất cả đã đọc</span>
//           </button>
//         </div>
//         <Suspense fallback={"Đang tải dữ liệu..."}>
//           {resData
//             .filter(
//               (notification) =>
//                 type === "" || notification.notification_type === type
//             )
//             .map((notification) => (
//               <CustomerNotificationItem
//                 key={notification.notification_id}
//                 {...notification}
//               />
//             ))}
//         </Suspense>
//       </section>
//     </>
//   );
// }

export default function NotificationPage() {
  const [notifications, setNotifications] = useState([]);
  const resData = fetchData();
  console.log("data: ", resData);
  const searchParams = useSearchParams();
  const type = searchParams.get("type") ?? "";
  console.log("type: ", type);

  const handleOnClickReadAll = () => {
    fetchData()
      .then((data) => {
        const updateNotifications = data.map((notification) => ({
          ...notification,
          is_read: true,
        }));
        setNotifications(updateNotifications);
      })
      .catch((error) => {
        console.error("Error updating notifications:", error);
      });
  };

  useEffect(() => {
    fetchData().then((data) => {
      setNotifications(data);
    });
  }, []); // Empty dependency array so that this effect runs only once

  if (!notificationTypes.includes(type)) {
    return NotFound();
  }

  return (
    <>
      <section className="notification__content">
        <div className="notification__content--top">
          <h2 className="notification__title">Thông báo</h2>
          <button className="btn_ pri_" onClick={handleOnClickReadAll}>
            <span>Đánh dấu tất cả đã đọc</span>
          </button>
        </div>
        {/* {resData
          .then((data) => {
            return data.data.notifications
              .filter(
                (notification) =>
                  type === "" || notification.notification_type === type
              )
              .map(
                (notification) => (
                  console.log("Data noti:", notification),
                  (
                    <CustomerNotificationItem
                      key={notification._id}
                      {...notification}
                    />
                  )
                )
              );
          })
          .catch((error) => {
            console.error("Error filtering notifications:", error);
            return null; // hoặc xử lý lỗi theo cách thích hợp
          })} */}
      </section>
    </>
  );
}
// async function getNotificationData() {
//   return fetchData;
// }
