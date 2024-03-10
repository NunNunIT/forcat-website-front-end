// import libs
import classNames from "classnames/bind";

// import css
import styles from "./styles.module.css";

// use css
const cx = classNames.bind(styles);

export default function CustomerRating({ fontSize }: { fontSize: TRating }) {
  const starStyle = {
    fontSize: fontSize,
  };

  return (
    <div className={cx("rating__stars")}>
      <span style={starStyle} className="material-icons-round fill">
        star
      </span>
      <span style={starStyle} className="material-icons-round fill">
        star
      </span>
      <span style={starStyle} className="material-icons-round fill">
        star
      </span>
      <span style={starStyle} className="material-icons-round fill">
        star
      </span>
      <span style={starStyle} className="material-icons-round fill">
        star
      </span>
    </div>
  );
}
