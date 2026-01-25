import { useState } from 'react'
import s from './Main.module.css'

export default function Main() {
  const images = [
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1600&q=80',
  ]
  const titles = [
    'Домашняя еда для всех',
    'Быстрый обед без забот',
    'Сытный ужин за 30 минут',
  ]
  const subtitles = [
    'Свежие блюда, быстрая доставка и забота о вашем времени.',
    'Подарок при заказе от 100 рублей.',
    'Рекомендуй нас друзьям и получай скидку.',
  ]
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      handlePrev()
    }
    if (event.key === 'ArrowRight') {
      handleNext()
    }
  }

  return (
    <section className={s.main}>
      <div
        className={s.slider}
        aria-live="polite"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div
          className={s.sliderTrack}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div className={s.slide} key={`slide-${index}`}>
              <img
                className={s.slideImage}
                src={src}
                alt={`Слайд ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          className={`${s.arrow} ${s.arrowLeft}`}
          onClick={handlePrev}
          aria-label="Предыдущий слайд"
        >
          ‹
        </button>
        <button
          type="button"
          className={`${s.arrow} ${s.arrowRight}`}
          onClick={handleNext}
          aria-label="Следующий слайд"
        >
          ›
        </button>
        <div className={s.dots} role="tablist" aria-label="Переключение слайдов">
          {images.map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              className={`${s.dot} ${index === activeIndex ? s.dotActive : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Слайд ${index + 1}`}
              aria-pressed={index === activeIndex}
            />
          ))}
        </div>
      </div>
      <div className={s.mainContent}>
        {activeIndex === 0 && (
          <h1 className={s.mainTitle}>{titles[activeIndex]}</h1>
        )}
        <p
          className={`${s.mainSubtitle} ${
            activeIndex === 0 ? '' : s.mainSubtitleLarge
          }`}
        >
          {subtitles[activeIndex]}
        </p>
      </div>
    </section>
  )
}