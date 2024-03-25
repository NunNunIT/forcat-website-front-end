// import libs
import type { Metadata } from "next";

// import css
import "./layout.css";

export const metadata: Metadata = {
  description: "Some test description",
};

export default function ForgotLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="forgot-container">{children}</main>;
}