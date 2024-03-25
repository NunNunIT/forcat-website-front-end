"use client";

// import libs
import React, { useRef, useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
// import components
import { CustomerSidebarAccount } from "@/components";
import { CustomerPurchaseItem } from "@/components";
// import css
import "./page.css";



export default function PurchaseHistoryPage() {
	const [purchaseHistory, setPurchaseHistory] = useState([
        { id: 1, status: 'Đã hủy' },
        { id: 2, status: 'Chờ thanh toán' },
        { id: 3, status: 'Hoàn thành' },
        { id: 4, status: 'Đang giao hàng' },
        // ... more items ...
    ]);

	const cancelPurchase = (id) => {
        setPurchaseHistory(purchaseHistory.map(item => 
            item.id === id ? { ...item, status: 'Đã hủy' } : item
        ));
    };
	
    return (
        <main className="account-container">
		{/* <%- include("../../components/sidebar_account") %> */}
        <CustomerSidebarAccount></CustomerSidebarAccount>
		<div className="purchase__main">
			<div className="purchase__status-container">
				<nav className="purchase__status">
					<a href="/account/purchase" id="purchase__status-all">Tất cả</a>
					<a href="/account/purchase?order_status=Chờ%20thanh%20toán" id="purchase__status-payment">Chờ thanh toán</a>
					<a href="/account/purchase?order_status=Đang%20giao%20hàng" id="purchase__status-deliver">Đang giao hàng</a>
					<a href="/account/purchase?order_status=Hoàn%20thành" id="purchase__status-finish">Hoàn thành</a>
					<a href="/account/purchase?order_status=Đã%20hủy" id="purchase__status-cancel">Đã hủy</a>
				</nav>
			</div>

			<section className="purchase__main__item">
				{/* <% if (purchaseHistory && purchaseHistory.length > 0) { %>
				<% for(let i = 0; i < purchaseHistory.length; i++) { %>
				<%- include('../../components/purchase-item', { purchaseHistory: purchaseHistory[i], toCurrency: formatFunction.toCurrency, index: i }) %>
				<% } %>
				<% } else { %> */}

				{/* <div className="purchase-empty">
					<img src="/imgs/empty_order.png" alt="empty_order"/>
					<p>Chưa có đơn hàng</p>
				</div> */}
				{purchaseHistory.map((item, index) => (
                        <CustomerPurchaseItem key={index} status={item.status} cancelPurchase={() => cancelPurchase(item.id)}/>
                ))}


			</section>
		</div>
	</main>
    )
}