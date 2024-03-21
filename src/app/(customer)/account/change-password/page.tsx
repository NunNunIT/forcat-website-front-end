'use client'
// import libs
import React, { useEffect, useState, useRef, FormEvent } from 'react';
import Link from 'next/link';
// import components
import { CustomerSidebarAccount } from "@/components";
// import css
import "./page.css";

export default function ChangePasswordPage() {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [isOldPasswordVisible, setOldPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const passwordInputRef = useRef(null);
    const oldPasswordInputRef = useRef(null);
    const confirmPasswordInputRef = useRef(null);

    const resetPasswordPost = useRef<HTMLFormElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const confirmPassword = useRef<HTMLInputElement>(null);
    const oldPassword = useRef<HTMLInputElement>(null);

    const setError = (element: React.RefObject<HTMLInputElement>, message: string) => {
        const inputControl = element.current?.parentElement;
        const errorDisplay = inputControl?.querySelector(`.error`) as HTMLElement;
    
        if (errorDisplay) {
            errorDisplay.innerText = message;
        }
    
        inputControl?.classList.add("error");
        inputControl?.classList.remove("error");
    }

    const setSuccess = (element: React.RefObject<HTMLInputElement>) => {
        const inputControl = element.current?.parentElement;
        const errorDisplay = inputControl?.querySelector(`.error`) as HTMLElement;
    
        if (errorDisplay) {
            errorDisplay.innerText = "";
        }
    
        inputControl?.classList.add("success");
        inputControl?.classList.remove("error");
    }

const validateInput = async (e: FormEvent) => {
    e.preventDefault();

    const oldPasswordValue = oldPassword.current?.value.trim();
    const confirmPasswordValue = confirmPassword.current?.value.trim();
    const passwordValue = password.current?.value.trim();

    let isAllValid = true;

    if (!oldPasswordValue || oldPasswordValue === "") {
        setError(oldPassword, "Vui lòng nhập mật khẩu!");
        isAllValid = false;
    } else if (oldPasswordValue.length < 8) {
        setError(oldPassword, "Mật khẩu phải ít nhất 8 ký tự!");
        isAllValid = false;
    } else {
        setSuccess(oldPassword);
    }

    if (!passwordValue || passwordValue === "") {
        setError(password, "Vui lòng nhập mật khẩu!");
        isAllValid = false;
    } else if (passwordValue.length < 8) {
        setError(password, "Mật khẩu phải ít nhất 8 ký tự!");
        isAllValid = false;
    } else {
        setSuccess(password);
    }

    // Validate confirm password
    if (!confirmPasswordValue || confirmPasswordValue === "") {
        setError(confirmPassword, "Vui lòng xác nhận mật khẩu!");
        isAllValid = false;
    } else if (confirmPasswordValue !== passwordValue) {
        setError(confirmPassword, "Mật khẩu xác nhận không khớp!");
        isAllValid = false;
    } else {
        setSuccess(confirmPassword);
    }

    if (isAllValid) {
        const reset = {
            user_old_password: oldPasswordValue,
            user_new_password: passwordValue,
        }
        // ... remaining code
    }
}
    useEffect(() => {
        const inputs = [passwordInputRef.current, oldPasswordInputRef.current, confirmPasswordInputRef.current];

        inputs.forEach((inp) => {
            inp.addEventListener("focus", () => {
                inp.classList.add("active")
            })
            inp.addEventListener("blur", () => {
                if (inp.value !== "") return
                inp.classList.remove("active")
            })
        })
    }, []);

    const togglePasswordVisibility = (setter, currentState) => {
        setter(!currentState);
    }

    return (
        <main className="account-container">
            <CustomerSidebarAccount></CustomerSidebarAccount>
            <section className="change-pass__main" id="info">
                <div className="change-pass__main__item">
                    <div className="change-pass-item">
                        <div className="change-pass-item--top">
                            <div className="change-pass-item__info">
                                <h4>Đổi mật khẩu</h4>
                            </div>
                        </div>
                        <hr />
                        {/* <form id="form-change-pass" autocomplete="off" className="sign-in-form" method="post"> */}
                        <form ref={resetPasswordPost} id="form-change-pass" className="sign-in-form" method="post" onSubmit={validateInput}>
                            <div className="change-pass-item__main">
                                <div className="change-pass-item__element">
                                    <div className="change-pass-item__password">
                                    </div>
                                </div>
                                <div className="change_Password">
                                    <div className="reset__input-wrap">
                                        {/* <input id="oldPassword" type="password" name="oldPassword" className="reset__input-field" autocomplete="off" /> */}
                                        <input ref={oldPasswordInputRef} id="oldPassword" type={isOldPasswordVisible ? "text" : "password"} name="oldPassword" className="reset__input-field" />
                                        <label>Mật khẩu cũ<span className="red-start">*</span></label>
                                        <span id="togglePassword" className="reset__toggle-password" onClick={() => togglePasswordVisibility(setOldPasswordVisible, isOldPasswordVisible)}>
                                            <span className="material-icons-outlined eye-open">
                                                {isOldPasswordVisible ? 'visibility_off' : 'visibility'}
                                            </span>
                                        </span>
                                        <div className="error"></div>
                                    </div>

                                    <div className="reset__input-wrap">
                                        {/* <input id="password" type="password" name="password" className="reset__input-field" autocomplete="off" /> */}
                                        <input ref={passwordInputRef} id="password" type={isPasswordVisible ? "text" : "password"} name="password" className="reset__input-field" />
                                        <label>Mật khẩu mới<span className="red-start">*</span></label>
                                        <span id="toggleoldPassword" className="reset__toggle-password" onClick={() => togglePasswordVisibility(setPasswordVisible, isPasswordVisible)}>
                                            <span className="material-icons-outlined eye-open">
                                                {isPasswordVisible ? 'visibility_off' : 'visibility'}
                                            </span>
                                        </span>
                                        <div className="error"></div>
                                    </div>

                                    <div className="reset__input-wrap">
                                        {/* <input id="confirmPassword" type="password" name="confirmPassword" className="reset__input-field" autocomplete="off" /> */}
                                        <input ref={confirmPasswordInputRef} id="confirmPassword" type={isConfirmPasswordVisible ? "text" : "password"} name="confirmPassword" className="reset__input-field" />
                                        <label>Xác nhận mật khẩu mới<span className="red-start">*</span></label>
                                        <span id="toggleconfirmPassword" className="reset__toggle-password" onClick={() => togglePasswordVisibility(setConfirmPasswordVisible, isConfirmPasswordVisible)}>
                                            <span className="material-icons-outlined eye-open">
                                                {isConfirmPasswordVisible ? 'visibility_off' : 'visibility'}
                                            </span>
                                        </span>
                                        <div className="error"></div>
                                    </div>
                                    <div className="popup__button">
                                        <button className="btn btn--filled pri" type="submit">Xác nhận</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}