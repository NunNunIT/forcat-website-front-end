// use bind from classnames
import classNames from "classnames/bind";

// use scss
import styles from "./styles.module.css";

const cx = classNames.bind(styles);

export default function Footer() {
  return (
    <div className={cx("wrapper-carousel")}>
      <div className={cx("carousel__label")}>
        <h2 className={cx("carousel__title")}>title</h2>
        <div className={cx("carousel__label-seemore")}>
          <a href="/search/results<%= seemore %>">Xem tất cả</a>
          <span className={cx("material-symbols-outlined")}>
            {" "}
            chevron_right{" "}
          </span>
        </div>
      </div>
      <span id="left" className={cx("arrow left material-symbols-outlined")}>
        {" "}
        chevron_left{" "}
      </span>

      <div className={cx("carousel__list")}>
        <ul className={cx("carousel")}>
          {/* <% products.forEach(function(product) { %> */}
          <li className={cx("carousel__card")}>
            <a
              className={cx("carousel__card-main")}
              href="/search/<%= product.product_variant_id %>?category_id=<%= product.category_id %>">
              {/* <% if (product.discount_amount) { %> */}
              <div className={cx("carousel__card--badge")}>
                - product.discount_amount %
              </div>
              {/* <% } %> */}
              <div className={cx("carousel__card--top")}>
                <div className={cx("carousel__card--img")}>
                  <img
                    src="/imgs/product_image/P<%= product.product_id %>/<%= product.product_avt_img %>"
                    alt="<%= product.product_name %>"
                    draggable="false"
                  />
                </div>
                <div className={cx("carousel__card-details")}>
                  <span className={cx("carousel__card-catagory")}>
                    = product.category_name ?? 'null'{" "}
                  </span>
                  {/* <% if (product.product_rate) { %> */}
                  {/* <div className={cx("carousel__card-rate")}>
								<% for (let i = 0; i < Math.floor(product.product_rate); i++) { %>
								<span className={cx("material-symbols-outlined")}>star</span>
								<% } %>

								<% if (product.product_rate % 1 !== 0.5) { %>
								<% if (product.product_rate - Math.floor(product.product_rate) > 0) { %>
								<span className={cx("material-symbols-outlined")}>star_half</span>
								<% } %>
								<% for (let i = 0; i < Math.floor(5 - Math.ceil(product.product_rate)); i++) { %>
								<span className={cx("material-symbols-outlined" style="font-variation-settings: 'FILL' 0")}>star</span>
								<% } %>
								<% } else { %>
								<span className={cx("material-symbols-outlined" style="font-variation-settings: 'FILL' 0")}>star</span>
								<% } %>
								<p>(<%= product.product_rate %>)</p>
							</div> */}
                  {/* <% } %> */}

                  <h4 title="<%= product.product_name ?? 'Null' %>">
                    {/* // <% if (product.product_name.length > 30) { %>
								// <%= product.product_name.substring(0, 30) + '...' %>
								// <% } else { %>
								// <%= product.product_name ?? 'null' %>
								// <% } %> */}
                  </h4>
                  <p> product.discount_description %</p>
                </div>
              </div>

              <div className={cx("carousel__card-bottom-details")}>
                <div className={cx("carousel__card-price")}>
                  {/* <% if (product.discount_amount) { %>
							<% const discountedPrice = Math.round(product.product_variant_price - product.product_variant_price * (product.discount_amount / 100)) %>
							<%= toCurrency(discountedPrice) %><small><%= toCurrency(product.product_variant_price) %></small>
							<% } else { %>
							<%= toCurrency(product.product_variant_price) %>
							<% } %> */}
                </div>
              </div>
            </a>
          </li>
          {/* <% }) %> */}
        </ul>
      </div>
      <span id="right" className={cx("arrow right material-symbols-outlined")}>
        {" "}
        chevron_right{" "}
      </span>
    </div>
  );
}
