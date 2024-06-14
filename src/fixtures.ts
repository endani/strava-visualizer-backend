import { AthleteStats } from './types'

export const ATHLETE_FIXTURE = {
  sex: 'M',
  weight: 75,
  recent_run_totals: 10,
  all_run_totals: 20,
  biggest_ride_distance: 100,
  recent_ride_totals: {
    distance: 100,
    achievement_count: 1,
    count: 1,
    elapsed_time: 100,
    elevation_gain: 100,
    moving_time: 100,
  },
  biggest_climb_elevation_gain: 100,
  ytd_ride_totals: 100,
  all_ride_totals: 100,
  ytd_run_totals: 100,
} as AthleteStats

export const ATHLETE_SUMMARY_FIXTURE = {
  athlete: {
    athlete_status: "8",
  },
  objective: {
    training_status: "6",
  },
  injury: {
    injury_status: "7"
  },
}