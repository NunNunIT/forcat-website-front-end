// import libs
import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

//import partials
import { SearchResultContainer } from "./partials";

// import utils
import { BACKEND_URL } from "@/utils/commonConst";

// import css
import "./page.css";

export const metadata: Metadata = {
  title: "Kết quả tìm kiếm",
  description:
    "Kết quả tìm kiếm trên ForCat Shop sẽ giúp bạn dễ dàng tìm thấy những sản phẩm và thông tin mà bạn đang quan tâm. Hãy khám phá các kết quả tìm kiếm và tìm thấy những điều tuyệt vời mà ForCat mang lại cho bạn!",
};

// fetch data
async function getSearchProduct(searchParams) {
  try {
    // Khởi tạo mảng rỗng để chứa các thành phần của query string
    const queryParams = [];

    // Kiểm tra và thêm searchKey vào queryParams nếu không null
    if (searchParams.searchKey) {
      queryParams.push(`searchKey=${searchParams.searchKey}`);
    }

    // Kiểm tra và thêm category vào queryParams nếu không null
    if (searchParams.category) {
      queryParams.push(`category=${searchParams.category}`);
    }

    // Kiểm tra và thêm discount vào queryParams nếu không null
    if (searchParams.discount) {
      queryParams.push(`discount=${searchParams.discount}`);
    }

    // Thêm page vào queryParams
    queryParams.push(`page=${searchParams.page}`);

    // Tạo chuỗi query bằng cách nối các thành phần trong queryParams bằng "&"
    const queryString = queryParams.join("&");

    const res = await fetch(
      `${BACKEND_URL}/productList/search?${queryString}`,
      {
        next: { revalidate: 60 },
      }
    );

    const data = await res.json();
    // console.log("Dữ liệu tôi cần", data.data);
    return data.data;
  } catch {
    return notFound();
  }
}

export default async function SearchResultPage({
  params,
  searchParams,
}: {
  params: { "search-result": string };
  searchParams?: { [key: string]: string };
}) {
  // console.log("Lấy từ url", searchKey);
  const searchResults = await getSearchProduct(searchParams);
  return (
    <SearchResultContainer
      searchKey={searchParams.searchKey ?? searchParams.category ?? 0}
      searchResults={searchResults}
    />
  );
}
