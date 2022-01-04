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
      zoom={6}
      className="height-50"
    >
      <TileLayer
        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=gll3jw7H7Vt1k5H0SdXa"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
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
