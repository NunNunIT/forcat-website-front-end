//import libs
import React from "react";
import Link from "next/link";
import Image from "next/image";

// import Carousel from 'react-bootstrap/Carousel';

// import global components
// import { CustomerCarousel } from "@/components";
// import { CustomerSlider } from "@/components";
// import { CustomerCategories } from "@/components";
import { CustomerProductCard } from "@/components";
import { CustomerHeader, CustomerFooter } from "@/partials";
import { CustomerCarousel } from "@/components";

// use css
import "./page.css";

export default function HomePage() {
  return (
    <>
      <CustomerHeader />
      <main className="content-container">
        {/* <CustomerSlider></CustomerSlider>
      <CustomerCategories></CustomerCategories> */}
        {/* <CustomerCarousel></CustomerCarousel> */}
        <section className="tip-products-wrapper new-products">
          {/* <div className="tip-products__img">
          <img src="/imgs/banner.png" alt="banner-new" />
        </div> */}
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
                src="/imgs/home-page/banner-small-4.webp"
                alt="banner-info"
              />
            </Link>
            <Link
              className="banner-img--half"
              href="https://www.facebook.com/forcat.official"
              target="_blank"
            >
              <Image
                className="banner-img"
                fill={true}
                src="/imgs/home-page/banner-small-1.webp"
                alt="banner-info"
              />
            </Link>
          </div>
          <div className="banner-wrapper">
            <Link
              className="banner-img--half"
              href="https://www.facebook.com/lawsforpawsvietnam"
              target="_blank"
            >
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
                src="/imgs/home-page/banner-small-2.webp"
                alt="banner-info"
              />
            </Link>
          </div>
          <div className="banner-wrapper">
            <Link className="banner-img--full" href="#">
              <Image
                className="banner-img"
                fill={true}
                src="/imgs/home-page/banner-1.webp"
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
      <CustomerFooter />
    </>
  );
}
