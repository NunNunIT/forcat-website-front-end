import Link from "next/link";

import { Logo, StarRating } from "@/components/common";
import {
  HeaderMenuProductItemProps,
  HeaderMenuSubCategoryItemProps,
  HeaderMenuCategoryItemProps,
  HeaderLinkProps,
  HeaderMenuProps,
  CategoryProps,
  SubCategoryProps,
  ProductProps
} from "@/types";

// use bind from classnames
import classNameNames from "classnames/bind";
import styles from "./header.module.css";
const cx = classNameNames.bind(styles);

function HeaderMenuProductItem(props: HeaderMenuProductItemProps): JSX.Element {
  return (
    <a className={cx("cate-dropdown__product-link")}
      key={props.id} href={`/search?category_id=${props.category_id}`}>
      <img className={cx("cate-dropdown__product-img")}
        src={`/imgs/product_image/P${props.id}/P${props.id}_avt.jpg`}
        alt={props.name} />
      <div className={cx("cate-dropdown__product-rating")}>
        <StarRating className={cx("cate-dropdown__product-star")} rating={props.rating} />
        <span>({props.rating})</span>
      </div>
      <span className={cx("cate-dropdown__product-name")}>{props.name}</span>
      <span className={cx("cate-dropdown__product-price")}>
        {props.price}
        {props.price__discount && <del className={cx("cate-dropdown__product-price--discount")}>
          {props.price__discount}
        </del>}
      </span>
    </a>
  )
}

function HeaderMenuSubCategoryItem(props: HeaderMenuSubCategoryItemProps): JSX.Element {
  return (
    <li key={props.id} className={cx("cate-dropdown__wrapper")}>
      <a className={cx("cate-dropdown__info")}
        href={`/search/results?category_id=${props.id}`}>
        <img className={cx("cate-dropdown__img")}
          src={`/imgs/categories/${props.id}.png`} alt={`${props.id}_Image`} />
        <span>{props.title} ({props.length_products})</span>
      </a>
      <div className={cx("cate-dropdown__content")}>
        <div className={cx("cate-dropdown__title")}>
          <span>Sản phẩm bán chạy nhất</span>
          <a className={cx("cate-dropdown__title-link")} href={`/search/results?category_id=${props}`}>
            <span>Xem tất cả</span>
            <span className="material-symbols-outlined">chevron_right</span>
          </a>
        </div>
        {(
          props.length_products && <div className={cx("cate-dropdown__products")}>
            {props.products.map((product: ProductProps) => (
              <HeaderMenuProductItem id={product.id}
                name={product.name}
                rating={product.rating}
                price={product.price}
                subCategory_id={props.id}
                category_id="1"
              />
            ))}
          </div>
        ) ||
          <div className={cx("cate-dropdown__products--not-found")}>
            <img className={cx("cate-dropdown__products--not-found__img")}
              src="/imgs/nothing-result.png"
              alt="Not found result" />
            <span className={cx("cate-dropdown__products--not-found__text")}>Không tìm thấy sản phẩm!</span>
          </div>}
      </div>
    </li>
  )
}

function HeaderMenuCategoryItem(props: HeaderMenuCategoryItemProps): JSX.Element {
  return (
    <li key={props.id} className={cx("menu__item")}>
      <div className={cx("menu__cate")}>
        <span className={cx("menu__item-p")}>{props.title}</span>
        <span className="material-symbols-outlined">expand_more</span>
      </div>
      {props.children}
    </li>
  )
}

const headerCategories: (CategoryProps)[] = [
  {
    id: "1",
    name: "Thực phẩm",
    iconData: "expand_more",
    subCategories: [
      {
        id: "11",
        name: "Hạt",
        products: [
          {
            id: "1",
            name: "Hạt 1",
            price: 10000,
            rating: 4.5,
          },
          {
            id: "2",
            name: "Hạt 2",
            price: 10000,
            rating: 4.8,
          },
          {
            id: "3",
            name: "Hạt 3",
            price: 10000,
            rating: 4,
          },
          {
            id: "4",
            name: "Hạt 4",
            price: 10000,
            rating: 4.5,
          },
          {
            id: "5",
            name: "Hạt 5",
            price: 10000,
            rating: 4.6,
          },
        ]
      },
      {
        id: "12",
        name: "Pate",
        products: [
          {
            id: "6",
            name: "Pate 1",
            price: 10000,
            rating: 4,
          },
          {
            id: "7",
            name: "Pate 2",
            price: 10000,
            rating: 4,
          },
          {
            id: "8",
            name: "Pate 3",
            price: 10000,
            rating: 4,
          },
          {
            id: "9",
            name: "Pate 4",
            price: 10000,
            rating: 4,
          },
          {
            id: "9",
            name: "Pate 5",
            price: 10000,
            rating: 4,
          },
          {
            id: "10",
            name: "Pate 6",
            price: 10000,
            rating: 4,
          },
        ]
      },
      {
        id: "13",
        name: "Cỏ mèo",
        products: [
          {
            id: "11",
            name: "Cỏ mèo 1",
            price: 10000,
            rating: 4,
          },
          {
            id: "12",
            name: "Cỏ mèo 2",
            price: 10000,
            rating: 4.5,
          },
        ]
      },
    ]
  },
  {
    id: "2",
    name: "Vệ sinh",
    iconData: "expand_more",
    subCategories: [
      {
        id: "21",
        name: "Cát",
        products: [
          {
            id: "13",
            name: "Cát 1",
            price: 10000,
            rating: 4.6,
          },
          {
            id: "14",
            name: "Cát 2",
            price: 10000,
            rating: 4,
          },
        ]
      },
      {
        id: "22",
        name: "Nhà vệ sinh",
        products: [
          {
            id: "15",
            name: "Nhà vệ sinh 1",
            price: 10000,
            rating: 4.5,
          },
          {
            id: "16",
            name: "Nhà vệ sinh 2",
            price: 10000,
            rating: 4.6,
          },
          {
            id: "17",
            name: "Nhà vệ sinh 3",
            price: 10000,
            rating: 4,
          },
          {
            id: "18",
            name: "Nhà vệ sinh 1",
            price: 10000,
            rating: 4.5,
          },
          {
            id: "19",
            name: "Nhà vệ sinh 2",
            price: 10000,
            rating: 4.6,
          },
          {
            id: "20",
            name: "Nhà vệ sinh 3",
            price: 10000,
            rating: 4,
          },
        ]
      },
    ]
  },
  {
    id: "3",
    name: "Đồ cho ngủ",
    iconData: "expand_more",
    subCategories: [
      {
        id: "31",
        name: "Nệm, ổ, chăm",
        products: [
          {
            id: "1",
            name: "Nệm, ổ, chăm 1",
            price: 10000,
            rating: 4.5,
          },
          {
            id: "2",
            name: "Nệm, ổ, chăm 2",
            price: 10000,
            rating: 4.6,
          },
          {
            id: "3",
            name: "Nệm, ổ, chăm 3",
            price: 10000,
            rating: 4,
          },
        ]
      },
      {
        id: "32",
        name: "Nhà cây",
        products: [
          {
            id: "1",
            name: "Nhà cây 1",
            price: 10000,
            rating: 4.5,
          },
          {
            id: "2",
            name: "Nhà cây 2",
            price: 10000,
            rating: 4.6,
          },
          {
            id: "3",
            name: "Nhà cây 3",
            price: 10000,
            rating: 4,
          },
        ]
      },
      {
        id: "33",
        name: "Nhà cào",
        products: [
          {
            id: "1",
            name: "Nhà cào 1",
            price: 10000,
            rating: 4.5,
          },
          {
            id: "2",
            name: "Nhà cào 2",
            price: 10000,
            rating: 4.6,
          },
          {
            id: "3",
            name: "Nhà cào 3",
            price: 10000,
            rating: 4,
          },
        ]
      },
    ]
  },
  {
    id: "4",
    name: "Đồ dùng, phụ kiện",
    iconData: "expand_more",
    subCategories: [
      {
        id: "41",
        name: "Quần áo",
        products: [],
      },
      {
        id: "42",
        name: "Vòng cổ, dây dắt",
        products: [],
      },
      {
        id: "43",
        name: "Balo, lông",
        products: [],
      },
      {
        id: "44",
        name: "Đồ chơi",
        products: [],
      },
      {
        id: "45",
        name: "Xẻng, bát ăn, lược...",
        products: [],
      },
    ],
  },
]

const headerLinks: HeaderLinkProps[] = [
  {
    title: "Sản phẩm HOT",
    iconData: "local_fire_department",
    url: "a",
    className: "menu__hot-product"
  },
  {
    title: "Khuyến mãi",
    iconData: "savings",
    url: "a",
    className: "menu__promo"
  },
  {
    title: "Về chúng tôi",
    url: "a",
    className: "menu__about-us"
  },
]

function HeaderNav() {
  return (
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
          <Logo white />
        </div>
        <div className={cx("header__about-account")}>
          <div className={cx("dropdown-noti")}>
            <a href="/notification/order" className={cx("header__notifications")}>
              <span className="material-symbols-outlined">notifications</span>
              Thông báo
            </a>
            <div className={cx("dropdown-noti__content-container")}>
              <div className={cx("dropdown-noti__content")}>
                <div className={cx("dropdown-noti__unauth-user")}>
                  <img className={cx("unauth-user__img")}
                    src="/imgs/unauth-user.png"
                    alt="unauth-user" />
                  <span className={cx("unauth-content__noti")}>Đăng nhập để xem Thông báo</span>
                </div>
                <div className={cx("unauth-content__btn")}>
                  <Link href="/auth/login">Đăng nhập</Link>
                  <Link href="/auth/register">Đăng ký</Link>
                </div>
              </div>
            </div>
          </div >
          <div className={cx("header__auth")}>
            <span className="material-symbols-outlined">account_circle</span>
            <Link href="/auth/login" className={cx("header__auth-login")}> Đăng nhập</Link>
            <span>|</span>
            <Link href="/auth/register" className={cx("header__auth-register")}>Đăng ký</Link>
          </div>
        </div >
      </div>
      <div className={cx("header__nav--disable")}>
        <a href="/notification/order" className={cx("noti--disable")}>
          <span className="material-symbols-outlined" title="Thông báo">notifications</span>
        </a>
        <a href="#" className={cx("help--disable")}>
          <span className="material-symbols-outlined" title="Hỗ trợ">help</span>
        </a>
      </div>
    </nav>
  )
}

function HeaderMain() {
  return (
    <div className={cx("header__main")}>
      <Logo className={cx("header__logo")} />
      <form className={cx("header__search-bar")}
        action="/search/results"
        method="GET">
        <input type="search"
          name="searchKey"
          placeholder="Bạn tìm gì..." />
        <button className={cx("header__search-btn")} type="submit">
          <span className="material-symbols-outlined">search</span>
        </button>
      </form>

      <div className={cx("dropdown-cart")}>
        <a href="/order/cart"
          className={cx("header__cart-container")}
          title="Giỏ hàng">
          <div className={cx("header__cart")}>
            <span className="material-symbols-outlined">shopping_cart</span>
          </div>
        </a>
        <div className={cx("dropdown-cart__content-container")}>
          <div className={cx("dropdown-cart__content")}>
            <div className={cx("dropdown-cart__unauth-user")}>
              <img src="/imgs/unauth-user.png" alt="unauth-user" className={cx("unauth-user__img")} />
              <span className={cx("unauth-content__cart")}>Đăng nhập để xem Giỏ hàng</span>
            </div>
            <div className={cx("unauth-content__btn")}>
              <a href="/auth/login">Đăng nhập</a>
              <a href="/auth/register">Đăng ký</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function HeaderMenu(props: HeaderMenuProps): JSX.Element {
  return (
    <ul className={cx("header__menu")}>
      {props.categories.map((category: CategoryProps) => (
        <HeaderMenuCategoryItem id={category.id} title={category.name} iconData={category.iconData}>
          {category.subCategories && <ul className={cx("menu__cate-dropdown")}>
            {category.subCategories.map((subCategory: SubCategoryProps) => (
              <HeaderMenuSubCategoryItem
                id={subCategory.id}
                title={subCategory.name}
                url_img="a"
                length_products={subCategory.products.length}
                products={subCategory.products} />
            ))}
          </ul>}
        </HeaderMenuCategoryItem>
      ))}

      {props.links.map((link: HeaderLinkProps) => (
        <li key={link.title} className={cx("menu__item")}>
          <Link className={cx("menu__cate")}
            href={link.url}>
            <span className={cx("menu__item-p")}>{link.title}</span>
            {link.iconData && <span className={"filled-icon material-symbols-outlined " + cx(link.className)}>
              {link.iconData}
            </span>}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default function Header() {
  return (
    <header className={cx("header")}>
      <HeaderNav />
      <HeaderMain />
      <HeaderMenu categories={headerCategories} links={headerLinks} />
    </header >
  );
}