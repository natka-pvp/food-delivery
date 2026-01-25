import React from 'react'
import s from './Modal.module.css'
import { useState } from 'react'

function Modal({ setIsModalOpen, title = 'Авторизация', formType = 'auth' }) {
  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Здесь можно добавить логику отправки формы
    console.log('Форма отправлена')
    setIsModalOpen(false) // Закрыть модальное окно после успешной отправки
  }

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <div className={s.modal} onClick={handleClose}>
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={s.closeButton} onClick={() => setIsModalOpen(false)}>
          ×
        </button>
        <h2 className={s.modalTitle}>{title}</h2>
        <form onSubmit={handleSubmit}>
          {formType === 'auth' ? (
            <>
              <label htmlFor="login">Логин/Email *</label>
              <input
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                type="text"
                id="login"
                name="login"
                placeholder="Логин/Email"
                required
              />
              <label htmlFor="password">Пароль *</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                name="password"
                placeholder="Пароль"
                required
                minLength={6}
              />
              <button
                type="submit"
                className={s.modalButton}
                onClick={handleSubmit}
              >
                Войти
              </button>
            </>
          ) : (
            <>
              <label htmlFor="name">Имя *</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                name="name"
                placeholder="Ваше имя"
                required
              />
              <label htmlFor="phone">Номер телефона *</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                id="phone"
                name="phone"
                placeholder="+375 (29) 123-45-67"
                required
                pattern="[+]?[0-9\s\-\(\)]+"
              />
              <p className={s.privacyText}>
                Нажимая кнопку "Отправить", вы соглашаетесь с{' '}
                <a href="/privacy" className={s.privacyLink}>
                  политикой конфиденциальности
                </a>
              </p>
              <button
                type="submit"
                className={s.modalButton}
                onClick={handleSubmit}
              >
                Отправить
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  )
}

export default Modal
