"use client";
import React, { useRef } from "react";
import Link from 'next/link'
import styles from "./styles.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CarouselItem = React.forwardRef((ref) => {
  // const { name, url, description } = props;
  return (
    <div  className={cx("carousel__card")}>
      <Link
        className={cx("carousel__card-main")}
        href="/search/<%= product.product_variant_id %>?category_id=<%= product.category_id %>">
        <div className={cx("carousel__card--badge")}>
          - 12.5 %
        </div>
        <div className={cx("carousel__card--top")}>
          <div className={cx("carousel__card--img")}>
            <img
              src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              // src={url}
              alt="<%= product.product_name %>"
              draggable="false"
            />
          </div>
          <div className={cx("carousel__card-details")}>
            <span className={cx("carousel__card-catagory")}>
              {/* = product.category_name ?? 'null'{" "} */}
              CATEGORY NAME
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
            <span>rating stars here</span>

            <h4 title="<%= product.product_name ?? 'Null' %>">
              {/* // <% if (product.product_name.length > 30) { %>
								// <%= product.product_name.substring(0, 30) + '...' %>
								// <% } else { %>
								// <%= product.product_name ?? 'null' %>
								// <% } %> */}
              PRODUCT NAME
              
            </h4>
            <p> description </p>
          </div>
          <div className={cx("carousel__card-bottom-details")}>
            <div className={cx("carousel__card-price")}>
              <p>500.000đ</p>
              {/* <% if (product.discount_amount) { %>
							<% const discountedPrice = Math.round(product.product_variant_price - product.product_variant_price * (product.discount_amount / 100)) %>
							<%= toCurrency(discountedPrice) %><small><%= toCurrency(product.product_variant_price) %></small>
							<% } else { %>
							<%= toCurrency(product.product_variant_price) %>
							<% } %> */}
            </div>
          </div>
        </div>
      </Link>
    </div>



  );
});

export default CarouselItem;