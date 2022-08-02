import React from 'react'
import { Map, TitleLayer }  from 'leaflet';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css";


const MapViewLeaflet = () => {
  return (
    <Map center={
            {lat:'51.32437',lng:'13.41053'}}
            zoom={13}
            >

    </Map>
  )
}



export  default MapViewLeaflet;