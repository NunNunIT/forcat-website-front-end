"use client";

// import libs
import { useSearchParams } from "next/navigation";
import useSWR, { Fetcher } from "swr";
import {
  BACKEND_URL_ORDERS,
  ORDER_STATUS_LIST,
} from "@/utils/commonConst";

// import partials, components
import {
  CustomerOrderItem,
  CustomerHistoryStatusNav
} from "./partials";
import { CustomerPagination } from "@/components";
import NotFound from "@/app/not-found";

// import css
import "./page.css";

const fetcher: Fetcher<ResponseOrderHistory, string> = async (url: string) => {
  const res: Response = await fetch(url);
  if (!res.ok) throw res;

  const json: IResponseJSON = await res.json();
  if (!json.success) throw json;

  return json.data as ResponseOrderHistory;
}

const getFullBackendURLOrders = (status: string, page: string): string => {
  return BACKEND_URL_ORDERS +
    ((status === "all") ? "" : `type=${status}&`) +
    `page=${page}&limit=3`;
}

export default function PurchaseHistoryPage() {
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page") ?? "1";
  const currentStatus = searchParams.get("status") ?? "all";

  const fullURL: string = getFullBackendURLOrders(currentStatus, currentPage);

  const { data, error, isLoading } = useSWR(fullURL, fetcher);

  if (!ORDER_STATUS_LIST.includes(currentStatus))
    return NotFound();

  return (
    <div className="account-purchase-history__main">
      <CustomerHistoryStatusNav />

      <section className="purchase-history__purchase-item-list">
        {isLoading && <p>Đang tải dữ liệu...</p>}
        {!isLoading && error && <p>Đã có lỗi xảy ra: `{JSON.stringify(error)}`</p>}
        {!isLoading && !error && data.orders.length === 0 && <p>Bạn chưa có đơn hàng nào</p>}
        {!isLoading && !error && data.orders.map((order: IOrderItemProps) =>
          <CustomerOrderItem key={order._id} {...order} />
        )}

        {/* Pagination */}
        {!isLoading && !error && data?.maxPage > 1 && (
          <CustomerPagination
            currentPage={parseInt(currentPage)}
            maxPage={data?.maxPage ?? 1}
          />
        )}
      </section>
    </div>
  )
}