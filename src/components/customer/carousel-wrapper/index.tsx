"use client";

// import libs
import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import components
import { CustomerCarouselCard, LoadingSpinner } from "@/components";

// import css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./carousel.module.css";

const cx = classNames.bind(styles);


export default function CustomerCarouselSlider({ productList }) {
  const [products, setProducts] = useState([]); // State to store products
  const [loading, setLoading] = useState(true); // State to track loading status

  // Fetch or receive product data using useEffect
  useEffect(() => {
    // Logic to fetch or receive product data from an API or external source
    // Replace with your actual data fetching or receiving logic
    const fetchedProducts = productList; // Assuming productList is the data

    setProducts(fetchedProducts);
    setLoading(false);
  }, [productList]); 

  return (
    <>
      <div className={cx("wrapper-carousel")}>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <Swiper
            autoplay={{ delay: 2500 }}
            breakpoints={{
              200: { slidesPerView: 2, spaceBetween: 5 },
              300: { slidesPerView: 2, spaceBetween: 5 },
              400: { slidesPerView: 2, spaceBetween: 5 },
              640: { slidesPerView: 3, spaceBetween: 5 },
              768: { slidesPerView: 3, spaceBetween: 10 },
              821: { slidesPerView: 3, spaceBetween: 10 },
              868: { slidesPerView: 4, spaceBetween: 10 },
              1024: { slidesPerView: 4, spaceBetween: 10 },
            }}
            centeredSlides={false}
            navigation={true}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}>
            {products &&
              (products ?? []).map((product) => (
                <SwiperSlide key={product.product_id_hashed}>
                  <CustomerCarouselCard product={product} />
                </SwiperSlide>
              ))}
          </Swiper>
        )}
      </div>
    </>
  );
}
