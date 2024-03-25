"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import "./page.css";

export default function ForgotPage() {
  const [step, setStep] = useState(1);
  const [isResending, setIsResending] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const isValidPhoneNumber = (phoneNumber) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(phoneNumber).trim());
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const validateInputPhone = () => {
    const phoneNumberValue = phoneNumber.trim();

    let isPhoneValid = true;

    if (phoneNumberValue === "") {
      setError("Vui lòng nhập số điện thoại!");
      isPhoneValid = false;
    } else if (!isValidPhoneNumber(phoneNumberValue)) {
      setError("Số điện thoại không đúng định dạng!");
      isPhoneValid = false;
    } else {
      setError("");
    }

    if (isPhoneValid) {
      const forgot = {
        user_phone: phoneNumberValue,
      };
      setStep(2);
      setStartCountdown(true);
      //-----------------------------Xử lý API ở đây
      // fetch("/auth/findUser", {
      //   method: "POST",
      //   body: JSON.stringify(forgot),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // })
      //   .then((res) => res.json())
      //   .then((back) => {
      //     if (back.status === "notFound") {
      //       setError(back.error);
      //     } else if (back.status === "success") {
      //       setStep(2);
      //     }
      //   });
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    validatePassword();
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    validatePassword();
  };

  const validatePassword = async () => {
    const passwordValue = password.trim();
    const confirmPasswordValue = confirmPassword.trim();

    let isAllValidPass = true;

    if (passwordValue === "") {
      setError("Vui lòng nhập mật khẩu!");
      isAllValidPass = false;
    } else if (passwordValue.length < 8) {
      setError("Mật khẩu phải ít nhất 8 ký tự!");
      isAllValidPass = false;
    } else {
      setError("");
    }

    if (confirmPasswordValue === "") {
      setError("Vui lòng xác nhận mật khẩu!");
      isAllValidPass = false;
    } else if (confirmPasswordValue !== passwordValue) {
      setError("Mật khẩu xác nhận không khớp!");
      isAllValidPass = false;
    } else {
      setError("");
    }

    if (isAllValidPass) {
    }
  };

  const validateInputOTP = () => {
    // --------Xử lí OTP thật ở đây
    // const otpInputs = document.querySelectorAll('input[name=otp]');
    // let isAllOTPValid = true;
    // otpInputs.forEach((otpInput) => {
    //   if (otpInput.value === ""){
    //     isAllOTPValid = false;
    //     otpInput.style.borderColor = "red";
    //   } else {
    //     otpInput.style.borderColor = "#ccc";
    //   }
    // });
    // return isAllOTPValid;
  };

  const handleSubmitStep1 = (event) => {
    event.preventDefault();
    validateInputPhone();
  };

  const handleSubmitStep2 = (event) => {
    event.preventDefault();
    // if (validateInputOTP()) {
    //   setStep(3);
    // }
    setStep(3);
  };

  const handleSubmitStep3 = (event) => {
    event.preventDefault();
    // Handle submission of Step 3
  };

  const handleFocus = (event) => {
    event.target.classList.add("active");
  };

  const handleBlur = (event) => {
    if (event.target.value !== "") return;
    event.target.classList.remove("active");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const moveToNext = (currentInput, nextInputId) => {
    if (currentInput.value.length >= 1) {
      document.getElementById(nextInputId).focus();
    }
  };

  const handleInputChange = (event) => {
    // Only allow number input
    if (!event.target.value.match(/^[0-9]$/)) {
      event.target.value = "";
    }
  };

  const [count, setCount] = useState(60);
  const [startCountdown, setStartCountdown] = useState(false);
  const [showTimeoutMessage, setShowTimeoutMessage] = useState(false);

  useEffect(() => {
    if (!startCountdown) return;
    if (count === 0) {
      setShowTimeoutMessage(true);
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
    setTimeout(() => {
      setIsResending(false);
    }, 3000);
    setCount(60);
    setShowTimeoutMessage(false);
    // Add any additional logic for resending OTP here
  };

  return (
    <main className="forgot-container">
      <div className="box">
        <div className="inner-box">
          <div className={step === 1 ? "Step1" : "Step1 hidden"}>
            <form
              id="form"
              action="/"
              className="forgot__sign-in-form"
              method="post"
              onSubmit={handleSubmitStep1}
            >
              <div className="logo_clock">
                <div className="logo">
                  <Link className="logo-container" href="#">
                    <Image src="/imgs/logo-brown.png" alt="forcat logo" fill={true}/>
                  </Link>
                </div>
                <div className="clock" id="countdown"></div>
              </div>
              <div className="heading">
                <h2>Đặt lại mật khẩu</h2>
              </div>
              <div className="actual-form">
                <div className="forgot__input-wrap">
                  <input
                    id="PhoneNumber"
                    type="text"
                    name="PhoneNumber"
                    className="forgot__input-field"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handlePhoneNumberChange}
                  />

                  {error && <div className="error">{error}</div>}

                  <label>
                    Số điện thoại<span className="red-start">*</span>
                  </label>
                  <div className="error"></div>
                </div>
                <input
                  type="submit"
                  value="Xác nhận"
                  className="forgot__sign-btn"
                />
                <div className="back">
                  <Link href="/auth/login">Trở lại</Link>
                </div>
              </div>
            </form>
          </div>
          <div className={step === 2 ? "Step2" : "Step2 hidden"}>
            <form
              id="form_otp"
              action="/"
              autoComplete="off"
              onSubmit={handleSubmitStep2}
            >
              <div className="logo_clock">
                <div className="logo">
                  <Link className="logo-container" href="#">
                    <Image src="/imgs/logo-brown.png" alt="forcat logo" fill={true}/>
                  </Link>
                </div>
                {showTimeoutMessage && (
                  <div className="clock" id="countdown">
                    Hết thời gian xác nhận!
                  </div>
                )}
              </div>

              <div className="actual-form">
                <div className="otp">
                  <div className="heading">
                    <h2>Nhập mã OTP</h2>
                  </div>
                  <div className="heading">
                    <h6>Mã OTP đã được gửi đến thiết bị của bạn.</h6>
                  </div>
                  <div className="timer">{count}</div>
                  <div className="input-wrap">
                    <input
                      type="text"
                      name="otp"
                      id="otp1"
                      maxLength={1}
                      onInput={(event) => {
                        handleInputChange(event);
                        moveToNext(document.getElementById("otp1"), "otp2");
                      }}
                    />
                    <input
                      type="text"
                      name="otp"
                      id="otp2"
                      maxLength={1}
                      onInput={(event) => {
                        handleInputChange(event);
                        moveToNext(document.getElementById("otp2"), "otp3");
                      }}
                    />
                    <input
                      type="text"
                      name="otp"
                      id="otp3"
                      maxLength={1}
                      onInput={(event) => {
                        handleInputChange(event);
                        moveToNext(document.getElementById("otp3"), "otp4");
                      }}
                    />
                    <input
                      type="text"
                      name="otp"
                      id="otp4"
                      maxLength={1}
                      onInput={(event) => {
                        handleInputChange(event);
                        moveToNext(document.getElementById("otp4"), "otp5");
                      }}
                    />
                    <input
                      type="text"
                      name="otp"
                      id="otp5"
                      maxLength={1}
                      onInput={(event) => {
                        handleInputChange(event);
                        moveToNext(document.getElementById("otp5"), "otp6");
                      }}
                    />

                    <input
                      type="text"
                      name="otp"
                      id="otp6"
                      maxLength={1}
                      onInput={(event) => {
                        handleInputChange(event);
                      }}
                    />
                  </div>

                  <div className={`send-again ${isResending ? "hidden" : ""}`}>
                    <span>Bạn không nhận được mã OTP?</span>
                    <Link href="#" id="resendLink" onClick={handleResendOTP}>
                      <strong>
                        <u> Gửi lại mã OTP</u>
                      </strong>
                    </Link>
                  </div>

                  <div className={`resend ${isResending ? "" : "hidden"}`}>
                    Đã gửi lại mã OTP
                  </div>

                  <input
                    type="submit"
                    value="Xác nhận"
                    className="forgot__sign-btn"
                  />
                  <div className="back">
                    <Link href="/auth/login">Hủy</Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className={step === 3 ? "Step3" : "Step3 hidden"}>
            <form
              id="form_reset"
              action="/"
              method="post"
              onSubmit={handleSubmitStep3}
            >
              <div className="logo_clock">
                <div className="logo">
                  <Link className="logo-container" href="#">
                    <Image src="/imgs/logo-brown.png" alt="forcat logo" fill={true}/>
                  </Link>
                </div>
              </div>
              <div className="reset__main">
                <div className="heading">
                  <h2>Đặt lại mật khẩu</h2>
                </div>
                <div className="reset__input-wrap">
                  <input
                    id="Password"
                    type={showPassword ? "text" : "password"}
                    name="Password"
                    className="reset__input-field"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handlePassword}
                  />

                  <label>
                    Mật khẩu mới<span className="red-start">*</span>
                  </label>
                  <span
                    id="togglePassword"
                    className="reset__toggle-password"
                    onClick={togglePasswordVisibility}
                  >
                    <span className="material-icons-outlined eye-open">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </span>
                  {error && <div className="error">{error}</div>}
                </div>

                <div className="reset__input-wrap">
                  <input
                    id="ConfirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    name="Password"
                    className="reset__input-field"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleConfirmPassword}
                  />
                  <label>
                    Xác nhận mật khẩu mới<span className="red-start">*</span>
                  </label>
                  <span
                    id="toggleConfirmPassword"
                    className="reset__toggle-password"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    <span className="material-icons-outlined eye-open">
                      {showConfirmPassword ? "visibility_off" : "visibility"}
                    </span>
                  </span>
                  {error && <div className="error">{error}</div>}
                </div>
                <input
                  type="submit"
                  value="Xác nhận"
                  className="reset__sign-btn"
                />
                <div className="back">
                  <Link href="/auth/login">Hủy</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
