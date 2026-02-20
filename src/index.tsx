import { Hono } from 'hono'
import { SofaLanding } from './SofaLanding'
import admin from './admin'
import sql from './db'

const app = new Hono()

// Admin Route
app.route('/admin', admin)

// API for adding products (simple POST)
app.post('/api/products', async (c) => {
  const body = await c.req.parseBody()
  await sql`
    INSERT INTO products (name, price, image_url, description)
    VALUES (${String(body.name)}, ${Number(body.price)}, ${String(body.image_url)}, ${String(body.description)})
  `
  return c.redirect('/admin')
})

// Main Landing
app.get('/', async (c) => {
  // Fetch real sofas from DB
  let products = []
  try {
    products = await sql`SELECT * FROM products ORDER BY id DESC`
  } catch (e) {
    // Fallback if table not created yet
    products = []
  }

  return c.html(
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* SEO Tags */}
        <title>ЧИЛЛ. — Диваны премиум-класса от производителя</title>
        <meta name="description" content="Купить стильные диваны премиум-класса от производителя. Итальянский дизайн, ткани EasyClean, гарантия 10 лет. Доставка за 24 часа." />
        <meta name="keywords" content="диваны, купить диван, премиум диваны, мебель для гостиной, чилл диваны" />
        <meta property="og:title" content="ЧИЛЛ. — Твоя точка отдыха" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200" />
        
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <SofaLanding sofas={products} />
      </body>
    </html>
  )
})

// Sitemap SEO
app.get('/sitemap.xml', async (c) => {
  const products = await sql`SELECT id FROM products`
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://ussil.ru/</loc><priority>1.0</priority></url>
  ${products.map(p => `<url><loc>https://ussil.ru/product/${p.id}</loc><priority>0.8</priority></url>`).join('')}
</urlset>`
  return c.text(xml, 200, { 'Content-Type': 'application/xml' })
})

export default app
