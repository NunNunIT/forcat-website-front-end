"use client";

// import libs
import classNames from "classnames/bind";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import React, { useRef, useEffect, useState } from "react";

// import components
import { CustomerStarRating } from "@/components";

// import utils
import { BACKEND_URL, CLOUDINARY_URL } from "@/utils/commonConst";
import { convertNumberToMoney } from "@/utils";

import styles from "./carousel.module.css";

const cx = classNames.bind(styles);

const fetchTopRatedProducts = async () => {
  try {
    const response = await fetch(
      `${BACKEND_URL}/productList/getTopRatedProducts`,
      {
        next: { revalidate: 60 },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch top rated products");
    }
    const data = await response.json();
    return data.data; // Return the entire data object
  } catch (error) {
    console.error("Error fetching top rated products:", error);
    throw error;
  }
};

const CustomerCarousel = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLUListElement>(null);
  const [firstCardWidth, setFirstCardWidth] = useState(0);
  const [arrowBtns, setArrowBtns] = useState<HTMLElement[]>([]);
  const [carouselChildrens, setCarouselChildrens] = useState<HTMLElement[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [startX, setStartX] = useState<number | null>(null);
  const [startScrollLeft, setStartScrollLeft] = useState<number | null>(null);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);
  const [cardPerView, setCardPerView] = useState(0);
  const [topRatedProducts, setTopRatedProducts] = useState([]);

  const loadTopRatedProducts = async () => {
    try {
      const data = await fetchTopRatedProducts();
      setTopRatedProducts(data);
    } catch (error) {
      console.error("Error fetching top rated products:", error);
    }
  };

  console.log("daaaaaaaaaaaa", topRatedProducts);

  useEffect(() => {
    loadTopRatedProducts(); // Load top rated products when component mounts
  }, []);

  const handleClick = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    const carousel = carouselRef.current;
    const btn = event.currentTarget;
    if (carousel && btn) {
      const direction = btn.id === "left" ? -1 : 1;
      // Get the width of the first child of the carousel
      const firstCardWidth = (carousel.firstChild as HTMLElement).offsetWidth;
      carousel.scrollLeft += direction * firstCardWidth;
      // console.log(carousel.scrollLeft); // Log the new scroll position
    }
  };

  const dragStart = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    setIsDragging(true);
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.classList.add("dragging");
      // Records the initial cursor and scroll position of the carousel
      setStartX(e.pageX);
      setStartScrollLeft(carousel.scrollLeft);
    }
  };

  const dragging = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    if (!isDragging) return; // if isDragging is false return from here
    const carousel = carouselRef.current;
    if (carousel && startX !== null && startScrollLeft !== null) {
      // Updates the scroll position of the carousel based on the cursor movement
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    }
  };

  const dragStop = () => {
    setIsDragging(false);
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.classList.remove("dragging");
    }
  };

  const infiniteScroll = () => {
    const carousel = carouselRef.current;
    const wrapper = wrapperRef.current;
    if (carousel && wrapper) {
      // If the carousel is at the beginning, scroll to the end
      if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        // Scroll to the second copy of the first item
        carousel.scrollLeft = carousel.scrollWidth / 3;
        carousel.classList.remove("no-transition");
      }
      // If the carousel is at the end, scroll to the beginning
      else if (
        Math.ceil(carousel.scrollLeft) ===
          carousel.scrollWidth - carousel.offsetWidth ||
        Math.ceil(carousel.scrollLeft) - 1 ===
          carousel.scrollWidth - carousel.offsetWidth
      ) {
        carousel.classList.add("no-transition");
        // Scroll to the original first item
        carousel.scrollLeft = carousel.scrollWidth / 3;
        carousel.classList.remove("no-transition");
      }
      // Clear existing timeout & start autoplay if mouse is not hovering over carousel
      if (timeoutId) clearTimeout(timeoutId);
      if (!wrapper.matches(":hover")) autoPlay();
    }
  };

  const autoPlay = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
      // Autoplay the carousel after every 2500 ms
      const carousel = carouselRef.current;
      if (carousel && carousel.firstChild) {
        const firstCardWidth = (carousel.firstChild as HTMLElement).offsetWidth;
        const id = window.setTimeout(() => {
          carousel.scrollLeft += firstCardWidth;
        }, 1500);
        setTimeoutId(id);
      }
    }
  };

  useEffect(() => {
    if (carouselRef.current && carouselRef.current.children[0]) {
      setFirstCardWidth(
        carouselRef.current.children[0].getBoundingClientRect().width
      );
    }
  }, []);

  useEffect(() => {
    autoPlay();
  }, [firstCardWidth, isAutoPlay]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const carousel = carouselRef.current;
    if (wrapper) {
      const arrows = Array.from(
        wrapper.querySelectorAll(".arrow")
      ) as HTMLElement[];
      setArrowBtns(arrows);
    }
    if (carousel) {
      const firstCard = carousel.querySelector(
        ".carousel__card"
      ) as HTMLElement;
      if (firstCard) {
        setFirstCardWidth(firstCard.offsetWidth);
      }
      const childrens = Array.from(carousel.children) as HTMLElement[];
      setCarouselChildrens(childrens);
      const cardsPerView = Math.round(carousel.offsetWidth / firstCardWidth);
      setCardPerView(cardsPerView);
    }
  }, [firstCardWidth]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carouselChildrens
        .slice(-cardPerView)
        .reverse()
        .forEach((card: HTMLElement) => {
          carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
        });
    }
  }, [carouselChildrens, cardPerView]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carouselChildrens.slice(0, cardPerView).forEach((card: HTMLElement) => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
      });
    }
  }, [carouselChildrens, cardPerView]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.offsetWidth;
      carousel.classList.remove("no-transition");
    }
  }, []);

  // useEffect(() => {
  //   const carousel = carouselRef.current;
  //   const wrapper = wrapperRef.current;

  //   if (carousel) {
  //     carousel.addEventListener("mousedown", dragStart);
  //     carousel.addEventListener("mousemove", dragging);
  //     carousel.addEventListener("scroll", infiniteScroll);
  //     document.addEventListener("mouseup", dragStop);
  //   }

  //   if (wrapper) {
  //     wrapper.addEventListener("mouseenter", () => {
  //       if (timeoutId) clearTimeout(timeoutId);
  //     });
  //     wrapper.addEventListener("mouseleave", autoPlay);
  //   }

  //   // Clean up function to remove event listeners
  //   return () => {
  //     if (carousel) {
  //       carousel.removeEventListener("mousedown", dragStart);
  //       carousel.removeEventListener("mousemove", dragging);
  //       carousel.removeEventListener("scroll", infiniteScroll);
  //       document.removeEventListener("mouseup", dragStop);
  //     }

  //     if (wrapper) {
  //       wrapper.removeEventListener("mouseenter", () => {
  //         if (timeoutId) clearTimeout(timeoutId);
  //       });
  //       wrapper.removeEventListener("mouseleave", autoPlay);
  //     }
  //   };
  // }, [dragStart, dragging, dragStop, infiniteScroll, autoPlay, timeoutId]);

  useEffect(() => {}, [carouselRef.current]);

  return (
    <div ref={wrapperRef} className={cx("wrapper-carousel")}>
      {/* <div className={cx("carousel__label")}>
        <h2 className={cx("carousel__title")}>Gợi ý hôm nay</h2>
        <div className={cx("carousel__label-seemore")}>
          <Link href="/search-result">Xem tất cả</Link>
          <span className={cx("arrow material-icons")}>
            keyboard_arrow_right
          </span>
        </div>
      </div> */}
      <span
        id="left"
        onClick={handleClick}
        className={cx("left", "arrow", "arrow material-icons")}>
        keyboard_arrow_left
      </span>

      <div className={cx("carousel__list")}>
        <ul
          ref={carouselRef}
          className={cx("carousel")}
          onMouseDown={dragStart}
          onMouseMove={dragging}
          onMouseUp={dragStop}
          onMouseLeave={dragStop}
          onScroll={infiniteScroll}>
          {topRatedProducts &&
            (topRatedProducts ?? []).map((product) => (
              <li key={product.product_id} className={cx("carousel__card")}>
                <Link
                  className={cx("carousel__card-main")}
                  href={`/${product.product_slug}?pid=${product.product_id_hashed}`}>
                  {product.highest_discount ? (
                    <div className={cx("carousel__card--badge")}>
                      - {product.highest_discount} %
                    </div>
                  ) : null}
                  <div className={cx("carousel__card--top")}>
                    <div className={cx("carousel__card--img")}>
                      <CldImage
                        src={product.product_img.link}
                        alt={product.product_img.alt}
                        fill={true}
                        draggable="false"
                      />
                    </div>
                    <div className={cx("carousel__card-details")}>
                      <span className={cx("carousel__card-category")}>
                        {product.category_name
                          ? product.category_name
                          : "FORCAT"}
                      </span>
                      <div className={cx("carousel__card-rate")}>
                        <CustomerStarRating
                          rating={product.product_avg_rating}
                        />
                      </div>
                      <h4 title={product.product_name}>
                        {product.product_name}
                      </h4>
                      <p> Hàng cực hot </p>
                    </div>
                  </div>
                  <div className={cx("carousel__card-bottom-details")}>
                    <div className={cx("carousel__card-price")}>
                      <h2>
                        {" "}
                        {product.highest_discount ? (
                          <>
                            {convertNumberToMoney(product.lowest_price)}đ
                            <small>
                              {convertNumberToMoney(product.product_price)}đ
                            </small>
                          </>
                        ) : (
                          <>{convertNumberToMoney(product.product_price)}đ</>
                        )}
                      </h2>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <span
        id="right"
        onClick={handleClick}
        className={cx("arrow", "right", " arrow material-icons")}>
        keyboard_arrow_right
      </span>
    </div>
  );
};
export default CustomerCarousel;
