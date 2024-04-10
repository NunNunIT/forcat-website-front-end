// import libs
import Image from "next/image";
import { notFound } from "next/navigation";

// import partials
import {
  ProductSlider,
  ProductBuyForm,
  ProductDescription,
  ProductSpecification,
  ProductReview,
} from "./partials";

// import utils
import { BACKEND_URL } from "@/utils/commonConst";

// import interfaces
import { IBuyForm } from "./interfaces";

// import css
import "./page.css";

// fetch data
async function getProduct(slug) {
  const res = await fetch(`${BACKEND_URL}/product/${slug[0]}`);

  if (!res.ok || slug[2]) return notFound();

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
    product_name: res.product.product_name,
    product_slug: res.product.product_slug,
    product_avg_rating: res.product.product_avg_rating,
    product_variants: res.product.product_variants,
  };

  const productImgs = res.product.product_imgs;
  const productDetails = res.product.product_detail;
  const productDescription = res.product.product_description;
  const productReviews = res.product.recent_reviews;
  const productId = res.product.product_id;

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
            currentVariantSlug={slug[1] ?? ""}
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
            currentVariantSlug={slug[1] ?? ""}></ProductBuyForm>
          <ProductDescription
            productDescription={productDescription}></ProductDescription>
        </div>
      </div>
      <ProductReview
        productReviews={productReviews}
        productId={productId}></ProductReview>
    </main>
  );
}
