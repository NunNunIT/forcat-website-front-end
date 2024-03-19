// use metadata
import type { Metadata } from "next";

// use components
import { CustomerFooter, CustomerHeader } from "@/partials";

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
    </>
  );
}
