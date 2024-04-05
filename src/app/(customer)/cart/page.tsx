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
  const res = await fetch(`${BACKEND_URL}/cart/660fc1b6ea2ab8e66f97ca63`, {
    cache: "no-store",
  });

  if (!res.ok) return notFound();

  return res.json();
}
export default async function ProductPage() {
  const res = await getCart();
  const userId = "660fc1b6ea2ab8e66f97ca63";

  return (
    <main className="cart">
      <CartWrapper cart={res?.cartInfo} userId={userId}></CartWrapper>
    </main>
  );
}
