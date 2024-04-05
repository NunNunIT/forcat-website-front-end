"use client";

// import libs
import classNames from "classnames/bind";
import Image from "next/image";
import useSWR from "swr";

// import components
import { CustomerRating } from "@/components";

// import css
import styles from "./review-header.module.css";
import { BACKEND_URL } from "@/utils/commonConst";

// use css
const cx = classNames.bind(styles);

export default function ProductReviewHeader({
  productId,
  handleOpenModal,
}: {
  productId: string;
  handleOpenModal: any;
}) {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `${BACKEND_URL}/review/getOverview/${productId}`,
    fetcher
  );

  return (
    <div className={cx("review-header")}>
      <div className={cx("review-overview")}>
        <h5>Tổng quan</h5>
        <div className={cx("review-overview__summary-info")}>
          <div className={cx("review-overview__info")}>
            <span className={cx("review-overview__average")}>4.8</span>
            <CustomerRating
              initValue={{ fontSize: "24px", rating: 5 }}></CustomerRating>
          </div>
          <p className={cx("review-overview__total")}>
            (Tất cả {data?.data?.totalReviews} đánh giá)
          </p>
        </div>
        <div
          className={cx("review-overview__detail", "review-overview-detail")}>
          <div className={cx("review-overview-detail__row")}>
            <CustomerRating
              initValue={{ fontSize: "24px", rating: 5 }}></CustomerRating>
            <div className={cx("review-overview-detail__progress-div")}>
              <div
                className={cx("review-overview-detail__progress-bar")}
                style={{
                  width: `${
                    (data?.data?.reviewByStar["5"] / data?.data?.totalReviews) *
                    100
                  }%`,
                }}></div>
            </div>
            <span className={cx("review-overview-detail__numbers")}>
              {data?.data?.reviewByStar["5"]}
            </span>
          </div>
          <div className={cx("review-overview-detail__row")}>
            <CustomerRating
              initValue={{ fontSize: "24px", rating: 4 }}></CustomerRating>
            <div className={cx("review-overview-detail__progress-div")}>
              <div
                className={cx("review-overview-detail__progress-bar")}
                style={{
                  width: `${
                    (data?.data?.reviewByStar["4"] / data?.data?.totalReviews) *
                    100
                  }%`,
                }}></div>
            </div>
            <span className={cx("review-overview-detail__numbers")}>
              {data?.data?.reviewByStar["4"]}
            </span>
          </div>
          <div className={cx("review-overview-detail__row")}>
            <CustomerRating
              initValue={{ fontSize: "24px", rating: 3 }}></CustomerRating>
            <div className={cx("review-overview-detail__progress-div")}>
              <div
                className={cx("review-overview-detail__progress-bar")}
                style={{
                  width: `${
                    (data?.data?.reviewByStar["3"] / data?.data?.totalReviews) *
                    100
                  }%`,
                }}></div>
            </div>
            <span className={cx("review-overview-detail__numbers")}>
              {data?.data?.reviewByStar["3"]}
            </span>
          </div>
          <div className={cx("review-overview-detail__row")}>
            <CustomerRating
              initValue={{ fontSize: "24px", rating: 2 }}></CustomerRating>
            <div className={cx("review-overview-detail__progress-div")}>
              <div
                className={cx("review-overview-detail__progress-bar")}
                style={{
                  width: `${
                    (data?.data?.reviewByStar["2"] / data?.data?.totalReviews) *
                    100
                  }%`,
                }}></div>
            </div>
            <span className={cx("review-overview-detail__numbers")}>
              {data?.data?.reviewByStar["2"]}
            </span>
          </div>
          <div className={cx("review-overview-detail__row")}>
            <CustomerRating
              initValue={{ fontSize: "24px", rating: 1 }}></CustomerRating>
            <div className={cx("review-overview-detail__progress-div")}>
              <div
                className={cx("review-overview-detail__progress-bar")}
                style={{
                  width: `${
                    (data?.data?.reviewByStar["1"] / data?.data?.totalReviews) *
                    100
                  }%`,
                }}></div>
            </div>
            <span className={cx("review-overview-detail__numbers")}>
              {data?.data?.reviewByStar["1"]}
            </span>
          </div>
        </div>
      </div>
      <div className={cx("product-review__image-overview", "image-overview")}>
        <h5>Tất cả hình ảnh</h5>
        <div className={cx("image-overview__container")}>
          <div className={cx("image-overview__item")}>
            <div
              className={cx("image-overview__image-div")}
              onClick={handleOpenModal}>
              <Image
                className={cx("image-overview__image")}
                src="/imgs/test.png"
                alt="Review image"
                fill={true}
              />
            </div>
          </div>
          <div className={cx("image-overview__item")}>
            <div
              className={cx("image-overview__gradient")}
              onClick={handleOpenModal}>
              Xem thêm
            </div>
            <div
              className={cx("image-overview__image-div")}
              onClick={handleOpenModal}>
              <Image
                className={cx("image-overview__image")}
                src="/imgs/test.png"
                alt="Review image"
                fill={true}
              />
            </div>
          </div>
        </div>
        <h5>Tất cả video</h5>
        <div className={cx("video-overview__container")}>
          <div className={cx("video-overview__item")}>
            <video className={cx("video-overview__video")} controls>
              <source src="/vids/test.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={cx("video-overview__item")}>
            <div className={cx("video-overview__gradient")}>Xem thêm</div>
            <video className={cx("video-overview__video")} controls>
              <source src="/vids/test.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
