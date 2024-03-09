"use client";

import React, { useRef, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.css";

import CarouselItem from '@/components/customer/carousel item'


const cx = classNames.bind(styles);

const items = [1, 2, 3, 4, 5, 6, 7];
const carouselItems = items.map((item, index) => <CarouselItem key={index} />);


const Carousel = () => {
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

  const handleClick = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const carousel = carouselRef.current;
    const btn = event.currentTarget;
    console.log('carousel:', carousel);
    console.log('btn:', btn);
    console.log('firstCardWidth:', firstCardWidth);
    if (carousel && btn) {
      carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
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
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
      }
      // If the carousel is at the end, scroll to the beginning
      else if ((Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth)
        || (Math.ceil(carousel.scrollLeft) - 1 === carousel.scrollWidth - carousel.offsetWidth)) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      }
      // Clear existing timeout & start autoplay if mouse is not hovering over carousel
      if (timeoutId) clearTimeout(timeoutId);
      if (!wrapper.matches(":hover")) autoPlay();
    }
  };

  const autoPlay = () => {
    if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    const carousel = carouselRef.current;
    if (carousel) {
      const id = window.setTimeout(() => {
        carousel.scrollLeft += firstCardWidth;
      }, 1500);
      setTimeoutId(id);
    }
  };

  useEffect(() => {
    if (carouselRef.current && carouselRef.current.children[0]) {
      setFirstCardWidth(carouselRef.current.children[0].getBoundingClientRect().width);
    }
  }, []);

  useEffect(() => {
    autoPlay();
  }, [firstCardWidth, isAutoPlay]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const carousel = carouselRef.current;
    if (wrapper) {
      const arrows = Array.from(wrapper.querySelectorAll(".arrow")) as HTMLElement[];
      setArrowBtns(arrows);
    }
    if (carousel) {
      const firstCard = carousel.querySelector(".carousel__card") as HTMLElement;
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
      carouselChildrens.slice(-cardPerView).reverse().forEach((card: HTMLElement) => {
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

  useEffect(() => {
    console.log(carouselRef.current);
  }, [carouselRef.current]);
  return (
    <div ref={wrapperRef} className={cx("wrapper-carousel")}>
      <div className={cx("carousel__label")}>
        <h2 className={cx("carousel__title")}>Gợi ý hôm nay</h2>
        <div className={cx("carousel__label-seemore")}>
          <a href="/search/results<%= seemore %>">Xem tất cả</a>
          <span className={cx("arrow material-symbols-outlined")}>
            chevron_right
          </span>

        </div>
      </div>
      <span id="left" onClick={handleClick} className={cx("left", "arrow", "arrow material-symbols-outlined")}>
        chevron_left
      </span>
      <div className={cx("carousel__list")}>
        <ul ref={carouselRef} className={cx("carousel")} 
        onMouseDown={dragStart} onMouseMove={dragging} onMouseUp={dragStop} onMouseLeave={dragStop}
        onScroll={infiniteScroll}>
          {/* <% products.forEach(function(product) { %> */}
          {/* <% }) %> */}
          {carouselItems}
        </ul>
      </div>



      <span id="right" onClick={handleClick} className={cx("arrow", "right", " arrow material-symbols-outlined")}>
        chevron_right
      </span>
    </div>
  );
}
export default Carousel;