import type { PickingInfo } from "deck.gl";
import styles from "./customcontent.module.css"
import { NAME_MAPPER, type TNameMapperKeys } from "./model/types"

import type { ReactNode } from "react"

/**
 * контент-наполнение для карточки, описывающей кастомный элемент, созданный пользователем
 * @param {PickingInfo} data инфо, хранящееся в geojson'е при выборе элемента
 * @returns { ReactNode }
 */
const CustomContent = ({ data }: { data: PickingInfo }): ReactNode => {
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