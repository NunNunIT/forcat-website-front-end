// import libs
import Link from "next/link";
import Image from "next/image";
import classNameNames from "classnames/bind";

// import css
import style from "./logo.module.css";

const cx = classNameNames.bind(style);

export default function CustomerLogo(props: ILogoProps) {
  const { className } = props;
  return (
    <Link href="/" className={cx("logo__container") + " " + className}>
      <Image className={cx("logo__img")}
        src={`/logo${props.white ? '-white' : '-brown'}.png`}
        alt="Logo"
        fill
      />
    </Link>
  )
}