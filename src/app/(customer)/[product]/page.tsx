// import libs
import Image from "next/image";

// import partials
import {
  ProductSlider,
  ProductBuyForm,
  ProductDescription,
  ProductSpecification,
  ProductReviewHeader,
} from "./partials";

// import components
import { ProductReview } from "./components";

// import css
import "./page.css";

export default function ProductPage() {
  return (
    <main className="product">
      <div className="product-content">
        <div className="product-content--left product-content-left">
          <ProductSlider
            mobileOnly="mobile-hidden"
            desktopOnly="desktop-hidden"></ProductSlider>
          <ProductBuyForm mobileOnly="desktop-hidden"></ProductBuyForm>
          <ProductSpecification></ProductSpecification>
          <ProductDescription mobileOnly="desktop-hidden"></ProductDescription>
        </div>

        <div className="product-content--right product-content-right mobile-hidden">
          <div className="decoration__bow">
            <Image
              src="/imgs/product-page/bow.png"
              alt="This is a bow"
              fill={true}
            />
          </div>
          <ProductBuyForm></ProductBuyForm>
          <ProductDescription></ProductDescription>
        </div>
      </div>

      <section className="product-review">
        <h3>Đánh giá từ khách hàng</h3>
        <ProductReviewHeader></ProductReviewHeader>

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
            <ProductReview></ProductReview>
            <ProductReview></ProductReview>
            <ProductReview></ProductReview>
            <ProductReview></ProductReview>
            <ProductReview></ProductReview>
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
