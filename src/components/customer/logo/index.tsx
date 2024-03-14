// import libs
import Link from "next/link";
import Image from "next/image"

export default function CustomerLogo(props: ILogoProps) {
  return (
    <Link href="/">
      <Image className={props.className}
        src={`/logo${props.white ? '-white' : '-brown'}.png`}
        alt="Logo"
        width={140}
        height={48}
      />
    </Link>
  )
}