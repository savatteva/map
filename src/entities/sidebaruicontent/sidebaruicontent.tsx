import { Spin } from "antd"
import { Suspense } from "react"
import { MAPPER_ID, type TMapperName } from "./model/constants"
import type { PickingInfo } from "deck.gl"

export const SidebarUIContent = ({ data, type }: {data: PickingInfo, type: TMapperName}) => {
  const Component = MAPPER_ID[type] 
  return ( 
    <Suspense fallback={<Spin />}>
      <Component data={data} />
    </Suspense>
  )
}