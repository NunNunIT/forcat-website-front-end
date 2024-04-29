"use client";

// import libs
import classNames from "classnames/bind";
import { useState } from "react";

// import css
import styles from "./description.module.css";

// use css
const cx = classNames.bind(styles);

export default function ProductDescription({
  productDescription,
  desktopOnly,
}: {
  productDescription: string;
  desktopOnly?: string;
}) {
  const [isSeeMoreActive, setIsSeeMoreActive] = useState(false);

  const handleSeeMore = () => {
    setIsSeeMoreActive(!isSeeMoreActive);
  };

  return (
    <section className={cx("product-description", desktopOnly)}>
      <div className={cx("product-description__title-div")}>
        <h3 className={cx("product-description__title")}>Mô tả sản phẩm</h3>
        <div className={cx("product-description__see-more")}>
          <p
            className={cx("product-description__see-more-text")}
            onClick={handleSeeMore}>
            {isSeeMoreActive ? "Thu gọn" : "Xem thêm"}
          </p>
          {isSeeMoreActive ? (
            <span className="material-icons-round">undo</span>
          ) : (
            <span className="material-icons-round">arrow_forward</span>
          )}
        </div>
      </div>
      <div
        className={cx(
          "product-description__content",
          "product-description-content",
          isSeeMoreActive ? "full-height" : ""
        )}
        dangerouslySetInnerHTML={{ __html: productDescription }}></div>
      <div className={cx("product-description__see-more", "see-more-btn")}>
        {!isSeeMoreActive && (
          <div className={cx("see-more-btn__gradient")}></div>
        )}
        <button
          className={cx("see-more-btn__text")}
          onClick={handleSeeMore}
          type="button">
          {isSeeMoreActive ? "Thu gọn" : "Xem thêm"}
        </button>
      </div>
    </section>
  );
}
