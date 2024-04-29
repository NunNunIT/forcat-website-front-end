// import partials
import { CustomerPurchaseDetailWrapper } from "./partials";

// import css
import "./page.css";

export default async function PurchaseDetailPage({
  params
}: {
  params: { orderId: string }
}) {
  return (
    <CustomerPurchaseDetailWrapper {...params} />
  );
}
