"use client";

// import libs
import classNames from "classnames/bind";
import Image from "next/image";
import { useState, useRef } from "react";

// import css
import styles from "./slider.module.css";

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

export default function CustomerProductSlider(prop) {
  // border thumbnail when hovered
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const isHovered = (currentIndex: number, hoveredIndex: number) => {
    return currentIndex == hoveredIndex ? "slider__hovered" : "";
  };

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

  // Function to handle left button click (updated for potential edge cases)
  const handleClickLeft = () => {
    let newIndex = currentIndex - 1;

    // Handle edge case: Decrementing from first index
    if (newIndex < 0) {
      newIndex = thumbnails.length - 1; // Wrap around to last index
    }

    setCurrentIndex(newIndex);
    setMainImageSrc(thumbnails[newIndex]);
    handleMouseOver(newIndex); // Update hovered state and potentially class
   
    if (currentIndex < thumbnails.length - 2 && newIndex % 2 == 1)
      handleScrollLeft();
  };

  // Function to handle right button click
  const handleClickRight = () => {
    let newIndex = currentIndex + 1;

    // Handle edge case: Incrementing past last index
    if (newIndex >= thumbnails.length) {
      newIndex = 0; // Wrap around to first index
    }

    setCurrentIndex(newIndex);
    setMainImageSrc(thumbnails[newIndex]);
    handleMouseOver(newIndex); // Update hovered state and potentially class

    if (currentIndex > 2 && newIndex % 2 == 0) handleScrollRight();
  };

  return (
    <section className={cx("slider")}>
      <div className={cx("slider__main-container")}>
        <div className={cx("slider__main-image-div")}>
          <Image
            className={cx("slider__main-image")}
            src={mainImageSrc}
            alt="Slider main image"
            fill={true}
          />
        </div>

        {currentIndex > 0 && (
          <div
            className={cx("slider__btn", "slider__back")}
            onClick={handleClickLeft}>
            <span className={cx("material-icons-round", "slider__icon")}>
              arrow_back_ios
            </span>
          </div>
        )}

        {currentIndex < thumbnails.length - 1 && (
          <div
            className={cx("slider__btn", "slider__forward")}
            onClick={handleClickRight}>
            <span className={cx("material-icons-round", "slider__icon")}>
              arrow_forward_ios
            </span>
          </div>
        )}

        <div className={cx("slider__current-index")}>
          {hoveredIndex + 1}/{thumbnails.length}
        </div>
      </div>

      <div className={cx("slider__thumbnails-div")}>
        <div className={cx("slider__thumbnails")} ref={thumbnailsContainer}>
          {thumbnails.map((url, index) => (
            <div className={cx("slider__thumbnail-div")}>
              <Image
                key={index}
                className={cx(
                  "slider__thumbnail",
                  isHovered(index, hoveredIndex)
                )}
                onMouseOver={() => handleMouseOver(index)}
                src={url}
                alt="Slider thumbnails"
                fill={true}
              />
            </div>
          ))}
        </div>

        <div
          className={cx("slider__btn", "slider__back", prop.mobileOnly)}
          onClick={handleScrollLeft}>
          <span className={cx("material-icons-round", "slider__icon")}>
            arrow_back_ios
          </span>
        </div>

        <div
          className={cx("slider__btn", "slider__forward", prop.mobileOnly)}
          onClick={handleScrollRight}>
          <span className={cx("material-icons-round", "slider__icon")}>
            arrow_forward_ios
          </span>
        </div>
      </div>
    </section>
  );
}
