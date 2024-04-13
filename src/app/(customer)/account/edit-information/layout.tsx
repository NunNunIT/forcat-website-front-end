
import type { Metadata } from "next";

// import css

export const metadata: Metadata = {
  description: "Some test description",
};

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div >
      {children}
    </div>
  );
}
