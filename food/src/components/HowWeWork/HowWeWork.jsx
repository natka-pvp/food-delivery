import s from './HowWeWork.module.css'

const howWeWork = [
  {
    id: 1, 
    image: "https://img.freepik.com/premium-vector/online-food-order-delivery_18591-39161.jpg?semt=ais_hybrid&w=740&q=80",
    title: "Вы делаете заказ",
    text: "Выбирайте отдельные блюда или готовые наборы"
  }, {
    id: 2,
    image: "https://img.freepik.com/free-vector/people-cooking-illustration_23-2148511940.jpg?semt=ais_hybrid&w=740&q=80",
    title: "Профессиональные повара готовят для Вас блюда",
    text: "Оформите заказ до 15:00 и уже завтра Вы получите свежую еду"
  }, {
    id: 3,
    image: "https://www.shutterstock.com/image-vector/delivery-courier-on-yellow-scooter-600nw-2650653321.jpg",
    title: "Ваш заказ доставляем на дом, в офис или в любую точку города",
    text: "Мы используем только надежные курьеры и транспорт"
  }
]

export default function HowWeWork() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Как мы работаем ?</h1>
      <div className={s.howWork}>
        {howWeWork.map((item) => (
          <div className={s.card} key={item.id}>
            <img className={s.image} src={item.image} alt="Как мы работаем" />
            <div className={s.cardBody}>
              <h3 className={s.cardTitle}>{item.title}</h3>
              <p className={s.cardText}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}