import { Input } from "antd"

import styles from "./addobjecttomap.module.css"
import { useSavedData } from "../model/store"

export const AddObjectToMap = () => {
  const editFeature = useSavedData(state => state.editFeature) 

  return (
    <section className={styles.container}>
      <Input placeholder="Наименование" onChange={(e) => editFeature(e.target.value, 0, "name") }/>
      <Input placeholder="Точка" disabled />
      <div className={styles.coordinates}>
        <Input placeholder="Широта" onChange={(e) => editFeature(e.target.value, 1, "coordinates")} />
        <Input placeholder="Долгота" onChange={(e) => editFeature(e.target.value, 0, "coordinates")} />
      </div>
      <Input placeholder="Описание" onChange={(e) => editFeature(e.target.value, 0, "description")} />
    </section>
    )
}