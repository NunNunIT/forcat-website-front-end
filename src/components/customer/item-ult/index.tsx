// import libs
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames/bind";

// import css
import styles from "./style.module.css";

const cx = classNames.bind(styles);

export default function CustomerHeaderItemUlt() {
  return (
    <div className={cx("header__item-ult")}>
      <div className={cx("header__item-ult__title")}>
        <Link
          className={cx("header__item-ult__title__link")}
          title="Thức ăn mèo Royal Canin INDOOR 10kg"
          href="#">
          Xẻng Xúc Cát Cho Mèo Bằng Kim Loại Mạ Vàng Sang Trọng FORCAT
        </Link>
        <div className={cx("header__item-ult__title__price")}>220.000đ</div>
      </div>
      <div className={cx("header__item-ult__thumbs")}>
        <Link href="#" className={cx("header__item-ult__thumbs__link")}>
          <Image
            className={cx("header__item-ult__thumbs__img")}
            src="/imgs/test.png"
            alt="product image"
            fill={true}
          />
        </Link>
      </div>
    </div>
  );
}
