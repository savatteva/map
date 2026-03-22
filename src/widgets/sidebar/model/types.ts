import type { ReactNode } from "react"

export type TSidebarProps = {
  onClose: () => void, 
  children: ReactNode,
}