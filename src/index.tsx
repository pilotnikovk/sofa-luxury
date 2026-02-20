import { Hono } from 'hono'
import { SofaLanding } from './SofaLanding'

const app = new Hono()

app.get('/', (c) => {
  return c.html(
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sofa Luxury | Премиальные диваны</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <SofaLanding />
      </body>
    </html>
  )
})

export default app
