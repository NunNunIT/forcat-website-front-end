// import components
import {
  CustomerHeaderNav,
  CustomerHeaderMain,
  CustomerHeaderMenu
} from "./partials/";

// use bind from classnames
import classNameNames from "classnames/bind";
import styles from "./header.module.css";
const cx = classNameNames.bind(styles);

const headerCategories: (ICategoryProps)[] = [
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
          {
            id: "6",
            name: "Hạt 5",
            price: 10000,
            rating: 4.6,
          },
          {
            id: "7",
            name: "Hạt 5",
            price: 10000,
            rating: 4.6,
          },
          {
            id: "8",
            name: "Hạt 5",
            price: 10000,
            rating: 4.6,
          },
          {
            id: "9",
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
            id: "11",
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
            price__discount: 9000,
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
            id: "4",
            name: "Nhà cây 1",
            price: 10000,
            rating: 4.5,
          },
          {
            id: "5",
            name: "Nhà cây 2",
            price: 10000,
            rating: 4.6,
          },
          {
            id: "6",
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
            id: "7",
            name: "Nhà cào 1",
            price: 10000,
            rating: 4.5,
          },
          {
            id: "8",
            name: "Nhà cào 2",
            price: 10000,
            rating: 4.6,
          },
          {
            id: "9",
            name: "Nhà cào 3",
            price: 10000,
            rating: 0,
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

const headerLinks: IHeaderLinkProps[] = [
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
    title: "Bài viết",
    iconData: "newspaper",
    url: "/news",
    className: "menu__news",
  },
  {
    title: "Về chúng tôi",
    url: "a",
    className: "menu__about-us"
  },
]

export default function Header() {
  return (
    <header className={cx("header")}>
      <CustomerHeaderNav />
      <div className={cx("header__container")}>
        <CustomerHeaderMain />
        <CustomerHeaderMenu categories={headerCategories} links={headerLinks} />
      </div>
    </header >
  );
}