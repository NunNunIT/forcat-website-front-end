"use client";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.css";

const cx = classNames.bind(styles);

export default function Slider() {
  return (
    <>
      <div className={cx("slider")}>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className={cx("slider_img")}
              src="/imgs/slider/img_slider_1.png"
              alt="Slider_image 1"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className={cx("slider_img")}
              src="/imgs/slider/img_slider_2.png"
              alt="Slider_image 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={cx("slider_img")}
              src="/imgs/slider/img_slider_3.png"
              alt="Slider_image 3"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={cx("slider_img")}
              src="/imgs/slider/img_slider_4.png"
              alt="Slider_image 4"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
