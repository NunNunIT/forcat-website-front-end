//import libs
import Link from "next/link";
import Image from "next/image";

// import global components
import {
  CustomerCarousel,
  CustomerProductCard,
  CustomerSlider,
  CustomerCategories,
  Scrollup,
  ContactAside,
} from "@/components";
import { CustomerHeader, CustomerFooter } from "@/partials";

// use css
import "./page.css";

export default function Home() {
  return (
    <>
      <CustomerHeader></CustomerHeader>
      <main className="content-container">
        <CustomerSlider></CustomerSlider>
        <CustomerCategories></CustomerCategories>
        <CustomerCarousel></CustomerCarousel>
        <section className="tip-products-wrapper new-products">
          <div className="tip-products">
            <h1 className="tip-products__label">
              <Link href="#" className="tip-products__title">
                Hàng mới về
              </Link>
              <span className="tip-products__title-after"></span>
            </h1>
            <div className="tip-products__content">
              <CustomerProductCard></CustomerProductCard>
              <CustomerProductCard></CustomerProductCard>
              <CustomerProductCard></CustomerProductCard>
              <CustomerProductCard></CustomerProductCard>
              <CustomerProductCard></CustomerProductCard>
              <CustomerProductCard></CustomerProductCard>
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
            <div className="tip-products__content">
              <CustomerProductCard></CustomerProductCard>
              <CustomerProductCard></CustomerProductCard>
              <CustomerProductCard></CustomerProductCard>
              <CustomerProductCard></CustomerProductCard>
              <CustomerProductCard></CustomerProductCard>
            </div>
          </div>
        </section>
      </main>
      <ContactAside></ContactAside>
      <Scrollup></Scrollup>
      <CustomerFooter></CustomerFooter>
    </>
  );
}
