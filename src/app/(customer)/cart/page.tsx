"use client";

// import libs
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

// import components
import { CartQuantityInputGroup } from "./components";

// import utils
import { convertMoneyToNumber, convertNumberToMoney } from "@/utils";

// import css
import "./page.css";

export default function CartPage() {
  // handle checkbox
  const checkAll = useRef(null);

  let checkboxes;
  if (typeof window !== "undefined")
    checkboxes = Array.from(
      window?.document.querySelectorAll(".cart-checkbox")
    );

  // handle prices
  const [originalPrice, setOriginalPrice] = useState("0 đ");
  const [discountedPrice, setDiscountedPrice] = useState("0 đ");
  const [totalPrice, setTotalPrice] = useState("0 đ");
  let cartItem;
  if (typeof window !== "undefined")
    cartItem = Array.from(window.document.querySelectorAll(".cart-item")).slice(
      1
    );

  // handle count
  const [selectedItem, setSelectedItem] = useState(0);
  const [allItem, setAllItem] = useState(0);

  useEffect(() => {
    setAllItem(cartItem.length);
  }, [cartItem]);

  // calc prices
  const calcPrices = () => {
    let original = 0;
    let total = 0;
    let discounted = 0;

    cartItem.forEach((item: any) => {
      if ((item.querySelector(".cart-checkbox") as HTMLInputElement).checked) {
        const o = convertMoneyToNumber(
          item.querySelector(".cart-item__unit-price-before-discount del")
            .innerHTML
        );
        const u = convertMoneyToNumber(
          item.querySelector(".cart-item__unit-price-after-discount").innerHTML
        );
        const q = Number(
          (
            item.querySelector(
              ".quantity-input-group__input"
            ) as HTMLInputElement
          ).value
        );

        original += o * q;
        total += u * q;
        discounted += o * q - u * q;
      }
    });

    setOriginalPrice(convertNumberToMoney(original));
    setDiscountedPrice(convertNumberToMoney(discounted));
    setTotalPrice(convertNumberToMoney(total));
  };

  // click check all
  const handleCheckAll = () => {
    checkboxes.forEach(
      (checkbox: any) => (checkbox.checked = checkAll.current.checked)
    );

    countSelectedItem();
    calcPrices();
  };

  // click check one
  const handleCheckOne = (event) => {
    // set checkall to false when 1 is not checked
    if (event.currentTarget.checked == false) checkAll.current.checked = false;

    // set checkall to true when every checkbox is checked
    if (
      event.currentTarget.checked == true &&
      checkboxes.slice(1).every((checkbox: any) => checkbox.checked)
    )
      checkAll.current.checked = true;

    countSelectedItem();
    calcPrices();
  };

  // count item
  const countSelectedItem = () => {
    const selected = cartItem.filter(
      (item: any) => item.querySelector(".cart-checkbox").checked
    );
    setSelectedItem(selected.length);
  };

  // delete cart item
  const handleDeleteCartItem = (event) => {
    const current = event.currentTarget;
    const cartItem = current.parentElement;
    cartItem.remove();
    setAllItem(allItem - 1);
  };

  useEffect(() => {
    calcPrices();
  }, []);

  return (
    <>
      <section className="cart-product-group">
        <div className="cart-product-group__title cart-item title">
          <div className="title__item title__check-all">
            <input
              type="checkbox"
              className="cart-checkbox"
              ref={checkAll}
              onClick={handleCheckAll}
            />
            <h4>
              Sản phẩm (<span className="checked-num">{allItem}</span>)
            </h4>
          </div>
          <div className="title__item">
            <h4>Đơn giá</h4>
          </div>
          <div className="title__item">
            <h4>Số lượng</h4>
          </div>
          <div className="title__item mobile-hidden">
            <h4>Thành tiền</h4>
          </div>
          <div className="title__item mobile-hidden"></div>
        </div>

        <div className="cart-item">
          <div className="cart-item__info cart-item-col">
            <input
              type="checkbox"
              className="cart-checkbox"
              onChange={handleCheckOne}
            />
            <div className="cart-item__info-div">
              <div className="cart-item__image-div">
                <Image
                  className="cart-item__image"
                  src="/imgs/test.png"
                  alt="This is a test image"
                  fill={true}
                />
              </div>
              <div className="cart-item__text-info cart-item-col">
                <h5>Tên sản phẩm abcxyzl dạksjcawc</h5>
                <div className="cart-item__variant">
                  <div className="cart-item__variant-name">7 sắc cầu vồng</div>
                  <span className="material-icons-round cart-item__variant-icon">
                    keyboard_arrow_down
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-item__unit-price cart-item-col">
            <div className="cart-item__unit-price-after-discount">
              10.000.000đ
            </div>
            <div className="cart-item__unit-price-before-discount">
              <del>11.000.000đ</del>
            </div>
          </div>
          <div className="cart-item__quantity cart-item-col">
            <CartQuantityInputGroup
              initValue={{
                defaultValue: 1,
                minValue: 1,
                maxValue: 100,
              }}
              calcPrices={calcPrices}></CartQuantityInputGroup>
          </div>
          <div className="cart-item__price cart-item-col mobile-hidden">
            10.000.000đ
          </div>
          <div
            className="cart-item__remove-btn cart-item-col mobile-hidden"
            onClick={handleDeleteCartItem}>
            <span className="material-icons-round">delete</span>
          </div>
        </div>

        <div className="cart-item">
          <div className="cart-item__info cart-item-col">
            <input
              type="checkbox"
              className="cart-checkbox"
              onChange={handleCheckOne}
            />
            <div className="cart-item__info-div">
              <div className="cart-item__image-div">
                <Image
                  className="cart-item__image"
                  src="/imgs/test.png"
                  alt="This is a test image"
                  fill={true}
                />
              </div>
              <div className="cart-item__text-info cart-item-col">
                <h5>Tên sản phẩm abcxyzl dạksjcawc</h5>
                <div className="cart-item__variant">
                  <div className="cart-item__variant-name">7 sắc cầu vồng</div>
                  <span className="material-icons-round cart-item__variant-icon">
                    keyboard_arrow_down
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-item__unit-price cart-item-col">
            <div className="cart-item__unit-price-after-discount">
              10.000.000đ
            </div>
            <div className="cart-item__unit-price-before-discount">
              <del>11.000.000đ</del>
            </div>
          </div>
          <div className="cart-item__quantity cart-item-col">
            <CartQuantityInputGroup
              initValue={{
                defaultValue: 1,
                minValue: 1,
                maxValue: 100,
              }}
              calcPrices={calcPrices}></CartQuantityInputGroup>
          </div>
          <div className="cart-item__price cart-item-col mobile-hidden">
            10.000.000đ
          </div>
          <div
            className="cart-item__remove-btn cart-item-col mobile-hidden"
            onClick={handleDeleteCartItem}>
            <span className="material-icons-round">delete</span>
          </div>
        </div>
      </section>

      <section className="cart-bill ipad-hidden">
        <div className="cart-bill-row">
          <div className="cart-bill-row__title">Giá gốc</div>
          <div className="cart-bill-row__content">{originalPrice}</div>
        </div>
        <div className="cart-bill-row">
          <div className="cart-bill-row__title">Giảm giá</div>
          <div className="cart-bill-row__content">{discountedPrice}</div>
        </div>
        <div className="cart-bill-row cart-bill__line"></div>
        <div className="cart-bill-row cart-bill__total-price">
          <div className="cart-bill-row__title">Tổng tiền</div>
          <div className="cart-bill-row__content">{totalPrice}</div>
        </div>
        <div className="cart-bill-row cart-bill__btn">
          Mua hàng (<span className="checked-num">{selectedItem}</span>)
        </div>
        <div className="cart-bill-row cart-bill-policy">
          Bằng việc tiến hành đặt mua hàng, bạn đồng ý với Điều khoản dịch vụ,
          Chính sách thu thập và xử lý dữ liệu cá nhân của ForCat.
        </div>
      </section>

      <section className="cart-bill-footer desktop-hidden ipad-display">
        <div className="cart-footer-container">
          <div className="cart-footer-btns">
            <div className="cart-footer-btns__check-all-btn cart-footer-btns__btn">
              Tất cả (<span className="checked-num">{allItem}</span>)
            </div>
            <div className="cart-footer-btn__delete-btn cart-footer-btns__btn">
              Xóa
            </div>
          </div>
          <div className="cart-footer-buy-group">
            <div className="cart-footer-buy-group__pricing">
              <div className="pricing__total-price pricing__text">
                Tổng tiền:{" "}
                <del className="pricing__price-before-discount">
                  {originalPrice}
                </del>
              </div>
              <div className="pricing__price-after-discount pricing__text">
                {totalPrice}
              </div>
            </div>
            <div className="cart-footer-buy-group__buy-btn">
              Mua hàng (<span className="checked-num">{selectedItem}</span>)
            </div>
          </div>
        </div>
        <div className="cart-footer-policy">
          Bằng việc tiến hành đặt mua hàng, bạn đồng ý với Điều khoản dịch vụ,
          Chính sách thu thập và xử lý dữ liệu cá nhân của ForCat.
        </div>
      </section>
    </>
  );
}
