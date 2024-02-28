"use client";

// import type { Metadata } from "next";
import { useEffect } from "react";

import { Test } from "./(components)";

// export const metadata: Metadata = {
//   title: "about",
//   description: "abooooooooout",
// };

export default function Home() {
  useEffect(() => {
    fetch("http://localhost:3000/", {
      method: "GET",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <>
      <main>about</main>
      <Test></Test>
    </>
  );
}
