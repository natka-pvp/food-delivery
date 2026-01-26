import s from './OurService.module.css'

export default function OurService () {
  const services = [{
    id: 1,
    image: "https://png.pngtree.com/png-clipart/20250110/original/pngtree-organic-food-basket---ideal-for-natural-markets-png-image_19280254.png",
    title: "Контроль качества",
    description: "Мы используем только лучшие ингредиенты и следим за качеством нашей продукции",
  }, {
    id: 2,
    image: "https://pictures.pibig.info/uploads/posts/2023-04/1681263763_pictures-pibig-info-p-produkti-risunok-vkontakte-3.jpg",
    title: "Большой выбор на любые вкусы",
    description: "Анализируя Ваш спрос, мы создаем меню, которое максимально удовлетворяет Ваши потребности",
  }, {
    id: 3,
    image: "https://s3.stroi-news.ru/img/multyashnaya-yeda-kartinki-44.jpg",
    title: "Блюда на любой вкус",
    description: "Мы готовим блюда на любой вкус, которые максимально удовлетворяют Ваши потребности",
  }]

  return (
    <div className={s.container}>
      <h2 className={s.title}>Наши услуги</h2>
      <div className={s.serviceGrid}>
        {services.map((service) => (
          <div className={s.card} key={service.id}>
            <img className={s.image} src={service.image} alt={service.title} />
            <div className={s.cardBody}>
              <h3 className={s.cardTitle}>{service.title}</h3>
              <p className={s.cardText}>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}