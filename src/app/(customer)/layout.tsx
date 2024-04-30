// use metadata
import type { Metadata } from "next";

// use components
import { CustomerFooter, CustomerHeader, CustomerAppBar } from "@/partials";
import { CustomerBreadcrumb } from "@/components";

export default function CustomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CustomerHeader />
      <CustomerBreadcrumb />
      {children}
      <CustomerFooter />
      <CustomerAppBar />
    </>
  );
}
