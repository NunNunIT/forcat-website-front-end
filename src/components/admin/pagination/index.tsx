"use client";

// import libs
import Link from "next/link";
import classNames from "classnames/bind";

// import css
import styles from "./pagination.module.css";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// use css
const cx = classNames.bind(styles);

export default function AdminPagination({ totalPages }: { totalPages: any }) {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [currentPage, setCurrentPage] = useState(Number(searchParams.get("p")));

  const handleClickPrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      router.replace(`${pathName}?p=${currentPage - 1}`);
    }
  };

  const handleClickNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      router.replace(`${pathName}?p=${currentPage + 1}`);
    }
  };

  const handleClickPagination = (event) => {
    const current = event.currentTarget;
    setCurrentPage(current.innerHTML - 1);
  };

  return (
    <div className={cx("product-page-pagination")}>
      <button
        className={cx(
          "product-page-pagination__item",
          "product-page-pagination__item-first"
        )}
        onClick={handleClickPrev}>
        <span className={cx("material-icons-round")}>navigate_before</span>
      </button>

      {Array(totalPages)
        .fill(null)
        .map((_, index) => {
          return (
            <Link
              className={cx(
                "product-page-pagination__item",
                Number(searchParams.get("p")) == index
                  ? "product-page-pagination__item-highlight"
                  : ""
              )}
              onClick={handleClickPagination}
              key={"pagination" + index}
              href={`${pathName}?p=${index}`}>
              {index + 1}
            </Link>
          );
        })}

      {/* <div className={cx("product-page-pagination__item")}>1</div>
      <div className={cx("product-page-pagination__item")}>2</div>
      <div
        className={cx(
          "product-page-pagination__item",
          "product-page-pagination__item-dot"
        )}>
        ...
      </div>
      <div className={cx("product-page-pagination__item")}>5</div> */}
      <button
        className={cx(
          "product-page-pagination__item",
          "product-page-pagination__item-last"
        )}
        onClick={handleClickNext}>
        <span className={cx("material-icons-round")}>navigate_next</span>
      </button>
    </div>
  );
}
