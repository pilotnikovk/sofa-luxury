import { FC } from 'hono/jsx'

export const SofaLanding: FC = () => {
  return (
    <div className="bg-[#FAFAFA] text-[#1A1A1A] font-sans selection:bg-orange-200">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
          <div className="text-4xl font-extrabold tracking-tighter">
            ЧИЛЛ<span className="text-[#FF6B00]">.</span>
          </div>
          <div className="hidden md:flex gap-10 font-bold text-sm uppercase tracking-widest text-neutral-500">
            <a href="#philosophy" className="hover:text-black transition-colors">Философия</a>
            <a href="#collection" className="hover:text-black transition-colors">Коллекция</a>
            <a href="#contacts" className="hover:text-black transition-colors">Контакты</a>
          </div>
          <button className="bg-[#1A1A1A] text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform active:scale-95 shadow-xl">
            Заказать проект
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative z-10">
            <h1 className="text-7xl lg:text-8xl font-extrabold leading-none mb-10 tracking-tighter">
              Точка в поиске <br/>
              <span className="text-neutral-300">комфорта</span><span className="text-[#FF6B00]">.</span>
            </h1>
            <p className="text-2xl text-neutral-500 mb-12 max-w-lg font-light leading-relaxed">
              Итальянские лекала, усиленные каркасы и ткани, которые не боятся жизни.
            </p>
            <div className="flex gap-6">
              <a href="#collection" className="bg-[#1A1A1A] text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl hover:bg-neutral-800 transition-colors">
                Смотреть 15 моделей
              </a>
              <button className="bg-white border-2 border-neutral-200 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-neutral-50 transition-colors">
                Каталог тканей
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 bg-orange-500/10 blur-3xl rounded-full -z-10 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=1000&fit=crop" 
              alt="Premium Sofa" 
              className="rounded-[3rem] shadow-2xl object-cover w-full aspect-square border-8 border-white"
            />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-32 bg-[#1A1A1A] text-white rounded-[4rem] mx-4">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-8 border-l-2 border-orange-500/30">
              <div className="text-6xl font-extrabold mb-4 text-[#FF6B00]">Ч</div>
              <div className="text-xl font-bold mb-2">Чистый</div>
              <p className="text-neutral-500 text-sm">Лаконичный дизайн вне времени и трендов.</p>
            </div>
            <div className="p-8 border-l-2 border-orange-500/30">
              <div className="text-6xl font-extrabold mb-4 text-[#FF6B00]">И</div>
              <div className="text-xl font-bold mb-2">Идеальный</div>
              <p className="text-neutral-500 text-sm">Выверенная эргономика для каждой клетки тела.</p>
            </div>
            <div className="p-8 border-l-2 border-orange-500/30">
              <div className="text-6xl font-extrabold mb-4 text-[#FF6B00]">Л</div>
              <div className="text-xl font-bold mb-2">Лаундж</div>
              <p className="text-neutral-500 text-sm">Атмосфера отдыха, которая всегда с вами.</p>
            </div>
            <div className="p-8 border-l-2 border-orange-500/30">
              <div className="text-6xl font-extrabold mb-4 text-[#FF6B00]">Л</div>
              <div className="text-xl font-bold mb-2">Личный</div>
              <p className="text-neutral-500 text-sm">Создан специально под ваш ритм жизни.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-20">
            <h2 className="text-5xl font-extrabold tracking-tight">
              Коллекция 2026<span className="text-[#FF6B00]">.</span>
            </h2>
            <div className="text-neutral-400 font-bold uppercase tracking-widest text-sm">15 моделей</div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: 'Milano Edition', price: '124 000', img: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?w=600' },
              { name: 'Nordic Minimal', price: '98 000', img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600' },
              { name: 'Genoa Comfort', price: '145 000', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600' }
            ].map((item) => (
              <div className="group cursor-pointer">
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 shadow-lg bg-neutral-200">
                  <img 
                    src={item.img} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute bottom-8 left-8 right-8">
                    <button className="w-full py-5 bg-white text-black font-bold rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      Узнать больше
                    </button>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 uppercase tracking-tighter">{item.name}</h3>
                <div className="text-neutral-400 font-medium">от {item.price} ₽</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="py-20 px-8 text-center text-neutral-400 text-sm border-t border-neutral-100">
        <div className="text-2xl font-extrabold text-black mb-4">
          ЧИЛЛ<span className="text-[#FF6B00]">.</span>
        </div>
        <p>© 2026 Все права защищены. Твоя точка отдыха.</p>
      </footer>
    </div>
  )
}
