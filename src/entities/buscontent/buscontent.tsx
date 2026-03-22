import Icon from "@ant-design/icons"
import { NAME_MAPPER } from "./model/types"

import styles from "./buscontent.module.css"
import type { PickingInfo } from "deck.gl"

const BusContent = ({ data }: { data: PickingInfo }) => {
  const { name_mpv, icon } = data.object.properties
  const keys = ["address_mpv", "ao", "rayon", "marshrut"] as const

  return (
    <section className={styles.busContainer}>
      <div className={styles.iconContainer}>
        <Icon component={() => <img src={icon} className={styles.iconStyle}/>} />
        <p>Остановка: {name_mpv}</p>
      </div>
      <div className={styles.container}>
        {keys.map(item =>  {
          return <div key={item} className={styles.signContainer}><p className={styles.signItem}>{NAME_MAPPER[item]}</p><p>{data.object.properties[item]}</p></div>
        })}
      </div>
    </section>
  )
}

export default BusContent