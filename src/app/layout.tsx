// use metadata
import type { Metadata } from "next";

// use styles
import "./global.css";

export const metadata: Metadata = {
  applicationName: "ForCat",
  referrer: "origin-when-cross-origin",
  keywords: ["Cửa hàng phụ kiện thú cưng"],
  title: {
    template: "ForCat. %s",
    default: "ForCat.",
  },
  description:
    "Chào mừng bạn đến với TECHTWO - địa chỉ mua sắm trực tuyến hàng đầu về điện máy! Khám phá thế giới công nghệ với sự đa dạng và chất lượng tốt nhất từ máy tính, điện thoại di động đến các sản phẩm gia dụng thông minh. Mua sắm an toàn, thuận tiện và tiết kiệm ngay hôm nay với các ưu đãi độc quyền. TECHTWO - Nơi nâng cao cuộc sống thông qua công nghệ!.",
  authors: [
    {
      name: "Lê Đức Mạnh",
      url: "https://github.com/namtuthien",
    },
  ],
};

export default function CustomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
