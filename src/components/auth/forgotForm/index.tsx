"use client";

// import libs
import classNames from "classnames/bind";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, redirect } from "next/navigation";

// import utils
import { isValidEmail } from "@/utils/index";
import { BACKEND_URL } from "@/utils/commonConst";

// import css
import styles from "../authForm.module.css";

const cx = classNames.bind(styles);

const ForgotForm = () => {
  const initialForms = {
    user_email: "",
    user_password: "",
    user_confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialForms);
  const [errors, setErrors] = useState(initialForms);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentForm, setCurrentForm] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (event) => {
    // Only allow number input
    if (!event.target.value.match(/^[0-9]$/)) {
      event.target.value = "";
    }
  };
  const moveToNext = (currentInput, nextInputId, prevInputId) => {
    if (currentInput.value.length >= 1) {
      const nextInput = document.getElementById(nextInputId);
      if (nextInput) {
        nextInput.focus();
      }
    } else if (currentInput.value.length === 0 && prevInputId) {
      const prevInput = document.getElementById(prevInputId);
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  const [count, setCount] = useState(60);
  const [startCountdown, setStartCountdown] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [showResendMessage, setShowResendMessage] = useState(false);

  useEffect(() => {
    if (!startCountdown) return;
    if (count === 0) {
      return;
    }
    const timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count, startCountdown]);

  const handleResendOTP = (event) => {
    event.preventDefault();
    setIsResending(true);
    setShowResendMessage(true);

    // After 3 seconds, show the resend link again
    setTimeout(() => {
      setIsResending(false);
      setShowResendMessage(false);
    }, 3000);
    setCount(60);

    // Add any additional logic for resending OTP here
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleStep1 = async (e) => {
    e.preventDefault();

    let newErrors = { ...initialForms };
    let isValid = true;

    // Validate email
    if (!formData.user_email) {
      newErrors.user_email = "Email không được bỏ trống!";
      isValid = false;
    } else if (!isValidEmail(formData.user_email)) {
      newErrors.user_email = "Email không đúng định dạng!";
      isValid = false;
    }

    // Update state with errors
    setErrors(newErrors);
    if (isValid) {
      setCurrentForm(currentForm + 1);
      setStartCountdown(true);
    }
  };
  const handleStep2 = async (e) => {
    e.preventDefault();
    // if (validateInputOTP()) {
    //   setStep(3);
    // }
    setCurrentForm(currentForm + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(initialForms);

    // Check for validation
    let isValid = true;
    const newErrors = { ...initialForms };

    if (!formData.user_password) {
      newErrors.user_password = "Mật khẩu không được bỏ trống!";
      isValid = false;
    } else if (formData.user_password.length < 8) {
      newErrors.user_password = "Độ dài mật khẩu phải trên 8 ký tự!";
      isValid = false;
    }

    if (!formData.user_confirmPassword) {
      newErrors.user_confirmPassword = "Xác nhận mật khẩu không được bỏ trống!";
      isValid = false;
    } else if (formData.user_confirmPassword.length < 8) {
      newErrors.user_confirmPassword = "Độ dài mật khẩu phải trên 8 ký tự!";
      isValid = false;
    }

    if (
      formData.user_password &&
      formData.user_confirmPassword &&
      formData.user_confirmPassword != formData.user_password
    ) {
      newErrors.user_confirmPassword = "Mật khẩu không trùng khớp!";
      newErrors.user_password = "Mật khẩu không trùng khớp!";
      isValid = false;
    }

    // Update state with errors
    setErrors(newErrors);
    if (isValid) {
      try {
        setLoading(true);
        setErrors(initialForms);
        const res = await fetch(BACKEND_URL + "/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Assuming formData is an object
        });
        const data = await res.json();
        setLoading(false);

        if (data.status == 404) {
          newErrors.user_email = "Tài khoản không tồn tại!";
          setErrors(newErrors);
          return;
        } else if (data.status == 401) {
          newErrors.user_email = "Email không chính xác!";
          newErrors.user_password = "Mật khẩu không chính xác!";
          setErrors(newErrors);
          return;
        }

        redirect("/");
        // If no errors, move to the next form
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div>
      {currentForm === 1 && (
        <form className={cx("form-auth")} onSubmit={handleStep1}>
          <div className={cx("form-auth__title")}>
            <h2>Đặt lại mật khẩu</h2>
          </div>

          <div className={cx("form-auth__input-content")}>
            <label htmlFor="email">
              Email<span className={cx("red-start")}> *</span>
            </label>
            <input
              type="text"
              placeholder="Nhập email "
              name="user_email"
              id="user_email"
              onChange={handleChange}
            />
            {errors.user_email && (
              <p className={cx("text-error", "form-error")}>
                {errors.user_email}
              </p>
            )}
          </div>
          <div className={cx("form-confirm")}>
            <button disabled={loading} className={cx("form-button")}>
              <h3>{loading ? "Đang xử lý..." : "Xác nhận"}</h3>
            </button>
            <Link href="/login">
              <h3>Trở lại</h3>
            </Link>
          </div>
        </form>
      )}
      {currentForm === 2 && (
        <form className={cx("form-auth")} onSubmit={handleStep2}>
          <div className={cx("form-auth__title")}>
            <h2>Nhập mã OTP</h2>
          </div>
          <div className={cx("heading")}>
            <h5>Mã OTP đã được gửi đến thiết bị của bạn</h5>
          </div>
          <div className={cx("timer")}>
            {count === 0 ? "Hết thời gian xác nhận!" : count}
          </div>

          <div className={cx("input-wrap")}>
            <input
              type="text"
              name="otp"
              id="otp1"
              maxLength={1}
              onInput={(event) => {
                handleInputChange(event);
                moveToNext(document.getElementById("otp1"), "otp2", "");
              }}
            />
            <input
              type="text"
              name="otp"
              id="otp2"
              maxLength={1}
              onInput={(event) => {
                handleInputChange(event);
                moveToNext(document.getElementById("otp2"), "otp3", "otp1");
              }}
            />
            <input
              type="text"
              name="otp"
              id="otp3"
              maxLength={1}
              onInput={(event) => {
                handleInputChange(event);
                moveToNext(document.getElementById("otp3"), "otp4", "otp2");
              }}
            />
            <input
              type="text"
              name="otp"
              id="otp4"
              maxLength={1}
              onInput={(event) => {
                handleInputChange(event);
                moveToNext(document.getElementById("otp4"), "otp5", "otp3");
              }}
            />
            <input
              type="text"
              name="otp"
              id="otp5"
              maxLength={1}
              onInput={(event) => {
                handleInputChange(event);
                moveToNext(document.getElementById("otp5"), "otp6", "otp4");
              }}
            />

            <input
              type="text"
              name="otp"
              id="otp6"
              maxLength={1}
              onInput={(event) => {
                handleInputChange(event);
                moveToNext(document.getElementById("otp6"), "", "otp5");
              }}
            />
          </div>

          {!isResending && !showResendMessage && (
            <div className={cx("send-again")}>
              <span>Bạn không nhận được mã OTP?</span>
              <Link href="#" id="resendLink" onClick={handleResendOTP}>
                <strong>
                  <u> Gửi lại mã OTP</u>
                </strong>
              </Link>
            </div>
          )}
          {showResendMessage && (
            <div className={cx("resend")}>Đã gửi lại mã OTP</div>
          )}

          <div className={cx("form-confirm")}>
            <button disabled={loading} className={cx("form-button")}>
              <h3>{loading ? "Đang xử lý..." : "Xác nhận"}</h3>
            </button>
            <Link href="/login">
              <h3>Hủy</h3>
            </Link>
          </div>
        </form>
      )}
      {currentForm === 3 && (
        <form className={cx("form-auth")} onSubmit={handleSubmit}>
          <div className={cx("form-auth__title")}>
            <h2>Đặt lại mật khẩu</h2>
          </div>
          <div className={cx("form-auth__input-content")}>
            <label htmlFor="password">
              Mật khẩu mới<span className={cx("red-start")}> *</span>
            </label>
            <div className={cx("input-container")}>
              <input
                className={cx("input-field")}
                type={showPassword ? "text" : "password"}
                placeholder="Nhập mật khẩu"
                name="user_password"
                id="user_password"
                onChange={handleChange}
              />
              <span
                className={cx("material-icons-outlined eye-open", "icon")}
                onClick={handleTogglePassword}>
                {showPassword ? "visibility_off" : "visibility"}
              </span>
            </div>
            {errors.user_password && (
              <p className={cx("text-error", "form-error")}>
                {errors.user_password}
              </p>
            )}
          </div>
          <div className={cx("form-auth__input-content")}>
            <label htmlFor="password">
              Xác nhận mật khẩu mới<span className={cx("red-start")}> *</span>
            </label>
            <div className={cx("input-container")}>
              <input
                className={cx("input-field")}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Nhập mật khẩu"
                name="user_confirmPassword"
                id="user_confirmPassword"
                onChange={handleChange}
              />
              <span
                className={cx("material-icons-outlined eye-open", "icon")}
                onClick={handleToggleConfirmPassword}>
                {showConfirmPassword ? "visibility_off" : "visibility"}
              </span>
            </div>

            {errors.user_password && (
              <p className={cx("text-error", "form-error")}>
                {errors.user_confirmPassword}
              </p>
            )}
          </div>
          <div className={cx("form-confirm")}>
            <button disabled={loading} className={cx("form-button")}>
              <h3>{loading ? "Đang xử lý..." : "Xác nhận"}</h3>
            </button>
            <Link href="/login">
              <h3>Hủy</h3>
            </Link>
          </div>
        </form>
      )}
    </div>
  );
};

export default ForgotForm;
