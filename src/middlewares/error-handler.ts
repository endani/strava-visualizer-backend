import { ErrorRequestHandler } from 'express'


const errorHandler: ErrorRequestHandler = (error, req, res) => {
  console.error('Error at strava-visualizer-backend', error)
  return res.json({
    code: 500,
    description: 'Sorry, application has fail, please try again',
  })
}

export { errorHandler }
