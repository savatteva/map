import { AddObjectToMap, gpkgQuery, useSavedData } from '@/features';
import { Map, type MapRef, NavigationControl } from 'react-map-gl/maplibre';
import { GeoJsonLayer } from '@deck.gl/layers';

import styles from "./map.module.css"
import { useEffect, useMemo, useRef, useState } from 'react';

import { useQueries } from '@tanstack/react-query';
import { useLayersData } from '@/entities/mapdata/model/store';
import { Button, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { INITIAL_VIEW_STATE, LAYER_CONFIGS, RASTER_OSM_STYLE } from './model/constants';
import type { TLayerId } from './model/types';
import { DeckGLOverlay } from './ui/overlaymap';
import type { Feature } from 'geojson';
import { StatusContent } from '@/shared/ui';

export const MapComp = () => {
  const mapRef = useRef<MapRef>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const { setLayerData, layersData, setCurrentSelectedElement } = useLayersData((state) => state);
  const { newFeature, addFeature, features } = useSavedData((state) => state)

  const results = useQueries({
    queries: LAYER_CONFIGS.map((config) => ({
      queryKey: ['geojson', config.id],
      queryFn: () => gpkgQuery(config.pathToFileLoad),
    })),
  });

  const isLoading = results.some(result => result.isLoading);
  const isError = results.some(result =>result.isError);

  useEffect(() => {
    results.forEach((res, index) => {
      if (res.isSuccess) {
        setLayerData(LAYER_CONFIGS[index].id, res.data)
      }
    })
  }, [JSON.stringify(results)])

  const layer = useMemo(() => {
    const arrayOfGeoJson = LAYER_CONFIGS.map((config: any) => {
      const id = config.id as TLayerId
      const data = layersData[id] 

      if (!data) return null

      return new GeoJsonLayer({
        id: id,
        data: data,
        pickable: true,
        ...config.settings,
        onClick: (info) => {
          setCurrentSelectedElement(info)
          mapRef.current?.flyTo({
            center: info.coordinate as [number, number],
            zoom: 15,
            duration: 1000,
          })
        },
        pointType: "icon+circle",
        getIcon: (feature: Feature) => {
          const url = feature?.properties?.icon
          if (url) {
            return {
              url: url,
              width: 25,
              height: 25,
              iconSizeUnits: "pixels",
            }
          }

          return null
        },
        getPointRadius: f => f.properties.icon ? 0 : 5,
        getIconSize: 20,
      })
    })

    return [...arrayOfGeoJson, new GeoJsonLayer({
      id: "customUserLayer",
      data: features,
      opacity: 1,
      pointRadiusMinPixels: 10,
      pointType: "circle",
      onClick: (info) => {
        setCurrentSelectedElement(info)
        mapRef.current?.flyTo({
          center: info.coordinate as [number, number],
          zoom: 15,
          duration: 1000,
        })
      },

      pointRadiusUnits: 'pixels',

      pickable: true,
      visible: true,

      getFillColor: [0, 255, 0, 255],
      getPointRadius: 5,
    })]
  }, [layersData, features])

  if (isLoading) return <StatusContent text={"Загружаю все доступные слои..."}/>
  if (isError) return <StatusContent text={"Что-то пошло не так при загрузке страницы :с"}/>

  return (
    <section className={styles.container}>
      <div className={styles.logoCont}>
        <img src='icons/logo.png' className={styles.logo} />
        <p className={styles.logoText}>Безопасный транспорт</p>
      </div>
      <div className={styles.addBtn}>
        <Button icon={<PlusOutlined />} onClick={() => setIsModalOpen(true)} />
      </div>
      <Map ref={mapRef} mapStyle={RASTER_OSM_STYLE} initialViewState={INITIAL_VIEW_STATE}>
        <DeckGLOverlay layers={layer} />
        <NavigationControl position="bottom-right" />
      </Map>
      <Modal 
        title="Добавить объект"
        open={isModalOpen}
        onOk={() => {
          addFeature(newFeature)
          setIsModalOpen(false)
        }}
        onCancel={() => setIsModalOpen(false)}
        okText="Добавить" 
        cancelText="Отменить"
        okButtonProps={{ style: { backgroundColor: "#7C28E3" } }}>
          <AddObjectToMap />
      </Modal>
    </section>
  );
};