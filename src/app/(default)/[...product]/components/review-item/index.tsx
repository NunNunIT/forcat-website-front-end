"use client";

// import libs
import classNames from "classnames/bind";
import Image from "next/image";
import { CldImage } from "next-cloudinary";

// import components
import { CustomerRating } from "@/components";

// import interfaces
import { IReview } from "../../interfaces";

// import utils
import { convertDateToHourDayMonthYear } from "@/utils";

// import css
import styles from "./review-item.module.css";

// use css
const cx = classNames.bind(styles);

export default function ProductReviewItem({
  review,
  key,
  handleOpenModal,
}: {
  review: IReview;
  key?: number;
  handleOpenModal: any;
}) {
  return (
    <div className={cx("review-item")} key={key}>
      <div className={cx("review-item__info")}>
        <div className={cx("review-item__avatar-div")}>
          <Image
            className={cx("review-item__avatar")}
            src={review.user_avt}
            alt={review.user_name}
            fill={true}
          />
        </div>
        <div className={cx("review-item__info-div")}>
          <p className={cx("review-item__user-name")}>{review.user_name}</p>
          <div className={cx("review-item__rating")}>
            <span className={cx("review-item__rating-number")}>
              {review.review_rating}/5
            </span>
            <CustomerRating
              initValue={{
                fontSize: "24px",
                rating: review.review_rating,
              }}></CustomerRating>
          </div>
          <div className={cx("review-item__variant")}>
            Phân loại: ko co data
          </div>
        </div>
      </div>
      <div className={cx("review-item__content")}>
        <p className={cx("review-item__date")}>
          Đã đánh giá vào {convertDateToHourDayMonthYear(review.review_date)}
        </p>
        <p className={cx("review-item__text")}>{review.review_context}</p>
        <div className={cx("review-item__image-group")}>
          <div
            className={cx("review-item__image-div")}
            onClick={handleOpenModal}>
            <CldImage
              className={cx("review-item__image")}
              src={review.review_imgs}
              alt="ko co data"
              fill={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
