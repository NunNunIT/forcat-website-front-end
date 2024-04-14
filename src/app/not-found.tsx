// import libs
import Image from "next/image";
import Link from "next/link";

// import partials
import { CustomerHeader, CustomerFooter, CustomerAppBar } from "@/partials";

// import css
import "./not-found.css";

export default function NotFound() {
  return (
    <>
      <CustomerHeader></CustomerHeader>
      <main className="not-found-container">
        <div className="not-found__image-div">
          <Image
            src="/imgs/not-found-page/not-found.webp"
            alt="Trang bạn truy cập không tồn tại"
            fill={true}
          />
        </div>
        <p className="not-found__text">
          Trang bạn đang truy cập hiện không khả dụng
        </p>
        <Link className="not-found__button" href="/">
          Về trang chủ
        </Link>
      </main>
      <CustomerFooter></CustomerFooter>
      <CustomerAppBar></CustomerAppBar>
    </>
  );
}
