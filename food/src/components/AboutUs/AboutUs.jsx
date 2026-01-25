import s from './AboutUs.module.css'

export default function AboutUs() {
  return (
    <div className={s.aboutUs}>
      <h1>Домашняя еда с доставкой по Витебску</h1>
      <p>
        Принимаем заказы на комплексы до 15:00 с доставкой на следующий день
      </p>
      <p>Доставка по Витебску осуществляется в течение 1-2 часов</p>
      <p>Мы работаем с 10:00 до 22:00</p>
    </div>
  )
}
