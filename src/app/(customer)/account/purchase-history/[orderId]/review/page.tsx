"use client";

// import libs
// import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// import css
import "./page.css";

interface IReviewItem {
  product_id: string;
  product_name: string;
  variant_name: string;
  variant_image: {
    src: string;
    alt: string;
  };
  quantity: number;
  unit_price: number;
}

const data:IReviewItem[] = [
  {
    product_id: "1",
    product_name: "Tên sản phẩm 1",
    variant_name: "Tên biến thể 1",
    variant_image: {
      src: "/imgs/test.png",
      alt: "Test",
    },
    quantity: 1,
    unit_price: 100000,
  },
  {
    product_id: "2",
    product_name: "Tên sản phẩm 2",
    variant_name: "Tên biến thể 2",
    variant_image: {
      src: "/imgs/test.png",
      alt: "Test",
    },
    quantity: 2,
    unit_price: 100000,
  }
]

export default function ReviewPage() {
  return (
    <div className="review">
      <h2>Đánh giá sản phẩm</h2>
      <div className="review-wrapper">
        {data.map(item =>
          <ReviewProduct key={item.product_id} {...item}/>
        )}
      </div>
    </div>
  );
}

function ReviewProduct(props: IReviewItem) {
  const [star, setStar] = useState<number>(0);

  return (
    <div className="review-item">
      <section className="product-container">
        <div className="product__img-container">
          <Image src={props.variant_image.src} alt={props.variant_image.alt} fill />
        </div>
        <div className="product__detail">
          <h5>{props.product_name}</h5>
          <span>Phân loại sản phẩm: {props.variant_name}</span>
          <span>{props.unit_price}đ</span>
          <span>x{props.quantity}</span>
        </div>
      </section>
      <section className="review__rating">
        Chất lượng sản phẩm:
        <span className="review__star-rating">
          {[1, 2, 3, 4, 5].map((index) =>
            <span key={index}
              className={`material-icons${(index <= star) ? "" : "-outlined"}`}
              onClick={() => { setStar(index) }}
            >
              grade
            </span>
          )}
        </span>
      </section>
      <div className="image-upload-container">
        <input type="file" id="imageUpload" name="image" className="imageUpload" accept="image/*" />
        <label htmlFor="imageUpload" className="image-upload-label">
          <span className="material-icons-outlined">
            add_a_photo
          </span> Thêm hình ảnh
        </label>
      </div>
      <textarea name="review__content" cols={30} rows={8} placeholder="Đánh giá của bạn..."/>
      <button className="btn btn--filled sec">Đánh giá</button>
    </div>
  )
}