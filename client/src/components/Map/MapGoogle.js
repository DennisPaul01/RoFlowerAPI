import React from "react";

import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function MapGoogle() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAAee0e-2RKmzvIhRBASu7-bkoDKDwrF_I",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const location = useMemo(() => ({ lat: 45.784436, lng: 21.140654 }), []);

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
