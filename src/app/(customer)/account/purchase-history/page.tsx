// import libs
import { notFound } from "next/navigation";

// import utils
import { ORDER_STATUS_LIST } from "@/utils/commonConst";

// import partials, components
import { CustomerHistoryStatusNav, CustomerPurchaseWrapper } from "./partials";

// import css
import "./page.css";

export default async function PurchaseHistoryPage({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  // get searchParam status, page
  const currentStatus = searchParams?.type ?? "all";
  const currentPage = searchParams?.page ?? "1";

  // check valid status
  if (!ORDER_STATUS_LIST.includes(currentStatus)) return notFound;

  // check valid page
  if (parseInt(currentPage) < 1) return notFound;

  return (
    <div className="account-purchase-history__main">
      <CustomerHistoryStatusNav />
      <CustomerPurchaseWrapper />
    </div>
  );
}
