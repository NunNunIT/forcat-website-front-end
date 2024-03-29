'use client'

// import libs
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import classNames from "classnames/bind";
import { isActiveClass } from '@/utils';

// import css
import styles from "./account-aside.module.css";
import { useState } from 'react';

const cx = classNames.bind(styles);

const fetchData = {
  user_name: 'Lê Trung Hiếu',
  avatar_url: '/imgs/test.png',
}

const asideNavData = [
  {
    id: 1,
    url: '/account/information',
    iconData: 'perm_contact_calendar',
    text: 'Thông tin cá nhân',
  },
  {
    id: 2,
    url: '/account/purchase-history',
    iconData: 'shopping_bag',
    text: 'Lịch sử đơn mua',
  },
  {
    id: 3,
    url: '/account/change-password',
    iconData: 'settings',
    text: 'Đổi mật khẩu',
  },
]

export default function CustomerAccountAside() {
  const pathName = usePathname();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleLogoutBtnClick = () => {
    setIsModalVisible(!isModalVisible);
  }

  const { user_name, avatar_url } = fetchData;

  return (
    <aside className={cx("account__aside")}>
      <div className={cx("account__avatar")}>
        <div className={cx("account__avatar-container")}>
          <Image src={avatar_url} alt="Avatar" fill />
        </div>
        <span className={cx("account__user-name")}>{user_name}</span>
      </div>
      <hr />
      <nav>
        <ul className={cx("account__aside-nav")}>
          {asideNavData.map(navData => <li key={navData.id}>
            <a href={navData.url}
              className={cx("account__aside-nav-item", isActiveClass(navData.url, pathName))}
            >
              <span className="material-icons">{navData.iconData}</span>
              <span>{navData.text}</span>
            </a>
          </li>)}
          <li key={asideNavData.length}>
            <button onClick={handleLogoutBtnClick} className={cx("account__aside-nav-item", "dangerous-action")}>
              <span className="material-icons">logout</span>
              <span>Đăng xuất</span>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  )
}