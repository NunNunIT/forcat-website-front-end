"use client";

// import libs
import Link from "next/link";
import { useRouter } from "next/navigation";
import { isActiveClassWithBool } from "@/utils";
import classNames from "classnames/bind";

// import css
import styles from "./pagination.module.css";

interface IPaginationProps {
  maxPage: number;
  currentPage: number;
  hrefFunc: (page: number) => string;
}

const cx = classNames.bind(styles);

export default function Pagination(props: IPaginationProps) {
  const router = useRouter();
  const siblings: number = 1;
  const pages: number[] = Array.from(
    { length: siblings * 2 + 1 },
    (_, i) => props.currentPage - siblings + i)
    .filter(page => page > 1 && page < props.maxPage);

  const objContinue: {
    isLeftContinue: boolean,
    isRightContinue: boolean
  } = {
    isLeftContinue: !(pages.length > 0 && pages[0] !== 2),
    isRightContinue: !(pages.length > 0 && pages[pages.length - 1] !== props.maxPage - 1) && !(pages.length == 0 && props.maxPage > 2),
  };

  return (
    <div className={cx("pagination-container")}>
      <button disabled={props.currentPage === 1}
        onClick={() => {
          const navigationPage: number = props.currentPage - 1;
          const navigationURL: string = props.hrefFunc(navigationPage);
          router.push(navigationURL);
        }}
      >
        <span className="material-icons-outlined">arrow_back_ios</span>
      </button>
      <Link
        className={cx(isActiveClassWithBool(props.currentPage === 1))}
        href={props.hrefFunc(1)}
      >
        {1}
      </Link>
      {!objContinue.isLeftContinue && <span>...</span>}
      {pages.map(page =>
        <Link key={page}
          className={cx(isActiveClassWithBool(props.currentPage === page))}
          href={props.hrefFunc(page)}
        >
          {page}
        </Link>)}
      {!objContinue.isRightContinue && <span>...</span>}
      <Link
        className={cx(isActiveClassWithBool(props.currentPage === props.maxPage))}
        href={props.hrefFunc(props.maxPage)}
      >
        {props.maxPage}
      </Link>
      <button disabled={props.currentPage === props.maxPage}
        onClick={() => {
          const navigationPage: number = props.currentPage + 1;
          const navigationURL: string = props.hrefFunc(navigationPage);
          router.push(navigationURL);
        }}
      >
        <span className="material-icons-outlined">arrow_forward_ios</span>
      </button>
    </div>
  )
}