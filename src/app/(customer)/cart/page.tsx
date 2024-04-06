// import libs
import { notFound } from "next/navigation";

// import partials
import { CartWrapper } from "./partials";

// import utils
import { BACKEND_URL } from "@/utils/commonConst";

// import css
import "./page.css";

// fetch data
async function getCart() {
  try {
    const res = await fetch(`${BACKEND_URL}/cart/66101303292b6f70645d8c29`, {
      next: { revalidate: 0 },
    });

    if (!res.ok) return notFound();

    return res.json();
  } catch (err) {
    return notFound();
  }
}
export default async function ProductPage() {
  const res = await getCart();
  const userId = "66101303292b6f70645d8c29";

  return (
    <main className="cart">
      <CartWrapper cart={res?.cartInfo} userId={userId}></CartWrapper>
    </main>
  );
}
