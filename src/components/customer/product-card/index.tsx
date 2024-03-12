// import libs
import Link from "next/link";
import classNames from "classnames/bind";

// import css
import styles from "./style.module.css";

// use classnames
const cx = classNames.bind(styles);

export default function CustomerProductCard() {
  // const { name, url, description } = props;
  return (
    <div className={cx("product-card")}>
      <Link className={cx("product__card-main")} href="#">
        <div>
          {/* <% if (product.discount_amount) { %>
				<div class="badge">-<%= product.discount_amount %>%</div>
				<% } %> */}
          <div className={cx("product-tumb")}>
            <img src="/imgs/test.png" alt="name" />
          </div>
          <div className={cx("product-details")}>
            <span className={cx("product-category")}>Danh mục sản phẩm</span>
            {/* <% if (product.product_rate) { %> */}
            <div className={cx("product-rate")}>
              {/* <% for (let i = 0; i < Math.floor(product.product_rate); i++) { %> */}
              <span className="material-symbols-outlined fill">star</span>
              <span className="material-symbols-outlined fill">star</span>
              <span className="material-symbols-outlined fill">star</span>
              <span className="material-symbols-outlined fill">star</span>
              {/* <% } %> */}

              {/* <% if (product.product_rate % 1 !== 0.5) { %> */}
              {/* <% if (product.product_rate - Math.floor(product.product_rate) > 0) { %> */}
              <span className="material-symbols-outlined">star_half</span>
              {/* <% } %> */}
              {/* <% for (let i = 0; i < Math.floor(5 - Math.ceil(product.product_rate)); i++) { %> */}
              {/* <span className={cx("material-symbols-outlined")}>star</span> */}
              {/* // <% } %> */}
              <p>(4.5)</p>
            </div>
            {/* <% } %> */}
            <h4 title="Tên sản phẩm">
              Tên sản phẩm
              {/* <% if (product.product_name.length > 30) { %> */}
              {/* <%= product.product_name.substring(0, 30) + '...' %> */}
              {/* <% } else { %> */}
              {/* <%= product.product_name ?? 'NaN' %> */}
              {/* <% } %> */}
            </h4>
            <p>Mô tả sản phẩm</p>
          </div>
        </div>

        <div className={cx("product-bottom-details")}>
          <div className={cx("product-price")}>
            {/* <% if (product.discount_amount) { %> */}
            {/* <% const discountedPrice = Math.round(product.product_variant_price - product.product_variant_price * (product.discount_amount / 100)) %> */}
            220.000đ<small>300.000đ</small>
            {/* <% } else { %>
					<%= toCurrency(product.product_variant_price) %> */}
            {/* <% } %> */}
          </div>
        </div>
      </Link>
    </div>
  );
}
