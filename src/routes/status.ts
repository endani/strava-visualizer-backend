import { RequestHandler } from 'express'

import { AsyncRequestHandler } from '../types'

const health: RequestHandler = (req, res) => {
  res.statusCode = 200
  res.json({
    code: 200,
    message: 'Service running',
  })
}

type StatusResponse = {
  code: number
  message: string
}

const ready: AsyncRequestHandler<{}, StatusResponse> = async (req, res) => {
  res.statusCode = 200
  res.json({
    code: 200,
    message: 'Service running',
  })
}

export { health, ready }
