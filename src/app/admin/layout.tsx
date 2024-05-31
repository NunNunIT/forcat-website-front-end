// import libs
import React from "react";

//import components
import { AdminSideBar } from "@/partials";

//import css
import "./layout.css";

export default function CustomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="admin-page">
      <AdminSideBar />
      {children}
    </div>
  );
}
