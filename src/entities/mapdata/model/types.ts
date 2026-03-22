import type { PickingInfo } from "deck.gl";
import type { Feature } from "geojson";

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
  setCurrentSelectedElement: (element: PickingInfo) => void
}