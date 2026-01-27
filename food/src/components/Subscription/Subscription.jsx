import s from './Subscription.module.css'
import { SlEnvolopeLetter } from 'react-icons/sl'
import { useState } from 'react'


export default function Footer() {
  const [email, setEmail] = useState('')
  return (
    <footer className={s.footer}>
      <div className={s.footerFirst}>
        <div className={s.footerFirstLeft}>
          <div className={s.iconWrap} aria-hidden="true">
            <SlEnvolopeLetter className={s.icon} />
          </div>
          <div className={s.content}>
            <h1 className={s.title}>Будь в курсе!</h1>
            <p className={s.subtitle}>
              Подпишись на рассылку и будь в курсе новостей, новинок, акций и
              скидок!
            </p>
            <div className={s.form}>
              <input
                className={s.input}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className={s.button}>Подписаться</button>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  )
}