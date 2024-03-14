"use client";

// import libs
import classNames from "classnames/bind";
import { useState } from "react";

// import css
import styles from "./description.module.css";

// use css
const cx = classNames.bind(styles);

export default function ProductSpecification() {
  const [isSeeMoreActive, setIsSeeMoreActive] = useState(false);

  const handleSeeMore = () => {
    setIsSeeMoreActive(!isSeeMoreActive);
  };

  return (
    <section className={cx("specifications")}>
      <div className={cx("specifications__title")}>
        <h3>Thông số kỹ thuật</h3>
        <div className={cx("specifications__see-more")} onClick={handleSeeMore}>
          <p className={cx("specifications__see-more-text")}>
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
          "specifications__table",
          isSeeMoreActive ? "full-height" : ""
        )}>
        <div className={cx("specifications__item")}>
          <div className={cx("specifications__type")}>Dung lượng pin</div>
          <div className={cx("specifications__info")}>5000 mAh</div>
        </div>
        <div className={cx("specifications__item")}>
          <div className={cx("specifications__type")}>Chip set</div>
          <div className={cx("specifications__info")}>
            Snapdragon 685 8 nhân
          </div>
        </div>
        <div className={cx("specifications__item")}>
          <div className={cx("specifications__type")}>
            Loại/ Công nghệ màn hình
          </div>
          <div className={cx("specifications__info")}>AMOLED</div>
        </div>
        <div className={cx("specifications__item")}>
          <div className={cx("specifications__type")}>Type</div>
          <div className={cx("specifications__info")}>Info</div>
        </div>
        <div className={cx("specifications__item")}>
          <div className={cx("specifications__type")}>Type</div>
          <div className={cx("specifications__info")}>Info</div>
        </div>
        <div className={cx("specifications__item")}>
          <div className={cx("specifications__type")}>Type</div>
          <div className={cx("specifications__info")}>Info</div>
        </div>
        <div className={cx("specifications__item")}>
          <div className={cx("specifications__type")}>Type</div>
          <div className={cx("specifications__info")}>Info</div>
        </div>
        <div className={cx("specifications__item")}>
          <div className={cx("specifications__type")}>Type</div>
          <div className={cx("specifications__info")}>Info</div>
        </div>
      </div>
      <div className={cx("specifications__see-more", "see-more-btn")}>
        {!isSeeMoreActive && (
          <div className={cx("see-more-btn__gradient")}></div>
        )}
        <div className={cx("see-more-btn__text")} onClick={handleSeeMore}>
          {isSeeMoreActive ? "Thu gọn" : "Xem thêm"}
        </div>
      </div>
    </section>
  );
}
