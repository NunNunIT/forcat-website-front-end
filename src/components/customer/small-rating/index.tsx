// import libs
import classNames from "classnames/bind";

// import css
import styles from "./styles.module.css";

// use css
const cx = classNames.bind(styles);

export default function CustomerSmallRating() {
  return (
    <div className={cx("rating")}>
      <span className={cx("rating__average")}>5.0</span>
      <div className={cx("rating__stars")}>
        <span className="material-icons-round fill">star</span>
        <span className="material-icons-round fill">star</span>
        <span className="material-icons-round fill">star</span>
        <span className="material-icons-round fill">star</span>
        <span className="material-icons-round fill">star</span>
      </div>
      <span className={cx("rating__numbers")}>(100)</span>
    </div>
  );
}
