import React, { useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { Oval } from "react-loader-spinner";

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
  zoomControl: false,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
};

const markers = [
  {
    label: "Lab Lobster ",
    position: {
      lat: -5.527633627498177,
      lng: 105.24852240003172,
    },
  },
  {
    label: "Modul 3",
    position: {
      lat: -5.527485104517776,
      lng: 105.24876520952364,
    },
  },
  {
    label: "Pabrik Pakan Buatan",
    position: {
      lat: -5.527199578801762,
      lng: 105.24850519894598,
    },
  },
  {
    label: "Lab Kepiting",
    position: {
      lat: -5.527030795059842,
      lng: 105.24861683392234,
    },
  },
  {
    label: "Bangsal Pendederan & Penggelondongan",
    position: {
      lat: -5.52702798199711,
      lng: 105.24875955711988,
    },
  },
  {
    label: "Divisi Budidaya",
    position: {
      lat: -5.527172807173355,
      lng: 105.24868448319364,
    },
  },
  {
    label: "RAS Ikan Hias",
    position: {
      lat: -5.527065958342814,
      lng: 105.2489842401734,
    },
  },
  {
    label: "Lab Basah Budidaya",
    position: {
      lat: -5.5269573503239915,
      lng: 105.24890311103296,
    },
  },
  {
    label: "Lab Ikan Hias",
    position: {
      lat: -5.527094792233295,
      lng: 105.2491156585632,
    },
  },
  {
    label: "Lab Kuda Laut",
    position: {
      lat: -5.527156856001333,
      lng: 105.24930802980529,
    },
  },
  {
    label: "Gudang",
    position: {
      lat: -5.527343018027615,
      lng: 105.24914122056859,
    },
  },
  {
    label: "Kantor Tim Laut",
    position: {
      lat: -5.527297772107229,
      lng: 105.24934036671834,
    },
  },
  {
    label: "Bangsal Penggelondongan",
    position: {
      lat: -5.528118903470997,
      lng: 105.24970623425683,
    },
  },
  {
    label: "Pakan Alami",
    position: {
      lat: -5.527662948534778,
      lng: 105.24915098787078,
    },
  },
  {
    label: "Modul 2",
    position: {
      lat: -5.527532484477189,
      lng: 105.24935619318669,
    },
  },
  {
    label: "Gedung Genset",
    position: {
      lat: -5.528564717437792,
      lng: 105.24965352833938,
    },
  },
  {
    label: "Gedung Filter",
    position: {
      lat: -5.5277032283280265,
      lng: 105.24984201818397,
    },
  },
  {
    label: "Rumah Pompa",
    position: {
      lat: -5.527663025472497,
      lng: 105.24991318271344,
    },
  },
  {
    label: "RAS",
    position: {
      lat: -5.528111966336554,
      lng: 105.24957774278408,
    },
  },
  {
    label: "Modul 1",
    position: {
      lat: -5.528451319195653,
      lng: 105.25001287207624,
    },
  },
  {
    label: "Gudang Pakan",
    position: {
      lat: -5.528614950154468,
      lng: 105.24858451062317,
    },
  },
  {
    label: "Gudang Obat",
    position: {
      lat: -5.528500225957237,
      lng: 105.24854324457321,
    },
  },
];

function BuildingMap() {
  const [selectedMarker, setSelectedMarker] = useState("");

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
              key={marker.label}
              onClick={() => {
                setSelectedMarker(marker);
              }}
            />
          );
        })}
        {selectedMarker && (
          <InfoWindow
            position={selectedMarker.position}
            key={selectedMarker.label}
          >
            <>
              <p>{selectedMarker.label}</p>
            </>
          </InfoWindow>
        )}
      </>
    </GoogleMap>
  );
}

export default React.memo(BuildingMap);
