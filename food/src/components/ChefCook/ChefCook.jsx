import s from './ChefCook.module.css'

export default function ChefCook() {
  return (
    <section className={s.wrapper} aria-labelledby="chef-cook-title">
      <div className={s.chefCard}>
        <div className={s.chefImage} aria-hidden>
          <svg viewBox="0 0 260 300" className={s.chefSvg}>
            <path
              d="M62 98c0-28 22-48 50-48 10-18 44-22 60-2 18-6 36 8 38 26 20 2 34 20 34 40 0 22-14 38-34 42H86c-18-6-24-24-24-58z"
              fill="#ffffff"
              stroke="#e4e4e4"
              strokeWidth="4"
            />
            <rect x="82" y="142" width="96" height="24" rx="12" fill="#f2f2f2" />
            <circle cx="130" cy="166" r="54" fill="#ffd6b3" />
            <circle cx="102" cy="170" r="10" fill="#ffb3b3" opacity="0.8" />
            <circle cx="158" cy="170" r="10" fill="#ffb3b3" opacity="0.8" />
            <circle cx="110" cy="164" r="6" fill="#3b2f2f" />
            <circle cx="150" cy="164" r="6" fill="#3b2f2f" />
            <path
              d="M104 156c6-6 14-8 22-8M156 156c-6-6-14-8-22-8"
              stroke="#3b2f2f"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M114 190c10 12 28 12 38 0"
              stroke="#3b2f2f"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
            <rect x="78" y="212" width="104" height="72" rx="28" fill="#ff6b6b" />
            <rect x="110" y="232" width="40" height="40" rx="12" fill="#ffffff" />
            <path
              d="M76 220c-8-32 18-64 54-64h0c36 0 62 32 54 64"
              fill="#ffe5d0"
              opacity="0.6"
            />
            <path
              d="M96 244h68"
              stroke="#ffdede"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className={s.bubble}>
          <h3 id="chef-cook-title" className={s.title}>Наш шеф рекомендует</h3>
          <p className={s.text}>
            Готовим блюда из свежих продуктов, бережно сохраняем вкус и подачу.
            Попробуйте сезонные новинки — они такие же яркие, как и я!
          </p>
        </div>
      </div>
    </section>
  )
}