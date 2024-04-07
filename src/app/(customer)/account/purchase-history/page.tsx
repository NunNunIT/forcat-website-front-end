"use client";

// import libs
import { useEffect, useState } from "react";
import useSWR, { Fetcher } from "swr";
import { CustomerOrderItem } from "./partials";
import {
  isActiveClass,
  convertOrderStatusToStr
} from "@/utils";
import { BACKEND_URL } from "@/utils/commonConst";

// import css
import "./page.css";

const fetcher: Fetcher<IOrderItemProps[], string> = async (url: string) => {
  const res: IResponseJSON = await fetch(url).then(res => res.json());

  if (!res.success)
    throw res;

  return res.data as IOrderItemProps[];
}

export default function PurchaseHistoryPage() {
  const [statusPurchaseHistory, setStatusPurchaseHistory] = useState("all");
  const [fullURL, setFullURL] = useState(BACKEND_URL + "/purchases");

  useEffect(() => {
    setFullURL(BACKEND_URL + "/purchases" + ((statusPurchaseHistory === 'all') ? '' : `?type=${statusPurchaseHistory}`));
  }, [statusPurchaseHistory]);

  const { data, error, isLoading } = useSWR(fullURL, fetcher);

  return (
    <main className="account-purchase-history__main">
      <nav className="purchase-history__status-container">
        {["all", "unpaid", "delivering", "finished", "cancel"].map((status) =>
          <button key={status}
            className={`purchase-history__status ${isActiveClass(statusPurchaseHistory, status)}`}
            onClick={() => { setStatusPurchaseHistory(status) }}
          >
            {convertOrderStatusToStr(status)}
          </button>
        )}
      </nav>

      <section className="purchase-history__purchase-item-list">
        {isLoading && <p>Đang tải dữ liệu...</p>}
        {!isLoading && error && <p>Đã có lỗi xảy ra: `{error.message}`</p>}
        {!isLoading && data?.length === 0 && <p>Bạn chưa có đơn hàng nào</p>}
        {!isLoading && data?.map((order: IOrderItemProps) =>
          <CustomerOrderItem key={order._id} {...order} />
        )}
      </section>
    </main>
  )
}