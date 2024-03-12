import React from "react";
import { CustomerSlider } from "@/components";
import { CustomerCategories } from "@/components";
// use css
import "./page.css";

export default function Home() {
  return (
    <>
      <CustomerSlider></CustomerSlider>
      <CustomerCategories></CustomerCategories>
    </>
  );
}
