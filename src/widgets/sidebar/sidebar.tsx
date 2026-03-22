import styles from "./sidebar.module.css"
import { Button } from "antd"
import {CloseOutlined} from "@ant-design/icons"
import type { TSidebarProps } from "./model/types"

export const Sidebar = ({onClose, children}: TSidebarProps) => {
  return (
    <aside className={styles.sidebarContainer}>
      <Button icon={<CloseOutlined />} onClick={onClose} className={styles.sidebarBtn}/>
      {children}
    </aside>
    )
}