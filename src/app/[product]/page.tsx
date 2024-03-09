// import libs
import Link from "next/link";

// import components
import { CustomerSmallRating } from "@/components";

// import css
import "./page.css";

export default function ProductPage({
  params,
}: {
  params: { product: string };
}) {
  return (
    <main className="product">
      <div className="product-content">
        <div className="product-content--left product-content-left">
          <section className="product-content-left__slider slider">
            <img
              className="slider__main-image"
              src="/imgs/test.png"
              alt="Slider main image"
            />
            <div className="slider__thumbnails">
              <img
                className="slider__thumbnail"
                src="/imgs/test.png"
                alt="Slider main image"
              />
              <img
                className="slider__thumbnail"
                src="/imgs/test.png"
                alt="Slider main image"
              />
              <img
                className="slider__thumbnail"
                src="/imgs/test.png"
                alt="Slider main image"
              />
              <img
                className="slider__thumbnail"
                src="/imgs/test.png"
                alt="Slider main image"
              />
              <img
                className="slider__thumbnail"
                src="/imgs/test.png"
                alt="Slider main image"
              />
              <img
                className="slider__thumbnail"
                src="/imgs/test.png"
                alt="Slider main image"
              />
              <img
                className="slider__thumbnail"
                src="/imgs/test.png"
                alt="Slider main image"
              />
              <img
                className="slider__thumbnail"
                src="/imgs/test.png"
                alt="Slider main image"
              />
            </div>
          </section>
          <section className="product-content-left__specifications specifications">
            <h4 className="specifications__title">Thông số kỹ thuật</h4>
            <div className="specifications__table">
              <div className="specifications__item">
                <div className="specifications__type">Type</div>
                <div className="specifications__info">Info</div>
              </div>
              <div className="specifications__item">
                <div className="specifications__type">Type</div>
                <div className="specifications__info">Info</div>
              </div>
              <div className="specifications__item">
                <div className="specifications__type">Type</div>
                <div className="specifications__info">Info</div>
              </div>
              <div className="specifications__item">
                <div className="specifications__type">Type</div>
                <div className="specifications__info">Info</div>
              </div>
              <div className="specifications__item">
                <div className="specifications__type">Type</div>
                <div className="specifications__info">Info</div>
              </div>
              <div className="specifications__item">
                <div className="specifications__type">Type</div>
                <div className="specifications__info">Info</div>
              </div>
              <div className="specifications__item">
                <div className="specifications__type">Type</div>
                <div className="specifications__info">Info</div>
              </div>
              <div className="specifications__item">
                <div className="specifications__type">Type</div>
                <div className="specifications__info">Info</div>
              </div>
            </div>
            <div className="specifications__see-more">
              <div className="specifications__see-more-div">
                <p>Xem thêm</p>
                <span className="material-icons-round">arrow_forward_ios</span>
              </div>
            </div>
          </section>
        </div>

        <div className="product-content--right product-content-right">
          <section className="product-contain-right__buy-info buy-info">
            <h1 className="buy-info__product-name">
              Điện thoại Xiaomi Redmi Note 12 (8GB/128GB)
            </h1>
            <CustomerSmallRating></CustomerSmallRating>
            <div className="buy-info__unit-price-div">
              <p className="buy-info__unit-price">3.000.000đ</p>
              <p className="buy-info__discount-amount">-20%</p>
            </div>
            <div className="buy-info__variants variants">
              <h4 className="variants__title">Loại sản phẩm</h4>
              <div className="variants__group">
                <Link className="variants__item variant-item" href="#">
                  <img
                    className="variant-item__image"
                    src="/imgs/test.png"
                    alt="Variant item"
                  />
                  <span className="variant-item__name">7 màu</span>
                </Link>
                <Link className="variants__item variant-item" href="#">
                  <img
                    className="variant-item__image"
                    src="/imgs/test.png"
                    alt="Variant item"
                  />
                  <span className="variant-item__name">7 màu</span>
                </Link>
                <Link className="variants__item variant-item" href="#">
                  <img
                    className="variant-item__image"
                    src="/imgs/test.png"
                    alt="Variant item"
                  />
                  <span className="variant-item__name">7 màu</span>
                </Link>
                <Link className="variants__item variant-item" href="#">
                  <img
                    className="variant-item__image"
                    src="/imgs/test.png"
                    alt="Variant item"
                  />
                  <span className="variant-item__name">7 màu cầu vồng </span>
                </Link>
                <Link className="variants__item variant-item" href="#">
                  <img
                    className="variant-item__image"
                    src="/imgs/test.png"
                    alt="Variant item"
                  />
                  <span className="variant-item__name">7 màu</span>
                </Link>
              </div>
            </div>
            <div className="buy-info__quantity">
              <h4>Số lượng</h4>
              <div className="buy-info__quantity-input-group quantity-input-group">
                <button
                  className="quantity-input-group__btn-remove btn-quantity"
                  type="button">
                  <span className="material-icons-round">remove</span>
                </button>
                <input
                  className="quantity-input-group__input input-quantity"
                  type="text"
                  value="1"
                />
                <button
                  className="quantity-input-group__btn-add btn-quantity"
                  type="button">
                  <span className="material-icons-round">add</span>
                </button>
                <p className="buy-info__is-stock">789 sản phẩm có thể mua</p>
              </div>
            </div>
            <div className="buy-info__total-price-div">
              <h4>Tạm tính</h4>
              <p className="buy-info__total-price">3.000.000đ</p>
            </div>
            <div className="buy-info__buy-btns buy-btns">
              <button
                className="buy-btns__add-cart add-cart-btn buy-btn"
                type="button">
                <span className="material-icons-round fill buy-btn-icon">
                  add_shopping_cart
                </span>
                <span className="buy-btn-text">Thêm vào giỏ hàng</span>
              </button>
              <button
                className="buy-btns__buy-now buy-now-btn buy-btn"
                type="button">
                <span className="material-icons-round fill buy-btn-icon">
                  savings
                </span>
                <span className="buy-btn-text">Mua ngay</span>
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
