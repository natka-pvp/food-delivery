import Header from '../../Header/Header'
import s from './Contacts.module.css'

export default function Contacts() {
  return (
    <div>
      <Header />
      <div className={s.container}>
        <h1 className={s.title}>Наши контакты</h1>
        <p className={s.subtitle}>
          Позвоните нам и мы ответим на все интересующие Вас вопросы с 9:00 до
          22:00
        </p>
        <p className={s.phone}>+375(29) 56-56-888</p>
        <p className={s.description}>
          Не получилось связаться с нами в рабочее время?
          <br />
          Это не проблема!
          <br />
          Напишите нам на почту{' '}
          <a
            className={s.link}
            href="mailto:anufrieva_colgtepalmolive@mail.ru"
          >
            anufrieva_colgtepalmolive@mail.ru
          </a>{' '}
          и мы ответим на все интересующие Вас вопросы в течение 24 часов или
          заполните форму обратной связи.
        </p>
        <div className={s.formContainer}>
          <form className={s.form}>
            <div className={s.field}>
              <label className={s.label} htmlFor="contact-name">
                Имя
              </label>
              <input
                className={s.input}
                id="contact-name"
                type="text"
                placeholder="Ваше имя"
              />
            </div>
            <div className={s.field}>
              <label className={s.label} htmlFor="contact-phone">
                Телефон
              </label>
              <input
                className={s.input}
                id="contact-phone"
                type="tel"
                placeholder="+375"
              />
            </div>
            <button className={s.button} type="submit">
              Отправить заявку
            </button>
          </form>
        </div>
        
      </div>
    </div>
  )
}