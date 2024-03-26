"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import classNames from "classnames/bind";
import styles from "./style.module.css";
import Product from "@/components/customer/category card";
import { productData } from "./data";

const cx = classNames.bind(styles);

export default function Categories() {
  const PRODUCT = productData.map((item) => (
    <SwiperSlide key={item.id}>
      <Product
        name={item.name}
        url={item.imageurl}
        description={item.description}
      />
    </SwiperSlide>
  ));

  return (
    <div className={cx("CustomerCatogories")}>
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          200: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 7,
          },
        }}
        spaceBetween={10}
        centeredSlides={false}
        // pagination={{}}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {PRODUCT}
      </Swiper>
    </div>
  );
}

"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import classNames from "classnames/bind";
import styles from "./style.module.css";
import Product from "@/components/customer/category card";
import { productData } from "./data";

const cx = classNames.bind(styles);

export default function Categories() {
  const PRODUCT = productData.map((item) => (
    <SwiperSlide key={item.id}>
      <Product
        name={item.name}
        url={item.imageurl}
        description={item.description}
      />
    </SwiperSlide>
  ));

  return (
    <div className={cx("CustomerCatogories")}>
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          200: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 7,
          },
        }}
        spaceBetween={10}
        centeredSlides={false}
        // pagination={{}}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {PRODUCT}
      </Swiper>
    </div>
  );
}
