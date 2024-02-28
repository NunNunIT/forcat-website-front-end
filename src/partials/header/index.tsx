import Link from "next/link";

// use bind from classnames
import classNameNames from "classnames/bind";

// use scss
import styles from "./styles.module.css";

const cx = classNameNames.bind(styles);

export default function Header() {
  return (
    <header className={cx("header")}>
      <nav className={cx("header__nav")}>
        <div className={cx("header__nav-container")}>
          <div className={cx("header__support-info")}>
            <div className={cx("dropdown-help")}>
              <a href="#">
                <span className="material-symbols-outlined">help</span>
                Hỗ trợ
              </a>
              <div className={cx("dropdown-help__content-container")}>
                <div className={cx("dropdown-help__content")}>
                  <img src="/imgs/qr-zalo.png" alt="help" />
                  <p>Quét mã QR để gửi thông tin cần hỗ trợ đến chúng tôi</p>
                </div>
              </div>
            </div>
            <a href="#" className={cx("header__support-info__hotline")}>
              <span className="material-symbols-outlined">call</span>
              Hotline: 1900 123 789
            </a>
          </div>
          <div className={cx("header__logo--top")}>
            <a href="/">
              <img src="/imgs/logo-white.png" alt="TECHTWO." />
            </a>
          </div>
          {/* <div className={cx("header__about-account">
          <!-- bắt đầu dropdown-noti -->
          <div className={cx("dropdown-noti">
            <a href="/notification/order" className={cx("header__nofitications">
              <span className={cx("material-symbols-outlined">notifications</span>
              Thông báo
            </a>
            <!-- Khi chưa đăng nhập -->
            <% if (!user) { %>
            <!-- bắt đầu dropdown-noti khi chưa đăng nhập -->
            <div className={cx("dropdown-noti__content-container">
              <div className={cx("dropdown-noti__content">
                <div className={cx("dropdown-noti__unauth-user">
                  <img src="/imgs/unauth-user.png" alt="unauth-user" className={cx("unauth-user__img">
                  <span className={cx("unauth-content__noti">Đăng nhập để xem Thông báo</span>
                </div>
                <div className={cx("unauth-content__btn">
                  <a href="/auth/login">Đăng nhập</a>
                  <a href="/auth/register">Đăng ký</a>
                </div>
              </div>
            </div>
            <!-- kết thúc dropdown-noti khi chưa đăng nhập -->
  
            <% } else { %>
            <div className={cx("dropdown-noti__content-container">
              <% if (user.noti.length > 0) { %>
              <div className={cx("dropdown-noti__content">
                <div className={cx("dropdown-noti__content-title">Thông báo vừa nhận</div>
                <% let l = (user.noti.length > 4) ? 4 : user.noti.length %>
                <% for (let i = 0; i < l; i++) { %>
                <%- include('../components/noti-content-dropdown', {noti: user.noti[i]}) %>
                <% } %>
                <a href="/notification/order" className={cx("dropdown-noti__btn-read-all">Xem tất cả</a>
              </div>
              <% } else { %>
              <!-- bắt đầu dropdown-noti khi đã đăng nhập__rỗng -->
              <div className={cx("dropdown-noti__content">
                <div className={cx("dropdown-noti--empty">
                  <img src="/imgs/nothing-result.png" alt="empty" className={cx("dropdown-noti__img--empty">
                  <span className={cx("empty-content__noti">Bạn chưa có thông báo</span>
                </div>
              </div>
              <!-- kết thúc dropdown-noti khi đã đăng nhập__rỗng -->
              <% } %>
            </div>
            <% } %>
          </div>
          <!-- kết thúc dropdown-noti khi đã đăng nhập -->
          <!-- Khi đã đăng nhập -->
          <% if (user) { %>
          <div className={cx("dropdown-account">
            <a href="/account/information">
              <div className={cx("header__auth">
                <img src="/imgs/user_avt_img/<%= (user.user.user_avt_img) ? user.user.user_avt_img : 'default.png' %>" alt="avatar">
                <span><%= user.user.user_name %></span>
              </div>
            </a>
            <div className={cx("dropdown-account__content-container">
              <div className={cx("dropdown-account__content">
                <a href="/account/information" id="btn-dropdown-account">Tài khoản của tôi</a>
                <a href="/account/purchase" id="btn-dropdown-purchase-history">Lịch sử đơn mua</a>
                <a href="/auth/logout" id="btn-dropdown-logout">Đăng xuất</a>
              </div>
            </div>
          </div>
          <!-- Kết thúc khi đã đăng nhập -->
          <% } else { %>
          <!-- Khi chưa đăng nhập  -->
          <div className={cx("header__auth">
            <span className={cx("material-symbols-outlined">account_circle</span>
            <a href="/auth/login" className={cx("header__auth-login">Đăng nhập</a>
            <span>|</span>
            <a href="/auth/register" className={cx("header__auth-register">Đăng ký</a>
          </div>
          <!-- Kết thúc khi chưa đăng nhập -->
          <% } %>
        </div> */}
          {/* <!-- Hiển thị khi responsive điện thoại --> */}
          <div className={cx("header__nav--disable")}>
            <a href="/notification/order" className={cx("noti--disable")}>
              <span className="material-symbols-outlined" title="Thông báo">
                notifications
              </span>
            </a>
            <a href="#" className={cx("help--disable")}>
              <span className="material-symbols-outlined" title="Hỗ trợ">
                help
              </span>
            </a>
          </div>
          {/* <!-- Kết thúc hiển thị khi ở màn hình điện thoại --> */}
        </div>
        {/* <!-- kết thúc dropdown-noti --> */}
      </nav>

      <div className={cx("header__container")}>
        <div className={cx("header__main")}>
          <Link href="/">
            <img
              className={cx("header__logo")}
              src="/imgs/logo-blue.png"
              alt="TECHTWO."
            />
          </Link>
          <form
            className={cx("header__search-bar")}
            action="/search/results"
            method="GET">
            <input
              type="search"
              name="searchKey"
              placeholder="Bạn tìm gì..."
              // value="<%= (header.searchKey) ?? '' %>"
            />
            <button className={cx("header__search-btn")} type="submit">
              <span className="material-symbols-outlined">search</span>
            </button>
          </form>

          <div className={cx("dropdown-cart")}>
            <a
              href="/order/cart"
              className={cx("header__cart-container")}
              title="Giỏ hàng">
              <div className={cx("header__cart")}>
                <span className="material-symbols-outlined">shopping_cart</span>
                {/* <% if (user) { %> */}
                <div
                  className={cx("header__cart__number-badge")}
                  aria-hidden="true">
                  user.countCart
                </div>
                {/* <% } %> */}
              </div>
            </a>
            {/* <div className={cx("dropdown-cart__content-container">
            <!-- Khi chưa đăng nhập -->
            <% if (!user) { %>
            <!-- dropdown giỏ hàng khi chưa đăng nhập -->
            <div className={cx("dropdown-cart__content">
              <div className={cx("dropdown-cart__unauth-user">
                <img src="/imgs/unauth-user.png" alt="unauth-user" className={cx("unauth-user__img">
                <span className={cx("unauth-content__cart">Đăng nhập để xem Giỏ hàng</span>
              </div>
              <div className={cx("unauth-content__btn">
                <a href="/auth/login">Đăng nhập</a>
                <a href="/auth/register">Đăng ký</a>
              </div>
            </div>
            <!-- kết thúc dropdown giỏ hàng khi chưa đăng nhập -->
            <% } else { %>
            <!-- dropdown giỏ hàng khi đã đăng nhập -->
            <div className={cx("dropdown-cart__content">
              <% if (user.countCart) { %>
              <div className={cx("dropdown-cart__content-title">Sản phẩm vừa thêm</div>
              <% let l = (user.countCart > 5) ? 5 : user.countCart %>
              <% for (let i = 0; i < l; i++) { %>
              <%- include('../components/cart-dropdown-item', {cart: user.shortCarts[i], toCurrency: formatFunction.toCurrency }) %>
              <% } %>
              <a href="/order/cart" className={cx("btn-cart">
                <div className={cx("btn btn--filled pri">Xem giỏ hàng</div>
              </a>
              <% } else { %>
              <!-- bắt đầu dropdown giỏ hàng khi đã đăng nhập__rỗng -->
              <div className={cx("dropdown-cart__content-title dropdown-cart__content-title--empty">Sản phẩm vừa thêm</div>
              <div className={cx("dropdown-cart--empty">
                <img src="/imgs/cart/empty-cart.png" alt="empty" className={cx("dropdown-cart__img--empty">
                <span className={cx("empty-content__cart">Giỏ hàng trống</span>
              </div>
              <a href="/order/cart" className={cx("btn-cart btn-cart--empty">
                <div className={cx("btn btn--filled pri">Xem giỏ hàng</div>
              </a>
              <!-- kết thúc dropdown giỏ hàng khi đã đăng nhập__rỗng -->
              <% } %>
            </div>
            <!-- kết thúc dropdown giỏ hàng khi đã đăng nhập -->
            <% } %>
          </div> */}
          </div>
        </div>
      </div>
    </header>
  );
}

/*
<header className={cx("header">
	<nav className={cx("header__nav">
		<div className={cx("header__nav-container">
			<div className={cx("header__support-info">
				<div className={cx("dropdown-help">
					<a href="#">
						<span className={cx("material-symbols-outlined">help</span>
						Hỗ trợ
					</a>
					<div className={cx("dropdown-help__content-container">
						<div className={cx("dropdown-help__content">
							<img src="/imgs/qr-zalo.png" alt="help">
							<p>Quét mã QR để gửi thông tin cần hỗ trợ đến chúng tôi</p>
						</div>
					</div>
				</div>
				<a href="#" className={cx("header__support-info__hotline">
					<span className={cx("material-symbols-outlined">call</span>
					Hotline: 1900 123 789
				</a>
			</div>
			<div className={cx("header__logo--top">
				<a href="/">
					<img src="/imgs/logo-white.png" alt="TECHTWO.">
				</a>
			</div>
			<div className={cx("header__about-account">
				<!-- bắt đầu dropdown-noti -->
				<div className={cx("dropdown-noti">
					<a href="/notification/order" className={cx("header__nofitications">
						<span className={cx("material-symbols-outlined">notifications</span>
						Thông báo
					</a>
					<!-- Khi chưa đăng nhập -->
					<% if (!user) { %>
					<!-- bắt đầu dropdown-noti khi chưa đăng nhập -->
					<div className={cx("dropdown-noti__content-container">
						<div className={cx("dropdown-noti__content">
							<div className={cx("dropdown-noti__unauth-user">
								<img src="/imgs/unauth-user.png" alt="unauth-user" className={cx("unauth-user__img">
								<span className={cx("unauth-content__noti">Đăng nhập để xem Thông báo</span>
							</div>
							<div className={cx("unauth-content__btn">
								<a href="/auth/login">Đăng nhập</a>
								<a href="/auth/register">Đăng ký</a>
							</div>
						</div>
					</div>
					<!-- kết thúc dropdown-noti khi chưa đăng nhập -->

					<% } else { %>
					<div className={cx("dropdown-noti__content-container">
						<% if (user.noti.length > 0) { %>
						<div className={cx("dropdown-noti__content">
							<div className={cx("dropdown-noti__content-title">Thông báo vừa nhận</div>
							<% let l = (user.noti.length > 4) ? 4 : user.noti.length %>
							<% for (let i = 0; i < l; i++) { %>
							<%- include('../components/noti-content-dropdown', {noti: user.noti[i]}) %>
							<% } %>
							<a href="/notification/order" className={cx("dropdown-noti__btn-read-all">Xem tất cả</a>
						</div>
						<% } else { %>
						<!-- bắt đầu dropdown-noti khi đã đăng nhập__rỗng -->
						<div className={cx("dropdown-noti__content">
							<div className={cx("dropdown-noti--empty">
								<img src="/imgs/nothing-result.png" alt="empty" className={cx("dropdown-noti__img--empty">
								<span className={cx("empty-content__noti">Bạn chưa có thông báo</span>
							</div>
						</div>
						<!-- kết thúc dropdown-noti khi đã đăng nhập__rỗng -->
						<% } %>
					</div>
					<% } %>
				</div>
				<!-- kết thúc dropdown-noti khi đã đăng nhập -->
				<!-- Khi đã đăng nhập -->
				<% if (user) { %>
				<div className={cx("dropdown-account">
					<a href="/account/information">
						<div className={cx("header__auth">
							<img src="/imgs/user_avt_img/<%= (user.user.user_avt_img) ? user.user.user_avt_img : 'default.png' %>" alt="avatar">
							<span><%= user.user.user_name %></span>
						</div>
					</a>
					<div className={cx("dropdown-account__content-container">
						<div className={cx("dropdown-account__content">
							<a href="/account/information" id="btn-dropdown-account">Tài khoản của tôi</a>
							<a href="/account/purchase" id="btn-dropdown-purchase-history">Lịch sử đơn mua</a>
							<a href="/auth/logout" id="btn-dropdown-logout">Đăng xuất</a>
						</div>
					</div>
				</div>
				<!-- Kết thúc khi đã đăng nhập -->
				<% } else { %>
				<!-- Khi chưa đăng nhập  -->
				<div className={cx("header__auth">
					<span className={cx("material-symbols-outlined">account_circle</span>
					<a href="/auth/login" className={cx("header__auth-login">Đăng nhập</a>
					<span>|</span>
					<a href="/auth/register" className={cx("header__auth-register">Đăng ký</a>
				</div>
				<!-- Kết thúc khi chưa đăng nhập -->
				<% } %>
			</div>
			<!-- Hiển thị khi responsive điện thoại -->
			<div className={cx("header__nav--disable">
				<a href="/notification/order" className={cx("noti--disable">
					<span className={cx("material-symbols-outlined" title="Thông báo">notifications</span>
				</a>
				<a href="#" className={cx("help--disable">
					<span className={cx("material-symbols-outlined" title="Hỗ trợ">help</span>
				</a>
			</div>
			<!-- Kết thúc hiển thị khi ở màn hình điện thoại -->
		</div>
		<!-- kết thúc dropdown-noti -->

	</nav>

	<div className={cx("header__container">
		<div className={cx("header__main">
			<a href="/">
				<img className={cx("header__logo" src="/imgs/logo-blue.png" alt="TECHTWO.">
			</a>
			<form className={cx("header__search-bar" action="/search/results" method="GET">
				<input type="search" name="searchKey" placeholder="Bạn tìm gì..." value="<%= (header.searchKey) ?? '' %>">
				<button className={cx("header__search-btn" type="submit">
					<span className={cx("material-symbols-outlined">search</span>
				</button>
			</form>

			<div className={cx("dropdown-cart">
				<a href="/order/cart" className={cx("header__cart-container" title="Giỏ hàng">
					<div className={cx("header__cart">
						<span className={cx("material-symbols-outlined">shopping_cart</span>
						<% if (user) { %>
						<div className={cx("header__cart__number-badge" aria-hidden="true"><%= user.countCart %></div>
						<% } %>
					</div>
				</a>
				<div className={cx("dropdown-cart__content-container">
					<!-- Khi chưa đăng nhập -->
					<% if (!user) { %>
					<!-- dropdown giỏ hàng khi chưa đăng nhập -->
					<div className={cx("dropdown-cart__content">
						<div className={cx("dropdown-cart__unauth-user">
							<img src="/imgs/unauth-user.png" alt="unauth-user" className={cx("unauth-user__img">
							<span className={cx("unauth-content__cart">Đăng nhập để xem Giỏ hàng</span>
						</div>
						<div className={cx("unauth-content__btn">
							<a href="/auth/login">Đăng nhập</a>
							<a href="/auth/register">Đăng ký</a>
						</div>
					</div>
					<!-- kết thúc dropdown giỏ hàng khi chưa đăng nhập -->
					<% } else { %>
					<!-- dropdown giỏ hàng khi đã đăng nhập -->
					<div className={cx("dropdown-cart__content">
						<% if (user.countCart) { %>
						<div className={cx("dropdown-cart__content-title">Sản phẩm vừa thêm</div>
						<% let l = (user.countCart > 5) ? 5 : user.countCart %>
						<% for (let i = 0; i < l; i++) { %>
						<%- include('../components/cart-dropdown-item', {cart: user.shortCarts[i], toCurrency: formatFunction.toCurrency }) %>
						<% } %>
						<a href="/order/cart" className={cx("btn-cart">
							<div className={cx("btn btn--filled pri">Xem giỏ hàng</div>
						</a>
						<% } else { %>
						<!-- bắt đầu dropdown giỏ hàng khi đã đăng nhập__rỗng -->
						<div className={cx("dropdown-cart__content-title dropdown-cart__content-title--empty">Sản phẩm vừa thêm</div>
						<div className={cx("dropdown-cart--empty">
							<img src="/imgs/cart/empty-cart.png" alt="empty" className={cx("dropdown-cart__img--empty">
							<span className={cx("empty-content__cart">Giỏ hàng trống</span>
						</div>
						<a href="/order/cart" className={cx("btn-cart btn-cart--empty">
							<div className={cx("btn btn--filled pri">Xem giỏ hàng</div>
						</a>
						<!-- kết thúc dropdown giỏ hàng khi đã đăng nhập__rỗng -->
						<% } %>
					</div>
					<!-- kết thúc dropdown giỏ hàng khi đã đăng nhập -->
					<% } %>
				</div>
			</div>

		</div>
	</div>

	<ul className={cx("header__menu menu">
		<li>
			<div className={cx("menu__cate menu__item">
				<p className={cx("menu__item-p">Điện máy</p>
				<span className={cx("material-symbols-outlined"> expand_more </span>
			</div>

			<ul className={cx("header__cate-dropdown cate-dropdown">
				<% header.cates.forEach(cate => { %>
				<% if (cate.categorry_type == 'Điện máy') { %>
				<li className={cx("header__cate-dropdown-wrapper">
					<a href="/search/results?category_id=<%= cate.category_id %>" className={cx("cate-dropdown__item">
						<img src="/imgs/categories/<%= cate.category_img %>" alt="<%= cate.category_name %>">
						<p><%= cate.category_name %> (<%= cate.category_count %>)</p>
					</a>

					<div className={cx("cate-dropdown__content">
						<div className={cx("cate-dropdown__title">
							<h4>Sản phẩm bán chạy nhất</h4>
							<a href='/search/results?category_id=<%= cate.category_id %>'>
								<p>Xem tất cả</p>
								<span className={cx("material-symbols-outlined"> chevron_right </span>
							</a>
						</div>

						<% if(cate.category_count) { %>
						<div className={cx("cate-dropdown__product">
							<% cate.bestSellerProductsOfCates.forEach(product => { %>
							<a href="/search/<%= product.product_variant_id %>?category_id=<%= product.category_id %>">
								<img src="/imgs/product_image/P<%= product.product_id %>/<%= product.product_avt_img %>" alt="<%= product.product_name %>">
								<div className={cx("cate-dropdown__product-rating">
									<% if (product.product_rate) { %>
									<!-- In ra số sao hiện có -->
									<% const productRateInt = Math.floor(product.product_rate) %>

									<% for (let i = 0; i < productRateInt; i++) { %>
									<span className={cx("material-symbols-outlined">grade</span>
									<% } %>

									<!-- In ra số sao lẻ -->
									<% if (product.product_rate - productRateInt >= 0.5 && product.product_rate - productRateInt < 1) { %>
									<span className={cx("material-symbols-outlined">star_half</span>
									<% } else if (product.product_rate!= 5 && product.product_rate - productRateInt < 0.5 && product.product_rate - productRateInt >= 0) { %>
									<span className={cx("material-symbols-outlined" style="font-variation-settings: 'FILL' 0;"> grade </span>
									<% } %>

									<!-- In ra số sao trống -->
									<% for (let i = 0; i < Math.floor(5 - product.product_rate - 1); i++) {  %>
									<span className={cx("material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">grade</span>
									<% } %>
									<% } %>
									<p>(<%= product.product_rate %>)</p>
								</div>
								<p className={cx("cate-dropdown__product-name"><%= product.product_name %></p>
								<% const discountedPriceCate = Math.round(product.product_variant_price - product.product_variant_price * (product.discount_amount / 100)) %>
								<p className={cx("cate-dropdown__product-price"><%= formatFunction.toCurrency(product.product_variant_price) %><del><% product.discount_amount ? formatFunction.toCurrency(discountedPriceCate) : '' %></del></p>
							</a>
							<% }) %>
						</div>
						<% } else { %>
						<div className={cx("product__not-found">
							<img src="/imgs/nothing-result.png" alt="Not found">
							<p>Không tìm thấy sản phẩm! </p>
						</div>
						<% } %>
					</div>
				</li>
				<% } %>
				<% }) %>
			</ul>
		</li>
		<li>
			<div className={cx("menu__cate menu__item">
				<p className={cx("menu__item-p">Điện tử</p>
				<span className={cx("material-symbols-outlined"> expand_more </span>
			</div>

			<ul className={cx("header__cate-dropdown cate-dropdown">
				<% header.cates.forEach(cate => { %>
				<% if (cate.categorry_type == 'Điện tử') { %>
				<li className={cx("header__cate-dropdown-wrapper">
					<a href="/search/results?category_id=<%= cate.category_id %>" className={cx("cate-dropdown__item">
						<img src="/imgs/categories/<%= cate.category_img %>" alt="<%= cate.category_name %>">
						<p><%= cate.category_name %> (<%= cate.category_count %>)</p>
					</a>

					<div className={cx("cate-dropdown__content">
						<div className={cx("cate-dropdown__title">
							<h4>Sản phẩm bán chạy nhất</h4>
							<a href='/search/results?category_id=<%= cate.category_id %>'>
								<p>Xem tất cả</p>
								<span className={cx("material-symbols-outlined"> chevron_right </span>
							</a>
						</div>
						<% if(cate.category_count) { %>
						<div className={cx("cate-dropdown__product">
							<% cate.bestSellerProductsOfCates.forEach(product => { %>
							<a href="/search/<%= product.product_variant_id %>?category_id=<%= product.category_id %>">
								<img src="/imgs/product_image/P<%= product.product_id %>/<%= product.product_avt_img %>" alt="<%= product.product_name %>">
								<div className={cx("cate-dropdown__product-rating">
									<% if (product.product_rate) { %>
									<!-- In ra số sao hiện có -->
									<% const productRateInt = Math.floor(product.product_rate) %>

									<% for (let i = 0; i < productRateInt; i++) { %>
									<span className={cx("material-symbols-outlined">grade</span>
									<% } %>

									<!-- In ra số sao lẻ -->
									<% if (product.product_rate - productRateInt >= 0.5 && product.product_rate - productRateInt < 1) { %>
									<span className={cx("material-symbols-outlined">star_half</span>
									<% } else if (product.product_rate!= 5 && product.product_rate - productRateInt < 0.5 && product.product_rate - productRateInt >= 0) { %>
									<span className={cx("material-symbols-outlined" style="font-variation-settings: 'FILL' 0;"> grade </span>
									<% } %>

									<!-- In ra số sao trống -->
									<% for (let i = 0; i < Math.floor(5 - product.product_rate - 1); i++) {  %>
									<span className={cx("material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">grade</span>
									<% } %>
									<% } %>
									<p>(<%= product.product_rate %>)</p>
								</div>
								<p className={cx("cate-dropdown__product-name"><%= product.product_name %></p>
								<% const discountedPriceCate = Math.round(product.product_variant_price - product.product_variant_price * (product.discount_amount / 100)) %>
								<p className={cx("cate-dropdown__product-price"><%= formatFunction.toCurrency(product.product_variant_price) %><del><% product.discount_amount ? formatFunction.toCurrency(discountedPriceCate) : '' %></del></p>
							</a>
							<% }) %>
						</div>
						<% } else { %>
						<div className={cx("product__not-found">
							<img src="/imgs/nothing-result.png" alt="Not found">
							<p>Không tìm thấy sản phẩm! </p>
						</div>
						<% } %>
					</div>
				</li>
				<% } %>
				<% }) %>
			</ul>
		</li>
		<li>
			<div className={cx("menu__cate menu__item">
				<p className={cx("menu__item-p">Nhà bếp</p>
				<span className={cx("material-symbols-outlined"> expand_more </span>
			</div>

			<ul className={cx("header__cate-dropdown cate-dropdown">
				<% header.cates.forEach(cate => { %>
				<% if (cate.categorry_type == 'Đồ dùng nhà bếp') { %>
				<li className={cx("header__cate-dropdown-wrapper">
					<a href="/search/results?category_id=<%= cate.category_id %>" className={cx("cate-dropdown__item">
						<img src="/imgs/categories/<%= cate.category_img %>" alt="<%= cate.category_name %>">
						<p><%= cate.category_name %> (<%= cate.category_count %>)</p>
					</a>

					<div className={cx("cate-dropdown__content">
						<div className={cx("cate-dropdown__title">
							<h4>Sản phẩm bán chạy nhất</h4>
							<a href='/search/results?category_id=<%= cate.category_id %>'>
								<p>Xem tất cả</p>
								<span className={cx("material-symbols-outlined"> chevron_right </span>
							</a>
						</div>

						<% if(cate.category_count) { %>
						<div className={cx("cate-dropdown__product">
							<% cate.bestSellerProductsOfCates.forEach(product => { %>
							<a href="/search/<%= product.product_variant_id %>?category_id=<%= product.category_id %>">
								<img src="/imgs/product_image/P<%= product.product_id %>/<%= product.product_avt_img %>" alt="<%= product.product_name %>">
								<div className={cx("cate-dropdown__product-rating">
									<% if (product.product_rate) { %>
									<!-- In ra số sao hiện có -->
									<% const productRateInt = Math.floor(product.product_rate) %>

									<% for (let i = 0; i < productRateInt; i++) { %>
									<span className={cx("material-symbols-outlined">grade</span>
									<% } %>

									<!-- In ra số sao lẻ -->
									<% if (product.product_rate - productRateInt >= 0.5 && product.product_rate - productRateInt < 1) { %>
									<span className={cx("material-symbols-outlined">star_half</span>
									<% } else if (product.product_rate!= 5 && product.product_rate - productRateInt < 0.5 && product.product_rate - productRateInt >= 0) { %>
									<span className={cx("material-symbols-outlined" style="font-variation-settings: 'FILL' 0;"> grade </span>
									<% } %>

									<!-- In ra số sao trống -->
									<% for (let i = 0; i < Math.floor(5 - product.product_rate - 1); i++) {  %>
									<span className={cx("material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">grade</span>
									<% } %>
									<% } %>
									<p>(<%= product.product_rate %>)</p>
								</div>
								<p className={cx("cate-dropdown__product-name"><%= product.product_name %></p>
								<% const discountedPriceCate = Math.round(product.product_variant_price - product.product_variant_price * (product.discount_amount / 100)) %>
								<p className={cx("cate-dropdown__product-price"><%= formatFunction.toCurrency(product.product_variant_price) %><del><% product.discount_amount ? formatFunction.toCurrency(discountedPriceCate) : '' %></del></p>
							</a>
							<% }) %>
						</div>
						<% } else { %>
						<div className={cx("product__not-found">
							<img src="/imgs/nothing-result.png" alt="Not found">
							<p>Không tìm thấy sản phẩm! </p>
						</div>
						<% } %>
					</div>
				</li>
				<% } %>
				<% }) %>
			</ul>
		</li>
		<li>
			<div className={cx("menu__cate menu__item">
				<p className={cx("menu__item-p">Gia dụng</p>
				<span className={cx("material-symbols-outlined"> expand_more </span>
			</div>

			<ul className={cx("header__cate-dropdown cate-dropdown">
				<% header.cates.forEach(cate => { %>
				<% if (cate.categorry_type == 'Gia dụng') { %>
				<li className={cx("header__cate-dropdown-wrapper">
					<a href="/search/results?category_id=<%= cate.category_id %>" className={cx("cate-dropdown__item">
						<img src="/imgs/categories/<%= cate.category_img %>" alt="<%= cate.category_name %>">
						<p><%= cate.category_name %> (<%= cate.category_count %>)</p>
					</a>

					<div className={cx("cate-dropdown__content">
						<div className={cx("cate-dropdown__title">
							<h4>Sản phẩm bán chạy nhất</h4>
							<a href='/search/results?category_id=<%= cate.category_id %>'>
								<p>Xem tất cả</p>
								<span className={cx("material-symbols-outlined"> chevron_right </span>
							</a>
						</div>

						<% if(cate.category_count) { %>
						<div className={cx("cate-dropdown__product">
							<% cate.bestSellerProductsOfCates.forEach(product => { %>
							<a href="/search/<%= product.product_variant_id %>?category_id=<%= product.category_id %>">
								<img src="/imgs/product_image/P<%= product.product_id %>/<%= product.product_avt_img %>" alt="<%= product.product_name %>">
								<div className={cx("cate-dropdown__product-rating">
									<% if (product.product_rate) { %>
									<!-- In ra số sao hiện có -->
									<% const productRateInt = Math.floor(product.product_rate) %>

									<% for (let i = 0; i < productRateInt; i++) { %>
									<span className={cx("material-symbols-outlined">grade</span>
									<% } %>

									<!-- In ra số sao lẻ -->
									<% if (product.product_rate - productRateInt >= 0.5 && product.product_rate - productRateInt < 1) { %>
									<span className={cx("material-symbols-outlined">star_half</span>
									<% } else if (product.product_rate!= 5 && product.product_rate - productRateInt < 0.5 && product.product_rate - productRateInt >= 0) { %>
									<span className={cx("material-symbols-outlined" style="font-variation-settings: 'FILL' 0;"> grade </span>
									<% } %>

									<!-- In ra số sao trống -->
									<% for (let i = 0; i < Math.floor(5 - product.product_rate - 1); i++) {  %>
									<span className={cx("material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">grade</span>
									<% } %>
									<% } %>
									<p>(<%= product.product_rate %>)</p>
								</div>
								<p className={cx("cate-dropdown__product-name"><%= product.product_name %></p>
								<% const discountedPriceCate = Math.round(product.product_variant_price - product.product_variant_price * (product.discount_amount / 100)) %>
								<p className={cx("cate-dropdown__product-price"><%= formatFunction.toCurrency(product.product_variant_price) %><del><% product.discount_amount ? formatFunction.toCurrency(discountedPriceCate) : '' %></del></p>
							</a>
							<% }) %>
						</div>
						<% } else { %>
						<div className={cx("product__not-found">
							<img src="/imgs/nothing-result.png" alt="Not found">
							<p>Không tìm thấy sản phẩm! </p>
						</div>
						<% } %>
					</div>
				</li>
				<% } %>
				<% }) %>
			</ul>
		</li>
		<li>
			<a href="/search/results?hotProduct=true" className={cx("menu__hot-product menu__item">
				<p>Sản phẩm HOT</p>
				<span className={cx("material-symbols-outlined"> local_fire_department </span>
			</a>
		</li>
		<li>
			<a href="/search/results?discount=true" className={cx("menu__promo menu__item">
				<p>Khuyến mãi</p>
				<span className={cx("material-symbols-outlined"> savings </span>
			</a>
		</li>
		<li>
			<a href="/about-us" className={cx("menu__about-us menu__item">
				<p>Về chúng tôi</p>
			</a>
		</li>
	</ul>

</header>
*/
