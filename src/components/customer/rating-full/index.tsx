// import libs
import classNames from "classnames/bind";

// import components
import { CustomerRating } from "@/components";

// import css
import styles from "./styles.module.css";

// use css
const cx = classNames.bind(styles);

export default function CustomerRatingFull({
  fontSize,
}: {
  fontSize: TRating;
}) {
  return (
    <div className={cx("rating")}>
      <span className={cx("rating__average")}>5/5</span>
      <CustomerRating fontSize={fontSize}></CustomerRating>
      <span className={cx("rating__numbers")}>(100)</span>
    </div>
  );
}
