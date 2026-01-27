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
import { GiCook } from 'react-icons/gi'

import Modal from '../../Modal/Modal'

function Header({ cartCount = 0 }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuItems = [
    { label: 'О компании' },
    { label: 'Блог' },
    { label: 'Бонусная программа' },
    { label: 'Доставка и оплата' },
    { label: 'Отзывы' },
    { label: 'Контакты', to: '/contacts' },
  ]
  const [activeItem, setActiveItem] = useState(menuItems[0].label)

  const socialIcons = [
    { icon: <FaTelegram />, name: 'Telegram' },
    { icon: <FaInstagram />, name: 'Instagram' },
    { icon: <FaViber />, name: 'Viber' },
    { icon: <FaEnvelope />, name: 'Email' },
  ]

  return (
    <div>
      <div className={s.headerMenu}>
        <Link className={s.logoLink} to="/" aria-label="Главная">
          <GiCook className={s.logoIcon} />
        </Link>
        <button
          className={s.burger}
          type="button"
          aria-label="Открыть меню"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className={s.burgerLine} />
          <span className={s.burgerLine} />
          <span className={s.burgerLine} />
        </button>
        <div className={`${s.menuItems} ${s.desktopOnly}`}>
          {menuItems.map((item) => {
            const content = (
              <>
                {item.label}
              </>
            )
            return (
              <React.Fragment key={item.label}>
                {item.to ? (
                  <Link
                    className={`${s.headerMenuItem} ${
                      activeItem === item.label ? s.active : ''
                    }`}
                    to={item.to}
                    onClick={() => setActiveItem(item.label)}
                  >
                    {content}
                  </Link>
                ) : (
                  <div
                    className={`${s.headerMenuItem} ${
                      activeItem === item.label ? s.active : ''
                    }`}
                    onClick={() => setActiveItem(item.label)}
                  >
                    {content}
                  </div>
                )}
              </React.Fragment>
            )
          })}
        </div>
        <div className={`${s.socialIcons} ${s.desktopOnly}`}>
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
      <div
        className={`${s.mobileMenu} ${isMenuOpen ? s.mobileMenuOpen : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <div className={s.mobileMenuList}>
          {menuItems.map((item) =>
            item.to ? (
              <Link
                key={item.label}
                className={s.mobileMenuItem}
                to={item.to}
                onClick={() => {
                  setActiveItem(item.label)
                  setIsMenuOpen(false)
                }}
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                className={s.mobileMenuItem}
                type="button"
                onClick={() => {
                  setActiveItem(item.label)
                  setIsMenuOpen(false)
                }}
              >
                {item.label}
              </button>
            )
          )}
        </div>
        <div className={s.mobileMenuMeta}>
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
          <div className={s.mobileMenuActions}>
            <Link
              className={s.cart}
              to="/cart"
              title="Корзина"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaShoppingCart />
              <span className={s.cartBadge}>{cartCount}</span>
            </Link>
            <button
              className={s.login}
              type="button"
              onClick={() => {
                setIsModalOpen(true)
                setIsMenuOpen(false)
              }}
            >
              Вход
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </div>
  )
}

export default Header
