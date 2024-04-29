// use components
import { CustomerFooter, CustomerHeader, CustomerAppBar } from "@/partials";
import { CustomerBreadcrumb } from "@/components";

export default function DefaultLayout({
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
      <CustomerAppBar></CustomerAppBar>
    </>
  );
}
