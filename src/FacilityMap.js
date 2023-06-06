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
  { lat: -5.528345843970753, lng: 105.24802813041269 }, //{'Lab Kualitas Air ')
  { lat: -5.52812064449724, lng: 105.24802386151094 }, //{'Lab Keskanling')
  { lat: -5.528251624644291, lng: 105.24851550680253 }, //{'POKJA')
  { lat: -5.528451319195653, lng: 105.25001287207624 }, //{'Kantor')
  { lat: -5.527949248692946, lng: 105.24767168412355 }, //{'Green House Rumput Laut')
  { lat: -5.527731071543788, lng: 105.2464806648156 }, //Kantor Satpam
  { lat: -5.5279500217625355, lng: 105.24767341070263 }, //Guesst House
  { lat: -5.527928663883119, lng: 105.24798454695593 }, //Pelayanan Publik
  { lat: -5.5283503236637035, lng: 105.24961096421228 }, //Masjid
  { lat: -5.528582504501877, lng: 105.24802287503127 }, //Taman dan Lapangan voli
  { lat: -5.528270296550457, lng: 105.24881670807628 }, //Auditorium
  { lat: -5.528259705247529, lng: 105.24863523944583 }, //Koperasi
  { lat: -5.52851843092977, lng: 105.24821599408506 }, //Ruang pelatihan
  { lat: -5.528757502089303, lng: 105.2481708662446 }, //Asrama kerapu ( Asrama Perempuan )
  { lat: -5.528165538616601, lng: 105.24992771983842 }, //Asrama Kakap ( Asrama Laki-laki )
  { lat: -5.5279187268742715, lng: 105.24896401655212 }, //Perpustakaan
  { lat: -5.527822772834115, lng: 105.24848966783787 }, //Lapangan upacara
  { lat: -5.528564717437792, lng: 105.24965352833938 }, //Gedung genset
  { lat: -5.527662948534778, lng: 105.24915098787078 }, //Pakan alami
];

function FacilityMap() {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
        {/* Child components, such as markers, info windows, etc. */}
        <>
          {markers.map(({ lat, lng }) => {
            return <Marker position={{ lat, lng }} />;
          })}
        </>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(FacilityMap);
