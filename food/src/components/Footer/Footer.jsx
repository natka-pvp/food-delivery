import s from './Footer.module.css'
import { Link } from 'react-router-dom'
import { GiCook } from 'react-icons/gi'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footerContent}>
        <Link className={s.logoLink} to="/" aria-label="Главная">
          <GiCook className={s.logoIcon} />
        </Link>
        <div className={s.title}>Кормят тут</div>
        <div className={s.meta}>
          <p className={s.metaText}>ООО «КОРМЯТ ТУТ»</p>
          <p className={s.metaText}>г. Витебск, ул. Суворова, 23-1</p>
          <p className={s.metaText}>УНП 1234567899</p>
        </div>
      </div>
    </footer>
  )
}