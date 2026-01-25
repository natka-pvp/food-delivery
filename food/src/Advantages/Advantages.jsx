import { FiCheckCircle } from 'react-icons/fi'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaClock } from 'react-icons/fa'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { FaBowlFood } from 'react-icons/fa6'
import s from './Advantages.module.css'

const advantages = [
  {
    id: 1,
    img: <TbTruckDelivery />,
    title: "Бесплатная доставка от 40 рублей",
    text: "Для города Витебска"
  },
  {
    id: 2,
    img: <FaClock />,
    title: "Экономия времени и сил"
  },
  {
    id: 3,
    img: <MdOutlineRestaurantMenu />,
    title  : "Сбалансированный состав блюд"
  },
  { id: 4,
    img: <FaBowlFood />,
    title : "Оптимальные порции в герметичных контейнерах"
   },
]

export default function Advantages() {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Наши преимущества</h2>
      <ul className={s.list}>
        <li className={s.item} tabIndex={0}>
          <FiCheckCircle className={s.icon} aria-hidden />
          <span>
            Всегда доставляем вам только свежие блюда. Мы работаем только с
            лучшими поставщиками и выбираем их с учетом ваших предпочтений и
            вкусов.
          </span>
        </li>
        <li className={s.item} tabIndex={0}>
          <FiCheckCircle className={s.icon} aria-hidden />
          <span>
            Быстрая доставка без опозданий: отслеживание статуса заказа и
            прогноз времени прибытия в приложении.
          </span>
        </li>
        <li className={s.item} tabIndex={0}>
          <FiCheckCircle className={s.icon} aria-hidden />
          <span>
            Большой выбор кухонь и блюд на любой вкус, регулярные новинки и
            сезонные предложения.
          </span>
        </li>
        <li className={s.item} tabIndex={0}>
          <FiCheckCircle className={s.icon} aria-hidden />
          <span>Удобные способы оплаты: картой, наличными или онлайн.</span>
        </li>
        <li className={s.item} tabIndex={0}>
          <FiCheckCircle className={s.icon} aria-hidden />
          <span>
            Служба поддержки 24/7 и бережная доставка: сохраняем тепло, вкус и
            внешний вид блюд.
          </span>
        </li>
      </ul>
      <ul className={s.advList}>
        {advantages.map((advantage) => {
          return (
            <li key={advantage.id} className={s.advItem} tabIndex={0}>
              <span className={s.advIcon} aria-hidden>
                {advantage.img}
              </span>
              <span className={s.advTitle}>{advantage.title}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
