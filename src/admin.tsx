import { Hono } from 'hono'
import { jsxRenderer } from 'hono/jsx-renderer'
import sql from './db'

const admin = new Hono()

// Simple Admin Layout
const adminLayout = jsxRenderer(({ children, title }) => {
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>{title} | Admin Panel</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="bg-gray-50 text-gray-900">
        <nav class="bg-black text-white p-6 shadow-xl">
          <div class="max-w-7xl mx-auto flex justify-between items-center">
            <h1 class="text-xl font-bold">ЧИЛЛ. CMS</h1>
            <a href="/admin" class="hover:text-gray-300">Дашборд</a>
          </div>
        </nav>
        <main class="max-w-7xl mx-auto p-8">
          {children}
        </main>
      </body>
    </html>
  )
})

admin.use('*', adminLayout)

// Admin Dashboard - List Products
admin.get('/', async (c) => {
  const products = await sql`SELECT * FROM products ORDER BY id DESC`
  return c.render(
    <div class="space-y-8">
      <div class="flex justify-between items-center">
        <h2 class="text-3xl font-bold">Управление диванами</h2>
        <a href="/admin/new" class="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors">
          + Добавить диван
        </a>
      </div>
      
      <div class="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <table class="w-full text-left">
          <thead class="bg-gray-50 border-b border-gray-100">
            <tr>
              <th class="p-6 font-bold uppercase text-xs text-gray-400">Название</th>
              <th class="p-6 font-bold uppercase text-xs text-gray-400">Цена</th>
              <th class="p-6 font-bold uppercase text-xs text-gray-400">Статус</th>
              <th class="p-6"></th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr class="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td class="p-6">
                  <div class="flex items-center gap-4">
                    <img src={p.image_url} class="w-12 h-12 rounded-lg object-cover" />
                    <div class="font-semibold">{p.name}</div>
                  </div>
                </td>
                <td class="p-6 font-mono">{p.price.toLocaleString()} ₽</td>
                <td class="p-6">
                  <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Активен</span>
                </td>
                <td class="p-6 text-right">
                  <button class="text-gray-400 hover:text-black">Редактировать</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>,
    { title: 'Дашборд' }
  )
})

// New Product Form
admin.get('/new', (c) => {
  return c.render(
    <div class="max-w-2xl mx-auto space-y-8">
      <h2 class="text-3xl font-bold text-center">Новый товар</h2>
      <form action="/api/products" method="POST" class="bg-white p-10 rounded-[3rem] shadow-2xl space-y-6">
        <div>
          <label class="block text-sm font-bold mb-2 uppercase text-gray-400">Название модели</label>
          <input name="name" type="text" required class="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-black outline-none" placeholder="Напр: Milano v.2" />
        </div>
        <div>
          <label class="block text-sm font-bold mb-2 uppercase text-gray-400">Цена (₽)</label>
          <input name="price" type="number" required class="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-black outline-none" placeholder="89000" />
        </div>
        <div>
          <label class="block text-sm font-bold mb-2 uppercase text-gray-400">Ссылка на фото</label>
          <input name="image_url" type="text" required class="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-black outline-none" placeholder="https://..." />
        </div>
        <div>
          <label class="block text-sm font-bold mb-2 uppercase text-gray-400">Описание для SEO</label>
          <textarea name="description" rows="4" class="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-black outline-none resize-none" placeholder="Опишите диван..."></textarea>
        </div>
        <button type="submit" class="w-full py-5 bg-black text-white font-bold rounded-2xl hover:bg-gray-800 transition-all shadow-xl shadow-gray-200">
          Сохранить товар
        </button>
      </form>
    </div>,
    { title: 'Добавить диван' }
  )
})

export default admin
