"use client"

// import libs
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from 'react';
import NotFound from "@/app/not-found";

// import partials, components
import { CustomerNotificationItem } from "./partials";

// import css
import "./page.css";

const notificationTypes = ['', 'orders', 'promotions'];

const fetchData: INotificationItemProps[] = [
  {
    notification_id: "1",
    notification_title: "Thông báo 1",
    notification_short_desc: "Thông báo 1",
    notification_desc: [
      { type: "h2", content: "Thông báo 1", },
      { type: "h3", content: "1. heading 2 của thông báo 1", },
      { type: "p", content: "Nội dung thông báo heading 2 của thông báo 1", },
      { type: "h3", content: "2. heading 2 của thông báo 1", },
      { type: "p", content: "Nội dung thông báo heading 2 của thông báo 1", },
    ],
    notification_url_img: "/imgs/test.png",
    notification_type: "orders",
    notification_date: new Date("2022-01-01"),
    is_read: false,
  },
  {
    "notification_id": "2",
    "notification_title": "Thông báo 2",
    "notification_short_desc": "Thông báo 2",
    "notification_desc": [
      { "type": "h2", "content": "Thông báo 2" },
      { "type": "h3", "content": "1. heading 2 của thông báo 2" },
      { "type": "p", "content": "Nội dung thông báo heading 2 của thông báo 2" },
      { "type": "h3", "content": "2. heading 2 của thông báo 2" },
      { "type": "p", "content": "Nội dung thông báo heading 2 của thông báo 2" }
    ],
    "notification_url_img": "/imgs/test.png",
    "notification_type": "orders",
    "notification_date": new Date("2022-01-05T00:00:00.000Z"),
    "is_read": false
  },
  {
    "notification_id": "3",
    "notification_title": "Thông báo 3",
    "notification_short_desc": "Thông báo 3",
    "notification_desc": [
      { "type": "h2", "content": "Thông báo 3" },
      { "type": "h3", "content": "1. heading 2 của thông báo 3" },
      { "type": "p", "content": "Nội dung thông báo heading 2 của thông báo 3" },
      { "type": "h3", "content": "2. heading 2 của thông báo 3" },
      { "type": "p", "content": "Nội dung thông báo heading 2 của thông báo 3" }
    ],
    "notification_url_img": "/imgs/test.png",
    "notification_type": "promotions",
    "notification_date": new Date("2022-01-10T00:00:00.000Z"),
    "is_read": true
  },
  {
    "notification_id": "4",
    "notification_title": "Thông báo 4",
    "notification_short_desc": `Dòng mô tả ngắn về thông báo 4. Dòng mô tả ngắn về thông báo 4. Dòng mô tả ngắn về thông báo 4. Dòng mô tả ngắn về thông báo 4.
      Dòng mô tả ngắn về thông báo 4. Dòng mô tả ngắn về thông báo 4. Dòng mô tả ngắn về thông báo 4. Dòng mô tả ngắn về thông báoDòngmôtả ngắn về thông báo 4.
      Dòng mô tả ngắn về thông báo 4. Dòng mô tả ngắn về thông báo 4. Dòng mô tả ngắn về thông báo 4. Dòng mô tả ngắn về thông báo 4.`,
    "notification_desc": [
      { "type": "h2", "content": "Thông báo 4" },
      { "type": "h3", "content": "1. heading 2 của thông báo 4" },
      { "type": "p", "content": "Nội dung thông báo heading 2 của thông báo 4" },
      { "type": "h3", "content": "2. heading 2 của thông báo 4" },
      { "type": "p", "content": "Nội dung thông báo heading 2 của thông báo 4" }
    ],
    "notification_url_img": "/imgs/test.png",
    "notification_type": "promotions",
    "notification_date": new Date("2022-01-15T00:00:00.000Z"),
    "is_read": false
  },
]

export default function NotificationPage() {
  const searchParams = useSearchParams();
  const [notifications, setNotifications] = useState(fetchData);
  const type = searchParams.get('type') ?? '';

  const handleOnClickReadAll = () => {
    const updateNotifications = notifications.map(notification => ({
      ...notification,
      is_read: true,
    }));

    setNotifications(updateNotifications);
  }

  useEffect(() => {

  }, [notifications])

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
        <Suspense fallback={"Đang tải dữ liệu..."}>
          {notifications.filter(
            (notification) => (type === '' || notification.notification_type === type)
          ).map(
            (notification) => <CustomerNotificationItem key={notification.notification_id} {...notification} />
          )}
        </Suspense>
      </section>
    </>
  )
}

async function getNotificationData() {
  return fetchData;
}