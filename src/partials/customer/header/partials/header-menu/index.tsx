"use client";

// import libs
import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";
import { CldImage } from "next-cloudinary";

// import components
import { CustomerStarRating } from "@/components";

// import function from utils
import { convertNumberToMoney } from "@/utils";

// import css
import styles from "./header-menu.module.css";
import { relative } from "path";

const cx = classNames.bind(styles);

function CustomerHeaderMenuProductItem(
  props: IHeaderMenuProductItemProps
): JSX.Element {
  return (
    <Link
      className={cx("cate-dropdown__product-link")}
      href={`/${props.product_slug}?pid=${props.product_id_hashed}`}
      title={props.product_name}
    >
      <span className={cx("cate-dropdown__product-img-container")}>
        <CldImage
          src={props.product_img.link}
          alt={props.product_img.alt}
          fill
        />
      </span>
      <div className={cx("cate-dropdown__product-rating")}>
        <CustomerStarRating
          className={cx("cate-dropdown__product-star")}
          rating={props.product_avg_rating}
        />
        <span>({props.product_avg_rating})</span>
      </div>
      <span className={cx("cate-dropdown__product-name")}>
        {props.product_name}
      </span>
      <div>
        {props.highest_discount
          ? (
            <>
              <span className={cx("cate-dropdown__product-price")} >
                {convertNumberToMoney(props.lowest_price ?? 0)}
              </span>
              <del className={cx("cate-dropdown__product-price--discount")}>
                {convertNumberToMoney(props.product_price)}
              </del>
            </>
          )
          : (
            <span className={cx("cate-dropdown__product-price")}>
              {convertNumberToMoney(props.product_price)}
            </span>
          )}
      </div>
    </Link >
  );
}

function CustomerHeaderMenuSubCategoryItem(
  props: IHeaderMenuSubCategoryItemProps
): JSX.Element {
  const { category_name, category_img, products } = props;
  const hasProducts: boolean = products?.length > 0;

  return (
    <li className={cx("cate-dropdown__wrapper")}>
      <Link
        className={cx("cate-dropdown__info")}
        href={`/search-result?searchKey=${props.category_name}`}
      >
        <span className={cx("cate-dropdown__img-container")}>
          <CldImage
            src={category_img}
            alt={`Hình đại cho phân loại ${category_name} của ForCat Shop`}
            fill
          />
        </span>
        <span className={cx("cate-dropdown__sub-cate")}>{category_name}</span>{" "}
        <span>({products?.length ?? 0})</span>
      </Link>
      <div className={cx("cate-dropdown__content")}>
        <div className={cx("cate-dropdown__title")}>
          <span>Sản phẩm bán chạy nhất</span>
          <Link
            className={cx("cate-dropdown__title-link")}
            href={`/search-result?searchKey=${props.category_name}`}
          >
            <span>Xem tất cả</span>
            <span className="material-icons-outlined">chevron_right</span>
          </Link>
        </div>
        {hasProducts
          ? (
            <div className={cx("cate-dropdown__products")}>
              {products.map((product: IProductProps, index: number) => (
                <CustomerHeaderMenuProductItem
                  key={index}
                  {...product}
                />
              ))}
            </div>
          )
          : (
            <div className={cx("cate-dropdown__products--not-found")}>
              <span
                className={cx(
                  "cate-dropdown__products--not-found__img-container"
                )}
              >
                <Image src="/imgs/nothing-result.png"
                  alt="Not found result"
                  fill
                />
              </span>
              <span className={cx("cate-dropdown__products--not-found__text")}>
                Không tìm thấy sản phẩm!
              </span>
            </div>
          )}
      </div>
    </li>
  );
}

function CustomerHeaderMenuCategoryItem(
  props: IHeaderMenuCategoryItemProps
): JSX.Element {
  return (
    <li className={cx("menu__item")}>
      <div className={cx("menu__cate")}>
        <span className={cx("menu__item-p")}>{props.categoryType}</span>
        {props.children && (
          <span className="material-icons-outlined">
            expand_more
          </span>
        )}
      </div>
      {props.children}
    </li>
  );
}

export default function CustomerHeaderMenu(
  props: IHeaderMenuProps
): JSX.Element {
  const flatCategoryTypeProduct: ISubCategoryProps[] = props.categoryTypes.map(
    categoryType => categoryType.subCategories
  ).flat(1);

  return (
    <ul className={cx("header__menu")}>
      <CustomerHeaderMenuCategoryItem
        categoryType="Danh mục sản phẩm"
      >
        <div className={cx("menu__cate-dropdown-container")}>
          <ul className={cx("menu__cate-dropdown")}>
            {flatCategoryTypeProduct.map(
              (categoryName: ISubCategoryProps) => (
                <CustomerHeaderMenuSubCategoryItem
                  key={categoryName.category_name}
                  {...categoryName}
                />
              )
            )}
          </ul>
        </div>
      </CustomerHeaderMenuCategoryItem>

      {props.links.map((link: IHeaderLinkProps) => (
        <li key={link.title} className={cx("menu__item")}>
          <Link
            className={cx("menu__cate")}
            href={link.url}
          >
            <span className={cx("menu__item-p")}>{link.title}</span>
            {link.iconData && (
              <span className={"material-icons " + cx(link.className)}>
                {link.iconData}
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
