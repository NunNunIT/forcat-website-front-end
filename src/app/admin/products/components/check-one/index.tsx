"use client";

const clickCheckOne = () => {
  const checkedCheckboxes = document.querySelectorAll(
    "input.checkbox-checkone:checked"
  );
  // console.log(checkedCheckboxes);

  const checkAll = document.querySelector(".checkbox-checkall") as any;
  // console.log(checkAll);

  if (checkedCheckboxes.length == 10) checkAll.checked = true;
  else checkAll.checked = false;
};

export default function ProductCheckOne() {
  return (
    <input
      className="product-page-table__checkbox checkbox-checkone"
      type="checkbox"
      onClick={clickCheckOne}
    />
  );
}
