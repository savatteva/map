import { load } from '@loaders.gl/core';
import { GeoPackageLoader } from '@loaders.gl/geopackage';
import proj4 from 'proj4';
import type { TInCoords } from './model/types';

const fromProjection = 'EPSG:3857'; 
const toProjection = 'EPSG:4326';

export const gpkgQuery = async (url: string) => {
  try {
    const result: any = await load(url, GeoPackageLoader);

    const transformedFeatures = result.tables[0]?.table?.features.map((feature: any) => {
      if (!feature.geometry) return feature;

      const transform = (coords: TInCoords): TInCoords => {
        if (typeof coords[0] === 'number') {
            return proj4(fromProjection, toProjection, coords as number[]);
        }
    
        return (coords as TInCoords[]).map(transform);
    };

      return {
        ...feature,
        geometry: {
          ...feature.geometry,
          coordinates: transform(feature.geometry.coordinates)
        }
      };
    });

    return transformedFeatures;
    
  } catch (error) {
    console.error('error', error);
    throw error;
  }
};