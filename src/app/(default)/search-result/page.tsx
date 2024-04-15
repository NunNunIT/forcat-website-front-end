// import libs
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BACKEND_URL } from "@/utils/commonConst";

// import components
import { CustomerProductCard } from "@/components";

//import partials
import { SearchResultContainer } from "./partials";

// import css
import "./page.css";

export default function SearchResultPage() {
  return <SearchResultContainer />;
}
