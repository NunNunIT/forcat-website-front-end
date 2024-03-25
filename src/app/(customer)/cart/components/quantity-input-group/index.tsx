"use client";

// import libs
import classNames from "classnames/bind";
import { useState, useRef, useEffect } from "react";

// import css
import styles from "./quantity-input-group.module.css";

// import libs
import { convertMoneyToNumber, convertNumberToMoney } from "@/utils";

// use css
const cx = classNames.bind(styles);

export default function CartQuantityInputGroup({
  initValue,
  calcPrices,
  ...props
}: {
  initValue: IQuantityInputGroup;
  calcPrices: any;
}) {
  // handle value
  const [inputValue, setInputValue] = useState(initValue.defaultValue);

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = +event.target.value;

    if (newValue >= initValue.minValue && newValue <= initValue.maxValue)
      setInputValue(newValue);
  };

  const decreaseValue = () => {
    if (inputValue > initValue.minValue) setInputValue(+inputValue - 1);
  };

  const increaseValue = () => {
    if (inputValue < initValue.maxValue) setInputValue(+inputValue + 1);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    inputRef.current?.select();
  };

  // calc prices
  const quantityInputGroupRef = useRef(null);
  const calcProductPrice = () => {
    const quantity = inputValue;
    const current = quantityInputGroupRef.current;
    const unitPrice = convertMoneyToNumber(
      current.parentElement.previousSibling.querySelector(
        ".cart-item__unit-price-after-discount"
      ).innerHTML
    );
    const totalProductPrice = current.parentElement.nextSibling;
    totalProductPrice.innerHTML = convertNumberToMoney(unitPrice * quantity);
  };

  useEffect(() => {
    calcPrices();
    calcProductPrice();
  });

  return (
    <div className={cx("quantity-input-group")} ref={quantityInputGroupRef}>
      <div
        className={cx("quantity-input-group__btn-remove", "btn-quantity")}
        onClick={decreaseValue}>
        <span
          className={cx("material-icons-round", "quantity-input-group__icon")}>
          remove
        </span>
      </div>
      <input
        ref={inputRef}
        className={cx("quantity-input-group__input", "input-quantity")}
        type="number"
        onChange={handleValueChange}
        onClick={handleClick}
        min={initValue.minValue}
        max={initValue.maxValue}
        value={inputValue}
      />
      <div
        className={cx("quantity-input-group__btn-add", "btn-quantity")}
        onClick={increaseValue}>
        <span
          className={cx("material-icons-round", "quantity-input-group__icon")}>
          add
        </span>
      </div>
    </div>
  );
}
