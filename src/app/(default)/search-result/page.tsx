// import libs
import React from "react";
import { BACKEND_URL } from "@/utils/commonConst";
import { notFound } from "next/navigation";
// import components
import { CustomerProductCard } from "@/components";

//import partials
import { SearchResultContainer } from "./partials";

// import css
import "./page.css";

// fetch data
async function getSearchProduct(searchKey, page) {
  try {
    const res = await fetch(`${BACKEND_URL}/productList/search?searchKey=${searchKey}&page=${page}`, {
      next: { revalidate: 60 },
    });

    const data = await res.json();
    console.log("Dữ liệu tôi cần", data.data)
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
  const { searchKey, page } = searchParams; // Truy cập tham số truy vấn searchKey từ params
  console.log("Lấy từ url", searchKey)
  const searchResults = await getSearchProduct(searchKey, page)
  return <SearchResultContainer searchKey={searchKey} searchResults={searchResults} />;
}
