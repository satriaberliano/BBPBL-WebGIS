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
  zIndex: "0",
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
    label: "Lab Kualitas Air",
    position: {
      lat: -5.528345843970753,
      lng: 105.24802813041269,
    },
  },
  {
    label: "Lab Keskanling",
    position: {
      lat: -5.52812064449724,
      lng: 105.24802386151094,
    },
  },
  {
    label: "POKJA",
    position: {
      lat: -5.528251624644291,
      lng: 105.24851550680253,
    },
  },
  {
    label: "Kantor",
    position: {
      lat: -5.528451319195653,
      lng: 105.25001287207624,
    },
  },
  {
    label: "Green House Rumput Laut",
    position: {
      lat: -5.527949248692946,
      lng: 105.24767168412355,
    },
  },
  {
    label: "Kantor Satpam",
    position: {
      lat: -5.527731071543788,
      lng: 105.2464806648156,
    },
  },
  {
    label: "Guest House",
    position: {
      lat: -5.5279500217625355,
      lng: 105.24767341070263,
    },
  },
  {
    label: "Pelayanan Publik",
    position: {
      lat: -5.527928663883119,
      lng: 105.24798454695593,
    },
  },
  {
    label: "Masjid",
    position: {
      lat: -5.5283503236637035,
      lng: 105.24961096421228,
    },
  },
  {
    label: "Taman dan Lapangan Voli",
    position: {
      lat: -5.528582504501877,
      lng: 105.24802287503127,
    },
  },
  {
    label: "Auditorium",
    position: {
      lat: -5.528270296550457,
      lng: 105.24881670807628,
    },
  },
  {
    label: "Koperasi",
    position: {
      lat: -5.528259705247529,
      lng: 105.24863523944583,
    },
  },
  {
    label: "Ruang Pelatihan",
    position: {
      lat: -5.52851843092977,
      lng: 105.24821599408506,
    },
  },
  {
    label: "Asrama Kerapu (Asrama Betina)",
    position: {
      lat: -5.528757502089303,
      lng: 105.2481708662446,
    },
  },
  {
    label: "Asrama Kakap (Asrama Jantan)",
    position: {
      lat: -5.528165538616601,
      lng: 105.24992771983842,
    },
  },
  {
    label: "Perpustakaan",
    position: {
      lat: -5.5279187268742715,
      lng: 105.24896401655212,
    },
  },
  {
    label: "Lapangan Upacara",
    position: {
      lat: -5.527822772834115,
      lng: 105.24848966783787,
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
    label: "Pakan Alami",
    position: {
      lat: -5.527662948534778,
      lng: 105.24915098787078,
    },
  },
];

function FacilityMap() {
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

export default React.memo(FacilityMap);
