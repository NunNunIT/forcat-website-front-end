import LoginForm from "@/components/auth/loginForm/loginForm";
import styles from "../auth.module.css";

import classNames from "classnames/bind";
import Image from "next/image";

const cx = classNames.bind(styles);

const LoginPage = () => {

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
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
