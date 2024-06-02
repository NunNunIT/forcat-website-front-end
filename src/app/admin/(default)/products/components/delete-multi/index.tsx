"use client";

const deleteProducts = () => {
  const products = Array.from(
    document.querySelectorAll(".product-page-table__product")
  ).filter((product) => {
    const checkbox = product.querySelector(
      ".checkbox-checkone"
    ) as HTMLInputElement;
    if (checkbox.checked == true) return product;
  });

  const productIds = products.map(
    (product) =>
      (product.querySelector(".product-page-table__product-id") as HTMLElement)
        .innerHTML
  );

  const productIdsLocal = JSON.parse(
    localStorage.getItem("adminDeleteItems")
  ) ?? { payload: [] };

  localStorage.removeItem("adminDeleteItems");
  localStorage.setItem(
    "adminDeleteItems",
    JSON.stringify({
      type: "adminDeleteItems",
      payload: [...productIdsLocal.payload, ...productIds],
      timestamp: Date.now(),
    })
  );

  products.forEach((product) => product.remove());

  // console.log(productIds);
};

export default function ProductDeleteMulti() {
  return (
    <button
      className="product-page__btn product-page__btn-delete"
      type="button"
      onClick={deleteProducts}>
      <span className="material-icons-round product-page__btn-icon">
        delete
      </span>
      <span className="product-page__btn-text">Xóa</span>
    </button>
  );
}
