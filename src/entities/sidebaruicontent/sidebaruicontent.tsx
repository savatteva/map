import { Spin } from "antd"
import { Suspense } from "react"
import { MAPPER_ID } from "./model/constants"

export const SidebarUIContent = ({data, type}) => {
  const Component = MAPPER_ID[type]
  return ( 
    <Suspense fallback={<Spin />}>
      <Component data={data} />
    </Suspense>
  )
}