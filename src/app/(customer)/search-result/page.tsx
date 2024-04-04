// import libs
import React from "react";
import Link from "next/link";
import Image from "next/image";

// import components
import { CustomerProductCard } from "@/components";

//import partials
import {
  SearchResultFilter,
  SearchResultSort,
  SearchResultHeadingMobile,
} from "./partials";

// import css
import "./page.css";

export default function SearchResultPage() {
  return (
    <main className="search-result__container">
      <SearchResultFilter />
      <SearchResultHeadingMobile />
      <section className="search-result__main">
        <h1 className="search-result__heading">
          Kết quả tìm kiếm
          <span className="search-result__heading-after"></span>
        </h1>
        <div className="search-result__main__heading">
          <p className="search-result__main__count">
            Tìm thấy
            <span className="search-result__highlight"> 31</span> kết quả cho từ
            khóa &quot;<span className="search-result__key">mèo</span>&quot;
          </p>
          <SearchResultSort />
        </div>

        <div className="search-result__main-card">
          <CustomerProductCard></CustomerProductCard>
          <CustomerProductCard></CustomerProductCard>
          <CustomerProductCard></CustomerProductCard>
          <CustomerProductCard></CustomerProductCard>
          <CustomerProductCard></CustomerProductCard>
          <CustomerProductCard></CustomerProductCard>
        </div>
      </section>
    </main>
  );
}
