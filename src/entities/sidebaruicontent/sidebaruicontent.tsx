import { Spin } from "antd"
import { Suspense } from "react"
import { MAPPER_ID, type TMapperName } from "./model/constants"
import type { PickingInfo } from "deck.gl"

/**
 * ui-обертка над компонентом, который будет рендериться в сайдбаре
 * @param {PickingInfo} data хранит в себе инфо о геоджейсоне
 * @param {TMapperName} type тип  для рендеринга 
 * @returns 
 */
export const SidebarUIContent = ({ data, type }: {data: PickingInfo, type: TMapperName}) => {
  const Component = MAPPER_ID[type] 
  return ( 
    <Suspense fallback={<Spin />}>
      <Component data={data} />
    </Suspense>
  )
}