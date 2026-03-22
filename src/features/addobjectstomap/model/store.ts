import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ISavedData } from './types';

export const useSavedData = create<ISavedData>()(
  persist((set) => ({
    features: [],
    newFeature: { id: crypto.randomUUID(), type: "Feature", properties: {}, geometry: { type: "Point", coordinates: [] } }, 

    editFeature: (value: number | string, index: number, type: string) => set((state) => {
      switch (type) {
        case "coordinates": 
          if (index >= state.newFeature?.geometry?.coordinates?.length) {
            return {
              ...state, newFeature: {...state.newFeature, geometry: {
                ...state.newFeature.geometry,
                coordinates: [...state.newFeature?.geometry?.coordinates, Number(value)]
              }
            }}
          }
    
          return {
            ...state,
            newFeature: {...state.newFeature, geometry: {
              ...state.newFeature.geometry,
              coordinates: state.newFeature?.geometry?.coordinates.map((item: number, i: number) => i === index ? Number(value) : item)
            } }
          };
        
        case "description": 
          return {
            ...state,
            newFeature: {...state.newFeature, properties: {
              ...state.newFeature.properties, description: value
            }}
          };
        case "name": 
          return {
            ...state,
            newFeature: {...state.newFeature, properties: {
              name: value
            }}
          };

        default:
          return state
      }
    }),

    addFeature: (feature) => set((state) => ({
      features: [...state.features, feature]
    })),

    clearFeature: () => set((state) => ({
      ...state, 
      newFeature: { id: crypto.randomUUID(), type: "Feature", geometry: { type: "Point", coordinates: [] }, properties: {} }
    }))
  }), {
    name: "features-local-storage",
  })
)