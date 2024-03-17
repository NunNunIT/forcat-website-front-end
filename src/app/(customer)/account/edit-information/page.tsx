// import libs
import React from "react";
// import components
import { CustomerSidebarAccount } from "@/components";
import { EditInformationForm } from "./partials";
// import css
import "./page.css";

export default function EditInformationPage() {
	return (
		<main className="account-container">
			{/* <%- include("../../components/sidebar_account") %> */}
			<CustomerSidebarAccount></CustomerSidebarAccount>
			<section className="purchase__main" id="info">
				<div className="purchase__main__item">
					<div className="purchase-item">
						<div className="purchase-item--top">
							<div className="purchase-item__info">
								<h3>Thông tin cá nhân</h3>
							</div>
						</div>
						<EditInformationForm></EditInformationForm>
					</div>
				</div>
			</section>
		</main>
	)
}