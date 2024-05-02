"use client";

// import libs
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, notFound } from "next/navigation";
import useSWR, { Fetcher } from "swr";

// import partials
import { CustomerPagination } from "@/components";
import { CustomerNotificationItem, CustomerSkeletonNotificationItem } from "..";

// import utils
import { BACKEND_URL_NOTIFICATIONS } from "@/utils/commonConst";

interface IDataResponseNoti {
  notifications: INotiItemProps[];
  maxPage: number;
}

const fetcher: Fetcher<IDataResponseNoti, string> = async (url: string) => {
  const res: Response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    next: { revalidate: 60 },
  });

  const json: IResponseJSON = await res.json();
  if (!json.success) {
    // Đã xử lý throw error ở phía client
    throw json;
  }

  return json.data as IDataResponseNoti;
};

const getFullBackendURLNotifications = (
  type: string,
  page: string,
  limit: string
): string => {
  return (
    BACKEND_URL_NOTIFICATIONS +
    "?" +
    (type === "all" ? "" : `type=${type}&`) +
    `page=${page}&limit=${limit}`
  );
};

const fetcherSetReadAll = async () => {
  await fetch(`${BACKEND_URL_NOTIFICATIONS}/readAll`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
};

const fethcerSetRead = async (notification_id: string) => {
  await fetch(`${BACKEND_URL_NOTIFICATIONS}/${notification_id}/read`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
};

export default function NotificationWrapper() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") ?? "all";
  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "3";

  const [readAll, setReadAll] = useState<boolean>(false);
  const fullBackendURLNotifications = getFullBackendURLNotifications(
    type,
    page,
    limit
  );
  const { data, error, isLoading, mutate } = useSWR(
    fullBackendURLNotifications,
    fetcher
  );

  const handleOnClickReadAll = async () => {
    if (!readAll) {
      setReadAll(true);

      // Gửi yêu cầu đánh dấu tất cả thông báo đã đọc
      await fetcherSetReadAll();

      mutate();
    }
  };

  return (
    <>
      <div className="notification__content--top">
        <h2 className="notification__title">Thông báo</h2>
        <button className="btn_ pri_" onClick={handleOnClickReadAll}>
          <span>Đánh dấu tất cả đã đọc</span>
        </button>
      </div>
      {isLoading ? (
        <CustomerSkeletonNotificationItem />
      ) : (
        ((data?.notifications ?? []).length > 0)
          ? data?.notifications.map((notification: INotiItemProps) => (
            <CustomerNotificationItem
              key={notification._id}
              {...notification}
              readAll={readAll}
              mutate={mutate}
              fetcherSetRead={fethcerSetRead}
            />
          ))
          : <>
            <div className="notification__no-notification">
              <div className="notification__no-notification-img-container">
                <Image
                  src="/imgs/purchase/empty.png"
                  alt="No notification"
                  fill={true}
                />
              </div>
              <span className="notification__no-notification-text">
                Bạn chưa có thông báo thuộc loại này!!!<br />
                Hãy thử <Link href="/search-result?searchKey=">mua sắm</Link> để có những trải nghiệm tuyệt vời nhất.
              </span>
            </div>
          </>
      )}

      {/* Fill blank */}
      {!isLoading && data && data.maxPage > 1 && (
        <div className="tag-make-fill-blank" />
      )}

      {/* Pagination */}
      {!isLoading && data && (
        <div className="noti__pagination">
          <CustomerPagination maxPage={data.maxPage} />
        </div>
      )}
    </>
  );
}
