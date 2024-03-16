// import libs
import classNames from "classnames/bind";

// import components
import { CustomerRating } from "@/components";

// import css
import styles from "./rating-full.module.css";

// use css
const cx = classNames.bind(styles);

export default function CustomerRatingFull({
  initValue,
  ...prop
}: {
  initValue: IRating;
}) {
  return (
    <div className={cx("rating")}>
      <span className={cx("rating__average")}>5/5</span>
      <CustomerRating initValue={initValue}></CustomerRating>
      <span className={cx("rating__numbers")}>(100)</span>
    </div>
  );
}
