"use client";

import styles from "../authForm.module.css";
import { useState } from "react";
import Link from "next/link";

import classNames from "classnames/bind";
import { isValidEmail } from "@/utils/index";
import { BACKEND_URL } from "@/utils/common_const";
import OAuth from "../oAuth/oAuth";

const cx = classNames.bind(styles);

const RegisterForm = () => {
  // Initial state
  const initialForms = {
    user_name: "",
    user_email: "",
    user_password: "",
    passwordRepeat: "",
  };

  const [formData, setFormData] = useState(initialForms);
  const [errors, setErrors] = useState(initialForms);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(initialForms);

    // Check for validation
    let isValid = true;
    const newErrors = { ...initialForms };

    if (!formData.user_name) {
      newErrors.user_name = "Họ tên không được bỏ trống!";
      isValid = false;
    }

    if (!formData.user_email) {
      newErrors.user_email = "Email không được bỏ trống!";
      isValid = false;
    } else if (!isValidEmail(formData.user_email)) {
      newErrors.user_email = "Email không đúng định dạng!";
      isValid = false;
    }

    if (!formData.user_password) {
      newErrors.user_password = "Mật khẩu không được bỏ trống!";
      isValid = false;
    } else if (formData.user_password.length < 8) {
      newErrors.user_password = "Độ dài mật khẩu phải trên 8 ký tự!";
      isValid = false;
    }

    if (!formData.passwordRepeat) {
      newErrors.passwordRepeat = "Xác nhận mật khẩu không được bỏ trống!";
      isValid = false;
    } else if (formData.passwordRepeat.length < 8) {
      newErrors.passwordRepeat = "Độ dài mật khẩu phải trên 8 ký tự!";
      isValid = false;
    }

    if (formData.user_password && formData.passwordRepeat && formData.passwordRepeat != formData.user_password) {
      newErrors.passwordRepeat = "Mật khẩu không trùng khớp!";
      newErrors.user_password = "Mật khẩu không trùng khớp!";
      isValid = false;
    }

    // Update state with errors
    setErrors(newErrors);

    if (isValid) {
      try {
        setLoading(true);
        setErrors(initialForms);
        const res = await fetch(BACKEND_URL + "/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Assuming formData is an object
        });
        const data = await res.json();
        setLoading(false);

        if (data.status != 200) {
          newErrors.user_email = "Email đã được sử dụng!";
          setErrors(newErrors);
          return;
        }
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }
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
        {errors.user_name && (
          <p className={cx("text-error", "form-error")}>{errors.user_name}</p>
        )}
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
        {errors.user_email && (
          <p className={cx("text-error", "form-error")}>{errors.user_email}</p>
        )}
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
        {errors.user_password && (
          <p className={cx("text-error", "form-error")}>
            {errors.user_password}
          </p>
        )}
      </div>

      <div className={cx("form-auth__input-content")}>
        <label htmlFor="passwordRepeat">Xác nhận mật khẩu</label>
        <input
          type="password"
          placeholder="Nhập lại mật khẩu"
          name="passwordRepeat"
          id="passwordRepeat"
          onChange={handleChange}
        />
        {errors.passwordRepeat && (
          <p className={cx("text-error", "form-error")}>
            {errors.passwordRepeat}
          </p>
        )}
      </div>

      <button disabled={loading} className={cx("form-button")}>
        <h3>{loading ? "Đang xử lý..." : "Đăng ký"}</h3>
      </button>

      {error && (
          <p className={cx("text-error")}>
            Lỗi !!! Vui lòng thử lại sau
          </p>
      )}

      < OAuth />
    </form>
  );
};

export default RegisterForm;
