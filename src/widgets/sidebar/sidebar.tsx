import styles from "./sidebar.module.css"
import { Button } from "antd"
import {CloseOutlined} from "@ant-design/icons"
import type { TSidebarProps } from "./model/types"
import type { ReactNode } from "react"

/**
 * компонент сайдбара
 * @param {Function} onClose колбек, срабатывающий на закрытие
 * @param {ReactNode} children дочерние компоненты для рендера
 * @returns {ReactNode}
 */
export const Sidebar = ({onClose, children}: TSidebarProps): ReactNode => {
  return (
    <aside className={styles.sidebarContainer}>
      <Button icon={<CloseOutlined />} onClick={onClose} className={styles.sidebarBtn}/>
      {children}
    </aside>
    )
}