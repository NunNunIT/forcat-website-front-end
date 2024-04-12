"use client";

// import libs
import { useSearchParams } from "next/navigation";
import useSWR, { Fetcher } from "swr";
import NotFound from "@/app/not-found";

// import partials, components
import { CustomerNotificationItem } from "./partials";

// import utils
import { BACKEND_URL } from "@/utils/commonConst";

// import css
import "./page.css";

const notificationTypes = ["", "order", "promotion"];
const user_id = "6616be67a63ceb458b15828f";
// const fetcher: Fetcher<INotiProps[], string> = async (url: string) => {
//   const res: Response = await fetch(url);
//   if (!res.ok)
//     throw new Error("Failed to fetch notifications: " + res.statusText);

//   const json = await res.json();

//   if (json.error) throw res;

//   return json.data.notifications as INotiProps[];
// };
const fetcher: Fetcher<INotiProps[], string> = async (url: string) => {
  const res: Response = await fetch(url);
  if (!res.ok)
    throw new Error("Failed to fetch notifications: " + res.statusText);

  const json = await res.json();

  if (json.error) throw res;

  const notifications: INotiProps[] = json.data.notifications.map(
    (notification: any) => {
      const user = notification.users.usersList.find(
        (user: any) => user._id === user_id
      );
      return {
        ...notification,
        is_read: user ? user.isRead : false,
      };
    }
  );

  return notifications;
};
const handleOnClickReadAll = () => {
  const postData = {
    user_id: user_id,
  };
  fetch(`${BACKEND_URL}/noti/readAllNoti`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData), // Chuyển đổi đối tượng JavaScript thành chuỗi JSON
  });
};

export default function NotificationPage() {
  const searchParams = useSearchParams();
  const type: string = searchParams.get("type") ?? "";
  const page: string = searchParams.get("page") ?? "1";
  const limit: string = searchParams.get("limit") ?? "10";
  const fullURL: string =
    `${BACKEND_URL}/noti/getNoti/${user_id}?` +
    (type === "" ? "" : `type=${type}`) +
    `&page=${page}` +
    `&limit=${limit}`;
  const { data, error, isLoading } = useSWR<INotiProps[]>(fullURL, fetcher);

  if (!notificationTypes.includes(type)) {
    return NotFound();
  }

  return (
    <section className="notification__content">
      <div className="notification__content--top">
        <h2 className="notification__title">Thông báo</h2>
        <button className="btn_ pri_" onClick={handleOnClickReadAll}>
          <span>Đánh dấu tất cả đã đọc</span>
        </button>
      </div>
      {isLoading && <p>Loading...</p>}
      {data &&
        data.map((notification: INotiProps) => (
          <CustomerNotificationItem
            key={notification._id}
            {...notification}
            user_id={user_id}
          />
        ))}
    </section>
  );
}
