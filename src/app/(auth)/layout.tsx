// import partials
import { CustomerFooter, CustomerHeader, CustomerAppBar } from "@/partials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Đăng nhập vào ForCat Shop để trải nghiệm mua sắm tuyệt vời. Tạo tài khoản ngay hôm nay để kết nối với sản phẩm mới, nhận ưu đãi đặc biệt và cơ hội tham gia vào các sự kiện hấp dẫn. Duyệt qua bộ sưu tập sản phẩm phong phú và chăm sóc thú cưng của bạn một cách dễ dàng và tiện lợi.",
};

export default function CustomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CustomerHeader />
      {children}
      <CustomerFooter />
      <CustomerAppBar></CustomerAppBar>
    </>
  );
}
