"use client";
import React, { useState } from "react";

import classNames from "classnames/bind";
import styles from "./purchase-item.module.css";

const cx = classNames.bind(styles);

interface PurchaseItemProps {
    status: string;
    cancelPurchase: () => void;
}

export default function PurchaseItem({ status, cancelPurchase }: PurchaseItemProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    let statusClass = '';
    if (status === "Đã hủy") {
        statusClass = "cancel";
    } else if (status === "Chờ thanh toán") {
        statusClass = "unpaid";
    } else if (status === "Hoàn thành") {
        statusClass = "finished";
    } else if (status === "Đang giao hàng") {
        statusClass = "delivering";
    }
    return (
        <div className={cx("purchase-item")}>
            <div className="purchase-item--top">
                <div className={cx("purchase-item__info")}>
                    <h5>Đơn hàng:</h5>
                    {/* <p className={cx("purchase-item__id")}>#DH00<%= purchaseHistory.order_id %></p> */}
                    <p className={cx("purchase-item__id")}>#DH00ID</p>
                </div>
                <div className={`purchase-item__status-container ${statusClass}`}>
                    <span className={cx("material-symbols-outlined status")}>
                        {/* <% if (purchaseHistory.order_status === 'Đã hủy') { %>
				cancel
				<% } else if (purchaseHistory.order_status === 'Chờ thanh toán') { %>
				payment
				<% } else if (purchaseHistory.order_status === 'Hoàn thành') { %>
				done_all
				<% } else if (purchaseHistory.order_status === 'Đang giao hàng') { %>
				local_shipping
				<% } %> */}
                    </span>
                    <p className={cx("purchase-item__status")}> {status} </p>
                </div>


            </div>
            <hr />
            {/* <!-- Chi tiết đơn hàng --> */}
            <div className={cx("purchase-item__main")}>
                {/* <% let totalAmount = 0; %>
		        <% purchaseHistory.order_details.forEach(orderDetail => { %> */}
                {/* <!-- Mỗi sản phẩm trong đơn hàng --> */}
                <div className={cx("purchase-item__element")}>
                    <a href='/search/<%=orderDetail.product_variant_id%>'>
                        <div className={cx("purchase-item__element--left")}>
                            <img src="/imgs/product_image/P<%= orderDetail.product_id %>/<%= orderDetail.product_avt_img %>" alt="product_img" className={cx("purchase-item__product-img")} />
                            <div className={cx("purchase-item__product-detail")}>
                                <h4 className={cx("purchase-item__product-name")}> orderDetail.product_name </h4>
                                <p className={cx("purchase-item__variant")}>Phân loại hàng:  orderDetail.product_variant_name </p>
                                <p className={cx("purchase-item__amount")}> orderDetail.order_detail_quantity %</p>
                            </div>
                        </div>
                    </a>

                    <h5 className={cx("purchase-item__price")}>
                        {/* <% if (orderDetail.order_total_price_before > orderDetail.order_detail_price_after) { %>
				        <small><%= toCurrency(orderDetail.order_detail_price_before) %></small>
				        <% } %>
				        <%= toCurrency(orderDetail.order_detail_price_after) %> */}
                    </h5>
                </div>
                <hr />
                {/* <% totalAmount += parseFloat(orderDetail.order_detail_price_after * orderDetail.order_detail_quantity); %>
		        <% }) %> */}
                {/* <!-- End mỗi sản phẩm trong đơn hàng --> */}
            </div>

            <div className={cx("purchase-item--bottom")}>
                <div className={cx("purchase-item__total")}>
                    <p>Thành tiền:</p>
                    {/* <% if (purchaseHistory.order_status === 'Đã hủy') { %>
			        <h2 className={cx("purchase-item__total-price cancelled")}><del><%= toCurrency(totalAmount) %></del></h2>
			        <% } else { %>
			        <h2 className={cx("purchase-item__total-price")}><%= toCurrency(totalAmount) %></h2>
			        <% } %> */}
                </div>

                <div className={cx("purchase-item__button")}>
                    {/* <% if (purchaseHistory.order_status === 'Chờ thanh toán') { %> */}
                    <div className={cx("btn btn--outlined pri cancel")} onClick={() => { cancelPurchase(); openModal(); }}>Hủy</div>
                    {isModalOpen && (
                        <div className={cx("purchase-cancel__popup")}>
                            <div className={cx("purchase-cancel__popup__main")}>
                                <div className={cx("purchase-cancel__popup__content-main")}>
                                    <div className={cx("purchase-cancel__popup__content-title")}>
                                        <div className={cx("purchase-cancel__popup--top")}>
                                            <p className={cx("purchase-cancel__popup__title)}")}> Lý do hủy</p>
                                            <div className={cx("close-btn")}>
                                                <span className={cx("material-symbols-outlined")}>cancel</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx("popup__note")}>
                                        <span className={cx("material-symbols-outlined")}>info</span>
                                        <span>Nếu bạn xác nhận hủy, toàn bộ đơn hàng sẽ được hủy. Hãy chọn lý do hủy đặt hàng phù hợp nhất với bạn nhé!</span>
                                    </div>
                                    <form id="cancel_popup" className={cx("his_cancel_popup")}>
                                        <input type="hidden" name="order_id" value="<%= purchaseHistory.order_id %>" />
                                        <div className={cx("cancel-reasons")}>
                                            <div className={cx("cancel-reason__item")}>
                                                <input type="radio" className={cx("cancel-reason__input")} value="1" id="update" name="selector" />
                                                <label className={cx("cancel-reason__label")} htmlFor="update">Tôi muốn cập nhật địa chỉ/sđt nhận hàng.</label>
                                            </div>
                                            <div className={cx("cancel-reason__item")}>
                                                <input type="radio" className={cx("cancel-reason__input")} value="2" id="change" name="selector" />
                                                <label className={cx("cancel-reason__label")} htmlFor="change">Tôi muốn thay đổi sản phẩm.</label>
                                            </div>
                                            <div className={cx("cancel-reason__item")}>
                                                <input type="radio" className={cx("cancel-reason__input")} value="3" id="cancel-reason__input-payment" name="selector" />
                                                <label className={cx("cancel-reason__label")} htmlFor="cancel-reason__input-payment">Thủ tục thanh toán rắc rối.</label>
                                            </div>
                                            <div className={cx("cancel-reason__item")}>
                                                <input type="radio" className={cx("cancel-reason__input")} value="4" id="cancel-reason__input-price" name="selector" />
                                                <label className={cx("cancel-reason__label")} htmlFor="cancel-reason__input-price">Tôi tìm thấy nơi khác giá tốt hơn.</label>
                                            </div>
                                            <div className={cx("cancel-reason__item")}>
                                                <input type="radio" className={cx("cancel-reason__input")} value="5" id="cancel-reason__input-need" name="selector" />
                                                <label className={cx("cancel-reason__label")} htmlFor="cancel-reason__input-need">Tôi không có nhu cầu mua nữa.</label>
                                            </div>
                                            <div className={cx("cancel-reason__item")}>
                                                <input type="radio" className={cx("cancel-reason__input")} value="6" id="cancel-reason__input-no-reason" name="selector" />
                                                <label className={cx("cancel-reason__label")} htmlFor="cancel-reason__input-no-reason">Tôi không tìm thấy lý do hủy phù hợp.</label>
                                            </div>
                                        </div>
                                        <div className={cx("button")}>
                                            <div className={cx("btn btn--outlined pri cancel-purchase")} onClick={closeModal}>Trở lại</div>
                                            <button type="submit" className={cx("btn btn--filled pri confirm-cancel")}>Xác nhận</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* <% } %> */}

                    <div className={cx("purchase-item__button--right")}>
                        {/* <% if (purchaseHistory.order_status === 'Đã hủy') { %>
                        <a href="/account/purchase/<%= purchaseHistory.order_id %>">
                            <div className={cx("btn btn--outlined pri popup-btn")}>Xem chi tiết</div>
                        </a>
                        <% } else if (purchaseHistory.order_status === 'Chờ thanh toán') { %>
                        <a href="/account/purchase/<%= purchaseHistory.order_id %>">
                            <div className={cx("btn btn--outlined pri popup-btn")}>Xem chi tiết</div>
                        </a>

                        <% } else if (purchaseHistory.order_status === 'Hoàn thành') { %>
                        <a href="/account/purchase/<%= purchaseHistory.order_id %>">
                            <div className={cx("btn btn--outlined pri popup-btn")}>Xem chi tiết</div>
                        </a>
                        <% } else if (purchaseHistory.order_status === 'Đang giao hàng') { %>
                        <a href="/account/purchase/<%= purchaseHistory.order_id %>">
                            <div className={cx("btn btn--outlined pri popup-btn")}>Xem chi tiết</div>
                        </a>
                        <% } %>

                        <% if (purchaseHistory.order_status === 'Đã hủy') { %>
                        <% } else if (purchaseHistory.order_status === 'Chờ thanh toán') { %>
                        <a href="/order/payment?paying_method_id=<%= purchaseHistory.paying_method_id %>&order_id=<%= purchaseHistory.order_id %>">
                            <div className={cx("btn btn--filled pri")}>Thanh toán</div>
                        </a>
                        <% } else if (purchaseHistory.order_status === 'Hoàn thành') { %>
                        <a href="/account/feedback?order_id=<%= purchaseHistory.order_id %>">
                            <div className={cx("btn btn--filled pri")}><%= (purchaseHistory.order_details[0].feedback != 0) ? 'Xem đánh giá':'Đánh giá'%></div>
                        </a>
                        <% } else if (purchaseHistory.order_status === 'Đang giao hàng') { %>
                        <div className={cx("btn btn--filled pri disable")}>Đánh giá</div>
                        <% } %> */}
                    </div>

                </div>
            </div>
        </div >
    )
};
