import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
  margin: "40px auto",
  zIndex: "0",
};

const center = {
  lat: -5.528191349298218,
  lng: 105.24823239058476,
};

const markers = [
  { lat: -5.528137, lng: 105.248994 },
  { lat: -5.528468, lng: 105.249109 },
];

function FacilityMap() {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
        {/* Child components, such as markers, info windows, etc. */}
        <>
          <Marker position={{ lat: -5.528137, lng: 105.248994 }} />
        </>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(FacilityMap);
