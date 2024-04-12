import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trang lịch sử mua hàng",
  description: "Đây là trang lịch sử mua hàng của bạn",
};

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {
  return children;
};
