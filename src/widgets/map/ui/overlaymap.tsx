import { useControl } from 'react-map-gl/maplibre';
import { MapboxOverlay, type MapboxOverlayProps } from '@deck.gl/mapbox';

/** создание кастомного оверлея для отображения слов на карте */
export const DeckGLOverlay = (props: MapboxOverlayProps) => {
  const overlay = useControl(() => new MapboxOverlay(props)) 
    
  overlay.setProps(props);

  return null
};