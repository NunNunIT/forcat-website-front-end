"use client";

// import libs
import classNames from "classnames/bind";
import { useState, useRef } from "react";

// import css
import styles from "./quantity-input-group.module.css";

// use css
const cx = classNames.bind(styles);

export default function CustomerQuantityInputGroup({
  initValue,
  ...props
}: {
  initValue: IQuantityInputGroup;
}) {
  const [inputValue, setInputValue] = useState(initValue.defaultValue);

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = +event.target.value;

    if (newValue >= initValue.minValue && newValue <= initValue.maxValue)
      setInputValue(newValue);

    initValue.onValueChange(newValue);
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

  return (
    <div className={cx("quantity-input-group")}>
      <div
        className={cx("quantity-input-group__btn-remove", "btn-quantity")}
        onClick={decreaseValue}>
        <span className="material-icons-round">remove</span>
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
        <span className="material-icons-round">add</span>
      </div>
    </div>
  );
}
