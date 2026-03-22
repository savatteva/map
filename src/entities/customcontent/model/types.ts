/**константа-маппер для наименований */
export const NAME_MAPPER = {
  name: "Наименование",
  description: "Описание", 
} as const

/**достаем ключи из маппера, чтобы можно было типизировать возможные опции для рендера*/
export type TNameMapperKeys = keyof typeof NAME_MAPPER