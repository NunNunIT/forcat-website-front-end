"use client";

// import libs
import Image from "next/image";
import { useState } from "react";

// import components
import { CustomerQuantityInputGroup } from "@/components";

// import css
import "./page.css";

export default function CartPage() {
  const [quantityValue, setQuantityValue] = useState(1);

  const handleQuantityChange = (changedValue: number) => {
    setQuantityValue(changedValue);
  };

  return (
    <>
      <section className="cart-product-group">
        <div className="cart-product-group__title cart-item title">
          <div className="title__item title__check-all ">
            <input type="checkbox" className="cart-checkbox" />
            <h4>
              Sản phẩm (<span className="checked-num">100</span>)
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
            <input type="checkbox" className="cart-checkbox" />
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
              10.000.000
            </div>
            <div className="cart-item__unit-price-before-discount">
              <del>10.000.000</del>
            </div>
          </div>
          <div className="cart-item__quantity cart-item-col">
            <CustomerQuantityInputGroup
              initValue={{
                defaultValue: 1,
                minValue: 1,
                maxValue: 100,
                onValueChange: handleQuantityChange,
              }}></CustomerQuantityInputGroup>
          </div>
          <div className="cart-item__price cart-item-col mobile-hidden">
            10.000.000
          </div>
          <div className="cart-item__remove-btn cart-item-col mobile-hidden">
            <span className="material-icons-round">delete</span>
          </div>
        </div>
        <div className="cart-item">
          <div className="cart-item__info cart-item-col">
            <input type="checkbox" className="cart-checkbox" />
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
              10.000.000
            </div>
            <div className="cart-item__unit-price-before-discount">
              <del>10.000.000</del>
            </div>
          </div>
          <div className="cart-item__quantity cart-item-col">
            <CustomerQuantityInputGroup
              initValue={{
                defaultValue: 1,
                minValue: 1,
                maxValue: 100,
                onValueChange: handleQuantityChange,
              }}></CustomerQuantityInputGroup>
          </div>
          <div className="cart-item__price cart-item-col mobile-hidden">
            10.000.000
          </div>
          <div className="cart-item__remove-btn cart-item-col mobile-hidden">
            <span className="material-icons-round">delete</span>
          </div>
        </div>
        <div className="cart-item">
          <div className="cart-item__info cart-item-col">
            <input type="checkbox" className="cart-checkbox" />
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
              10.000.000
            </div>
            <div className="cart-item__unit-price-before-discount">
              <del>10.000.000</del>
            </div>
          </div>
          <div className="cart-item__quantity cart-item-col">
            <CustomerQuantityInputGroup
              initValue={{
                defaultValue: 1,
                minValue: 1,
                maxValue: 100,
                onValueChange: handleQuantityChange,
              }}></CustomerQuantityInputGroup>
          </div>
          <div className="cart-item__price cart-item-col mobile-hidden">
            10.000.000
          </div>
          <div className="cart-item__remove-btn cart-item-col mobile-hidden">
            <span className="material-icons-round">delete</span>
          </div>
        </div>
        <div className="cart-item">
          <div className="cart-item__info cart-item-col">
            <input type="checkbox" className="cart-checkbox" />
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
              10.000.000
            </div>
            <div className="cart-item__unit-price-before-discount">
              <del>10.000.000</del>
            </div>
          </div>
          <div className="cart-item__quantity cart-item-col">
            <CustomerQuantityInputGroup
              initValue={{
                defaultValue: 1,
                minValue: 1,
                maxValue: 100,
                onValueChange: handleQuantityChange,
              }}></CustomerQuantityInputGroup>
          </div>
          <div className="cart-item__price cart-item-col mobile-hidden">
            10.000.000
          </div>
          <div className="cart-item__remove-btn cart-item-col mobile-hidden">
            <span className="material-icons-round">delete</span>
          </div>
        </div>
        <div className="cart-item">
          <div className="cart-item__info cart-item-col">
            <input type="checkbox" className="cart-checkbox" />
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
              10.000.000
            </div>
            <div className="cart-item__unit-price-before-discount">
              <del>10.000.000</del>
            </div>
          </div>
          <div className="cart-item__quantity cart-item-col">
            <CustomerQuantityInputGroup
              initValue={{
                defaultValue: 1,
                minValue: 1,
                maxValue: 100,
                onValueChange: handleQuantityChange,
              }}></CustomerQuantityInputGroup>
          </div>
          <div className="cart-item__price cart-item-col mobile-hidden">
            10.000.000
          </div>
          <div className="cart-item__remove-btn cart-item-col mobile-hidden">
            <span className="material-icons-round">delete</span>
          </div>
        </div>
        <div className="cart-item">
          <div className="cart-item__info cart-item-col">
            <input type="checkbox" className="cart-checkbox" />
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
              10.000.000
            </div>
            <div className="cart-item__unit-price-before-discount">
              <del>10.000.000</del>
            </div>
          </div>
          <div className="cart-item__quantity cart-item-col">
            <CustomerQuantityInputGroup
              initValue={{
                defaultValue: 1,
                minValue: 1,
                maxValue: 100,
                onValueChange: handleQuantityChange,
              }}></CustomerQuantityInputGroup>
          </div>
          <div className="cart-item__price cart-item-col mobile-hidden">
            10.000.000
          </div>
          <div className="cart-item__remove-btn cart-item-col mobile-hidden">
            <span className="material-icons-round">delete</span>
          </div>
        </div>
        <div className="cart-item">
          <div className="cart-item__info cart-item-col">
            <input type="checkbox" className="cart-checkbox" />
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
              10.000.000
            </div>
            <div className="cart-item__unit-price-before-discount">
              <del>10.000.000</del>
            </div>
          </div>
          <div className="cart-item__quantity cart-item-col">
            <CustomerQuantityInputGroup
              initValue={{
                defaultValue: 1,
                minValue: 1,
                maxValue: 100,
                onValueChange: handleQuantityChange,
              }}></CustomerQuantityInputGroup>
          </div>
          <div className="cart-item__price cart-item-col mobile-hidden">
            10.000.000
          </div>
          <div className="cart-item__remove-btn cart-item-col mobile-hidden">
            <span className="material-icons-round">delete</span>
          </div>
        </div>
        <div className="cart-item">
          <div className="cart-item__info cart-item-col">
            <input type="checkbox" className="cart-checkbox" />
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
              10.000.000
            </div>
            <div className="cart-item__unit-price-before-discount">
              <del>10.000.000</del>
            </div>
          </div>
          <div className="cart-item__quantity cart-item-col">
            <CustomerQuantityInputGroup
              initValue={{
                defaultValue: 1,
                minValue: 1,
                maxValue: 100,
                onValueChange: handleQuantityChange,
              }}></CustomerQuantityInputGroup>
          </div>
          <div className="cart-item__price cart-item-col mobile-hidden">
            10.000.000
          </div>
          <div className="cart-item__remove-btn cart-item-col mobile-hidden">
            <span className="material-icons-round">delete</span>
          </div>
        </div>
        <div className="cart-item">
          <div className="cart-item__info cart-item-col">
            <input type="checkbox" className="cart-checkbox" />
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
              10.000.000
            </div>
            <div className="cart-item__unit-price-before-discount">
              <del>10.000.000</del>
            </div>
          </div>
          <div className="cart-item__quantity cart-item-col">
            <CustomerQuantityInputGroup
              initValue={{
                defaultValue: 1,
                minValue: 1,
                maxValue: 100,
                onValueChange: handleQuantityChange,
              }}></CustomerQuantityInputGroup>
          </div>
          <div className="cart-item__price cart-item-col mobile-hidden">
            10.000.000
          </div>
          <div className="cart-item__remove-btn cart-item-col mobile-hidden">
            <span className="material-icons-round">delete</span>
          </div>
        </div>
        <div className="cart-item">
          <div className="cart-item__info cart-item-col">
            <input type="checkbox" className="cart-checkbox" />
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
              10.000.000
            </div>
            <div className="cart-item__unit-price-before-discount">
              <del>10.000.000</del>
            </div>
          </div>
          <div className="cart-item__quantity cart-item-col">
            <CustomerQuantityInputGroup
              initValue={{
                defaultValue: 1,
                minValue: 1,
                maxValue: 100,
                onValueChange: handleQuantityChange,
              }}></CustomerQuantityInputGroup>
          </div>
          <div className="cart-item__price cart-item-col mobile-hidden">
            10.000.000
          </div>
          <div className="cart-item__remove-btn cart-item-col mobile-hidden">
            <span className="material-icons-round">delete</span>
          </div>
        </div>
      </section>

      <section className="cart-bill ipad-hidden">
        <div className="cart-bill-row">
          <div className="cart-bill-row__title">Tạm tính</div>
          <div className="cart-bill-row__content">100.000.000</div>
        </div>
        <div className="cart-bill-row">
          <div className="cart-bill-row__title">Giảm giá</div>
          <div className="cart-bill-row__content">100.000.000</div>
        </div>
        <div className="cart-bill-row cart-bill__line"></div>
        <div className="cart-bill-row cart-bill__total-price">
          <div className="cart-bill-row__title">Tổng tiền</div>
          <div className="cart-bill-row__content">100.000.000</div>
        </div>
        <div className="cart-bill-row cart-bill__btn">
          Mua hàng (<span className="checked-num">100</span>)
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
              Tất cả (<span className="checked-num">100</span>)
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
                  100.000.000
                </del>
              </div>
              <div className="pricing__price-after-discount pricing__text">
                100.000.000
              </div>
            </div>
            <div className="cart-footer-buy-group__buy-btn">
              Mua hàng{" "}
              <span className="mobile-hidden">
                (<span className="checked-num">100</span>)
              </span>
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
