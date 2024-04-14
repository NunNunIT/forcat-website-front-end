//import libs
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// import global components
import { CustomerCarousel } from "@/components";
import { CustomerProductCard } from "@/components";
import { CustomerSlider } from "@/components";
import { CustomerCategories } from "@/components";
import { CustomerHeader, CustomerFooter } from "@/partials";
import { BACKEND_URL} from "@/utils/commonConst";

// use css
import "./page.css";

const fetchNewestProducts = async () => {
  try {
    const response = await fetch(
      `${BACKEND_URL}/productList/getNewestProducts`,
      {
        next: { revalidate: 60 },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch newest products");
    }
    const data = await response.json();
    return data.data; // Return the entire data object
  } catch (error) {
    console.error("Error fetching newest products:", error);
    throw error;
  }
};

export default async function Home() {
  let newestProducts = await fetchNewestProducts();
  return (
    <>
      <CustomerHeader></CustomerHeader>
      <CustomerSlider></CustomerSlider>
      <main className="main-container">
        <div className="content-container">
          <CustomerCategories></CustomerCategories>
        </div>
        <div className="wrapper color">
          <div className="content-container">
            <CustomerCarousel></CustomerCarousel>
          </div>
        </div>

        <section className="content-container tip-products-wrapper">
          <div className="tip-products">
            <h1 className="tip-products__label">
              <Link href="/search-result" className="tip-products__title">
                Hàng mới về
              </Link>
              <span className="tip-products__title-after"></span>
            </h1>
            <div className="tip-products__content">
              {newestProducts &&
                newestProducts.length &&
                newestProducts.map((product) => (
                  <>
                    <CustomerProductCard
                      key={product.product_id}
                      product={product}
                    />
                  </>
                ))}
            </div>
          </div>
          <div className="banner-wrapper">
            <Link className="banner-img--half" href="#">
              <Image
                className="banner-img"
                fill={true}
                src="/imgs/home-page/banner-small-4.png"
                alt="banner-info"
              />
            </Link>
            <Link className="banner-img--half" href="#">
              <Image
                className="banner-img"
                fill={true}
                src="/imgs/home-page/banner-small-1.png"
                alt="banner-info"
              />
            </Link>
          </div>
          <div className="banner-wrapper">
            <Link className="banner-img--half" href="#">
              <Image
                className="banner-img"
                fill={true}
                src="/imgs/home-page/banner-small-3.webp"
                alt="banner-info"
              />
            </Link>
            <Link className="banner-img--half" href="#">
              <Image
                className="banner-img"
                fill={true}
                src="/imgs/home-page/banner-small-2.png"
                alt="banner-info"
              />
            </Link>
          </div>
          <div className="banner-wrapper">
            <Link className="banner-img--full" href="#">
              <Image
                className="banner-img"
                fill={true}
                src="/imgs/home-page/banner-1.png"
                alt="banner-info"
              />
            </Link>
          </div>

          <div className="tip-products">
            <h1 className="tip-products__label">
              <Link href="#" className="tip-products__title">
                Khuyến mãi hấp dẫn
              </Link>
              <span className="tip-products__title-after"></span>
            </h1>
            <div className="tip-products__content"></div>
          </div>
        </section>
      </main>
      <CustomerFooter></CustomerFooter>
    </>
  );
}
