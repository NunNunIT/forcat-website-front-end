"use client";

// import libs
import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { CustomerNewsItem } from "@/app/(default)/news/partials";
// import components
import { CustomerCarouselCard, LoadingSpinner } from "@/components";

// import css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./carousel.module.css";

const cx = classNames.bind(styles);

export default function CustomerNewsCarouselSlider({ newList }) {
  const [news, setNews] = useState([]); // State to store products
  const [loading, setLoading] = useState(true); // State to track loading status

  // Fetch or receive product data using useEffect
  useEffect(() => {
    // Logic to fetch or receive product data from an API or external source
    // Replace with your actual data fetching or receiving logic
    const fetchedProducts = newList; // Assuming productList is the data

    setNews(fetchedProducts);
    setLoading(false);
  }, [newList]);

  return (
    <>
      <div className={cx("wrapper-carousel")}>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <Swiper
            autoplay={{ delay: 2500 }}
            breakpoints={{
              400: { slidesPerView: 1, spaceBetween: 5 },
              640: { slidesPerView: 2, spaceBetween: 5 },
              821: { slidesPerView: 3, spaceBetween: 5 },
              1500: { slidesPerView: 3, spaceBetween: 10 },
              2000: { slidesPerView: 4, spaceBetween: 10 },
            }}
            centeredSlides={false}
            navigation={true}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}>
            {news &&
              (news ?? []).map((articleData: INewsItemProps) => (
                <SwiperSlide key={articleData.article_id_hashed}>
                  <CustomerNewsItem
                    key={articleData.article_id_hashed}
                    {...articleData}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        )}
      </div>
    </>
  );
}
