import { SUMMARY_MODEL } from '../ai/models'

import { PromptType } from './athlete'

export interface SummaryTypes {
  model: typeof SUMMARY_MODEL 
  prefix: string
  prompt: PromptType
  maxTokens: number
}

export interface QuestionTypes {
  prefix: string
  prompt: PromptType
  maxTokens: number
}
