"use client";

// import libs
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
// import components

// import css
import "./page.css";

const MobileAccountPage: React.FC = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);


	const handleLogoutClick = () => {
		setIsModalVisible(true);
	};

	const handleCloseModal = () => {
		setIsModalVisible(false);
	};



	return (
		<main className="mobile-account-container">
			<aside className="account-aside" id="sidebar">
				<a href="#" className="avatar">
					<span className="image-container">
						{/* <img src="/imgs/user_avt_img/<%= (user.user.user_avt_img) ? user.user.user_avt_img : 'default.png' %>" alt="avatar <%= (user.user.user_name) ? user.user.user_name : '' %>"> */}
						<img src="/imgs/test.png" alt="avatar" />
					</span>
					<div className="user_name">
						<h5>user name</h5>
					</div>
				</a>

				<ul className="side-menu top">
					<li>
						<a href="/account/information" id="info-link">
							<span className="material-icons-outlined">
								perm_contact_calendar
							</span>
							<span className="text">Thông tin cá nhân</span>
							<span className="material-icons-outlined arrow-icon">navigate_next</span>
						</a>
					</li>

					<li>
						<a href="/account/purchase-history">
							<span className="material-icons-outlined"> shopping_bag </span>
							<span className="text">Lịch sử đơn mua</span>
							<span className="material-icons-outlined arrow-icon">navigate_next</span>
						</a>
					</li>
					<li>
						<a href="/account/warranty-claim">
							<span className="material-icons-outlined"> build </span>
							<span className="text">Yêu cầu bảo hành</span>
							<span className="material-icons-outlined arrow-icon">navigate_next</span>
						</a>
					</li>
					<li>
						<a href="/account/changePassword">
							<span className="material-icons-outlined"> settings </span>
							<span className="text">Đổi mật khẩu</span>
							<span className="material-icons-outlined arrow-icon">navigate_next</span>
						</a>
					</li>
				</ul>
				<ul className="side-menu">
					<li id="mobile-account__logout" onClick={handleLogoutClick}>
						<a className="btn-warranty">
							<span className="material-icons-outlined">logout</span>
							<span className="text">Đăng xuất</span>
						</a>
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
										<a href="/auth/logout" className="btn btn--filled pri btn-logout">Đăng xuất</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</aside>
		</main>
	)
}
export default MobileAccountPage;