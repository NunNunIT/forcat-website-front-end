// import libs
import Link from "next/link";

export default function CustomerLogo(props: ILogoProps) {
  return (
    <Link href="/">
      <img className={props.className}
        src={`/logo${props.white ? '-white' : '-brown'}.png`}
        alt="Logo" />
    </Link>
  )
}