import { Server } from 'http'

import bodyParser from 'body-parser'


import {
  errorHandler,
  notFound,
  corsMiddlerware,
  helmetMiddlerware,
} from './middlewares'
import { router } from './router'
import { config } from './config'
import express from 'express'

const { port, gracefulShutdownTimeout } = config.get()

let server: Server | null = null

const start = () => {
  try {
    const app = express()

    app.use(corsMiddlerware)
    app.use(helmetMiddlerware)
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(router)
    app.use(notFound)
    app.use(errorHandler)

    server = app.listen(port, () => {
      console.info(`Server listening on port ${port}`)
    })
  } catch (error) {
    console.error('Error starting the service', error)
    process.exit(1)
  }
}

const stop = () => {
  server?.close(async () => {
    try {
      console.info('Server close')
      process.exit(0)
    } catch (error) {
      console.error('Error shutting down service', error)
      process.exit(1)
    }
  })

  setTimeout(() => {
    console.error(
      'Could not close connections in time, forcefully shutting down'
    )
    process.exit(1)
  }, gracefulShutdownTimeout)
}

process.on('SIGTERM', stop)
process.on('SIGINT', stop)

export { start, stop }
