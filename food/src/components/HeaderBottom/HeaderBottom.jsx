import React from 'react'
import s from './HeaderBottom.module.css'
import { useState } from 'react'
import Modal from '../../Modal/Modal'

export default function HeaderBottom() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className={s.headerBottom}>
      <div className={s.title}>Кормят тут</div>
      <div className={s.text}>Доставка еды в офис и домой</div>
      <div className={s.text}>+375(29) 56-56-888 </div>
      <div className={s.textPhone} onClick={() => setIsModalOpen(true)}>
        Перезвоните мне
      </div>

      {isModalOpen && (
        <Modal
          setIsModalOpen={setIsModalOpen}
          title="Перезвоните мне"
          formType="callback"
        />
      )}
    </div>
  )
}
