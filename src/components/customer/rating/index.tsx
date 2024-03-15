// import libs
import classNames from "classnames/bind";

// import css
import styles from "./rating.module.css";

// use css
const cx = classNames.bind(styles);

export default function CustomerRating({
  initValue,
  ...props
}: {
  initValue: IRating;
}) {
  const starStyle = {
    fontSize: initValue.fontSize,
  };

  return (
    <div className={cx("rating__stars")}>
      {Array(5)
        .fill(null)
        .map((item, index) => {
          if (
            Math.floor(initValue.rating) >= index + 1 ||
            (initValue.rating - index >= 0.5 && initValue.rating - index < 1)
          )
            return (
              <span
                key={index}
                style={starStyle}
                className={cx("material-icons-round", "star-fill")}>
                star
              </span>
            );
          // else if (
          //   initValue.rating - index >= 0.5 &&
          //   initValue.rating - index < 1
          // )
          //   return (
          //     <span
          //       key={index}
          //       style={starStyle}
          //       className={cx("material-icons-round", "star-half")}>
          //       star_half
          //     </span>
          //   );
          else
            return (
              <span
                key={index}
                style={starStyle}
                className={cx("material-icons-round", "star-empty")}>
                star
              </span>
            );
        })}
      {/* <span style={starStyle} className="material-icons-round fill">
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
      </span> */}
    </div>
  );
}
