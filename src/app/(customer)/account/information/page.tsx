// import libs
import React from 'react';
import Link from 'next/link';
// import components
import { CustomerSidebarAccount } from "@/components";
// import css
import "./page.css";

export default function InformationPage() {
    return (
        <main className="account-container">
            {/* <%- include("../../components/sidebar_account") %> */}
            <CustomerSidebarAccount ></CustomerSidebarAccount>
            <section className="purchase__main" id="info">
                <div className="purchase__main__item">
                    <div className="purchase-item">
                        <div className="purchase-item--top">
                            <div className="purchase-item__info">
                                <h3>Thông tin cá nhân</h3>
                            </div>
                            <h3 className="purchase-item__status"> <Link href="/account/edit-information">Sửa</Link></h3>
                        </div>
                        <div className="purchase-item__main">
                            <div className="purchase-item__element">
                                <div className="purchase-item__product-detail">

                                    <div className="purchase-item__product-name">
                                        <h5>Tên người dùng:</h5>
                                        <span>
                                            {/* <%= (user.user.user_name) ? user.user.user_name : '' %> */}
                                            USER NAME
                                        </span>
                                    </div>

                                    <div className="purchase-item__product-name">
                                        <h5>Ngày sinh:</h5>
                                        <span>
                                            {/* <%= (user.user.user_birth) ? user.user.user_birth: '' %> */}
                                            01/01/1990
                                        </span>
                                    </div>

                                    <div className="purchase-item__product-name">
                                        <h5>Giới tính:</h5>
                                        <span>
                                            {/* <%= (user.user.user_sex) ? user.user.user_sex : '' %> */}
                                            NAM
                                        </span>
                                    </div>

                                    <div className="purchase-item__product-name">
                                        <h5>Email:</h5>
                                        <span>
                                            {/* <%= (user.user.user_email) ? user.user.user_email : '' %> */}
                                            A@GMAIL.COM
                                        </span>
                                    </div>

                                    <div className="purchase-item__product-name">
                                        <h5>Số điện thoại:</h5>
                                        <span>
                                            {/* <%= (user.user.user_phone) ? user.user.user_phone : '' %> */}
                                            0123456789
                                        </span>
                                    </div>

                                    <div className="purchase-item__product-name">
                                        <h5>Địa chỉ:</h5>
                                        <span>
                                            {/* <%= (user.user.user_address) ? user.user.user_address : '' %> */}
                                            1, ĐƯỜNG 1, QUẬN 1, TP.HCM
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}