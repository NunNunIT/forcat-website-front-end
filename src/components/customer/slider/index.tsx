"use client";
// import libs
import { Swiper, SwiperSlide } from "swiper/react";
import classNames from "classnames/bind";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import components
import CustomerSliderCard from "@/components/customer/slider-card";
import { Slider_Image_Data } from "./dataslider";
// import css
import styles from "./styles.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const cx = classNames.bind(styles);

export default function CustomerSlider() {
  const SLIDER_CARD = Slider_Image_Data.map((item) => (
    <SwiperSlide key={item.id}>
      <CustomerSliderCard
        variant={{
          url: item.imageurl,
          description: item.description,
        }}
      />
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
