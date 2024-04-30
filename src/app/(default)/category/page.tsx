// import libs
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

// import utils
import { BACKEND_URL } from "@/utils/commonConst";

// import components
import { CategoryImage } from "./components";

// import css
import "./page.css";

export const metadata: Metadata = {
  title: "Danh mục sản phẩm",
  description: "",
};

const getCategory = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/category/getCategory`, {
      next: { revalidate: 60 },
    });

    const data = await response.json();
    return data.data; // Return the entire data object
  } catch (error) {
    console.log(error);
  }
};

export default async function CategoryPage() {
  const category = await getCategory();

  return (
    <main className="category-container">
      {(category ?? []).map((item, itemIndex) => {
        return (
          <section className="category__item" key={itemIndex}>
            <Link
              href={`/search-result?category=${item.category_type}`}
              className="category__title">
              <h2 className="category__title-text">{item.category_type}</h2>
              <div className="category__title-div"></div>
            </Link>
            <div className="sub-category-container sub-category">
              {(item.subCategories ?? []).map((subItem, subItemIndex) => {
                return (
                  <Link
                    href={`/search-result?category=${subItem.category_name}`}
                    className="sub-category__item"
                    key={subItemIndex}>
                    <CategoryImage
                      url={subItem.category_img}
                      alt={subItem.category_name}
                    />
                    <p className="sub-category__name">
                      {subItem.category_name}
                      <span className="sub-category__count">
                        ({subItem.productCount})
                      </span>
                    </p>
                    <div className="sub-category__navigate">
                      <span className="material-icons-round">
                        navigate_next
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}
    </main>
  );
}
