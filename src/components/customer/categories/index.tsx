"use client";
// import libs
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import classNames from "classnames/bind";

// import components
import CustomerCategoryCard from "@/components/customer/category-card";
import { productData } from "./data";

// import css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./style.module.css";

const cx = classNames.bind(styles);

export default function Categories() {
  const PRODUCT = productData.map((item) => (
    <SwiperSlide key={item.id}>
      <CustomerCategoryCard
        initValue={{
          name: item.name,
          url: item.imageurl,
          description: item.description,
        }}
      />
    </SwiperSlide>
  ));

  return (
    <div className={cx("customer_categories")}>
      <Swiper
        breakpoints={{
          200: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        centeredSlides={false}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {PRODUCT}
      </Swiper>
    </div>
  );
}
