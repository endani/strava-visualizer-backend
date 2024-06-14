import convict from 'convict'
import validators from 'convict-format-with-validator'

convict.addFormat(validators.ipaddress)

const config = convict({
  appName: {
    doc: 'Application name',
    default: 'strava-visualizer-backend',
    format: String,
    env: 'APP_NAME',
  },
  collector: {
    ip: {
      doc: 'Ip to be used at the collector',
      default: '127.0.0.1',
      format: 'ipaddress',
      env: 'COLLECTOR_IP',
    },
    port: {
      doc: 'Port to be used at collector',
      default: 8125,
      format: Number,
      env: 'COLLECTOR_PORT',
    },
  },
  port: {
    doc: 'Application port',
    default: 8080,
    format: Number,
    env: 'PORT',
  },
  gracefulShutdownTimeout: {
    doc: 'Is a number of milliseconds tp waits for Node.js process to exit gracefully after it receives a shutdown signal',
    default: 10000,
    format: Number,
    env: 'GRACEFUL_SHUTDOWN_TIMEOUT',
  },
  openApiKey: {
    doc: 'API Key to make OPENAPI API requests',
    default: '',
    format: String,
    env: 'OPENAI_API_KEY',
  },
})

config.validate({ allowed: 'strict' })

export { config }
