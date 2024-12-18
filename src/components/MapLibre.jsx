import React from 'react';
import { Map, Source, Layer } from 'react-map-gl';

const MapLibre = () => {
  const mapStyle = {
    version: 8,
    sources: {
      'open-street-map': {
        type: 'raster',
        tiles: ['https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'],
        tileSize: 256,
      },
    },
    layers: [
      {
        id: 'osm',
        type: 'raster',
        source: 'open-street-map',
        minzoom: 0,
        maxzoom: 22,
      },
    ],
  };

  return (
    <Map
      initialViewState={{
        longitude: 106.816666,
        latitude: -6.200001,
        zoom: 13,
      }}
      style={{ width: '100%', height: '500px' }}
      mapStyle={mapStyle}
    />
  );
};

export default MapLibre;

// npm install maplibre-gl react-map-gl
/*MapLibre GL:
 * Ini adalah fork dari Mapbox GL JS
 * yang bersifat open-source dan gratis.
 * Anda dapat menggunakan MapLibre
 * untuk menampilkan peta
 * yang dapat disesuaikan. */

