import styles from './Products.module.css'

const categories = [
  {
    title: 'Салаты',
    size: 'tall',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Супы',
    size: 'small',
    image:
      'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Горячее',
    size: 'medium',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Наборы',
    size: 'tall',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Десерты',
    size: 'small',
    image:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Напитки',
    size: 'medium',
    image:
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Сэндвичи',
    size: 'small',
    image:
      'https://images.unsplash.com/photo-1481070555726-e2fe8357725c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Гарниры',
    size: 'small',
    image:
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Порционное меню',
    size: 'wide',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
  },
]

export default function Products() {
  return (
    <section className={styles.products}>
      <div className={styles.grid}>
        {categories.map((category) => (
          <article
            className={`${styles.card} ${styles[category.size]}`}
            key={category.title}
            style={{ backgroundImage: `url(${category.image})` }}
          >
            <span className={styles.cardTitle}>{category.title}</span>
          </article>
        ))}
      </div>
    </section>
  )
}
