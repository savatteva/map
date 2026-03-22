import type { PickingInfo } from "deck.gl";
import styles from "./customcontent.module.css"
import { NAME_MAPPER, type TNameMapperKeys } from "./model/types"

const CustomContent = ({ data }: { data: PickingInfo }) => {
  const keys = ["name", "description"] as const;

  return (
    <section className={styles.container}>
      {keys.map((item: TNameMapperKeys) => {
        return (
          <div key={item} className={styles.signContainer}>
            <p className={styles.signItem}>{NAME_MAPPER[item]}</p>
            <p>{data.object.properties[item]}</p>
          </div>
          )
      })}
    </section>
  )
}

export default CustomContent