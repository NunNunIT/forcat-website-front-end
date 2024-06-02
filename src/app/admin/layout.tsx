// import libs
import React from "react";

// import components
import { Toaster } from "@/components/admin/ui/sonner";

// import css
import "./layout.css";

export default function CustomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="admin-page">
      {children}
      <Toaster />
    </div>
  );
}
