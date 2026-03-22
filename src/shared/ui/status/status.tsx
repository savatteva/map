import styles from "./status.module.css"

export const StatusContent = ({ text }: { text: string }) => {
  return (
    <section className={styles.statusSection}>
      <p>{text}</p>
    </section>
  )
}