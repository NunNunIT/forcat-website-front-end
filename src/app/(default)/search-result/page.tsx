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
    if (searchParams.searchKey) {
      queryParams.push(`searchKey=${searchParams.searchKey}`);
    }
    if (searchParams.category) {
      queryParams.push(`category=${searchParams.category}`);
    }
    if (searchParams.discount) {
      queryParams.push(`discount=${searchParams.discount}`);
    }
    if (searchParams.topRate) {
      queryParams.push(`sortBy=hot`);
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
  let iteamFind;
  if (searchParams.searchKey) {
    iteamFind = searchParams.searchKey;
  } else if (searchParams.category) {
    iteamFind = searchParams.category;
  } else if (searchParams.discount) {
    iteamFind = "discountTrue";
  } else if (searchParams.sortBy == "hot") {
    iteamFind = "topRateTrue";
  } else if (searchParams.sortBy == "new") {
    iteamFind = "newTrue";
  }

  const searchResults = await getSearchProduct(searchParams);
  return (
    <SearchResultContainer
    iteamFind={iteamFind}
      searchResults={searchResults}
    />
  );
}
