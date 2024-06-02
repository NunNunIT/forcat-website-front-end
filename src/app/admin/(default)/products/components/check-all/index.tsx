"use client";

const clickCheckAll = (event: any) => {
  const current = event.currentTarget;
  // console.log(current);

  const checkboxes = document.querySelectorAll(".checkbox-checkone");
  checkboxes.forEach((checkbox: any) => {
    if (checkbox.checked != current.checked) checkbox.checked = current.checked;
  });
  // console.log("checkboxes", checkboxes);
};

export default function ProductCheckAll() {
  return (
    <input
      className="product-page-table__checkbox checkbox-checkall"
      type="checkbox"
      onClick={clickCheckAll}
    />
  );
}
