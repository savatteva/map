import type { PickingInfo } from "deck.gl"
import { NAME_MAPPER } from "./model/types"

import styles from "./streetscontents.module.css"

const StreetsContent = ({ data }: { data: PickingInfo }) => {
  const keys = ["ROAD_CATEG", "TYPE_LINK"] as const
  return (
    <section className={styles.container}>
      {keys.map(item =>  {
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

export default StreetsContent