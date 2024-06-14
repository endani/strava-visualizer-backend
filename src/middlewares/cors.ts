import cors from 'cors'

const corsMiddlerware = cors({
  origin: [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'https://typeformers.typeform.com',
  ],
  credentials: true,
  methods: ['POST', 'GET', 'OPTIONS'],
  allowedHeaders: ['authorization', 'x-api-key', 'Content-Type'],
})

export { corsMiddlerware }
