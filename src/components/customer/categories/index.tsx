"use client";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import classNames from "classnames/bind";
import styles from "./style.module.css";
import Product from '@/components/customer/category card'
import { productData, responsive } from "./data";

const cx = classNames.bind(styles);

export default function Categories() {
    const PRODUCT = productData.map((item) => (
      <Product
        name={item.name}
        url={item.imageurl}
        description={item.description}
      />
    ));
    return (
        <div className={cx("CustomerCatogories")}>
        <div style={{ marginBottom: '1px' }}>&nbsp;</div>
        <Carousel showDots={false} responsive={responsive}>
            {PRODUCT}
        </Carousel>
        </div>
    );
  }