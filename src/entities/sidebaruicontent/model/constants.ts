import { lazy } from "react"

const SubContent = lazy(() => import("../../subwaycontent/subwaycontent"))
const BusContent = lazy(() => import("../../buscontent/buscontent"))
const DistrictContent = lazy(() => import("../../districtscontent/districtscontent"))
const StreetsContent = lazy(() => import("../../streetscontent/streetscontent"))
const CustomContent = lazy(() => import("../../customcontent/customcontent"))

export const MAPPER_ID = {
  "metro": SubContent, 
  "mck": SubContent, 
  "mcd": SubContent, 
  "bus": BusContent, 
  "districts": DistrictContent, 
  "streets": StreetsContent, 
  "customUserLayer": CustomContent,
} as const