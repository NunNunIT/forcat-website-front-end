"use client";

// import libs
import React, { useState } from "react";
import { CustomerOrderItem } from "./partials";

// import css
import "./page.css";

const fetchData: OrderItemProps[] = [
  {
    order_id: 'DH001', order_status: 'unpaid', order_total_price: 23600000, order_detail: [
      { product_id: 'P001', quantity: 2, unit_price: 11800000 },
      { product_id: 'P002', quantity: 2, unit_price: 12000000, price_discount: 11800000 },
    ]
  },
  {
    order_id: 'DH002', order_status: 'delivering', order_total_price: 23600000, order_detail: [
      { product_id: 'P001', quantity: 2, unit_price: 11800000 },
    ]
  },
  {
    order_id: 'DH003', order_status: 'finished', order_total_price: 23600000, order_detail: [
      { product_id: 'P001', quantity: 2, unit_price: 11800000 },
    ]
  },
  {
    order_id: 'DH004', order_status: 'cancel', order_total_price: 23600000, order_detail: [
      { product_id: 'P001', quantity: 2, unit_price: 11800000 },
    ]
  },
  {
    order_id: 'DH005', order_status: 'unpaid', order_total_price: 2360000, order_detail: [
      { product_id: 'P001', quantity: 2, unit_price: 11800000 },
    ]
  },
]


export default function PurchaseHistoryPage() {
  const [statusPurchaseHistory, setStatusPurchaseHistory] = useState('all');

  const orders = (() => fetchData)();

  const isActiveClass = (src_str: string, des_str: string): string => {
    return src_str === des_str ? 'is-active' : '';
  }

  return (
    <main className="account-purchase-history__main">
      <nav className="purchase-history__status-container">
        <button className={`purchase-history__status ${isActiveClass(statusPurchaseHistory, 'all')}`}
          onClick={() => setStatusPurchaseHistory('all')}
        >
          Tất cả
        </button>
        <button className={`purchase-history__status ${isActiveClass(statusPurchaseHistory, 'unpaid')}`}
          onClick={() => setStatusPurchaseHistory('unpaid')}
        >
          Chờ thanh toán
        </button>
        <button className={`purchase-history__status ${isActiveClass(statusPurchaseHistory, 'delivering')}`}
          onClick={() => setStatusPurchaseHistory('delivering')}
        >
          Đang giao hàng
        </button>
        <button className={`purchase-history__status ${isActiveClass(statusPurchaseHistory, 'finished')}`}
          onClick={() => setStatusPurchaseHistory('finished')}
        >
          Hoàn thành
        </button>
        <button className={`purchase-history__status ${isActiveClass(statusPurchaseHistory, 'cancel')}`}
          onClick={() => setStatusPurchaseHistory('cancel')}
        >
          Đã hủy
        </button>
      </nav>

      <section className="purchase-history__purchase-item-list">
        {orders.map((order: OrderItemProps, index: number) =>
          <CustomerOrderItem key={index} {...order} />)
        }
      </section>
    </main>
  )
}