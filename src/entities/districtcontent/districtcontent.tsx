import type { PickingInfo } from "deck.gl"
import { NAME_MAPPER } from "./model/types"

import styles from "./districtcontent.module.css"

const DistrictContent = ({ data }: { data: PickingInfo }) => {
  const keys = ["NAME_AO", "NAME"] as const
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

export default DistrictContent