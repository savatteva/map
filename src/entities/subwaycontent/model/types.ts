export type TIncomeType = "mck" | "mcd" | "metro"

export const TYPE_NAME_MAPPER = {
  "metro": "Метро", 
  "mck": "МЦК",
  "mcd": "МЦД"
} as const

export const NAME_MAPPER = {
  "name_station": "Наименование станции", 
  "name_line": "Ветка метро",
  "status": "Текущий статус"
} as const
