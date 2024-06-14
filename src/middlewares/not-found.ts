import { RequestHandler } from 'express'


const notFound: RequestHandler = (req, res, next) => {
  console.error('Not found', req.url)
  return res.json({
    code: 404,
    description: 'Not found',
  })
}

export { notFound }
