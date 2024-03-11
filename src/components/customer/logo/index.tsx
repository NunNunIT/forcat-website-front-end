// import libs
import Link from "next/link";

// import interface
import { ILogoProps } from "@/types/interfaces";

export default function Logo(props: ILogoProps) {
  return (
    <Link href="/">
      <img className={props.className}
        src={`/logo${props.white ? '-white' : '-brown'}.png`}
        alt="Logo" />
    </Link>
  )
}