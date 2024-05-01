"use client";

// imoprt libs
import { notFound } from "next/navigation";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import useSWR, { Fetcher } from "swr";

// import partials, components
import { CustomerOrderItem, CustomerSkeletonOrderItem } from "..";
import { CustomerPagination } from "@/components";

// import utils
import { BACKEND_URL_ORDERS } from "@/utils/commonConst";

interface IDataResponseOrder {
  orders: IOrderItemProps[];
  maxPage: number;
}

const fetcher: Fetcher<IDataResponseOrder, string> = async (url: string) => {
  const res: Response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return notFound();
  }

  const json: IResponseJSON = await res.json();
  if (!json.success) {
    return notFound();
  }

  return json.data as IDataResponseOrder;
};

const getFullBackendURLOrders = (status: string, page: string): string => {
  return (
    BACKEND_URL_ORDERS
    + "?"
    + (status === "all" ? "" : `type=${status}&`)
    + `page=${page}&limit=3`
  );
};

export default function PurchaseWrapper() {
  const searchParams = useSearchParams();
  const currentStatus = searchParams.get("type") ?? "all";
  const currentPage = searchParams.get("page") ?? "1";
  const fullURL: string = getFullBackendURLOrders(currentStatus, currentPage);
  const { data, error, isLoading } = useSWR(fullURL, fetcher);

  return (
    <section className="purchase-history__purchase-item-list">
      {isLoading && (
        <CustomerSkeletonOrderItem />
      )}
      {!isLoading && (data?.orders ?? []).length === 0 ? (
        <div className="purchase-history__no-order">
          <div className="purchase-history__no-order-img-container">
            <Image
              src="/imgs/purchase/empty.png"
              alt="No order"
              fill={true}
            />
          </div>
          <span className="purchase-history__no-order-text">
            Bạn chưa có đơn hàng thuộc loại này!!!<br />
            Hãy <Link href="/search-result?searchKey=">mua sắm ngay</Link> để có những trải nghiệm tuyệt vời nhất.
          </span>
        </div>
      ) : (
        (data?.orders ?? []).map((order: IOrderItemProps) => (
          <CustomerOrderItem key={order._id} {...order} />
        ))
      )}

      {/* Pagination */}
      <CustomerPagination maxPage={data?.maxPage ?? 1} />
    </section>
  )
}