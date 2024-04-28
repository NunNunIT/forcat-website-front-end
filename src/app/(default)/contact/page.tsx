// import libs
import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

// import css
import "./page.css";

export const metadata: Metadata = {
  title: "Thông tin liên hệ",
  description: "",
};

export default async function HelpPage() {
  return (
    <main className="contact__container">
      <h1 className="contact__tittle">Thông tin liên hệ</h1>
      <span className="contact__tittle--after"></span>
      <div className="contact__customer-support">
        <h3 className="contact__customer-support__tittle gray">
          Customer Support
        </h3>
        <div className="contact__customer-support__call">
          <span className="material-icons-round contact">call</span>
          <div className="contact__customer-support__call--right">
            <p className="gray">Contact Number</p>
            <Link href="tel: 0559695594" className="link">
              <h4>+84 559 695 594</h4>
            </Link>
          </div>
        </div>
        <div className="contact__customer-support__email">
          <span className="material-icons-round contact">mail</span>
          <div className="contact__customer-support__email--right">
            <p className="gray">Email Address</p>
            <Link href="mailto: forcatshop.contact@gmail.com" className="link">
              <h4>forcatshop.contact@gmail.com</h4>
            </Link>
          </div>
        </div>
      </div>
      <div className="contact__social-media">
        <h3 className="contact__social-media__tittle gray">Social Media</h3>
        <div className="contact__social-media__facebook">
          <Link
            href="https://www.facebook.com/forcat.official"
            target="blank"
            className="contact__icon facebook">
            <Image
              className="contact__icon-img facebook"
              fill={true}
              src="/imgs/contact-aside/facebook.webp"
              alt="Contact Facebook"></Image>
          </Link>
          <div className="contact__social-media__call--right">
            <p className="gray">Fanpage</p>
            <Link
              href="https://www.facebook.com/forcat.official"
              className="link">
              <h4>ForCat Shop - Everything For Your Cat</h4>
            </Link>
          </div>
        </div>
        <div className="contact__social-media__instagram">
          <Link
            href="https://www.instagram.com/forcat_shop/"
            target="blank"
            className="contact__icon">
            <Image
              className="contact__icon-img"
              fill={true}
              src="/imgs/contact-aside/instagram.webp"
              alt="Contact Instagram"></Image>
          </Link>
          <div className="contact__social-media__email--right">
            <p className="gray">Instagram</p>
            <Link
              href="https://www.instagram.com/forcat_shop/"
              className="link">
              <h4>ForCat Shop - Everything For Your Cat</h4>
            </Link>
          </div>
        </div>
        <div className="contact__social-media__zalo">
          <Link
            href="https://zalo.me/0559695594"
            target="blank"
            className="contact__icon">
            <Image
              className="contact__icon-img"
              fill={true}
              src="/imgs/contact-aside/zalo.webp"
              alt="Contact Zalo"></Image>
          </Link>
          <div className="contact__social-media__email--right">
            <p className="gray">Zalo</p>
            <Link href="https://zalo.me/0559695594" className="link">
              <h4>ForCat Shop - Everything For Your Cat</h4>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
