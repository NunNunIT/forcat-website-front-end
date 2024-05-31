"use client";

// import libs
import React, { useRef, useState } from "react";

// import utils
import { BACKEND_URL } from "@/utils/commonConst";
import { createSlug } from "@/utils";

// import css
import "./page.css";

// validate input number
const validateInputNumber = (event: any) => {
  const inputValue = event.target.value;
  const regex = /^\d+$/;

  if (!regex.test(inputValue) && inputValue != "") {
    alert("Vui lòng chỉ nhập số.");
    event.target.value = "";
  }
};

let countVariant = 1;

// reindex variant
const reindexVariant = () => {
  countVariant = 0;
  const variants = document
    .querySelectorAll(".add-product-variant__input-group")
    .forEach((variant) => {
      const variantTitle = variant.querySelector(".add-product-variant__title");
      countVariant += 1;
      if (variantTitle) variantTitle.innerHTML = `Biến thể ${countVariant}`;
    });
};

// handle close btn
const handleCloseBtn = (event: any) => {
  const current = event.currentTarget;
  const item = current.parentElement.parentElement;
  item.remove();
  reindexVariant();
};

const handleChangeImg = (event: any) => {
  const current = event.currentTarget;
  const files = Array.from(current.files);

  let nextElement = current.nextSibling;
  if (nextElement) nextElement.remove();

  nextElement = document.createElement("div");
  nextElement.classList.add("add-product-main__preview-image-div");
  nextElement.innerHTML = `${files
    .map(
      (file: any, index) => `<img
                        class="add-product-main__preview-image"
                        src=${URL.createObjectURL(file)}
                        alt="Preview"
                      />`
    )
    .join("")}`;

  const addedElement = current.parentNode.insertBefore(
    nextElement,
    current.nextSibling
  );
};

// handle add more variant
const handleAddVariant = () => {
  countVariant += 1;
  const newVariant = document.createElement("div");
  newVariant.classList.add(
    "add-product-main__input-group",
    "add-product-variant__input-group"
  );
  newVariant.innerHTML = `  <div class="add-product-variant__title-div">
                                <h4 class="add-product-variant__title">
                                    Biến thể ${countVariant}
                                </h4>
                                <button class="add-product-main__close-btn" type="button">
                                    <span class="material-icons-round add-product-main__icon">
                                    close
                                    </span>
                                </button>
                            </div>
                            <div class="add-product-main__input-row add-product-variant__input-row">
                                <h5>Tên biến thể</h5>
                                <input
                                    class="add-product-main__input"
                                    placeholder="Nhập tên biến thể"
                                    type="text"
                                    name="variant_name"
                                    required
                                />
                            </div>

                            <div class="add-product-main__input-row add-product-variant__input-row">
                              <h5>Hình ảnh</h5>
                              <input
                                class="add-product-main__input"
                                placeholder="Nhập văn bản thay thế"
                                type="text"
                                name="product_variant_img_alt"
                                required
                              />
                              <input
                                type="file"
                                name="product_variant_img"
                                className="add-image-input"
                              />
                            </div>

                            <div class="add-product-main__input-row add-product-variant__input-row">
                                <h5>Giá tiền</h5>
                                <input
                                    class="add-product-main__input"
                                    placeholder="Nhập giá tiền"
                                    type="text"
                                    name="variant_price"
                                    required
                                />
                            </div>
                            <div class="add-product-main__input-row add-product-variant__input-row">
                                <h5>Số lượng</h5>
                                <input
                                    class="add-product-main__input"
                                    placeholder="Nhập số lượng sản phẩm"
                                    type="text"
                                    name="variant_quantity"
                                    required
                                />
                            </div>`;

  const addMoreVariantBtn = document.querySelector(
    ".add-product-variant__add-more-btn"
  );

  let addedElement;
  if (addMoreVariantBtn)
    addedElement = addMoreVariantBtn.parentNode?.insertBefore(
      newVariant,
      addMoreVariantBtn
    );
  addedElement
    ?.querySelector("input[name='product_variant_img']")
    ?.addEventListener("change", handleChangeImg);
  addedElement
    ?.querySelector("input[name='variant_price'")
    ?.addEventListener("blur", validateInputNumber);
  addedElement
    ?.querySelector("input[name='variant_quantity'")
    ?.addEventListener("blur", validateInputNumber);
  addedElement
    ?.querySelector(".add-product-main__close-btn")
    ?.addEventListener("click", handleCloseBtn);
  // console.log(addedElement);
};

// handle add more specification
const handleAddSpecification = () => {
  const newSpecification = document.createElement("div");
  newSpecification.classList.add(
    "add-product-main__input-row",
    "add-product-specification__input-row"
  );
  newSpecification.innerHTML = `<div class="add-product-specification__input-row-item">
                                    <input
                                    class="add-product-main__input"
                                    placeholder="Nhập tên thông số"
                                    type="text"
                                    name="specification_name"
                                    required
                                    />
                                </div>
                                <div class="add-product-specification__input-row-item">
                                    <input
                                    class="add-product-main__input"
                                    placeholder="Nhập giá trị thông số"
                                    type="text"
                                    name="specification_value"
                                    required
                                    />
                                </div>
                                <div class="add-product-specification__close-btn-div">
                                  <button
                                    class="add-product-main__close-btn"
                                    type="button">
                                    <span class="material-icons-round add-product-main__icon">
                                      close
                                    </span>
                                  </button>
                                </div>`;

  const addMoreSpecificationBtn = document.querySelector(
    ".add-product-specification__add-more-btn"
  );

  let addedElement;
  if (addMoreSpecificationBtn)
    addedElement = addMoreSpecificationBtn.parentNode?.insertBefore(
      newSpecification,
      addMoreSpecificationBtn
    );
  addedElement
    ?.querySelector(".add-product-main__close-btn")
    ?.addEventListener("click", handleCloseBtn);
};

const uploadImages = async (files: any) => {
  const urls = [];

  for (const file of files) {
    const uploadData = new FormData();

    uploadData.append("file", file);
    uploadData.append("upload_preset", "seo_images");

    const uploadResponse = await fetch(
      `https://api.cloudinary.com/v1_1/dmjwq3ebx/image/upload`,
      {
        method: "POST",
        body: uploadData,
      }
    );

    if (uploadResponse.ok) {
      const imageData = await uploadResponse.json();
      // console.log("imgdata", imageData);
      urls.push(imageData.public_id);
    } else {
      alert("Failed to upload image");
    }
  }

  return urls;
};

const addProduct = async (product: any) => {
  try {
    const res = await fetch(`${BACKEND_URL}/admin/products/addProduct`, {
      method: "POST",
      body: JSON.stringify({ product }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) location.href = "/admin/products";
    else alert("Try again later!");
  } catch (err) {
    console.log(err);
  }
};

const handleSubmitForm = async (event: any) => {
  event?.preventDefault();
  const addProductForm = document.querySelector("#add-product-form");

  const productName = (
    addProductForm?.querySelector(
      "input[name='product_name']"
    ) as HTMLInputElement
  ).value;
  //   console.log(productName);

  const productImgFiles = Array.from(
    (document.querySelector("input[name='product_imgs']") as HTMLInputElement)
      .files
  );

  const productAlt = createSlug(
    (
      addProductForm?.querySelector(
        "input[name='product_image_alt']"
      ) as HTMLInputElement
    ).value
  );
  // console.log(productAlt);

  const productImgUrls = await uploadImages(productImgFiles);
  // console.log("1 product up url", productImgUrls);

  const productCategories = (
    addProductForm?.querySelector(
      "input[name='product_categories']"
    ) as HTMLInputElement
  ).value
    .split(",")
    .map((category) => category.trim());
  //   console.log(productCategories);

  const productShortDescription = (
    addProductForm?.querySelector(
      "input[name='product_short_description']"
    ) as HTMLInputElement
  ).value;
  // console.log(productShortDescription);

  const productDescription = (
    addProductForm?.querySelector(
      "input[name='product_description']"
    ) as HTMLInputElement
  ).value;
  // console.log(productDescription);

  const productSuppPrice = Number(
    (
      addProductForm?.querySelector(
        "input[name='product_supp_price']"
      ) as HTMLInputElement
    ).value
  );
  // console.log(productSuppPrice);

  const productVariants = await Promise.all(
    Array.from(
      addProductForm.querySelectorAll(".add-product-variant__input-group")
    ).map(async (variant: any) => {
      const variantName = (
        variant.querySelector("input[name='variant_name']") as HTMLInputElement
      ).value;

      const variantImgAlt = variant.querySelector(
        "input[name='product_variant_img_alt']"
      ).value;
      // console.log("va alt", variantImgAlt);

      const variantImg = Array.from(
        variant.querySelector("input[name='product_variant_img']").files
      );
      // console.log("va img", variantImg);

      const variantImgUrl = await uploadImages(variantImg);
      // console.log("2. va up url", variantImgUrl[0]);

      productImgUrls.push(variantImgUrl[0]);

      const variantPrice = Number(
        (
          variant.querySelector(
            "input[name='variant_price']"
          ) as HTMLInputElement
        ).value
      );

      const variantQuantity = Number(
        (
          variant.querySelector(
            "input[name='variant_quantity']"
          ) as HTMLInputElement
        ).value
      );

      return {
        variant_name: variantName,
        price: variantPrice,
        in_stock: variantQuantity,
        variant_imgs: [
          {
            link: variantImgUrl[0],
            alt: createSlug(variantImgAlt),
          },
        ],
      };
    })
  );
  // console.log(productVariants);

  const productImgs = productImgUrls.map((file, index) => ({
    link: file,
    alt: createSlug(productAlt + "-" + (index + 1)),
  }));

  const productSpecifications = Array.from(
    document.querySelectorAll(".add-product-specification__input-row")
  )
    .slice(1)
    .map((specification) => {
      const specificationName = (
        specification.querySelector(
          "input[name='specification_name']"
        ) as HTMLInputElement
      ).value;

      const specificationValue = (
        specification.querySelector(
          "input[name='specification_value']"
        ) as HTMLInputElement
      ).value;

      return {
        name: specificationName,
        value: specificationValue,
      };
    });
  // console.log(productSpecifications);

  const formData = {
    product_name: productName,
    category_names: productCategories,
    product_imgs: productImgs,
    product_short_description: productShortDescription,
    product_description: productDescription,
    product_supp_price: productSuppPrice,
    product_variants: productVariants,
    product_detail: productSpecifications,
  };

  // console.log("formdaata", formData);

  addProduct(formData);
};

export default function AdminAddProductPage() {
  return (
    <main className="add-product-container">
      <section className="add-product-head">
        <h2>Thêm sản phẩm</h2>
        <button
          form="add-product-form"
          className="add-product-head__add-btn"
          type="submit">
          <span className="material-icons-round add-product-head__add-btn-icon">
            save
          </span>
          <span className="add-product-head__add-btn-text">Thêm sản phẩm</span>
        </button>
      </section>

      <form
        id="add-product-form"
        className="add-product-main"
        onSubmit={handleSubmitForm}>
        <div className="add-product-form-left">
          <section className="add-product-info add-product-section">
            <div className="add-product-main__title-div">
              <h3 className="add-product-main__title">Thông tin sản phẩm</h3>
            </div>

            <div className="add-product-main__input-group">
              <div className="add-product-main__input-row">
                <h5>Tên sản phẩm</h5>
                <input
                  className="add-product-main__input"
                  placeholder="Nhập tên sản phẩm"
                  type="text"
                  name="product_name"
                  required
                />
              </div>

              <div className="add-product-main__input-row">
                <h5>Hình ảnh</h5>
                <input
                  className="add-product-main__input"
                  placeholder="Nhập văn bản thay thế"
                  type="text"
                  name="product_image_alt"
                  required
                />
                <input
                  type="file"
                  name="product_imgs"
                  multiple
                  onChange={handleChangeImg}
                  className="add-image-input"
                />
              </div>

              <div className="add-product-main__input-row">
                <h5>Danh mục</h5>
                <input
                  className="add-product-main__input"
                  placeholder="Nhập tên danh mục"
                  type="text"
                  name="product_categories"
                  required
                />
              </div>

              <div className="add-product-main__input-row">
                <h5>Mô tả ngắn</h5>
                <input
                  className="add-product-main__input"
                  placeholder="Nhập mô tả ngắn"
                  type="text"
                  name="product_short_description"
                  required
                />
              </div>

              <div className="add-product-main__input-row">
                <h5>Mô tả sản phẩm</h5>
                <input
                  className="add-product-main__input"
                  placeholder="Nhập mô tả sản phẩm"
                  type="text"
                  name="product_description"
                  required
                />
              </div>

              <div
                className="add-product-main__input-row"
                onBlur={validateInputNumber}>
                <h5>Giá gốc</h5>
                <input
                  className="add-product-main__input"
                  placeholder="Nhập giá gốc"
                  type="text"
                  name="product_supp_price"
                  required
                />
              </div>
            </div>
          </section>

          <section className="add-product-specification add-product-section">
            <div className="add-product-main__title-div">
              <h3 className="add-product-main__title">Thông số sản phẩm</h3>
            </div>

            <div className="add-product-main__input-group">
              <div className="add-product-main__input-row add-product-specification__input-row">
                <h5 className="add-product-specification__item-title">
                  Tên thông số
                </h5>
                <h5 className="add-product-specification__item-title">
                  Giá trị thông số
                </h5>
                <div></div>
              </div>

              <div className="add-product-main__input-row add-product-specification__input-row">
                <div className="add-product-specification__input-row-item">
                  <input
                    className="add-product-main__input"
                    placeholder="Nhập tên thông số"
                    type="text"
                    name="specification_name"
                    required
                  />
                </div>

                <div className="add-product-specification__input-row-item">
                  <input
                    className="add-product-main__input"
                    placeholder="Nhập giá trị thông số"
                    type="text"
                    name="specification_value"
                    required
                  />
                </div>

                <div className="add-product-specification__close-btn-div">
                  <button
                    className="add-product-main__close-btn"
                    type="button"
                    onClick={handleCloseBtn}>
                    <span className="material-icons-round add-product-main__icon">
                      close
                    </span>
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="add-product-main__add-more-btn add-product-specification__add-more-btn"
                onClick={handleAddSpecification}>
                <span className="material-icons-round add-product-main__add-more-btn-icon">
                  add
                </span>
                <span className="add-product-main__add-more-btn-text">
                  Thêm thông số khác
                </span>
              </button>
            </div>
          </section>
        </div>

        <section className="add-product-variant add-product-section">
          <div className="add-product-main__title-div">
            <h3 className="add-product-main__title">Thông tin biến thể</h3>
          </div>

          <div className="add-product-main__input-group add-product-variant__input-group">
            <div className="add-product-variant__title-div">
              <h4 className="add-product-variant__title">
                Biến thể {countVariant}
              </h4>

              <button
                className="add-product-main__close-btn"
                type="button"
                onClick={handleCloseBtn}>
                <span className="material-icons-round add-product-main__icon">
                  close
                </span>
              </button>
            </div>

            <div className="add-product-main__input-row add-product-variant__input-row">
              <h5>Tên biến thể</h5>
              <input
                className="add-product-main__input"
                placeholder="Nhập tên biến thể"
                type="text"
                name="variant_name"
                required
              />
            </div>

            <div className="add-product-main__input-row add-product-variant__input-row">
              <h5>Hình ảnh</h5>
              <input
                className="add-product-main__input"
                placeholder="Nhập văn bản thay thế"
                type="text"
                name="product_variant_img_alt"
                required
              />
              <input
                type="file"
                name="product_variant_img"
                className="add-image-input"
                onChange={handleChangeImg}
              />
            </div>

            <div className="add-product-main__input-row add-product-variant__input-row">
              <h5>Giá tiền</h5>
              <input
                className="add-product-main__input"
                placeholder="Nhập giá tiền"
                type="text"
                name="variant_price"
                required
                onBlur={validateInputNumber}
              />
            </div>

            <div className="add-product-main__input-row add-product-variant__input-row">
              <h5>Số lượng</h5>
              <input
                className="add-product-main__input"
                placeholder="Nhập số lượng sản phẩm"
                type="text"
                name="variant_quantity"
                required
                onBlur={validateInputNumber}
              />
            </div>
          </div>

          <button
            type="button"
            className="add-product-main__add-more-btn add-product-variant__add-more-btn"
            onClick={handleAddVariant}>
            <span className="material-icons-round add-product-main__add-more-btn-icon">
              add
            </span>
            <span className="add-product-main__add-more-btn-text">
              Thêm biến thể khác
            </span>
          </button>
        </section>
      </form>

      <button
        form="add-product-form"
        className="add-product-head__add-btn"
        type="submit">
        <span className="material-icons-round add-product-head__add-btn-icon">
          save
        </span>
        <span className="add-product-head__add-btn-text">Thêm sản phẩm</span>
      </button>
    </main>
  );
}
