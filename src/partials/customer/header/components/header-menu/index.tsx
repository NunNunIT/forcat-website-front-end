// import default component from next
import Link from "next/link";

// import function from utils
import { parseNumToCurrencyStr } from "@/utils"

// import interface
import {
  CategoryProps,
  HeaderLinkProps,
  SubCategoryProps,
  ProductProps,
  HeaderMenuProps,
  HeaderMenuCategoryItemProps,
  HeaderMenuSubCategoryItemProps,
  HeaderMenuProductItemProps,
} from "@/types";

// import components
import { StarRating } from "@/components/customer";

// use blind from classnames
import classNameNames from "classnames/bind";
import styles from "./header-menu.module.css";
const cx = classNameNames.bind(styles);

function HeaderMenuProductItem(props: HeaderMenuProductItemProps): JSX.Element {
  const { id, name, rating, price, price__discount, subCategory_id } = props;
  const discountPrice = price__discount || price;

  return (
    <a
      key={id}
      className={cx("cate-dropdown__product-link")}
      href={`/search?sub_category_id=${subCategory_id}`}
    >
      <img
        className={cx("cate-dropdown__product-img")}
        src={`/imgs/product_image/P${id}/P${id}_avt.jpg`}
        alt={name}
      />
      <div className={cx("cate-dropdown__product-rating")}>
        <StarRating className={cx("cate-dropdown__product-star")} rating={rating} />
        <span>({rating})</span>
      </div>
      <span className={cx("cate-dropdown__product-name")}>{name}</span>
      <div>
        <span className={cx("cate-dropdown__product-price")}>
          {parseNumToCurrencyStr(discountPrice)}
        </span>{" "}
        {price__discount && (
          <del className={cx("cate-dropdown__product-price--discount")}>
            {parseNumToCurrencyStr(price)}
          </del>
        )}
      </div>
    </a>
  );
}

function HeaderMenuSubCategoryItem(props: HeaderMenuSubCategoryItemProps): JSX.Element {
  const { id, title, products } = props;
  const hasProducts: boolean = products?.length > 0;

  return (
    <li key={id} className={cx("cate-dropdown__wrapper")}>
      <a className={cx("cate-dropdown__info")} href={`/search/results?category_id=${id}`}>
        <img className={cx("cate-dropdown__img")} src={`/imgs/categories/${id}.png`} alt={`${id}_Image`} />
        <span>{title} ({products?.length ?? 0})</span>
      </a>
      <div className={cx("cate-dropdown__content")}>
        <div className={cx("cate-dropdown__title")}>
          <span>Sản phẩm bán chạy nhất</span>
          <a className={cx("cate-dropdown__title-link")} href={`/search/results?category_id=${props}`}>
            <span>Xem tất cả</span>
            <span className="material-icons-outlined">chevron_right</span>
          </a>
        </div>
        {hasProducts && (
          <div className={cx("cate-dropdown__products")}>
            {products.map((product: ProductProps) => (
              <HeaderMenuProductItem
                subCategory_id={id}
                {...product}
              />
            ))}
          </div>
        )}

        {!hasProducts && (
          <div className={cx("cate-dropdown__products--not-found")}>
            <img className={cx("cate-dropdown__products--not-found__img")}
              src="/imgs/nothing-result.png"
              alt="Not found result" />
            <span className={cx("cate-dropdown__products--not-found__text")}>Không tìm thấy sản phẩm!</span>
          </div>
        )}
      </div>
    </li>
  );
}

function HeaderMenuCategoryItem(props: HeaderMenuCategoryItemProps): JSX.Element {
  return (
    <li key={props.id} className={cx("menu__item")}>
      <div className={cx("menu__cate")}>
        <span className={cx("menu__item-p")}>{props.title}</span>
        {props.children && <span className="material-icons-outlined">expand_more</span>}
      </div>
      {props.children}
    </li>
  );
}

export default function HeaderMenu(props: HeaderMenuProps): JSX.Element {
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
            {link.iconData && <span className={"material-icons " + cx(link.className)}>
              {link.iconData}
            </span>}
          </Link>
        </li>
      ))}
    </ul>
  )
}
