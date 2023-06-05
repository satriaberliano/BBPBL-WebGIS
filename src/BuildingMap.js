import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
  margin: "40px auto",
};

const center = {
  lat: -5.528191349298218,
  lng: 105.24823239058476,
};

function BuildingMap() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyApiv-HP2d6BwTdpvyzTzQp3wplhWyaLDs">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
        {/* Child components, such as markers, info windows, etc. */}
        <>
          <Marker position={{ lat: -5.527627, lng: 105.248506 }} />
        </>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(BuildingMap);
