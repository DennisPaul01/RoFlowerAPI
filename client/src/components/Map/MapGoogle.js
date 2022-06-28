import React from "react";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

let latitudine, longitudine;

export default function MapGoogle(props) {
  latitudine = props.coordonate[0];
  longitudine = props.coordonate[1];

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const location = { lat: latitudine, lng: longitudine };

  return (
    <GoogleMap
      zoom={12}
      center={location}
      mapContainerClassName="map-container"
    >
      <Marker position={location} />
    </GoogleMap>
  );
}
