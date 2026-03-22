import type { PickingInfo } from "deck.gl"
import { NAME_MAPPER } from "./model/types"

import styles from "./streetcontent.module.css"
import type { ReactNode } from "react"

/**
 * контент-наполнение для карточки, описывающей улицу
 * @param {PickingInfo} data инфо, хранящееся в geojson'е при выборе элемента
 * @returns { ReactNode }
 */
const StreetsContent = ({ data }: { data: PickingInfo }): ReactNode => {
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