"use client"
// import libs
import React, { useRef, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Link from "next/link";
import { convertDateFormatYMD } from "@/utils";
import { BACKEND_URL } from "@/utils/commonConst";
import "./page.css";
import "react-datepicker/dist/react-datepicker.css";


export default function InformationPage() {
  const [user, setUser] = useState(null);

  const [isEditing, setIsEditing] = useState(false);

  const fetchUser = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/user/getInfo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await response.json();
      setUser(data.user);
    } catch (error) {
      console.error("Error in fetchUser:", error);
      return null;
    }
  };
  useEffect(() => {
    const getUser = async () => {
      const user = await fetchUser();
      if (user) {
        setUser(user);
      }
    };

    getUser();
  }, []);

  const {
    user_name = "",
    user_birth = new Date("1990-01-01"),
    user_gender = "",
    user_phone = "",
    user_address = "",
  } = user ?? {};

  const [userName, setUserName] = useState("");
  const [userBirth, setUserBirth] = useState(user_birth);
  const [userGender, setUserGender] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [street, setStreet] = useState("");
  const [ward, setWard] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("");

  const handleDateChange = (date) => {
    setUserBirth(date);
  };

  const handleStreetChange = (event) => {
    setStreet(event.target.value);
    setUserAddress(
      `${event.target.value}, ${ward}, ${district}, ${province}`
    );
  };

  const handleWardChange = (event) => {
    setWard(event.target.value);
    setUserAddress(
      `${street}, ${event.target.value}, ${district}, ${province}`
    );
  };

  const handleDistrictChange = (event) => {
    setDistrict(event.target.value);
    setUserAddress(`${street}, ${ward}, ${event.target.value}, ${province}`);
  };

  const handleProvinceChange = (event) => {
    setProvince(event.target.value);
    setUserAddress(`${street}, ${ward}, ${district}, ${event.target.value}`);
  };

  const validateUserName = (userName: string): boolean => {
    const re =
      /^[a-zA-Z\sàáạảãăắằẵặẳâầấậẩẫđèéẹẻẽêềếệểễòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữìíịỉĩỳýỵỷỹ]+$/;
    return re.test(String(userName).trim());
  };

  const validateUserPhone = (userPhone: string): boolean => {
    const re = /^[0-9]{10}$/;
    return re.test(String(userPhone).trim());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateUserName(userName)) {
      console.error(
        "Tên người dùng không hợp lệ. Chỉ chấp nhận chữ cái và khoảng trắng."
      );
      return;
    }

    if (!validateUserPhone(userPhone)) {
      console.error(
        "Số điện thoại không hợp lệ. Chỉ chấp nhận 10 chữ số."
      );
      return;
    }

    try {
      const response = await fetch(`${BACKEND_URL}/user/edit`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name: userName,
          user_birth: userBirth,
          user_gender: userGender,
          user_phone: userPhone,
          user_address: userAddress,
        }),
        credentials: "include",
      });

      const data = await response.json();
      console.log("User updated successfully:", data.user);
      localStorage.setItem("currentUser", JSON.stringify(data.user));
      setIsEditing(false);
      window.location.reload();
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  };

  if (isEditing) {
    return (
      <main className="account-information__main">
        <section className="information__main">
          <div className="information-item">
            <div className="information-item--top">
              <div className="information-item__info">
                <h3>Sửa thông tin cá nhân</h3>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="information-item__main">
                <div className="information-item__element">
                  <div className="information-item__product-detail">
                    <div className="information-item__product-name">
                      <label htmlFor="userName">
                        Tên người dùng:
                        <span className="red-start">*</span>
                      </label>
                      <div className="userName">
                        <input
                          type="text"
                          id="userName"
                          name="userName"
                          autoComplete="off"
                          placeholder="Nhập tên"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          required
                        />
                        <div className="error-message"></div>
                      </div>
                    </div>

                    <div className="information-item__product-name">
                      <label htmlFor="userBirth">Ngày sinh:</label>
                      <div className="userBirth">
                        <span id="displayUserBirth">
                          <DatePicker
                            selected={userBirth}
                            onChange={handleDateChange}
                            dateFormat="dd/MM/yyyy"
                          />
                        </span>
                        <div className="error-message"></div>
                      </div>
                    </div>

                    <div className="information-item__product-name">
                      <label htmlFor="userSex">Giới tính:</label>
                      <div className="userSex">
                        <select
                          className="userSex dropdown"
                          id="userSex"
                          name="userSex"
                          title="Chọn giới tính"
                          onChange={(e) => setUserGender(e.target.value)}>
                          <option value=""> {userGender}</option>
                          {userGender !== "Nữ" && (
                            <option value="Nữ">Nữ</option>
                          )}
                          {userGender !== "Nam" && (
                            <option value="Nam">Nam</option>
                          )}
                        </select>
                      </div>
                    </div>

                    <div className="information-item__product-name">
                      <label htmlFor="userPhone">
                        Số điện thoại:
                        <span className="red-start">*</span>
                      </label>
                      <div className="userPhone">
                        <input
                          type="text"
                          id="userPhone"
                          name="userPhone"
                          autoComplete="off"
                          placeholder="Nhập số điện thoại"
                          value={userPhone}
                          onChange={(e) => setUserPhone(e.target.value)}
                          required
                        />
                        <div className="error-message"></div>
                      </div>
                    </div>

                    <div className="order-detail__location location">
                      <h5 className="padding-bottom">Địa chỉ</h5>
                      <div className="information-item__product-name">
                        <label htmlFor="province">
                          Tỉnh:
                          <span className="red-start">*</span>
                        </label>
                        <div className="province">
                          <input
                            type="text"
                            id="province"
                            name="province"
                            autoComplete="off"
                            placeholder="Nhập tỉnh"
                            value={province}
                            onChange={handleProvinceChange}
                            required
                          />
                          <div className="error-message"></div>
                        </div>
                      </div>
                      <div className="information-item__product-name">
                        <label htmlFor="district">
                          Quận, huyện:
                          <span className="red-start">*</span>
                        </label>
                        <div className="district">
                          <input
                            type="text"
                            id="district"
                            name="district"
                            autoComplete="off"
                            placeholder="Nhập quận, huyện"
                            value={district}
                            onChange={handleDistrictChange}
                            required
                          />
                          <div className="error-message"></div>
                        </div>
                      </div>
                      <div className="information-item__product-name">
                        <label htmlFor="ward">
                          Phường, xã:
                          <span className="red-start">*</span>
                        </label>
                        <div className="ward">
                          <input
                            type="text"
                            id="ward"
                            name="ward"
                            autoComplete="off"
                            placeholder="Nhập phường, xã"
                            value={ward}
                            onChange={handleWardChange}
                            required
                          />
                          <div className="error-message"></div>
                        </div>
                      </div>
                      <div className="information-item__product-name">
                        <label htmlFor="street">
                          Số nhà, đường:
                          <span className="red-start">*</span>
                        </label>
                        <div className="street">
                          <input
                            type="text"
                            id="street"
                            name="street"
                            autoComplete="off"
                            placeholder="Nhập đường"
                            value={street}
                            onChange={handleStreetChange}
                            required
                          />
                          <div className="error-message"></div>
                        </div>
                      </div>
                    </div>

                    <div className="popup__button">
                      <button
                        className=" btn btn--outlined pri btn-cancel-edit"
                        onClick={() => setIsEditing(false)}>
                        Hủy
                      </button>
                      <button
                        type="submit"
                        id="saveButton"
                        className="btn btn--filled pri btn-save">
                        Lưu
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    );

  } else {
    return (
      <section className="account-information__main">
        <div className="information__main">
          <div className="information__main__item">
            <div className="information-item">
              <div className="information-item--top">
                <div className="information-item__info">
                  <h2>Thông tin cá nhân</h2>
                </div>
                <p
                  className="information-item__edit"
                  onClick={() => setIsEditing(true)}
                >
                  Sửa
                </p>
              </div>
              <div className="information-item__main">
                <div className="information-item__product-detail">
                  <div className="information-item__product-name">
                    <h5>Tên người dùng:</h5>
                    <p>{user_name}</p>
                  </div>
                  <div className="information-item__product-name">
                    <h5>Ngày sinh:</h5>
                    <p>
                      {new Date(user_birth).toLocaleDateString("vi-VN")}
                    </p>
                  </div>

                  <div className="information-item__product-name">
                    <h5>Giới tính:</h5>
                    <p>{user_gender}</p>
                  </div>

                  <div className="information-item__product-name">
                    <h5>Số điện thoại:</h5>
                    <p>{user_phone}</p>
                  </div>

                  <div className="information-item__product-name">
                    <h5>Địa chỉ:</h5>
                    <p>{user_address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
