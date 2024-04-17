"use client";

// import libs
import { useSearchParams } from "next/navigation";
import useSWR, { Fetcher } from "swr";
import { useState } from "react";
import NotFound from "@/app/not-found";

// import partials, components
import { CustomerNotificationItem, CustomerSkeletonNotificationItem } from "./partials";
import { CustomerPagination } from "@/components";

// import utils
import { BACKEND_URL_NOTIFICATIONS, NOTIFICATION_STATUS_LIST } from "@/utils/commonConst";

// import css
import "./page.css";

const user_id = "661754a9ae209b64b08e6874";
interface IDataResponseNoti {
  notifications: INotiItemProps[],
  maxPage: number;
}

const fetcher: Fetcher<IDataResponseNoti, string> = async (url: string) => {
  const res: Response = await fetch(url);
  if (!res.ok)
    throw new Error("Failed to fetch notifications: " + res.statusText);

  const json = await res.json();

  if (!json.success)
    throw res;

  return json.data as IDataResponseNoti;
};

const getFullBackendURLNotifications = (type: string, page: string, limit: string): string => {
  return BACKEND_URL_NOTIFICATIONS + "?"
    + ((type === "all") ? "" : `type=${type}&`)
    + `page=${page}&limit=${limit}&user_id=${user_id}`;
}

export default function NotificationPage() {
  const searchParams = useSearchParams();
  const type: string = searchParams.get("type") ?? "all";
  const page: string = searchParams.get("page") ?? "1";
  const limit: string = searchParams.get("limit") ?? "3";
  const [readAll, setAllRead] = useState<boolean>(false);
  const fullURL: string = getFullBackendURLNotifications(type, page, limit);
  const { data, error, isLoading } = useSWR<IDataResponseNoti>(fullURL, fetcher);

  if (!NOTIFICATION_STATUS_LIST.includes(type)) {
    return NotFound();
  }

  const handleOnClickReadAll = async () => {
    const postData = {
      user_id: user_id,
    };

    // Update state to indicate all notifications have been read
    setAllRead(true);

    // Gửi yêu cầu đánh dấu tất cả thông báo đã đọc
    await fetch(`${BACKEND_URL_NOTIFICATIONS}/readAll?user_id=${user_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
  };

  return (
    <section className="notification__content">
      <div className="notification__content--top">
        <h2 className="notification__title">Thông báo</h2>
        <button className="btn_ pri_" onClick={handleOnClickReadAll} >
          <span>Đánh dấu tất cả đã đọc</span>
        </button>
      </div>
      {isLoading
        ? <CustomerSkeletonNotificationItem />
        : <>
          {data.notifications.map((notification: INotiItemProps) => (
            <CustomerNotificationItem
              key={notification._id}
              {...notification}
              user_id={user_id}
              read_all={readAll}
            />
          ))}
        </>
      }
      <div className="tag-make-fill-blank" />

      {/* Pagination */}
      {data && <div className="noti__pagination">
        <CustomerPagination currentPage={parseInt(page)} maxPage={data.maxPage} />
      </div>}
    </section>
  );
}
