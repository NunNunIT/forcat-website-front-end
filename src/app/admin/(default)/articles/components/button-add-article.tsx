"use client";

// import libs
import Link from "next/link";

// import components
import { buttonVariants } from "@/components/admin/ui/button";

export default function ButtonAddArticle() {
  return (
    <Link
      className={buttonVariants({ variant: "default", size: "sm" })}
      href="/admin/articles/add"
    >
      Tạo bài viết mới
    </Link>
  )
};
