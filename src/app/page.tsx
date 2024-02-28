import { Carousel } from "../components";

// use css
import "./page.css";

export default function Home() {
  return (
    <>
      <Carousel></Carousel>
      <main className="content-container">This is main content</main>
    </>
  );
}
