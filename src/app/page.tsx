import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { CustomerCarousel } from "@/components";
import { CustomerSlider } from "@/components";
import { CustomerCategories } from "@/components";
// use css
import "./page.css";

export default function Home() {
  return (
    <>
      <CustomerSlider></CustomerSlider>
      <CustomerCategories></CustomerCategories>
      {/* <CustomerCarousel></CustomerCarousel> */}
      {/* <main className="content-container">This is main content</main> */}
    </>
  );
}
