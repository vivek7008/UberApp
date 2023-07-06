import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const DriverControlPanel = () => {
  const drivers = [
    { id: 1, name: "Driver 1", latitude: 37.7749, longitude: -122.4194 },
    { id: 2, name: "Driver 2", latitude: 37.7748, longitude: -122.4195 },
    { id: 3, name: "Driver 3", latitude: 37.7747, longitude: -122.4196 },
    { id: 4, name: "Driver 4", latitude: 37.7746, longitude: -122.4197 },
    { id: 5, name: "Driver 5", latitude: 37.7745, longitude: -122.4198 }
  ];

  return (
    <div>
      <h1>Driver Control Panel</h1>
      <div className="map-container">
        {/* Render the map here */}
        <Map drivers={drivers} />
      </div>
      <div className="driver-list">
        {/* Render the list of drivers */}
        {drivers.map((driver) => (
          <div key={driver.id} className="driver-item">
            <h3>{driver.name}</h3>
            <p>Latitude: {driver.latitude}</p>
            <p>Longitude: {driver.longitude}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Map = ({ drivers }) => {
  return (
    <MapContainer
      center={[37.7749, -122.4194]}
      zoom={12}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Render the markers for each driver */}
      {drivers.map((driver) => (
        <Marker key={driver.id} position={[driver.latitude, driver.longitude]}>
          <Popup>
            <h3>{driver.name}</h3>
            <p>Latitude: {driver.latitude}</p>
            <p>Longitude: {driver.longitude}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default DriverControlPanel;
