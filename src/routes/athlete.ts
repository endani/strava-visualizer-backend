import { AsyncRequestHandler } from '../types'
import { athleteRepository } from '../repositories/athlete-repository'
import { AthleteSummary } from '../types/athlete'
import {  ATHLETE_SUMMARY_FIXTURE } from '../fixtures'

const getAthleteSummary: AsyncRequestHandler<{}, AthleteSummary> = async (req, res) => {
  const { prompt } = req.query

  // TODO: remove fixture. This fixture was added to avoid
  // exceeding our budget for the AI model.
  const form =
    prompt === 'fixture' ? ATHLETE_SUMMARY_FIXTURE : await athleteRepository.getAthleteSummary(prompt)

  res.statusCode = 200
  res.json(form)
}

export { getAthleteSummary }
