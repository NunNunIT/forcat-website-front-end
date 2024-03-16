// import libs
import Image from "next/image";

// import components
import { CustomerProductSlider, CustomerRating } from "@/components";
import {
  ProductBuyForm,
  ProductDescription,
  ProductSpecification,
} from "./partials";

// import css
import "./page.css";

export default function ProductPage() {
  return (
    <main className="product">
      <div className="product-content">
        <div className="product-content--left product-content-left">
          <CustomerProductSlider></CustomerProductSlider>
          <ProductSpecification></ProductSpecification>
        </div>

        <div className="product-content--right product-content-right">
          <div className="decoration__bow">
            <Image src="/imgs/bow.png" alt="This is a bow" fill={true} />
          </div>
          <ProductBuyForm></ProductBuyForm>
          <ProductDescription></ProductDescription>
        </div>
      </div>

      <section className="product-review">
        <h3>Đánh giá từ khách hàng</h3>
        <div className="product-review__head">
          <div className="product-review__overview review-overview">
            <h5>Tổng quan</h5>
            <div className="review-overview__summary-info">
              <div className="review-overview__info">
                <span className="review-overview__average">4.8</span>
                <CustomerRating
                  initValue={{ fontSize: "24px", rating: 4 }}></CustomerRating>
              </div>
              <p className="review-overview__total">(Tất cả 1234 đánh giá)</p>
            </div>
            <div className="review-overview__detail review-overview-detail">
              <div className="review-overview-detail__row">
                <CustomerRating
                  initValue={{ fontSize: "24px", rating: 4 }}></CustomerRating>
                <div className="review-overview-detail__progress-div">
                  <div className="review-overview-detail__progress-bar"></div>
                </div>
                <span className="review-overview-detail__numbers">123</span>
              </div>
              <div className="review-overview-detail__row">
                <CustomerRating
                  initValue={{ fontSize: "24px", rating: 4 }}></CustomerRating>
                <div className="review-overview-detail__progress-div">
                  <div className="review-overview-detail__progress-bar"></div>
                </div>
                <span className="review-overview-detail__numbers">123</span>
              </div>
              <div className="review-overview-detail__row">
                <CustomerRating
                  initValue={{ fontSize: "24px", rating: 4 }}></CustomerRating>
                <div className="review-overview-detail__progress-div">
                  <div className="review-overview-detail__progress-bar"></div>
                </div>
                <span className="review-overview-detail__numbers">123</span>
              </div>
              <div className="review-overview-detail__row">
                <CustomerRating
                  initValue={{ fontSize: "24px", rating: 4 }}></CustomerRating>
                <div className="review-overview-detail__progress-div">
                  <div className="review-overview-detail__progress-bar"></div>
                </div>
                <span className="review-overview-detail__numbers">123</span>
              </div>
              <div className="review-overview-detail__row">
                <CustomerRating
                  initValue={{ fontSize: "24px", rating: 4 }}></CustomerRating>
                <div className="review-overview-detail__progress-div">
                  <div className="review-overview-detail__progress-bar"></div>
                </div>
                <span className="review-overview-detail__numbers">123</span>
              </div>
            </div>
          </div>
          <div className="product-review__image-overview image-overview">
            <h5>Tất cả hình ảnh (100)</h5>
            <div className="image-overview__container">
              <div className="image-overview__item">
                <img
                  className="image-overview__image"
                  src="/imgs/test.png"
                  alt="Review image"
                />
              </div>
              <div className="image-overview__item">
                <img
                  className="image-overview__image"
                  src="/imgs/test.png"
                  alt="Review image"
                />
              </div>
              <div className="image-overview__item">
                <img
                  className="image-overview__image"
                  src="/imgs/test.png"
                  alt="Review image"
                />
              </div>
              <div className="image-overview__item">
                <img
                  className="image-overview__image"
                  src="/imgs/test.png"
                  alt="Review image"
                />
              </div>
              <div className="image-overview__item">
                <img
                  className="image-overview__image"
                  src="/imgs/test.png"
                  alt="Review image"
                />
              </div>
              <div className="image-overview__item">
                <img
                  className="image-overview__image"
                  src="/imgs/test.png"
                  alt="Review image"
                />
              </div>
              <div className="image-overview__item">
                <img
                  className="image-overview__image"
                  src="/imgs/test.png"
                  alt="Review image"
                />
              </div>
              <div className="image-overview__item">
                <img
                  className="image-overview__image"
                  src="/imgs/test.png"
                  alt="Review image"
                />
              </div>
              <div className="image-overview__item">
                <img
                  className="image-overview__image"
                  src="/imgs/test.png"
                  alt="Review image"
                />
              </div>
              <div className="image-overview__item">
                <div className="image-overview__gradient">+100</div>
                <img
                  className="image-overview__image"
                  src="/imgs/test.png"
                  alt="Review image"
                />
              </div>
            </div>
            <h5>Tất cả video (100)</h5>
            <div className="video-overview__container">
              <div className="video-overview__item">
                <video className="video-overview__video" controls>
                  <source src="/vids/test.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="video-overview__item">
                <video className="video-overview__video" controls>
                  <source src="/vids/test.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="video-overview__item">
                <video className="video-overview__video" controls>
                  <source src="/vids/test.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="video-overview__item">
                <video className="video-overview__video" controls>
                  <source src="/vids/test.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="video-overview__item">
                <div className="video-overview__gradient">+100</div>
                <video className="video-overview__video" controls>
                  <source src="/vids/test.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>

        <div className="product-review__filter review-filter">
          <h5>Lọc đánh giá theo</h5>
          <div className="review-filter__group">
            <div className="review-filter__item">Mới nhất</div>
            <div className="review-filter__item">Có hình ảnh</div>
            <div className="review-filter__item">Có video</div>
            <div className="review-filter__item">5 sao</div>
            <div className="review-filter__item">4 sao</div>
            <div className="review-filter__item">3 sao</div>
            <div className="review-filter__item">2 sao</div>
            <div className="review-filter__item">1 sao</div>
          </div>
        </div>

        <div className="product-review__all-reviews reviews">
          <h5>Tất cả đánh giá</h5>
          <div className="reviews__group">
            <div className="reviews__item review-item">
              <div className="review-item__info">
                <img
                  className="review-item__avatar"
                  src="/imgs/test.png"
                  alt="Avatar nguoi dung"
                />
                <div className="review-item__info-div">
                  <p className="review-item__user-name">Nam Tử Thiên</p>
                  <div className="review-item__rating">
                    <span className="review-item__rating-number">4/5</span>
                    <CustomerRating
                      initValue={{
                        fontSize: "24px",
                        rating: 4,
                      }}></CustomerRating>
                  </div>
                  <div className="review-item__variant">Phân loại: 7 màu</div>
                </div>
              </div>
              <div className="review-item__content">
                <p className="review-item__date">
                  Đã đánh giá và ngày 12-12-2022
                </p>
                <p className="review-item__text">
                  Sản phẩm tuyệt vời, 100 điểm, lấp la lấp lánh, blink, blink
                </p>
                <div className="review-item__image-group">
                  <img
                    className="review-item__image"
                    src="/imgs/test.png"
                    alt="Anh san pham"
                  />
                  <img
                    className="review-item__image"
                    src="/imgs/test.png"
                    alt="Anh san pham"
                  />
                  <img
                    className="review-item__image"
                    src="/imgs/test.png"
                    alt="Anh san pham"
                  />
                  <img
                    className="review-item__image"
                    src="/imgs/test.png"
                    alt="Anh san pham"
                  />
                  <img
                    className="review-item__image"
                    src="/imgs/test.png"
                    alt="Anh san pham"
                  />
                  <img
                    className="review-item__image"
                    src="/imgs/test.png"
                    alt="Anh san pham"
                  />
                  <img
                    className="review-item__image"
                    src="/imgs/test.png"
                    alt="Anh san pham"
                  />
                </div>
              </div>
            </div>
            <div className="reviews__item review-item">
              <div className="review-item__info">
                <img
                  className="review-item__avatar"
                  src="/imgs/test.png"
                  alt="Avatar nguoi dung"
                />
                <div className="review-item__info-div">
                  <p className="review-item__user-name">Nam Tử Thiên</p>
                  <div className="review-item__rating">
                    <span className="review-item__rating-number">4/5</span>
                    <CustomerRating
                      initValue={{
                        fontSize: "24px",
                        rating: 4,
                      }}></CustomerRating>
                  </div>
                  <div className="review-item__variant">Phân loại: 7 màu</div>
                </div>
              </div>
              <div className="review-item__content">
                <p className="review-item__date">
                  Đã đánh giá và ngày 12-12-2022
                </p>
                <p className="review-item__text">
                  Sản phẩm tuyệt vời, 100 điểm, lấp la lấp lánh, blink, blink
                </p>
                <div className="review-item__image-group">
                  <img
                    className="review-item__image"
                    src="/imgs/test.png"
                    alt="Anh san pham"
                  />
                  <img
                    className="review-item__image"
                    src="/imgs/test.png"
                    alt="Anh san pham"
                  />
                  <img
                    className="review-item__image"
                    src="/imgs/test.png"
                    alt="Anh san pham"
                  />
                  <img
                    className="review-item__image"
                    src="/imgs/test.png"
                    alt="Anh san pham"
                  />
                  <img
                    className="review-item__image"
                    src="/imgs/test.png"
                    alt="Anh san pham"
                  />
                  <img
                    className="review-item__image"
                    src="/imgs/test.png"
                    alt="Anh san pham"
                  />
                  <img
                    className="review-item__image"
                    src="/imgs/test.png"
                    alt="Anh san pham"
                  />
                </div>
              </div>
            </div>
            <div className="reviews__item review-item">
              <div className="review-item__info">
                <img
                  className="review-item__avatar"
                  src="/imgs/test.png"
                  alt="Avatar nguoi dung"
                />
                <div className="review-item__info-div">
                  <p className="review-item__user-name">Nam Tử Thiên</p>
                  <div className="review-item__rating">
                    <span className="review-item__rating-number">4/5</span>
                    <CustomerRating
                      initValue={{
                        fontSize: "24px",
                        rating: 4,
                      }}></CustomerRating>
                  </div>
                  <div className="review-item__variant">Phân loại: 7 màu</div>
                </div>
              </div>
              <div className="review-item__content">
                <p className="review-item__date">
                  Đã đánh giá và ngày 12-12-2022
                </p>
                <p className="review-item__text">
                  Sản phẩm tuyệt vời, 100 điểm, lấp la lấp lánh, blink, blink
                </p>
                <div className="review-item__image-group">
                  <img
                    className="review-item__image"
                    src="/imgs/test.png"
                    alt="Anh san pham"
                  />
                  <img
                    className="review-item__image"
                    src="/imgs/test.png"
                    alt="Anh san pham"
                  />
                  <img
                    className="review-item__image"
                    src="/imgs/test.png"
                    alt="Anh san pham"
                  />
                  <img
                    className="review-item__image"
                    src="/imgs/test.png"
                    alt="Anh san pham"
                  />
                  <img
                    className="review-item__image"
                    src="/imgs/test.png"
                    alt="Anh san pham"
                  />
                  <img
                    className="review-item__image"
                    src="/imgs/test.png"
                    alt="Anh san pham"
                  />
                  <img
                    className="review-item__image"
                    src="/imgs/test.png"
                    alt="Anh san pham"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="reviews__pagination-div">
            <div className="reviews__pagination pagination">
              <div className="pagination__btn">
                <span className="material-icons-round pagination__icon">
                  arrow_back_ios
                </span>
              </div>
              <div className="pagination__btn">1</div>
              <div className="pagination__btn">2</div>
              <div className="pagination__btn pagination__btn-disabled">
                ...
              </div>
              <div className="pagination__btn">3</div>
              <div className="pagination__btn">
                <span className="material-icons-round pagination__icon">
                  arrow_forward_ios
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
