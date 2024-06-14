import express from 'express'

import { health, ready } from './routes/status'
import{ getAthleteSummary } from './routes/athlete'
import { asyncHandler } from './middlewares/asyncHandler'

const router = express.Router()

router.get('/_health', health)
router.get('/_ready', asyncHandler(ready))

router.post('/ai/athlete-summary', asyncHandler(getAthleteSummary))

export { router }
