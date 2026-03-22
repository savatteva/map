import { lazy } from "react"

const SubContent = lazy(() => import("../../subwaycontent/subwaycontent"))
const BusContent = lazy(() => import("../../buscontent/buscontent"))
const DistrictContent = lazy(() => import("../../districtcontent/districtcontent"))
const StreetsContent = lazy(() => import("../../streetcontent/streetcontent"))
const CustomContent = lazy(() => import("../../customcontent/customcontent"))

/** объект-маппер для ленивой загрузки компонентов */
export const MAPPER_ID = {
  "metro": SubContent, 
  "mck": SubContent, 
  "mcd": SubContent, 
  "bus": BusContent, 
  "districts": DistrictContent, 
  "streets": StreetsContent, 
  "customUserLayer": CustomContent,
} as const

export type TMapperName = keyof typeof MAPPER_ID