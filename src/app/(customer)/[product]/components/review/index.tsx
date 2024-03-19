"use client";

// import libs
import classNames from "classnames/bind";
import Image from "next/image";

// import components
import { CustomerRating } from "@/components";

// import css
import styles from "./review.module.css";

// use css
const cx = classNames.bind(styles);

export default function ProductReview() {
  return (
    <div className={cx("review-item")}>
      <div className={cx("review-item__info")}>
        <div className={cx("review-item__avatar-div")}>
          <Image
            className={cx("review-item__avatar")}
            src="/imgs/test.png"
            alt="Avatar nguoi dung"
            fill={true}
          />
        </div>
        <div className={cx("review-item__info-div")}>
          <p className={cx("review-item__user-name")}>Nam Tử Thiên</p>
          <div className={cx("review-item__rating")}>
            <span className={cx("review-item__rating-number")}>4/5</span>
            <CustomerRating
              initValue={{
                fontSize: "24px",
                rating: 4,
              }}></CustomerRating>
          </div>
          <div className={cx("review-item__variant")}>Phân loại: 7 màu</div>
        </div>
      </div>
      <div className={cx("review-item__content")}>
        <p className={cx("review-item__date")}>
          Đã đánh giá và ngày 12-12-2022
        </p>
        <p className={cx("review-item__text")}>
          Sản phẩm tuyệt vời, 100 điểm, lấp la lấp lánh, blink, blink
        </p>
        <div className={cx("review-item__image-group")}>
          <div className={cx("review-item__image-div")}>
            <Image
              className={cx("review-item__image")}
              src="/imgs/test.png"
              alt="Anh san pham"
              fill={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
