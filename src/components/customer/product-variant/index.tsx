"use client";

// import libs
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames/bind";

// import css
import styles from "./product-variant.module.css";

// use css
const cx = classNames.bind(styles);

export default function CustomerProductVariant({
  variant,
  ...props
}: {
  variant: IVariant;
}) {
  const pathname = usePathname();
  const isActive = pathname === variant.url ? "variant__active" : "";
  console.log("pathname: " + pathname);
  console.log("variant.url: " + variant.url);
  console.log("isActive: " + isActive);
  console.log("cx: " + cx("variant", isActive));

  return (
    <Link className={cx("variant", isActive)} href={variant.url}>
      <img
        className={cx("variant__tick")}
        src="/imgs/tick.png"
        alt="Decoration tick"
      />
      <img
        className={cx("variant__image")}
        src={variant.image.url}
        alt={variant.image.alt}
      />
      <span className={cx("variant__name")}>{variant.name}</span>
    </Link>
  );
}
