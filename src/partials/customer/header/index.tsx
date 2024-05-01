// import libs
import classNames from "classnames/bind";

// import components
import {
  CustomerHeaderNav,
  CustomerHeaderMain,
  CustomerHeaderMenu,
} from "./partials";

// import constant
import { BACKEND_URL } from "@/utils/commonConst";

// import css
import styles from "./header.module.css";

const cx = classNames.bind(styles);

const categoryProducts = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/category/getCategory`, {
      next: { revalidate: 60 },
    });

    const data = await response.json();
    return data.data; // Return the entire data object
  } catch (error) {
  }
};

const headerLinks: IHeaderLinkProps[] = [
  {
    title: "Sản phẩm HOT",
    iconData: "local_fire_department",
    url: "/search-result?sortBy=hot",
    className: "menu__hot-product",
  },
  {
    title: "Khuyến mãi",
    iconData: "savings",
    url: "/search-result?discount=True",
    className: "menu__promo",
  },
  {
    title: "Tin tức - Bài viết",
    iconData: "newspaper",
    url: "/news",
    className: "menu__news",
  },
  {
    title: "Về chúng tôi",
    iconData: "domain",
    url: "/about-us",
    className: "menu__about-us",
  },
];

export default async function CustomerHeader() {
  const headerCategories = await categoryProducts();

  return (
    <header className={cx("header")}>
      <CustomerHeaderNav />
      <div className={cx("header__container")}>
        <CustomerHeaderMain />
        <CustomerHeaderMenu
          categoryTypes={headerCategories}
          links={headerLinks}
        />
      </div>
    </header>
  );
}
