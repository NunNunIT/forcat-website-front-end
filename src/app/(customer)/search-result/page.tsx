// import libs
import Image from "next/image";

// import components
import { CustomerProductCard } from "@/components";
// import { CustomerProductSlider, CustomerRating } from "@/components";
// import {
//   ProductBuyForm,
//   ProductDescription,
//   ProductSpecification,
// } from "./partials";

// import css
import "./page.css";

export default function SearchResultPage() {
  return (
    <main className="search-result__container">
      <section className="search-result__filter">
        <div className="search-result__filter-normal">
          <h5 className="search-result__filter-normal__title">Bộ lọc:</h5>

          <div className="search-result__filter-normal__content">
            <p>Danh mục</p>
            <span className="material-icons-round dropdown-button">
              expand_more
            </span>
            <div className="dropdown-content">
              <div className="filter-list">
                <div className="dropdown-options">
                  <input
                    className="filter-option"
                    type="radio"
                    id="type1"
                    value="type1"
                  />
                  <label htmlFor="type1" className="filter-label">
                    Phân loại 1
                  </label>
                </div>
                <div className="dropdown-options">
                  {/* <input className="filter-option" type="radio" id="type2" value="type2"> */}
                  {/* <label for="type2" className="filter-label">Phân loại 2</label> */}
                </div>
                <div className="dropdown-options">
                  {/* <input className="filter-option" type="radio" id="type3" value="type3"> */}
                  {/* <label for="type3" className="filter-label">Phân loại 3</label> */}
                </div>
                <div className="dropdown-options">
                  {/* <input className="filter-option" type="radio" id="type4" value="type"> */}
                  {/* <label for="type4" className="filter-label">Phân loại 4</label> */}
                </div>
              </div>
              <div className="filter-dropdown__button">
                <button className="btn btn--outlined pri" type="submit">
                  Hủy bộ lọc này
                </button>
                <button className="btn btn--filled pri" type="submit">
                  Xem <strong>13</strong> sản phẩm
                </button>
              </div>
            </div>
          </div>

          <div className="search-result__filter-normal__content">
            <p>Giá tiền</p>
            <span className="material-icons-round dropdown-button">
              expand_more
            </span>
            <form
              action="/search/results"
              method="GET"
              className="dropdown-content"
            >
              <div className="filter-list">
                <div className="dropdown-options">
                  {/* <input className="filter-option" type="radio" id="less-than-5m" value="less-than-5m"> */}
                  <label className="filter-label">Dưới 5 triệu</label>
                </div>
                <div className="dropdown-options">
                  {/* <input className="filter-option" type="radio" id="5m-10m" value="5m-10m"> */}
                  <label className="filter-label">Từ 5tr - 10tr</label>
                </div>
                <div className="dropdown-options">
                  {/* <input className="filter-option" type="radio" id="10m-15m" value="10m-15m"> */}
                  <label className="filter-label">Từ 10tr - 15tr</label>
                </div>
                <div className="dropdown-options">
                  {/* <input className="filter-option" type="radio" id="15m-20m" value="15m-20m"> */}
                  <label className="filter-label">Từ 15tr - 20tr</label>
                </div>
                <div className="dropdown-options">
                  {/* <input className="filter-option" type="radio" id="greater-than-20m" value="greater-than-20m"> */}
                  <label className="filter-label">Trên 20 triệu</label>
                </div>
              </div>
              <div className="filter-dropdown__button">
                <button className="btn btn--outlined pri" type="submit">
                  Hủy bộ lọc này
                </button>
                <button className="btn btn--filled pri" type="submit">
                  Xem <strong>13</strong> sản phẩm
                </button>
              </div>
            </form>
          </div>

          <div className="search-result__filter-normal__content">
            <p>Đánh giá</p>
            <span className="material-icons-round dropdown-button">
              expand_more
            </span>
            <div className="dropdown-content">
              <div className="filter-list">
                <div className="dropdown-options">
                  {/* <input className="filter-option" type="radio" id="extend1" value="extend1"> */}
                  {/* <label for="extend1" className="filter-label">Tiện ích 1</label> */}
                </div>
                <div className="dropdown-options">
                  {/* <input className="filter-option" type="radio" id="extend2" value="extend2"> */}
                  {/* <label for="extend2" className="filter-label">Tiện ích 2</label> */}
                </div>
                <div className="dropdown-options">
                  {/* <input className="filter-option" type="radio" id="extend3" value="extend3"> */}
                  {/* <label for="extend3" className="filter-label">Tiện ích 3</label> */}
                </div>
                <div className="dropdown-options">
                  {/* <input className="filter-option" type="radio" id="extend4" value="extend4"> */}
                  {/* <label for="extend4" className="filter-label">Tiện ích 4</label> */}
                </div>
                <div className="dropdown-options">
                  {/* <input className="filter-option" type="radio" id="extend5" value="extend5"> */}
                  {/* <label for="extend5" className="filter-label">Tiện ích 5</label> */}
                </div>
              </div>
              <div className="filter-dropdown__button">
                <button className="btn btn--outlined pri" type="submit">
                  Hủy bộ lọc này
                </button>
                <button className="btn btn--filled pri" type="submit">
                  Xem <strong>13</strong> sản phẩm
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <% if (productListResults.totalRow) { %> */}
        <div className="search-result__filter-brand">
          <p className="search-result__filter-brand__title">Thương hiệu:</p>
          <div className="search-result__filter-brand__content">
            <image className="search-result__filter-brand__img" />
          </div>
          {/* <div className="search-result__filter-brand__content">
					<image className="search-result__filter-brand__img" src="/imgs/logo-brand/panasonic.png" alt="Panasonic"/>
				</div>
				<div className="search-result__filter-brand__content">
					<image className="search-result__filter-brand__img" src="/imgs/logo-brand/samsung.png" alt="Samsung"/>
				</div>
				<div className="search-result__filter-brand__content">
					<image className="search-result__filter-brand__img" src="/imgs/logo-brand/toshiba.png" alt="Toshiba"/>
				</div>
				<div className="search-result__filter-brand__content">
					<image className="search-result__filter-brand__img" src="/imgs/logo-brand/sharp.png" alt="Sharp"/>
				</div>
				<div className="search-result__filter-brand__content">
					<image className="search-result__filter-brand__img" src="/imgs/logo-brand/aqua.png" alt="Aqua"/>
				</div>
				<div className="search-result__filter-brand__content">
					<image className="search-result__filter-brand__img" src="/imgs/logo-brand/casper.png" alt="Casper"/>
				</div>
				<div className="search-result__filter-brand__content">
					<image className="search-result__filter-brand__img" src="/imgs/logo-brand/electrolux.png" alt="Electrolux"/>
				</div> */}
        </div>
        {/* <% } else { %> */}
        {/* <div></div> */}
        {/* <% } %> */}
      </section>
      {/* <div className="search-result__heading--disable">
        <p className="search-result__sort--disable">Nổi bật</p>
        <p className="search-result__sort--disable">Bán chạy</p>
        <p className="search-result__sort--disable">
          Giá <span className="material-symbols-outlined">swap_vert</span>
        </p>
        <span className="material-symbols-outlined" id="btn-filter">
          filter_alt
        </span>
      </div> */}
      <section className="search-result__main">
        <div className="search-result__main__heading">
          {/* <% if (productListResults.searchKey ?? productListResults.category_name) { %> */}
          <p className="search-result__main__count">
            Tìm thấy
            <span className="search-result__highlight"> 31</span> kết quả cho từ
            khóa "<span className="search-result__key">mèo</span>"
          </p>
          {/* <% } else { %>
				<p className="search-result__main__count">
					Tìm thấy
					<span className="search-result__highlight"><%= productListResults.totalRow %></span>
					kết quả
				</p>
				<% } %> */}
          <div className="search-result__form-check">
            {/* <input type="checkbox" className="form-check-input" value="something" id="form-check-input__discount"> */}
            {/* <label className="form-check-label" for="form-check-input__discount">Giảm giá</label> */}
          </div>
        </div>
        <div className="filter-popup">
          <form className="filter-popup__main">
            <div className="filter-popup__section">
              <label>
                <strong>Danh mục:</strong>
              </label>
              <div className="filter-popup__section__main">
                <div className="filter-popup-options">
                  {/* <input className="filter-option" type="radio" id="less-than-5m-phone" name="less-than-5m" value=""> */}
                  <label className="filter-label">Dưới 5 triệu</label>
                </div>
                <div className="filter-popup-options">
                  {/* <input className="filter-option" type="radio" id="5m-10m-phone" name="sort" value="5m-10m"> */}
                  <label className="filter-label">Từ 5tr - 10tr</label>
                </div>
                <div className="filter-popup-options">
                  {/* <input className="filter-option" type="radio" id="10m-15m-phone" name="sort" value="10m-15m"> */}
                  <label className="filter-label">Từ 10tr - 15tr</label>
                </div>
                <div className="filter-popup-options">
                  {/* <input className="filter-option" type="radio" id="15m-20m-phone" name="sort" value="15m-20m"> */}
                  <label className="filter-label">Từ 15tr - 20tr</label>
                </div>
                <div className="filter-popup-options">
                  {/* <input className="filter-option" type="radio" id="greater-than-20m-phone" name="sort" value="greater-than-20m"> */}
                  <label className="filter-label">Trên 20 triệu</label>
                </div>
              </div>
            </div>
            <hr />
            <div className="filter-popup__section">
              <label>
                <strong>Giá tiền:</strong>
              </label>
              <div className="filter-popup__section__main">
                <div className="filter-popup-options">
                  {/* <input className="filter-option" type="radio" id="type1-phone" value="type1"> */}
                  {/* <label for="type1" className="filter-label">Phân loại 1</label> */}
                </div>
                <div className="filter-popup-options">
                  {/* <input className="filter-option" type="radio" id="type2-phone" value="type2"> */}
                  {/* <label for="type2" className="filter-label">Phân loại 2</label> */}
                </div>
                <div className="filter-popup-options">
                  {/* <input className="filter-option" type="radio" id="type3-phone" value="type3"> */}
                  {/* <label for="type3" className="filter-label">Phân loại 3</label> */}
                </div>
                <div className="filter-popup-options">
                  {/* <input className="filter-option" type="radio" id="type4-phone" value="type4"> */}
                  {/* <label for="type4" className="filter-label">Phân loại 4</label> */}
                </div>
              </div>
            </div>
            <div className="filter-popup__section">
              <label>
                <strong>Đánh giá:</strong>
              </label>
              <div className="filter-popup__section__main">
                <div className="filter-popup-options">
                  {/* <input className="filter-option" type="radio" id="extend1-phone" value="extend1"> */}
                  {/* <label for="extend1" className="filter-label">Tiện ích 1</label> */}
                </div>
                <div className="filter-popup-options">
                  {/* <input className="filter-option" type="radio" id="extend2-phone" value="extend2"> */}
                  {/* <label for="extend2" className="filter-label">Tiện ích 2</label> */}
                </div>
                <div className="filter-popup-options">
                  {/* <input className="filter-option" type="radio" id="extend3-phone" value="extend3"> */}
                  {/* <label for="extend3" className="filter-label">Tiện ích 3</label> */}
                </div>
                <div className="filter-popup-options">
                  {/* <input className="filter-option" type="radio" id="extend4-phone" value="extend4"> */}
                  {/* <label for="extend4" className="filter-label">Tiện ích 4</label> */}
                </div>
              </div>
            </div>
            <div className="filter-popup__section">
              <label>
                <strong>Thương hiệu:</strong>
              </label>
              <div className="filter-popup__section__main">
                <div className="search-result__filter-brand__content">
                  <image className="search-result__filter-brand__img" />
                </div>
              </div>
            </div>
            <div className="filter-popup__btn">
              <button className="btn btn--outlined pri" id="btn-filter-cancel">
                Xóa bộ lọc
              </button>
              <button className="btn btn--filled pri" type="submit">
                Áp dụng
              </button>
            </div>
          </form>
        </div>

        <div className="search-result__form-check-disable__group">
          <div className="search-result__form-check-disable">
            {/* <input type="checkbox" className="form-check-input" value="something" id="form-check-input__discount-phone"> */}
            {/* <label className="form-check-label" for="form-check-input__discount-phone">Giảm giá</label> */}
          </div>
        </div>

        {/* <% if (productListResults.totalRow) { %> */}
        <div className="search-result__main-card">
          <CustomerProductCard></CustomerProductCard>
          <CustomerProductCard></CustomerProductCard>
          <CustomerProductCard></CustomerProductCard>
          <CustomerProductCard></CustomerProductCard>
          <CustomerProductCard></CustomerProductCard>
          <CustomerProductCard></CustomerProductCard>
          {/* <% productListResults.products.slice().forEach(product => { %>
				<%- include('../../components/product-card', {product: product, toCurrency: formatFunction.toCurrency}) %>
				<% }) %>
				<%- include('../../components/pagination', {pagination: productListResults}) %> */}
        </div>
        {/* // <% } else { %>
			// <div className="search-results--empty">
			// 	<img src="/imgs/search-result--empty.png" alt="empty">
			// </div>
			// <% } %> */}
      </section>
    </main>
  );
}
