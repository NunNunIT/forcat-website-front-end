import styles from "../auth.module.css";
import RegisterForm from "@/components/auth/registerForm/registerForm";
import classNames from "classnames/bind";
import Image from "next/image";

const cx = classNames.bind(styles);


const RegisterPage = () => {
  return (
    <main className={cx("auth_main")}>
      <div className={cx("auth__forms-wrap", "register")}>
        <RegisterForm />
      </div>
      <div className={cx("auth__image-wrap", "register")}>
        <Image
          className={cx("auth__image")}
          src="/imgs/auth/meo-7.png"
          alt="Anh meo vang"
          fill={true}
        />
      </div>
    </main>
  );
};

export default RegisterPage;