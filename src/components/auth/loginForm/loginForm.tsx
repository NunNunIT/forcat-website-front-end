// "use client";

// import { login } from "@/lib/action";
// import styles from "../authForm.module.css";
// import { useFormState } from "react-dom";
// import Link from "next/link";

// import classNames from "classnames/bind";
// import Image from "next/image";

// const cx = classNames.bind(styles);

// const LoginForm = () => {
//   const [state, formAction] = useFormState(login, undefined);

//   return (
    
//     <form className={cx("form-auth")} action={formAction}>
//       <div className={cx("form-auth__title")}>
//         <h1>Chào mừng bạn quay trở lại!</h1>
//         {state?.error}
//         <Link href="/register">
//           <h3>Chưa có tài khoản? <b>Đăng ký ngay</b> </h3>
//         </Link>
//       </div>

//       <div className={cx("form-auth__input-content")}>
//         <label htmlFor="email">Email</label>
//         <input type="text" placeholder="Nhập email " name="email" />
//       </div>

//       <div className={cx("form-auth__input-content")}>
//         <label htmlFor="password">Mật khẩu</label>
//         <input type="password" placeholder="Nhập mật khẩu" name="password" />
//       </div>

//       <button>Đăng nhập</button>

//       <div className={cx("form-auth__social-media")}>
//         <p> Hoặc đăng ký bằng</p>
//         <div className={cx("form-auth__social-buttons")}>
//           <button className={cx("social-image")}>
//             <Image src="/imgs/social_media/google-icon.jpg" alt="Google" fill />
//           </button>
//           <button className={cx("social-image")}>
//             <Image src="/imgs/social_media//facebook-icon.svg" alt="Facebook" fill />
//           </button>
//         </div>
//       </div>

//     </form>

//   );
// };

// export default LoginForm;
