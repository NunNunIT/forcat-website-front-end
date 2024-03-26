"use client";
import classNames from "classnames/bind";
import styles from "./styles.module.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CustomerSliderCard from "@/components/customer/slider card";
import { Slider_Image_Data } from "./dataslider";

const cx = classNames.bind(styles);

export default function CustomerSlider() {
  const SLIDER_CARD = Slider_Image_Data.map((item) => (
    <SwiperSlide key={item.id}>
      <CustomerSliderCard url={item.imageurl} description={item.description} />
    </SwiperSlide>
  ));
  return (
    <>
      <div className={cx("slider-container")}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {SLIDER_CARD}
        </Swiper>
      </div>
    </>
  );
}

"use client";
import classNames from "classnames/bind";
import styles from "./styles.module.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CustomerSliderCard from "@/components/customer/slider card";
import { Slider_Image_Data } from "./dataslider";

const cx = classNames.bind(styles);

export default function CustomerSlider() {
  const SLIDER_CARD = Slider_Image_Data.map((item) => (
    <SwiperSlide key={item.id}>
      <CustomerSliderCard url={item.imageurl} description={item.description} />
    </SwiperSlide>
  ));
  return (
    <>
      <div className={cx("slider-container")}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {SLIDER_CARD}
        </Swiper>
      </div>
    </>
  );
}
