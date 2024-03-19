//import libs
import React from "react";
import Link from "next/link";

// import Carousel from 'react-bootstrap/Carousel';

// import global components
import { CustomerCarousel } from "@/components";
// import { CustomerSlider } from "@/components";
// import { CustomerCategories } from "@/components";
import { CustomerProductCard } from "@/components";
import { CustomerHeader, CustomerFooter } from "@/partials";

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
          <div className="tip-products__img">
            <img src="/imgs/banner.png" alt="banner-new" />
          </div>
          <div className="tip-products">
            <div className="tip-products__label">
              <h2 className="tip-products__title">Hàng mới về</h2>
              <div className="tip-products__more">
                <Link className="tip-products__see-all-btn" href="#">
                  Xem tất cả
                </Link>
                <span className="material-symbols-outlined">
                  {" "}
                  chevron_right{" "}
                </span>
              </div>
            </div>
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
