// import libs
import type { Metadata } from "next";

// import css
import "./layout.css";

export const metadata: Metadata = {
  title: "Thông tin đặt hàng",
  description:
    "Xác nhận và kiểm tra thông tin đơn hàng của bạn trước khi hoàn tất thanh toán trên ForCat Shop. Trang này cho phép bạn xem lại các sản phẩm đã chọn, địa chỉ giao hàng và phương thức thanh toán trước khi hoàn tất đơn hàng của mình.",
};

export default function OrderInformationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="order-container">{children}</main>;
}
