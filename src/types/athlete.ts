import QueryString from 'qs'


export type PromptType =
  | string
  | QueryString.ParsedQs
  | string[]
  | QueryString.ParsedQs[]
  | undefined

export interface AthleteStats {
  sex: string
  weight: number
  recent_run_totals : number
  all_run_totals : number
  biggest_ride_distance : number
  recent_ride_totals : {
    distance : number
    achievement_count : number
    count : number
    elapsed_time : number
    elevation_gain : number
    moving_time : number
  },
  biggest_climb_elevation_gain : number
  ytd_ride_totals : number
  all_ride_totals : number
  ytd_run_totals : number
}


export interface AthleteSummary {
  athlete: {
    fitness?: number
    fatigue?: number
    form?: number
    stress?: number
    freshness?: number
    motivation?: number
    performance?: number
    mood?: string
    athlete_status: string
    athlete_suggestions?: string
  }
  objective: {
    distance?: number
    time?: number
    elevation?: number
    goal?: string
    training_status: string
    training_suggestions?: string
  }
  injury: {
    injury_status: string
    injury_suggestions?: string
  }
}

