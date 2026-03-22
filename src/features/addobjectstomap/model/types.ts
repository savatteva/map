import type { Feature, Point } from "geojson";

export interface ISavedData {
  features: Feature[], 
  newFeature: Feature<Point>, 
  editFeature: (value: number | string, index: number, type: string) => void, 
  addFeature: (feature: Feature<Point>) => void, 
  clearFeature: () => void, 
}