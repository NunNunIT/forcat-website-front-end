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

// import interfaces
import { IBuyForm } from "./interfaces";

// fetch data
async function getProduct(slug) {
  const res = await fetch(
    `http://127.0.0.1:3001/api/product/${slug[0]}/${slug[1]}`
  );

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error("Failed to fetch data");
  // }

  return res.json();
}

export default async function ProductPage({
  params,
}: {
  params: { product: string };
}) {
  const slug = params.product;
  const res = await getProduct(slug);
  const productInfo: IBuyForm = {
    product_name: res.data?.product.product_name,
    product_slug: res.data?.product.product_slug,
    product_avg_rating: res.data?.product.product_avg_rating,
    product_variants: res.data?.product.product_variants,
  };
  const productImgs = res.data.product?.product_imgs;
  const productDetails = res.data.product?.product_detail;
  const productDescription = res.data.product?.product_description;
  const productReviews = res.data.product?.recent_reviews;

  return (
    <main className="product">
      <div className="product-content">
        <div className="product-content--left product-content-left">
          <ProductSlider
            productImgs={productImgs}
            mobileOnly="mobile-hidden"
            desktopOnly="desktop-hidden"></ProductSlider>
          <ProductBuyForm
            productInfo={productInfo}
            currentVariantSlug={slug[1]}
            mobileOnly="desktop-hidden"></ProductBuyForm>
          <ProductSpecification
            productDetails={productDetails}></ProductSpecification>
          <ProductDescription
            productDescription={productDescription}
            mobileOnly="desktop-hidden"></ProductDescription>
        </div>

        <div className="product-content--right product-content-right mobile-hidden">
          <div className="decoration__bow">
            <Image
              src="/imgs/product-page/bow.png"
              alt="This is a bow"
              fill={true}
            />
          </div>
          <ProductBuyForm
            productInfo={productInfo}
            currentVariantSlug={slug[1]}></ProductBuyForm>
          <ProductDescription
            productDescription={productDescription}></ProductDescription>
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
            {productReviews.map((review, index) => {
              return <ProductReview review={review}></ProductReview>;
            })}
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
