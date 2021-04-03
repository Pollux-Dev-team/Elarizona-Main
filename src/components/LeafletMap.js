import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./leafletmap.css";

const LeafletMap = ({ position, zoom, markerText }) => (
  <MapContainer center={position} zoom={zoom}>
    <TileLayer
      url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    {markerText !== "" && (
      <Marker position={position}>
        <Popup>{markerText}</Popup>
      </Marker>
    )}
  </MapContainer>
);

export default LeafletMap;
