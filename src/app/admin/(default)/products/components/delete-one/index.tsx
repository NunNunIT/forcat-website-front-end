"use client";

const deleteProduct = (event: any) => {
  const current = event.currentTarget;
  const product = current.parentElement.parentElement;

  const productIdEle = product.querySelector(
    ".product-page-table__product-id"
  ) as HTMLElement;
  const productId = productIdEle.innerHTML;
  // console.log(productId);

  const productIdsLocal = JSON.parse(
    localStorage.getItem("adminDeleteItems")
  ) ?? { payload: [] };

  localStorage.removeItem("adminDeleteItems");
  localStorage.setItem(
    "adminDeleteItems",
    JSON.stringify({
      type: "adminDeleteItems",
      payload: [...productIdsLocal.payload, productId],
      timestamp: Date.now(),
    })
  );

  product.remove();
};

export default function ProductDeleteOne() {
  return (
    <button
      className="product-page__btn-small product-page__btn-small-delete"
      type="button"
      onClick={deleteProduct}>
      <span className="material-icons-round product-page__btn-icon">
        delete
      </span>
    </button>
  );
}
