import type { Metadata } from "next";
import Link from "next/link";

const _title = "xeng";

export const metadata: Metadata = {
  title: _title,
  description: "carrrrrrt",
};

export default function Cart() {
  return (
    <main>
      <h1>cart</h1>
      <a href="/about">to about</a>
      <br />
      <Link href="/about">to about</Link>
    </main>
  );
}
