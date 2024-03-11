// import libs
import Link from "next/link";

// import components
import { CustomerProductSlider, CustomerRating } from "@/components";
import { ProductBuyForm } from "./partials";

// import css
import "./page.css";

export default function ProductPage() {
  return (
    <main className="product">
      <div className="product-content">
        <div className="product-content--left product-content-left">
          <CustomerProductSlider></CustomerProductSlider>
          <section className="product-content-left__specifications specifications">
            <div className="specifications__title">
              <h4>Thông số kỹ thuật</h4>
              <div className="specifications__see-more">
                <p>Xem thêm</p>
                <span className="material-icons-round">arrow_forward_ios</span>
              </div>
            </div>
            <div className="specifications__table">
              <div className="specifications__item">
                <div className="specifications__type">Dung lượng pin</div>
                <div className="specifications__info">5000 mAh</div>
              </div>
              <div className="specifications__item">
                <div className="specifications__type">Chip set</div>
                <div className="specifications__info">
                  Snapdragon 685 8 nhân
                </div>
              </div>
              <div className="specifications__item">
                <div className="specifications__type">
                  Loại/ Công nghệ màn hình
                </div>
                <div className="specifications__info">AMOLED</div>
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
          </section>
        </div>

        <div className="product-content--right product-content-right">
          <img
            className="decoration__bow"
            src="/imgs/bow.png"
            alt="This is a bow"
          />
          <ProductBuyForm></ProductBuyForm>
          <section className="product-content-right__product-description product-description">
            <h4 className="product-description__title">Mô tả sản phẩm</h4>
            <div className="product-description__content product-description-content">
              <h5 className="product-description-content__title">
                Vẻ ngoài thời trang cùng màu sắc mới mẻ
              </h5>
              <p className="product-description-content__paragraph">
                Redmi Note 12 được tạo hình bằng một vẻ ngoài quen thuộc với các
                cạnh cùng hai mặt vát phẳng tinh tế, những vị trí giao nhau giữa
                mặt lưng và bộ khung cũng sẽ được bo cong nhẹ để mang lại cảm
                giác cầm nắm thoải mái.
              </p>
              <img
                className="product-description-content__image"
                src="/imgs/test.png"
                alt="Anh san pham"
              />
              <p className="product-description-content__image-caption">
                Hình ảnh điện thoại redme
              </p>
              <h5 className="product-description-content__title">
                Vẻ ngoài thời trang cùng màu sắc mới mẻ
              </h5>
              <p className="product-description-content__paragraph">
                Redmi Note 12 được tạo hình bằng một vẻ ngoài quen thuộc với các
                cạnh cùng hai mặt vát phẳng tinh tế, những vị trí giao nhau giữa
                mặt lưng và bộ khung cũng sẽ được bo cong nhẹ để mang lại cảm
                giác cầm nắm thoải mái.
              </p>
              <h5 className="product-description-content__title">
                Vẻ ngoài thời trang cùng màu sắc mới mẻ
              </h5>
              <p className="product-description-content__paragraph">
                Redmi Note 12 được tạo hình bằng một vẻ ngoài quen thuộc với các
                cạnh cùng hai mặt vát phẳng tinh tế, những vị trí giao nhau giữa
                mặt lưng và bộ khung cũng sẽ được bo cong nhẹ để mang lại cảm
                giác cầm nắm thoải mái.
              </p>
              <h5 className="product-description-content__title">
                Vẻ ngoài thời trang cùng màu sắc mới mẻ
              </h5>
              <p className="product-description-content__paragraph">
                Redmi Note 12 được tạo hình bằng một vẻ ngoài quen thuộc với các
                cạnh cùng hai mặt vát phẳng tinh tế, những vị trí giao nhau giữa
                mặt lưng và bộ khung cũng sẽ được bo cong nhẹ để mang lại cảm
                giác cầm nắm thoải mái.
              </p>
            </div>
            <div className="product-description__see-more see-more-btn">
              <div className="see-more-btn__gradient"></div>
              <div className="see-more-btn__text">Xem thêm</div>
            </div>
          </section>
        </div>
      </div>

      <section className="product-review">
        <h4>Đánh giá từ khách hàng</h4>
        <div className="product-review__head">
          <div className="product-review__overview review-overview">
            <h5>Tổng quan</h5>
            <div className="review-overview__summary-info">
              <div className="review-overview__info">
                <span className="review-overview__average">4.8</span>
                <CustomerRating fontSize="48px"></CustomerRating>
              </div>
              <p className="review-overview__total">(Tất cả 1234 đánh giá)</p>
            </div>
            <div className="review-overview__detail review-overview-detail">
              <div className="review-overview-detail__row">
                <CustomerRating fontSize="24px"></CustomerRating>
                <div className="review-overview-detail__progress-div">
                  <div className="review-overview-detail__progress-bar"></div>
                </div>
                <span className="review-overview-detail__numbers">123</span>
              </div>
              <div className="review-overview-detail__row">
                <CustomerRating fontSize="24px"></CustomerRating>
                <div className="review-overview-detail__progress-div">
                  <div className="review-overview-detail__progress-bar"></div>
                </div>
                <span className="review-overview-detail__numbers">123</span>
              </div>
              <div className="review-overview-detail__row">
                <CustomerRating fontSize="24px"></CustomerRating>
                <div className="review-overview-detail__progress-div">
                  <div className="review-overview-detail__progress-bar"></div>
                </div>
                <span className="review-overview-detail__numbers">123</span>
              </div>
              <div className="review-overview-detail__row">
                <CustomerRating fontSize="24px"></CustomerRating>
                <div className="review-overview-detail__progress-div">
                  <div className="review-overview-detail__progress-bar"></div>
                </div>
                <span className="review-overview-detail__numbers">123</span>
              </div>
              <div className="review-overview-detail__row">
                <CustomerRating fontSize="24px"></CustomerRating>
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
                    <CustomerRating fontSize="24px"></CustomerRating>
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
                    <CustomerRating fontSize="24px"></CustomerRating>
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
                    <CustomerRating fontSize="24px"></CustomerRating>
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
