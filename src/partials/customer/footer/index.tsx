// use bind from classnames
import classNames from "classnames/bind";

// use scss
import styles from "./styles.module.css";

const cx = classNames.bind(styles);

export default function Footer() {
  return (
    <footer className={cx("footer-container")}>
      <div className={cx("footer--top")}>
        <div className={cx("footer__company-name")}>
          <img
            className={cx("footer__logo")}
            src="/imgs/logo-white.png"
            alt="logo"
          />
          <p>Cửa hàng điện máy TECHTWO.</p>
          <img
            className={cx("footer__social-media")}
            src="/imgs/set-logo.png"
            alt="social-media"
          />
        </div>
        <div className={cx("footer__company-name--disable")}>
          <img
            className={cx("footer__logo")}
            src="/imgs/logo-white.png"
            alt="logo"
          />
          <p>Cửa hàng điện máy TECHTWO.</p>
          <img
            className={cx("footer__social-media")}
            src="/imgs/set-logo.png"
            alt="social-media"
          />
        </div>
        <div className={cx("footer__content--column2")}>
          <div className={cx("footer__content--column")}>
            <div className={cx("footer__content-title")}>
              <h3>VỀ TECHTWO.</h3>
            </div>
            <div className={cx("footer__content-main")}>
              <a href="/about-us" className={cx("footer__list-test")}>
                Giới thiệu về TECHTWO.
              </a>
              <a href="#" className={cx("footer__list-test")}>
                Điều khoản chung
              </a>
              <a href="/privacy-policy" className={cx("footer__list-test")}>
                Chính sách bảo mật
              </a>
            </div>
          </div>
          <div className={cx("footer__help-content--column")}>
            <div className={cx("footer__content-title")}>
              <h3>HỖ TRỢ</h3>
            </div>
            <div className={cx("footer__content-main")}>
              <a href="#" className={cx("footer__list-test")}>
                Trung tâm trợ giúp
              </a>
              <a href="#" className={cx("footer__list-test")}>
                Chính sách bảo hành
              </a>
              <a href="#" className={cx("footer__list-test")}>
                Chính sách trả hàng & hoàn tiền
              </a>
            </div>
          </div>
        </div>

        <div className={cx("footer__contact-content--column")}>
          <div className={cx("footer__content-title")}>
            <h3>LIÊN HỆ</h3>
          </div>
          <div className={cx("footer__content-main")}>
            <div className={cx("footer__content-item")}>
              <span className={"material-symbols-outlined"}>location_on</span>
              <a
                href="https://maps.app.goo.gl/GbwxfoKVzvYoN1hn9"
                target="_blank"
                className={cx("footer__list-test")}>
                Linh Trung, Thủ Đức, Hồ Chí Minh
              </a>
            </div>
            <div className={cx("footer__content-item")}>
              <span className={"material-symbols-outlined"}>call</span>
              <span className={cx("footer__list-test", "phone")}>
                1900 123 789
              </span>
            </div>
            <div className={cx("footer__content-item")}>
              <span className={"material-symbols-outlined"}>mail</span>
              <a
                href="mailto:techtwo.customercare@gmail.com"
                className={cx("footer__list-test")}>
                techtwo.customercare@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("footer--bottom")}>
        <div className={cx("footer__container--bottom")}>
          <p> 2023 - Bản quyền thuộc Công ty TECHTWO.</p>
        </div>
      </div>
    </footer>
  );
}
