import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tài khoản",
  description:
    "Quản lý và cập nhật thông tin cá nhân của bạn trên ForCat Shop.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {
  return children;
}
