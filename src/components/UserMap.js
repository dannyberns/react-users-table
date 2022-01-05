import React from "react";
import { Icon } from "leaflet";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/leaflet.css";

const UserMap = ({ coordinates, city, street }) => {
  return (
    <MapContainer
      key={JSON.stringify([coordinates.latitude, coordinates.longitude])}
      center={[coordinates.latitude, coordinates.longitude]}
      zoom={9}
      className="height-50"
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        position={[coordinates.latitude, coordinates.longitude]}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41]
            // iconAnchor: [12, 41]
          })
        }
      >
        <Tooltip permanent direction="top">
          {street.number} {street.name}, {city}
        </Tooltip>
      </Marker>
    </MapContainer>
  );
};

export default UserMap;
