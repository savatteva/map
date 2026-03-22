import styles from "./status.module.css"
import type { ReactNode } from "react"

/**
 * Компонент рендера статуса
 * @param {string} text приходящий текст 
 * @returns {ReactNode}
 */
export const StatusContent = ({ text }: { text: string }): ReactNode => {
  return (
    <section className={styles.statusSection}>
      <p>{text}</p>
    </section>
  )
}