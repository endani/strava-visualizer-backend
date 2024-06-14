import { getSummary } from '../ai/api'
import { SUMMARY_MODEL } from '../ai/models'
import { AthleteSummary, PromptType } from '../types/athlete'

const getAthleteStatus = async (prompt: PromptType) => {
  return await getSummary({
    model: SUMMARY_MODEL,
    prefix: 'I want to build a title for',
    prompt,
    maxTokens: 20,
  })
}

const getObjectiveStatus = async (prompt: PromptType) => {
  return await getSummary({
    model: SUMMARY_MODEL,
    prefix: 'I want to build a description for',
    prompt,
    maxTokens: 60,
  })
}

const getInjuryStatus = async (prompt: PromptType) => {
  return await getSummary({
    model: SUMMARY_MODEL,
    prefix: 'I want to build a description for',
    prompt,
    maxTokens: 60,
  })
}


const getAthleteSummary = async (prompt: PromptType): Promise<AthleteSummary> => {
  const [athlete, objective, injury] = await Promise.all([
    getAthleteStatus(prompt),
    getObjectiveStatus(prompt),
    getInjuryStatus(prompt),
  ])

  return {
    athlete:{
      athlete_status: athlete,
    },
    objective: {
      training_status: objective,
    },
    injury:{
      injury_status: injury,
    },
  }
}

const athleteRepository = {
  getAthleteSummary,
}

export { athleteRepository }
