import React from "react";

import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

let latitudine, longitudine;

export default function MapGoogle(props) {
  console.log(props);
  latitudine = props.coordonate[0];
  longitudine = props.coordonate[1];
  console.log(latitudine, longitudine);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAAee0e-2RKmzvIhRBASu7-bkoDKDwrF_I",
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
