import { FC } from 'hono/jsx'

export const SofaLanding: FC = () => {
  return (
    <div className="bg-neutral-50 text-neutral-900 font-sans selection:bg-accent-200">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold tracking-tight uppercase">Sofa Luxury</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium text-neutral-600">
            <a href="#catalog" className="hover:text-neutral-900 transition-colors">Коллекция</a>
            <a href="#advantages" className="hover:text-neutral-900 transition-colors">Преимущества</a>
            <a href="#contact" className="hover:text-neutral-900 transition-colors">Контакты</a>
          </div>
          <a href="#contact" className="px-6 py-3 bg-neutral-900 text-white font-semibold rounded-full hover:bg-neutral-800 transition-all active:scale-95 shadow-lg shadow-neutral-900/20">
            Заказать расчет
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-200 rounded-full text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Новая коллекция 2026 уже в продаже
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
              Диваны, на которых <span className="text-neutral-400 italic">хочется проснуться</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Итальянский дизайн и безупречный комфорт. Используем только премиальные ткани EasyClean и усиленные каркасы с гарантией 10 лет.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#catalog" className="px-8 py-4 bg-neutral-900 text-white text-lg font-bold rounded-2xl hover:bg-neutral-800 transition-all shadow-2xl">
                Выбрать свою модель
              </a>
              <a href="#contact" className="px-8 py-4 bg-white border border-neutral-300 text-neutral-900 text-lg font-bold rounded-2xl hover:bg-neutral-50 transition-all">
                Получить прайс-лист
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-orange-100 to-transparent rounded-3xl -z-10 blur-2xl opacity-50"></div>
            <img 
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=900&fit=crop" 
              alt="Premium Sofa" 
              className="rounded-3xl shadow-2xl shadow-neutral-900/10 w-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section id="advantages" className="py-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl">🛋</div>
              <h3 className="text-xl font-bold">Ткани EasyClean</h3>
              <p className="text-neutral-400">Любые загрязнения от вина, кофе или фломастеров легко удаляются обычной водой.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl">🛡</div>
              <h3 className="text-xl font-bold">Гарантия 10 лет</h3>
              <p className="text-neutral-400">Мы уверены в своих каркасах. Используем только массив дуба и высокопрочную сталь.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl">🚚</div>
              <h3 className="text-xl font-bold">Доставка за 24ч</h3>
              <p className="text-neutral-400">Собственная служба логистики доставит и соберет ваш диван уже на следующий день.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Preview */}
      <section id="catalog" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4">Наша коллекция</h2>
              <p className="text-neutral-600">15 моделей, доведенных до совершенства</p>
            </div>
            <div className="hidden sm:flex gap-2">
              <button className="w-12 h-12 border border-neutral-200 rounded-full flex items-center justify-center hover:bg-neutral-100">←</button>
              <button className="w-12 h-12 border border-neutral-200 rounded-full flex items-center justify-center hover:bg-neutral-100">→</button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6">
                  <img 
                    src={`https://images.unsplash.com/photo-1550254478-ead40cc54513?w=600&h=750&fit=crop&q=${i}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    <button className="w-full py-4 bg-white text-neutral-900 font-bold rounded-2xl shadow-xl">Быстрый просмотр</button>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-1">Модель "Milano v.{i}"</h4>
                <p className="text-neutral-500 mb-2 font-medium">от 89 000 ₽</p>
                <div className="flex gap-1">
                  <div className="w-4 h-4 rounded-full bg-amber-800 border border-white shadow-sm"></div>
                  <div className="w-4 h-4 rounded-full bg-neutral-400 border border-white shadow-sm"></div>
                  <div className="w-4 h-4 rounded-full bg-emerald-900 border border-white shadow-sm"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 bg-neutral-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-8 lg:p-16 shadow-2xl flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Помочь с выбором?</h2>
              <p className="text-lg text-neutral-600 mb-8">
                Оставьте заявку, и наш дизайнер бесплатно составит 3D-визуализацию дивана в вашем интерьере за 15 минут.
              </p>
              <div className="space-y-4 font-medium">
                <div className="flex items-center gap-4 text-neutral-700">
                  <span className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center italic">📞</span>
                  8 (800) 555-35-35
                </div>
                <div className="flex items-center gap-4 text-neutral-700">
                  <span className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center italic">💬</span>
                  Написать в WhatsApp
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <form className="space-y-4">
                <input type="text" placeholder="Ваше имя" className="w-full px-6 py-4 rounded-2xl bg-neutral-100 border-none focus:ring-2 focus:ring-neutral-900 transition-all outline-none" />
                <input type="tel" placeholder="Телефон" className="w-full px-6 py-4 rounded-2xl bg-neutral-100 border-none focus:ring-2 focus:ring-neutral-900 transition-all outline-none" />
                <button className="w-full py-5 bg-neutral-900 text-white font-bold rounded-2xl hover:bg-neutral-800 transition-all shadow-xl shadow-neutral-900/20 active:scale-[0.98]">
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-neutral-200 text-center text-neutral-400 text-sm">
        <p>© 2026 Sofa Luxury. Сделано с любовью к комфорту.</p>
      </footer>
    </div>
  )
}
