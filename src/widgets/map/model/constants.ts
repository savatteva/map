import type { StyleSpecification } from "maplibre-gl";
import type { ViewState } from "react-map-gl/maplibre";

export const LAYER_CONFIGS = [
  {
    id: "districts",
    pathToFileLoad: "/data/districts_layer.gpkg",
    settings: {
      opacity: 0,
      pickable: true
    }
  },
  {
    id: "streets",
    pathToFileLoad: "/data/StreetsPedestrian.gpkg",
    settings: {
      opacity: 1,
      getPointRadius: 20,
      getLineColor: [124, 40, 227],
      getLineWidth: 5,
      pickable: true
    }
  },
  {
    id: "bus",
    pathToFileLoad: "/data/bus_tram_stops.gpkg",
    settings: {
      opacity: 1,
      pointType: "circle",
      getFillColor: [0, 0, 255, 1],
      getPointRadius: 20,
      pickable: true
    }
  },
  {
    id: "mcd",
    pathToFileLoad: "/data/mcd_station.gpkg",
    settings: {
      opacity: 1,
      pointType: "circle",
      getFillColor: [255, 0, 0, 1],
      getPointRadius: 20,
      pickable: true
    }
  },
  {
    id: "mck",
    pathToFileLoad: "/data/mck_station.gpkg",
    settings: {
      opacity: 1,
      pointType: "circle",
      getFillColor: [255, 255, 0, 1],
      getPointRadius: 20,
      pickable: true
    }
  },
  {
    id: "metro",
    pathToFileLoad: "/data/metro_station.gpkg",
    settings: {
      opacity: 1,
      pointType: "circle",
      getFillColor: [0, 255, 0, 255],
      getPointRadius: 20,
      pickable: true
    }
  },
]

export const RASTER_OSM_STYLE: StyleSpecification = {
  version: 8,
  sources: {
    'osm-tiles': {
      type: 'raster',
      tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
      tileSize: 256,
      attribution: '© OpenStreetMap contributors'
    }
  },
  layers: [{ id: 'osm-layer', type: 'raster', source: 'osm-tiles' }]
};

export const INITIAL_VIEW_STATE: ViewState = {
  longitude: 37.6771,
  latitude: 55.7999,
  zoom: 12,
  pitch: 0,
  bearing: 0,
  padding: {top: 0, bottom: 0, left: 0, right: 0}
}