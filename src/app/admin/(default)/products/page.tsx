// import libs
import React from "react";
import Link from "next/link";

// import components
import { AdminPagination } from "@/components";
import {
  ProductImg,
  ProductCheckOne,
  ProductCheckAll,
  ProductDeleteOne,
  ProductDeleteMulti,
  ProductSaveBtn,
} from "./components";

// import utils
import { BACKEND_URL } from "@/utils/commonConst";
import { convertNumberToMoney } from "@/utils";

// import css
import "./page.css";

const getAllProducts = async (query: String, page: String) => {
  try {
    const response = await fetch(
      `${BACKEND_URL}/admin/products/getProducts?p=${page}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        next: { revalidate: 60 },
      }
    );

    const data = await response.json();
    // console.log("aaaaaaaaa", data);

    return data.data;
  } catch (error) {
    console.error("Error fetching recommend products:", error);
  }
};

export default async function AdminProductsPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string };
}) {
  const q = searchParams.q ?? "";
  const p = searchParams.p ?? "0";
  const data = await getAllProducts(q, p);

  // console.log("aaaaaaaaa", data);

  const products = data?.products ?? [];
  const totalPages = data?.totalPages ?? 0;

  return (
    <main className="product-page-container">
      <h2 className="product-page-container__title">Danh sách sản phẩm</h2>
      <section className="product-page-head">
        <div className="product-page-head__item product-page-head__item--left">
          <button
            className="product-page__btn product-page__btn-import"
            type="button">
            <span className="material-icons-round product-page__btn-icon">
              download
            </span>
            <span className="product-page__btn-text">Nhập</span>
          </button>
          <button
            className="product-page__btn product-page__btn-export"
            type="button">
            <span className="material-icons-round product-page__btn-icon">
              publish
            </span>
            <span className="product-page__btn-text">Xuất</span>
          </button>
        </div>
        <div className="product-page-head__item product-page-head__item--right">
          <Link
            href="/admin/products/add"
            className="product-page__btn product-page__btn-add"
            type="button">
            <span className="material-icons-round product-page__btn-icon">
              add
            </span>
            <span className="product-page__btn-text">Thêm</span>
          </Link>
          <ProductDeleteMulti />
          <ProductSaveBtn />
        </div>
      </section>

      <section className="product-page-content">
        <div className="product-page-table-head">
          <form className="product-page-search">
            <input
              className="product-page-search__input"
              type="text"
              name="q"
              placeholder={q ? q : "Tìm sản phẩm"}
            />
            <button className="product-page-search__icon" type="submit">
              <span className="material-icons-round">search</span>
            </button>
          </form>

          {totalPages > 1 && <AdminPagination totalPages={totalPages} />}
        </div>
        <table className="product-page-table">
          <thead>
            <tr className="product-page-table__row">
              <th className="product-page-table__title">
                <ProductCheckAll />
              </th>
              <th className="product-page-table__title">Hình ảnh</th>
              <th className="product-page-table__title">Mã sản phẩm</th>
              <th className="product-page-table__title">Tên sản phẩm</th>
              <th className="product-page-table__title">Giá gốc</th>
              <th className="product-page-table__title">Danh mục</th>
              <th className="product-page-table__title">Biến thể</th>
              <th className="product-page-table__title">Thao tác</th>
            </tr>
          </thead>

          <tbody>
            {products &&
              products.map((product, index) => (
                <tr
                  className="product-page-table__row product-page-table__product"
                  key={"product" + index}>
                  <td className="product-page-table__text">
                    <ProductCheckOne />
                  </td>
                  <td className="product-page-table__image">
                    <ProductImg productImg={product.product_imgs[0]} />
                  </td>
                  <td className="product-page-table__text product-page-table__product-id">
                    {product._id}
                  </td>
                  <td className="product-page-table__text product-page-table__product-name">
                    {product.product_name}
                  </td>
                  <td className="product-page-table__text product-page-table__product-price">
                    {convertNumberToMoney(product.product_supp_price)}
                  </td>
                  <td className="product-page-table__text product-page-table__product-category">
                    {product.category_names.join(", ")}
                  </td>
                  <td className="product-page-table__text product-page-table__product-variants">
                    {product.product_variants
                      .map((variant) => variant.variant_name)
                      .join(", ")}
                  </td>
                  <td className="product-page-table__text product-page-table__product-action">
                    <Link
                      className="product-page__btn-small product-page__btn-small-edit product-page-table__product-action-edit"
                      href={`/admin/products/edit/${product._id}`}>
                      <button className="product-page-table__product-action-edit-btn">
                        <span className="material-icons-round product-page__btn-icon">
                          edit
                        </span>
                      </button>
                    </Link>
                    <ProductDeleteOne />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
      {totalPages > 1 && <AdminPagination totalPages={totalPages} />}
    </main>
  );
}
