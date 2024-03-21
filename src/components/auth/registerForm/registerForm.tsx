"use client";

import styles from "../authForm.module.css";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import classNames from "classnames/bind";
import Image from "next/image";

import {BACKEND_URL} from '@/utils/common_const.ts';

const cx = classNames.bind(styles);

const RegisterForm = () => {
  // const [username, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  // const [state, formAction] = useFormState(register, undefined);

  // const router = useRouter();

  // useEffect(() => {
  //   state?.success && router.push("/");
  // }, [state?.success, router]);

  const [formData, setFormData] = useState({})
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  console.log(formData)

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const res = await fetch(BACKEND_URL + '/auth/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), // Assuming formData is an object
    });

    const data = await res.json();
    console.log(data)
  };

  return (
    <form className={cx("form-auth")} onSubmit={handleSubmit}>
      <div className={cx("form-auth__title")}>
        <h1>Đăng ký miễn phí, mua hàng thả ga!</h1>
        {/* {state?.error} */}
        <Link href="/login">
          <h3>
            Đã có tài khoản? <b>Đăng nhập ngay</b>{" "}
          </h3>
        </Link>
      </div>

      <div className={cx("form-auth__input-content")}>
        <label htmlFor="username">Họ tên</label>
        <input
          type="text"
          placeholder="Nhập họ tên "
          name="user_name"
          id="user_name"
          onChange={handleChange}
        />
      </div>

      <div className={cx("form-auth__input-content")}>
        <label htmlFor="username">Email</label>
        <input
          type="email"
          placeholder="Nhập email "
          name="user_email"
          id="user_email"
          onChange={handleChange}
        />
      </div>

      <div className={cx("form-auth__input-content")}>
        <label htmlFor="password">Mật khẩu</label>
        <input
          type="password"
          placeholder="Nhập mật khẩu"
          name="user_password"
          id="user_password"
          onChange={handleChange}
        />
      </div>

      <div className={cx("form-auth__input-content")}>
        <label htmlFor="passwordRepeat">Xác nhận mật khẩu</label>
        <input
          type="password"
          placeholder="Nhập lại mật khẩu"
          name="passwordRepeat"
        />
      </div>

      {/* {error && (
        <div className={cx("error")}>
          {error}
        </div>
      )} */}

      <button className={cx("form-button")}><h3>Đăng ký</h3></button>

      <div className={cx("form-auth__social-media")}>
        <p> Hoặc đăng ký bằng</p>
        <div className={cx("form-auth__social-buttons")}>
          <button className={cx("social-image")}>
            <Image src="/imgs/social_media/google-icon.jpg" alt="Google" fill />
          </button>
          <button className={cx("social-image")}>
            <Image
              src="/imgs/social_media//facebook-icon.svg"
              alt="Facebook"
              fill
            />
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
