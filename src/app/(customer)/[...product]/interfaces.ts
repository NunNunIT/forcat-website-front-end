interface ProductVariant {
  variant_name: string;
  price: number;
  variant_imgs: string[];
  discount_id: string;
  discount_amount: number;
  is_available: boolean;
  in_stock: number;
}

export interface IBuyForm {
  product_name: string;
  product_slug: string;
  product_avg_rating: number;
  product_variants: ProductVariant[];
}

export interface ISliderImage {
  link: string;
  alt: string;
}

export interface IReview {
  review_id: string;
  review_rating: number;
  user_name: string;
  user_avt: string;
  review_date: string;
  review_imgs: string;
  review_video: string;
  review_context: string;
}
