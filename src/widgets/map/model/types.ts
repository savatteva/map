import { GeoJsonLayer } from '@deck.gl/layers';

export type TLayerId = "metro" | "mck" | "mcd" | "bus" | "districts" | "streets" | "customUserLayer"

export type TLayerConfig = {
  id: TLayerId, 
  pathToFileLoad: string, 
  settings: Omit<GeoJsonLayer, "id">,
}