// import libs
import classNames from "classnames/bind";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

// import utils
import { convertNumberToMoney } from "@/utils";

// import components
import { CustomerStarRating } from "@/components";

// import css
import styles from "./carousel.module.css";

const cx = classNames.bind(styles);

export default function CustomerCarouselCard({ product }) {
  return (
    <>
      <div className={cx("carousel__card")}>
        <Link
          rel="canonical"
          className={cx("carousel__card-main")}
          href={`/${product.product_slug}/${product.variant_slug}?pid=${product.product_id_hashed}`}>
          {product.highest_discount ? (
            <div className={cx("carousel__card--badge")}>
              - {product.highest_discount} %
            </div>
          ) : null}
          <div className={cx("carousel__card--top")}>
            <div className={cx("carousel__card--img")}>
              <CldImage
                src={product.product_img.link}
                alt={product.product_img.alt}
                fill={true}
                draggable="false"
              />
            </div>
            <div className={cx("carousel__card-details")}>
              <span className={cx("carousel__card-category")}>
                {product.category_name ? product.category_name : "FORCAT"}
              </span>
              <div className={cx("carousel__card-rate")}>
                <CustomerStarRating rating={product.product_avg_rating} />
              </div>
              <h3 title={product.product_name}>{product.product_name}</h3>
              <p> Hàng cực hot </p>
            </div>
          </div>
          <div className={cx("carousel__card-bottom-details")}>
            <div className={cx("carousel__card-price")}>
              <h3>
                {product.highest_discount && product.lowest_price ? (
                  <>
                    {convertNumberToMoney(product.lowest_price)}
                    <small>{convertNumberToMoney(product.product_price)}</small>
                  </>
                ) : (
                  <>{convertNumberToMoney(product.product_price)}</>
                )}
              </h3>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
