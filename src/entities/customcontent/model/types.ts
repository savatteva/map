export const NAME_MAPPER = {
  name: "Наименование",
  description: "Описание", 
} as const

export type TNameMapperKeys = keyof typeof NAME_MAPPER