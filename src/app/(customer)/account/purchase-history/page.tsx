"use client";

// import libs
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import useSWR, { Fetcher } from "swr";
import {
  isActiveClass,
  convertOrderStatusToStr
} from "@/utils";
import { BACKEND_URL } from "@/utils/commonConst";

// import partials, components
import { CustomerOrderItem } from "./partials";
import { CustomerPagination } from "@/components";

// import css
import "./page.css";

const fetcher: Fetcher<ResponseOrderHistory, string> = async (url: string) => {
  const res: Response = await fetch(url);
  if (!res.ok) throw res;

  const json: IResponseJSON = await res.json();
  if (!json.success) throw json;

  return json.data as ResponseOrderHistory;
}

const orderAPIEndpoint = "/orders";
const getFullBackendURLOrders = (status: string, page: string): string => {
  return BACKEND_URL + `${orderAPIEndpoint}?` +
    ((status === "all") ? "" : `type=${status}&`) +
    `page=${page}&limit=3`;
}

const currentPageURL = "/account/purchase-history";
const getFullURL = (status: string, page: string): string => {
  return `${currentPageURL}?` +
    ((status === "all") ? "" : `status=${status}&`) +
    `page=${page}`;
}

export const dynamic = "force-dynamic"

export default function PurchaseHistoryPage() {
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page") ?? "1";
  const currentStatus = searchParams.get("status") ?? "all";

  const fullURL: string = getFullBackendURLOrders(currentStatus, currentPage);

  const { data, error, isLoading } = useSWR(fullURL, fetcher);

  return (
    <main className="account-purchase-history__main">
      <nav className="purchase-history__status-container">
        {["all", "unpaid", "delivering", "finished", "cancel"].map((status) =>
          <Link key={status}
            className={`purchase-history__status ${isActiveClass(currentStatus, status)}`}
            href={getFullURL(status, "1")}
          >
            {convertOrderStatusToStr(status)}
          </Link>
        )}
      </nav>

      <section className="purchase-history__purchase-item-list">
        {isLoading && <p>Đang tải dữ liệu...</p>}
        {!isLoading && error && <p>Đã có lỗi xảy ra: `{JSON.stringify(error)}`</p>}
        {!isLoading && !error && data.orders.length === 0 && <p>Bạn chưa có đơn hàng nào</p>}
        {!isLoading && !error && data.orders.map((order: IOrderItemProps) =>
          <CustomerOrderItem key={order._id} {...order} />
        )}

        {!isLoading && !error && data?.maxPage > 1 && <CustomerPagination
          currentPage={parseInt(currentPage)}
          maxPage={data?.maxPage ?? 1}
          hrefFunc={(page: number) => getFullURL(currentStatus, page.toString())}
        />}
      </section>
    </main>
  )
}