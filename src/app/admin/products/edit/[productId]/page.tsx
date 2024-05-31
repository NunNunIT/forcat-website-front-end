"use client";

// import libs
import React, { useEffect, useRef, useState } from "react";
import { CldImage } from "next-cloudinary";

// import utils
import { BACKEND_URL } from "@/utils/commonConst";
import {
  convertMoneyToNumber,
  convertNumberToMoney,
  createSlug,
} from "@/utils";

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

const getProduct = async (productId: string) => {
  try {
    const res = await fetch(`${BACKEND_URL}/admin/products/${productId}`);

    if (res.ok) {
      const data = await res.json();
      return data.data;
    }
  } catch (err) {
    console.log("get product", err);
  }
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

const updateProduct = async (product: any) => {
  try {
    const res = await fetch(`${BACKEND_URL}/admin/products/updateProduct`, {
      method: "POST",
      body: JSON.stringify({ product }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) location.reload();
    else alert("Try again later!");
  } catch (err) {
    console.log(err);
  }
};

const handleSubmitForm = async (event: any) => {
  event?.preventDefault();
  const addProductForm = document.querySelector("#add-product-form");

  const productId = (
    addProductForm?.querySelector(
      "input[name='product_id']"
    ) as HTMLInputElement
  ).value;

  const productNameInput = addProductForm?.querySelector(
    "input[name='product_name']"
  ) as HTMLInputElement;

  const productName =
    productNameInput.value == ""
      ? productNameInput.placeholder
      : productNameInput.value;
  // console.log("pn", productName);

  const productAltInput = addProductForm?.querySelector(
    "input[name='product_image_alt']"
  ) as HTMLInputElement;

  const productAlt =
    productAltInput.value == ""
      ? productAltInput.placeholder
      : productAltInput.value;
  // console.log("pral", productAlt);

  const productImgInput = document.querySelector(
    "input[name='product_imgs']"
  ) as HTMLInputElement;

  const productImgFiles = Array.from(productImgInput.files);
  // console.log("pfle", productImgFiles);

  let productImgUrls;
  if (productImgFiles.length == 0) {
    productImgUrls = Array.from(
      productImgInput.nextElementSibling.querySelectorAll(
        "input[name='product_image_url']"
      )
    ).map((image: any) => image.value);
  } else if (productImgFiles.length > 0) {
    productImgUrls = await uploadImages(productImgFiles);
  }
  // console.log("pfle", productImgUrls);

  const productCategoriesInput = addProductForm?.querySelector(
    "input[name='product_categories']"
  ) as HTMLInputElement;

  const productCategories = (
    productCategoriesInput.value == ""
      ? productCategoriesInput.placeholder
      : productCategoriesInput.value
  )
    .split(",")
    .map((category) => category.trim());
  // console.log(productCategories);

  const productShortDescriptionInput = addProductForm?.querySelector(
    "input[name='product_short_description']"
  ) as HTMLInputElement;

  const productShortDescription =
    productShortDescriptionInput.value == ""
      ? productShortDescriptionInput.placeholder
      : productShortDescriptionInput.value;
  // console.log(productShortDescription);

  const productDescriptionInput = addProductForm?.querySelector(
    "input[name='product_description']"
  ) as HTMLInputElement;

  const productDescription =
    productDescriptionInput.value == ""
      ? productDescriptionInput.placeholder
      : productDescriptionInput.value;
  // console.log(productDescription);

  const productSuppPriceInput = addProductForm?.querySelector(
    "input[name='product_supp_price']"
  ) as HTMLInputElement;

  const productSuppPrice = convertMoneyToNumber(
    productSuppPriceInput.value == ""
      ? productSuppPriceInput.placeholder
      : productSuppPriceInput.value
  );
  // console.log(productSuppPrice);

  const productVariants = await Promise.all(
    Array.from(
      addProductForm.querySelectorAll(".add-product-variant__input-group")
    ).map(async (variant: any) => {
      const variantIdInput = variant.querySelector(
        "input[name='variant_id']"
      ) as HTMLInputElement;

      let variantId;
      if (variantIdInput) variantId = variantIdInput.value;
      // console.log(variantId);

      const variantNameInput = variant.querySelector(
        "input[name='variant_name']"
      ) as HTMLInputElement;

      const variantName =
        variantNameInput.value == ""
          ? variantNameInput.placeholder
          : variantNameInput.value;
      // console.log("va n", variantName);

      const variantImgAltInput = variant.querySelector(
        "input[name='product_variant_img_alt']"
      ) as HTMLInputElement;

      const variantImgAlt =
        variantImgAltInput.value == ""
          ? variantImgAltInput.placeholder
          : variantImgAltInput.value;
      // console.log("va alt", variantImgAlt);

      const variantImg = Array.from(
        variant.querySelector("input[name='product_variant_img']").files
      );
      // console.log("va img", variantImg);

      let variantImgUrl;
      if (variantImg.length == 0) {
        variantImgUrl = (
          variant.querySelector(
            "input[name='product_variant_img_url']"
          ) as HTMLInputElement
        ).value;
      } else {
        const variantImgUrls = await uploadImages(variantImg);
        variantImgUrl = variantImgUrls[0];
      }
      // console.log("urllll", variantImgUrl);

      productImgUrls.push(variantImgUrl);
      // console.log("proooou", productImgUrls);

      const variantPriceInput = variant.querySelector(
        "input[name='variant_price']"
      ) as HTMLInputElement;

      const variantPrice = convertMoneyToNumber(
        variantPriceInput.value == ""
          ? variantPriceInput.placeholder
          : variantPriceInput.value
      );
      // console.log("varpppp", variantPrice);

      const variantQuantityInput = variant.querySelector(
        "input[name='variant_quantity']"
      ) as HTMLInputElement;

      const variantQuantity = Number(
        variantQuantityInput.value == ""
          ? variantQuantityInput.placeholder
          : variantQuantityInput.value
      );
      // console.log("varpppp", variantQuantity);

      return {
        id: variantId,
        variant_name: variantName,
        price: variantPrice,
        in_stock: variantQuantity,
        variant_imgs: [
          {
            link: variantImgUrl,
            alt: createSlug(variantImgAlt),
          },
        ],
      };
    })
  );
  // console.log(productVariants);

  const productImgs = productImgUrls.map((img, index) => ({
    link: img,
    alt: createSlug(productAlt + "-" + (index + 1)),
  }));

  const productSpecifications = Array.from(
    document.querySelectorAll(".add-product-specification__input-row")
  )
    .slice(1)
    .map((specification) => {
      const specificationNameInput = specification.querySelector(
        "input[name='specification_name']"
      ) as HTMLInputElement;

      const specificationName =
        specificationNameInput.value == ""
          ? specificationNameInput.placeholder
          : specificationNameInput.value;
      // console.log("spppppp", specificationName);

      const specificationValueInput = specification.querySelector(
        "input[name='specification_value']"
      ) as HTMLInputElement;

      const specificationValue =
        specificationValueInput.value == ""
          ? specificationValueInput.placeholder
          : specificationValueInput.value;
      // console.log("spppppp", specificationValue);

      return {
        name: specificationName,
        value: specificationValue,
      };
    });
  // console.log(productSpecifications);

  const createdAt = (document.querySelector(".created-at") as HTMLSpanElement)
    .innerHTML;
  // console.log("uppppppppp", createdAt);

  const formData = {
    product_id: productId,
    product_name: productName,
    category_names: productCategories,
    product_imgs: productImgs,
    product_short_description: productShortDescription,
    product_description: productDescription,
    product_supp_price: productSuppPrice,
    product_variants: productVariants,
    product_detail: productSpecifications,
    createdAt: createdAt,
  };

  // console.log("formdaata", formData);

  updateProduct(formData);
};

export default function AdminEditProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const productId = params.productId;
  // console.log("prrrrrrrrrrr", productId);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProduct(productId);
      if (data) setProduct(data?.product);
    };

    fetchData();
  }, []);

  console.log("pppppppppp", product);

  return (
    <main className="add-product-container">
      <section className="add-product-head">
        <h2>Cập nhật sản phẩm</h2>
        <button
          form="add-product-form"
          className="add-product-head__add-btn"
          type="submit">
          <span className="material-icons-round add-product-head__add-btn-icon">
            save
          </span>
          <span className="add-product-head__add-btn-text">Lưu thay đổi</span>
        </button>
      </section>

      <p className="add-product-date">
        <span className="add-product-date__title">Ngày thêm: </span>
        <span className="add-product-date__text created-at">
          {product?.createdAt}
        </span>
      </p>

      <p className="add-product-date">
        <span className="add-product-date__title">Cập nhật lần cuối: </span>
        <span className="add-product-date__text">{product?.updatedAt}</span>
      </p>

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
                <h5>Mã sản phẩm</h5>
                <input
                  className="add-product-main__input"
                  value={product?._id}
                  type="text"
                  name="product_id"
                  disabled
                />
              </div>

              <div className="add-product-main__input-row">
                <h5>Tên sản phẩm</h5>
                <input
                  className="add-product-main__input"
                  placeholder={product?.product_name}
                  type="text"
                  name="product_name"
                />
              </div>

              <div className="add-product-main__input-row">
                <h5>Hình ảnh</h5>
                <input
                  className="add-product-main__input"
                  placeholder={product?.product_imgs[0].alt}
                  type="text"
                  name="product_image_alt"
                />
                <input
                  type="file"
                  name="product_imgs"
                  multiple
                  onChange={handleChangeImg}
                  className="add-image-input"
                />

                <div className="add-product-main__preview-image-div">
                  {product?.product_imgs.map((img, index) => (
                    <React.Fragment key={"product-image" + index}>
                      <input
                        type="hidden"
                        name="product_image_url"
                        value={img.link}
                      />
                      <CldImage
                        className="add-product-main__preview-image"
                        src={img.link}
                        alt={img.alt}
                        width={100}
                        height={100}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="add-product-main__input-row">
                <h5>Danh mục</h5>
                <input
                  className="add-product-main__input"
                  placeholder={product?.category_names.join(", ")}
                  type="text"
                  name="product_categories"
                />
              </div>

              <div className="add-product-main__input-row">
                <h5>Mô tả ngắn</h5>
                <input
                  className="add-product-main__input"
                  placeholder={product?.product_short_description}
                  type="text"
                  name="product_short_description"
                />
              </div>

              <div className="add-product-main__input-row">
                <h5>Mô tả sản phẩm</h5>
                <input
                  className="add-product-main__input"
                  placeholder={product?.product_description}
                  type="text"
                  name="product_description"
                />
              </div>

              <div
                className="add-product-main__input-row"
                onBlur={validateInputNumber}>
                <h5>Giá gốc</h5>
                <input
                  className="add-product-main__input"
                  placeholder={convertNumberToMoney(
                    product?.product_supp_price
                  )}
                  type="text"
                  name="product_supp_price"
                />
              </div>
            </div>
          </section>

          <section className="add-product-specification add-product-section">
            <div className="add-product-main__title-div">
              <h3 className="add-product-main__title">Thông số sản phẩm</h3>
            </div>

            <div
              className="add-product-main__input-group"
              key={"product detail"}>
              <div className="add-product-main__input-row add-product-specification__input-row">
                <h5 className="add-product-specification__item-title">
                  Tên thông số
                </h5>
                <h5 className="add-product-specification__item-title">
                  Giá trị thông số
                </h5>
                <div></div>
              </div>

              {product?.product_detail &&
                Object.keys(product?.product_detail).map((detailKey, index) => (
                  <div
                    className="add-product-main__input-row add-product-specification__input-row"
                    key={"product detail " + index}>
                    <div className="add-product-specification__input-row-item">
                      <input
                        className="add-product-main__input"
                        placeholder={product?.product_detail[detailKey].name}
                        type="text"
                        name="specification_name"
                      />
                    </div>

                    <div className="add-product-specification__input-row-item">
                      <input
                        className="add-product-main__input"
                        placeholder={product?.product_detail[detailKey].value}
                        type="text"
                        name="specification_value"
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
                ))}

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

          {product?.product_variants.map((variant, index) => {
            countVariant = index + 1;
            return (
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
                  <h5>Mã biến thể</h5>
                  <input
                    className="add-product-main__input"
                    value={variant._id}
                    type="text"
                    name="variant_id"
                    disabled
                  />
                </div>

                <div className="add-product-main__input-row add-product-variant__input-row">
                  <h5>Tên biến thể</h5>
                  <input
                    className="add-product-main__input"
                    placeholder={variant.variant_name}
                    type="text"
                    name="variant_name"
                  />
                </div>

                <div className="add-product-main__input-row add-product-variant__input-row">
                  <h5>Hình ảnh</h5>
                  <input
                    className="add-product-main__input"
                    placeholder={variant.variant_imgs[0].alt}
                    type="text"
                    name="product_variant_img_alt"
                  />
                  <input
                    type="file"
                    name="product_variant_img"
                    className="add-image-input"
                    onChange={handleChangeImg}
                  />
                  <div className="add-product-main__preview-image-div">
                    <input
                      type="hidden"
                      name="product_variant_img_url"
                      value={variant.variant_imgs[0].link}
                    />
                    <CldImage
                      className="add-product-main__preview-image"
                      src={variant.variant_imgs[0].link}
                      alt={variant.variant_imgs[0].alt}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>

                <div className="add-product-main__input-row add-product-variant__input-row">
                  <h5>Giá tiền</h5>
                  <input
                    className="add-product-main__input"
                    placeholder={convertNumberToMoney(variant.price)}
                    type="text"
                    name="variant_price"
                    onBlur={validateInputNumber}
                  />
                </div>

                <div className="add-product-main__input-row add-product-variant__input-row">
                  <h5>Số lượng</h5>
                  <input
                    className="add-product-main__input"
                    placeholder={variant.in_stock}
                    type="text"
                    name="variant_quantity"
                    onBlur={validateInputNumber}
                  />
                </div>
              </div>
            );
          })}

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
        <span className="add-product-head__add-btn-text">Lưu thay đổi</span>
      </button>
    </main>
  );
}
