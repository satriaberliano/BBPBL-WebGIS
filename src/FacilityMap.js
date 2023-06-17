import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { Oval } from "react-loader-spinner";
import { BASE_URL_FACILITIES } from "./api";

const containerStyle = {
  width: "100%",
  height: "400px",
  margin: "40px auto",
};

const center = {
  lat: -5.528191349298218,
  lng: 105.24823239058476,
};

const options = {
  mapTypeControl: false,
};

function FacilityMap() {
  const [selectedMarker, setSelectedMarker] = useState("");
  const [markers, setMarkers] = useState([]);

  async function fetchMarkerFacility() {
    const response = await fetch(BASE_URL_FACILITIES);
    const responseJson = await response.json();
    return setMarkers(responseJson);
  }

  useEffect(() => {
    fetchMarkerFacility();
  }, []);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
  });

  if (!isLoaded) {
    return (
      <>
        <Oval
          height={80}
          width={80}
          color="#19A7CE"
          wrapperStyle={{
            justifyContent: "center",
            alignItems: "center",
            margin: "50px",
          }}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="white"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={17}
      options={options}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <>
        {markers.map((marker) => {
          return (
            <Marker
              position={marker.position}
              key={marker.title}
              onClick={() => {
                setSelectedMarker(marker);
              }}
            />
          );
        })}
        {selectedMarker && (
          <InfoWindow
            position={selectedMarker.position}
            key={selectedMarker.title}
          >
            <>
              <p>{selectedMarker.title}</p>
            </>
          </InfoWindow>
        )}
      </>
    </GoogleMap>
  );
}

export default React.memo(FacilityMap);
