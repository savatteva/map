import type { PickingInfo } from "deck.gl";
import type { Feature } from "geojson";

/** типизирует состояния стора*/
export interface ILayersStore {
  layersData: {
    districts?: Feature[], 
    streets: Feature[], 
    bus: Feature[], 
    mcd: Feature[], 
    mck: Feature[], 
    metro: Feature[], 
    customUserLayer: Feature[]
  }, 
  currentSelectedElement: PickingInfo | null,

  setLayerData: (id: string, data: Feature[]) => void, 
  setCurrentSelectedElement: (element: PickingInfo | null) => void
}