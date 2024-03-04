"use client";

// import type { Metadata } from "next";
import { useEffect } from "react";

import { printHello } from "@/utils";

import { Test } from "./components";
import { handleClick } from "./utils";

import useSWR from "swr";

// export const metadata: Metadata = {
//   title: "about",
//   description: "abooooooooout",
// };

const fetcher = (url: any) =>
  fetch(url, {
    method: "GET",
    mode: "cors",
  }).then((res) => res.json());

export default function About() {
  const { data, error, isLoading } = useSWR("http://localhost:3001/", fetcher);

  // useEffect(() => {
  //   fetch("http://localhost:3000/", {
  //     method: "GET",
  //     mode: "cors",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .then(() => printHello());
  // }, []);

  return (
    <>
      <main className="a" onClick={handleClick}>
        {data?.test}
      </main>
      <Test></Test>
    </>
  );
}
