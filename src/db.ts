import postgres from 'postgres'

const sql = postgres(process.env.DATABASE_URL || 'postgres://localhost:5432/sofa_db', {
  max: 10,
  idle_timeout: 20,
  connect_timeout: 10,
  ssl: process.env.NODE_ENV === 'production' ? 'require' : undefined
})

export default sql
