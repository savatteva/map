import type { PickingInfo } from "deck.gl";
import { NAME_MAPPER, TYPE_NAME_MAPPER, type TIncomeType }  from "./model/types"

import styles from "./subwaycontent.module.css"
import Icon from "@ant-design/icons";

const SubwayContent = ({ data }: { data: PickingInfo }) => {
  const { icon } = data.object.properties
  const type = data?.layer?.id as TIncomeType
  const keys = ["name_station", "name_line", "status"] as const

  return (
  <section className={styles.container}>
    <div className={styles.iconContainer}>
      <Icon component={() => <img src={icon} className={styles.iconStyle}/>} />
      <p>Тип транспорта: {TYPE_NAME_MAPPER[type]}</p>
    </div>
    <div className={styles.container}>
      {keys.map(item =>  {
        return (
          <div key={item} className={styles.signContainer}>
            <p className={styles.signItem}>{NAME_MAPPER[item]}</p>
            <p>{data.object.properties[item]}</p>
          </div>
          )
        })
      }
    </div>
</section>)
}

export default SubwayContent