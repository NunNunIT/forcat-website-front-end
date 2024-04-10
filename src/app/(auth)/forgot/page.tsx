"use client";

import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";

// import components
import { AuthForgotForm } from "@/components";

// import css
import styles from "../auth.module.css";

const cx = classNames.bind(styles);

export default function ForgotPage() {
  return (
    <main className={cx("auth_main")}>
      <div className={cx("auth__image-wrap", "login")}>
        <Image
          className={cx("auth__image")}
          src="/imgs/auth/meo-1.png"
          alt="Anh meo vang"
          fill={true}
        />
      </div>
      <div className={cx("auth__forms-wrap", "login")}>
        <AuthForgotForm/>
      </div>
    </main>
  );
}
