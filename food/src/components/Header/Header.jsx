import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import s from './Header.module.css'
import {
  FaTelegram,
  FaInstagram,
  FaViber,
  FaEnvelope,
  FaShoppingCart,
} from 'react-icons/fa'

import Modal from '../../Modal/Modal'

function Header({ cartCount = 0 }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const menuItems = [
    'О компании',
    'Блог',
    'Бонусная программа',
    'Доставка и оплата',
    'Отзывы',
    'Контакты',
  ]
  const [activeItem, setActiveItem] = useState(menuItems[0])

  const socialIcons = [
    { icon: <FaTelegram />, name: 'Telegram' },
    { icon: <FaInstagram />, name: 'Instagram' },
    { icon: <FaViber />, name: 'Viber' },
    { icon: <FaEnvelope />, name: 'Email' },
  ]

  return (
    <div>
      <div className={s.headerMenu}>
        {menuItems.map((item) => {
          return (
            <div
              key={item}
              className={`${s.headerMenuItem} ${
                activeItem === item ? s.active : ''
              }`}
              onClick={() => setActiveItem(item)}
            >
              {item}
            </div>
          )
        })}
        <div className={s.socialIcons}>
          <div className={s.socialIconsWrapper}>
            {socialIcons.map((social) => (
              <div key={social.name} className={s.socialIcon} title={social.name}>
                {social.icon}
              </div>
            ))}
          </div>
          <div className={s.workingHours}>
            <p className={s.workingHoursText}>Режим работы:</p>
            <p className={s.workingHoursTime}>Пн-Вс: 10:00 - 22:00</p>
          </div>
          <Link className={s.cart} to="/cart" title="Корзина">
            <FaShoppingCart />
            <span className={s.cartBadge}>{cartCount}</span>
          </Link>
          <p className={s.login} onClick={() => setIsModalOpen(true)}>
            Вход
          </p>
        </div>
      </div>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </div>
  )
}

export default Header
