import { create } from 'zustand';
import type { ILayersStore } from './types';

/** Стор для работы со слоями, их загрузка и выбор */
export const useLayersData = create<ILayersStore>((set) => ({
  layersData: {
    districts: [], 
    streets: [], 
    bus: [], 
    mcd: [], 
    mck: [], 
    metro: [], 
    customUserLayer: []
  }, 
  currentSelectedElement: null,

  setLayerData: (id, data) => set((state) => ({
    layersData: {...state.layersData, [id]: data}
  })),
  setCurrentSelectedElement: (element) => set(() => ({
    currentSelectedElement: element,
  }))
}))