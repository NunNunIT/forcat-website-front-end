// import libs
import type { Metadata, ResolvingMetadata } from "next";
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
import { CustomerCarouselSlider } from "@/components";

// import utils
import { BACKEND_URL } from "@/utils/commonConst";

// import interfaces
import { IBuyForm } from "./interfaces";

// import css
import "./page.css";

// fetch data
async function getProduct(slug, pid) {
  try {
    const res = await fetch(
      `${BACKEND_URL}/products/${encodeURIComponent(pid.replaceAll(" ", "+"))}`,
      {
        next: { revalidate: 60 },
      }
    );
    if (!res.ok || slug[2]) return notFound();

    return res.json();
  } catch {
    return notFound();
  }
}

// fetch data
async function getRelatedProducts(slug, pid) {
  try {
    const res = await fetch(
      `${BACKEND_URL}/products/getRecommend/${encodeURIComponent(
        pid.replaceAll(" ", "+")
      )}`,
      {
        next: { revalidate: 60 },
      }
    );
    // if (!res.ok || slug[2]) return notFound();
    const data = await res.json();
    return data.data;
  } catch {
    // return notFound();
  }
}

export async function generateMetadata(
  {
    params,
    searchParams,
  }: {
    params: { product: string };
    searchParams?: { [key: string]: string };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.product;
  const { pid } = searchParams;
  const res = await getProduct(slug, pid);

  return {
    title: res.data.product.product_name,
    description: res.data.product.product_short_description,
  };
}

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: { product: string };
  searchParams?: { [key: string]: string };
}) {
  const slug = params.product;
  const { pid } = searchParams;

  // console.log("test ldm", slug, encodeURIComponent(pid.replaceAll(" ", "+")));

  const res = await getProduct(slug, pid);
  const relatedProducts = await getRelatedProducts(slug, pid);
  // console.log("realated", relatedProducts);
  const productInfo: IBuyForm = {
    product_id: decodeURIComponent(res.data.product.product_id_hashed).replace(
      " ",
      "+"
    ),
    // product_id_hashed: res.data.product.product_id_hashed,s
    product_name: res.data.product.product_name,
    product_slug: res.data.product.product_slug,
    product_avg_rating: res.data.product.product_avg_rating,
    product_variants: res.data.product.product_variants,
  };

  const productImgs = res.data.product.product_imgs;
  const productDetails = res.data.product.product_detail;
  const productDescription = res.data.product.product_description;
  const productReviews = res.data.product.recent_reviews;
  const productId = res.data.product._id;
  const reviewOverview = {
    total_review: res.data.product.review_count.reduce(
      (total, current) => total + current,
      0
    ),
    avg_rating: res.data.product.product_avg_rating,
    review_count: res.data.product.review_count,
    recent_images: res.data.product.recent_images,
    recent_videos: res.data.product.recent_videos,
  };

  return (
    <main className="product">
      <div className="product-content">
        <div className="product-content--left product-content-left">
          <ProductSlider
            productImgs={productImgs}
            desktopOnly="desktop-hidden tablet-display"
            tabletOnly="tablet-hidden"></ProductSlider>
          <ProductBuyForm
            pid={pid}
            productInfo={productInfo}
            currentVariantSlug={slug[1] ?? ""}
            desktopOnly="desktop-hidden"
            mobileOnly="mobile-display"></ProductBuyForm>
          <ProductSpecification
            productDetails={productDetails}></ProductSpecification>
          <ProductDescription
            productDescription={productDescription}
            desktopOnly="desktop-hidden mobile-display"></ProductDescription>
        </div>

        <div className="product-content--right product-content-right mobile-hidden">
          <div className="decoration-div">
            <Image
              className="decoration-img"
              src={`/imgs/product-page/decoration-${Math.floor(
                Math.random() * 5
              )}.webp`}
              alt="Trang trí"
              fill={true}
            />
          </div>
          <ProductBuyForm
            pid={pid}
            productInfo={productInfo}
            currentVariantSlug={slug[1] ?? ""}></ProductBuyForm>
          <ProductDescription
            productDescription={productDescription}></ProductDescription>
        </div>
      </div>
      <ProductReview
        reviewOverview={reviewOverview}
        productReviews={productReviews}
        productId={productId}></ProductReview>
      <div className="related-container">
        <h2 className="tip-products__label">Xem các sản phẩm gợi ý khác</h2>
        <CustomerCarouselSlider productList={relatedProducts} />
      </div>
    </main>
  );
}
