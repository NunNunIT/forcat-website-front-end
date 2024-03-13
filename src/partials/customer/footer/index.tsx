// import libs
import Link from "next/link";
import Image from "next/image"
import classNames from "classnames/bind";

// import components
import { CustomerLogo } from "@/components";

// import css
import styles from "./footer.module.css";

const cx = classNames.bind(styles);

export default function Footer() {
  return (
    <footer className={cx("footer")}>
      <div className={cx("footer__container")}>
        <div className={cx("footer__company-name")}>
          <CustomerLogo className={cx("footer__logo")} white />
          <span>Cửa hàng đồ dùng cho mèo FORCAT.</span>
          <div className={cx("footer__social-media")}>
            <a href="https://www.facebook.com/forcat.official" target="_blank">
              <Image src="/icon-facebook.svg"
                alt="Icon mạng xã hội Facebook"
              />
            </a>{" "}
            <a href="https://www.instagram.com/forcat_shop/" target="_blank">
              <Image src="/icon-instagram.svg"
                alt="Icon mạng xã hội Instagram"
              />
            </a>{" "}
            <a href="https://www.tiktok.com/@forcat.shop7" target="_blank">
              <Image src="/icon-tiktok.svg"
                alt="Icon mạng xã hội Tiktok"
              />
            </a>
          </div>
        </div>
        <div className={cx("footer__about")}>
          <div className={cx("footer__title")}>
            <h3>VỀ FORCAT.</h3>
          </div>
          <div className={cx("footer__list")}>
            <a href="/about-us" className={cx("footer__list-item")}>
              Giới thiệu về FORCAT.
            </a>
            <a href="#" className={cx("footer__list-item")}>
              Điều khoản chung
            </a>
            <a href="/privacy-policy" className={cx("footer__list-item")}>
              Chính sách bảo mật
            </a>
          </div>
        </div>
        <div className={cx("footer__help")}>
          <div className={cx("footer__title")}>
            <h3>HỖ TRỢ</h3>
          </div>
          <div className={cx("footer__list")}>
            <a href="#" className={cx("footer__list-item")}>
              Trung tâm trợ giúp
            </a>
            <a href="#" className={cx("footer__list-item")}>
              Chính sách bảo hành
            </a>
            <a href="#" className={cx("footer__list-item")}>
              Chính sách trả hàng
            </a>
          </div>
        </div>
        <div className={cx("footer__contact")}>
          <div className={cx("footer__title")}>
            <h3>LIÊN HỆ</h3>
          </div>
          <div className={cx("footer__list")}>
            <div className={cx("footer__list-item")}>
              <span className='material-icons-outlined'>location_on</span>
              <Link
                href="https://maps.app.goo.gl/GbwxfoKVzvYoN1hn9"
                target="_blank"
                className={cx("footer__list-item")}
              >
                Linh Trung, Thủ Đức, Hồ Chí Minh
              </Link>
            </div>
            <div className={cx("footer__list-item")}>
              <span className='material-icons-outlined'>call</span>
              <span className={cx("footer__list-item", "phone")}>
                1900 123 789
              </span>
            </div>
            <div className={cx("footer__list-item")}>
              <span className='material-icons-outlined'>mail</span>
              <a href="mailto:forcatshop.contact@gmail.com"
                className={cx("footer__list-item")}
              >
                forcatshop.contact@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className={cx("footer__copyright")}>
          <span>2024 - Bản quyền thuộc của hàng FORCAT.</span>
        </div>
      </div>
    </footer>
  );
}
