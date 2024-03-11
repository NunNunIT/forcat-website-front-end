import Link from "next/link";

interface LogoProps {
  className?: string,
  white?: boolean
}

export default function Logo(props: LogoProps) {
  return (
    <Link href="/">
      <img className={props.className}
        src={`/logo${props.white ? '-white' : '-brown'}.png`}
        alt="Logo" />
    </Link>
  )
}