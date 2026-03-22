import { MapComp, Sidebar } from "@/widgets"
import styles from "./MainPage.module.css"
import { useLayersData } from "@/entities";
import { SidebarUIContent } from "@/entities/sidebaruicontent/sidebaruicontent";
import type { TLayerId } from "@/widgets/map/model/types";

export const MainPage = () => {
  const { currentSelectedElement, setCurrentSelectedElement } = useLayersData((state) => state);
  const id = currentSelectedElement?.layer?.id as TLayerId

  return (
    <main className={styles.container}> 
      <MapComp />
      {currentSelectedElement && (
        <Sidebar onClose={() => setCurrentSelectedElement(null)}>
          <h2 className={styles.header}>Карточка объекта</h2>
          <SidebarUIContent data={currentSelectedElement} type={id}/>
        </Sidebar> )}
    </main>
  )
}