// import components
import {
  CustomerHeaderNav,
  CustomerHeaderMain,
  CustomerHeaderMenu,
} from "./partials";

// use bind from classnames
import classNameNames from "classnames/bind";
import styles from "./header.module.css";
const cx = classNameNames.bind(styles);
import { BACKEND_URL} from "@/utils/commonConst";

const categoryProducts = async () => {
  try {
    const response = await fetch(
      `${BACKEND_URL}/category/getCategory`,
      {
        next: { revalidate: 60 },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch newest products");
    }
    const data = await response.json();
    return data.data; // Return the entire data object
  } catch (error) {
    console.error("Error fetching newest products:", error);
    throw error;
  }
};

const headerLinks: IHeaderLinkProps[] = [
  {
    title: "Sản phẩm HOT",
    iconData: "local_fire_department",
    url: "a",
    className: "menu__hot-product",
  },
  {
    title: "Khuyến mãi",
    iconData: "savings",
    url: "a",
    className: "menu__promo",
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
    className: "menu__about-us",
  },
];

export default async function Header() {
  const headerCategories = await categoryProducts()
  console.log(headerCategories)

  return (
    <header className={cx("header")}>
      <CustomerHeaderNav />
      <div className={cx("header__container")}>
        <CustomerHeaderMain />
        {/* Hiếu sửa */}
        {/* <CustomerHeaderMenu categories={headerCategories} links={headerLinks} /> */}
      </div>
    </header>
  );
}
