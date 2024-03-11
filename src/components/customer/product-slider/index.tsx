"use client";

// import libs
import { useState, useRef } from "react";
import classNames from "classnames/bind";

// import css
import styles from "./product-slider.module.css";

// use css
const cx = classNames.bind(styles);

// some test data
const thumbnails = [
  "/imgs/test.png",
  "/imgs/test2.png",
  "/imgs/test2.png",
  "/imgs/test2.png",
  "/imgs/test.png",
  "/imgs/test.png",
  "/imgs/test2.png",
  "/imgs/test2.png",
  "/imgs/test.png",
  "/imgs/test2.png",
  "/imgs/test2.png",
  "/imgs/test.png",
  "/imgs/test.png",
  "/imgs/test.png",
];

export default function CustomerProductSlider() {
  // border thumbnail when hovered
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const isHovered = (currentIndex: number, hoveredIndex: number) => {
    return currentIndex == hoveredIndex ? "slider__hovered" : "";
  };

  // change current index when hovered

  // change main image src when hovered
  const [mainImageSrc, setMainImageSrc] = useState(thumbnails[0]);
  const handleMouseOver = (index: number) => {
    setHoveredIndex(index);
    setMainImageSrc(thumbnails[index]);
  };

  // scroll thumbnails container when button is clicked
  const thumbnailsContainer = useRef(null);
  const SCROLL_OFFSET = 150;
  const handleScrollLeft = () => {
    if (thumbnailsContainer.current) {
      const container = thumbnailsContainer.current as HTMLDivElement;

      // Ensure new scroll position doesn't go beyond 0 (leftmost point)
      const newScrollPosition = Math.max(
        container.scrollLeft - SCROLL_OFFSET,
        0
      );

      container.scrollLeft = newScrollPosition; // Update scroll position
    }
  };
  const handleScrollRight = () => {
    if (thumbnailsContainer.current) {
      const container = thumbnailsContainer.current as HTMLDivElement;
      const containerWidth = container.offsetWidth; // Get container width
      const totalScrollWidth = container.scrollWidth; // Get total scrollable width (all thumbnails)

      // Calculate maximum scroll position (rightmost point)
      const maxScrollPosition = totalScrollWidth - containerWidth;

      // Ensure new scroll position doesn't exceed the maximum
      const newScrollPosition = Math.min(
        container.scrollLeft + SCROLL_OFFSET,
        maxScrollPosition
      );

      container.scrollLeft = newScrollPosition; // Update scroll position
    }
  };

  return (
    <section className={cx("slider")}>
      <div className={cx("slider__main-image-div")}>
        <img
          className={cx("slider__main-image")}
          src={mainImageSrc}
          alt="Slider main image"
        />

        <div className={cx("slider__current-index")}>
          {hoveredIndex + 1}/{thumbnails.length}
        </div>
      </div>

      <div className={cx("slider__thumbnails-div")}>
        <div className={cx("slider__thumbnails")} ref={thumbnailsContainer}>
          {thumbnails.map((url, index) => (
            <img
              key={index}
              className={cx(
                "slider__thumbnail",
                isHovered(index, hoveredIndex)
              )}
              onMouseOver={() => handleMouseOver(index)}
              src={url}
              alt="Slider thumbnails"
            />
          ))}
        </div>

        <div
          className={cx("slider__btn", "slider__back")}
          onClick={handleScrollLeft}>
          <span className={cx("material-icons-round", "slider__icon")}>
            arrow_back_ios
          </span>
        </div>

        <div
          className={cx("slider__btn", "slider__forward")}
          onClick={handleScrollRight}>
          <span className={cx("material-icons-round", "slider__icon")}>
            arrow_forward_ios
          </span>
        </div>
      </div>
    </section>
  );
}
