import React from 'react'
import s from './Modal.module.css'

function Modal({ setIsModalOpen }) {
  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Здесь можно добавить логику отправки формы
    console.log('Форма отправлена')
    // setIsModalOpen(false) // Закрыть модальное окно после успешной отправки
  }

  return (
    <div className={s.modal} onClick={handleClose}>
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={s.closeButton} onClick={() => setIsModalOpen(false)}>
          ×
        </button>
        <h2 className={s.modalTitle}>Авторизация</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="login">Логин/Email *</label>
          <input 
            type="text" 
            id="login"
            name="login"
            placeholder="Логин/Email" 
            required
          />
          <label htmlFor="password">Пароль *</label>
          <input 
            type="password" 
            id="password"
            name="password"
            placeholder="Пароль" 
            required
            minLength={6}
          />
          <button type="submit" className={s.modalButton}>
            Войти
          </button>
        </form>
      </div>
    </div>
  )
}

export default Modal
