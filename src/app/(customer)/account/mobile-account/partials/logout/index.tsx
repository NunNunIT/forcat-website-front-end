'use client'
// import libs
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link'

// import css
import "./logout.module.css";

export default function MobileLogout() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleLogoutClick = () => {
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };
    return (
        <div>
            <ul className="side-menu">
                <li id="mobile-account__logout" onClick={handleLogoutClick}>
                    <Link href="#" className="btn-warranty">
                        <span className="material-icons-outlined">logout</span>
                        <span className="text">Đăng xuất</span>
                    </Link>
                </li>
            </ul>
            {isModalVisible && (
                <div className="mobile-account__popup">
                    <div className="popup__main">
                        <div className="popup__main--right">
                            <div className="popup__content">
                                <div className="popup--top">
                                    <h5 className="popup__title">Đăng xuất</h5>
                                    <div className="close-btn" onClick={handleCloseModal}>
                                        <span className="material-icons-outlined">cancel</span>
                                    </div>
                                </div>
                                <p className="popup__subtitle">Quý khách có chắc chắn muốn đăng xuất không?</p>
                                <div className="popup__button">
                                    <button className="btn btn--outlined pri btn-cancel" type="button" onClick={handleCloseModal}>Hủy</button>
                                    <Link href="/auth/logout" className="btn btn--filled pri btn-logout">Đăng xuất</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}