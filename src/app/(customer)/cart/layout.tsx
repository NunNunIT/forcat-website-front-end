// import libs
import type { Metadata } from "next";
export const metadata: Metadata = {
  description: "Some test description",
};

export default async function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
