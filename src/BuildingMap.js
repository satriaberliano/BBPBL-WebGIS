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

const markers = [
  { lat: -5.527633627498177, lng: 105.24852240003172 }, //'Lab Lobster ')
  { lat: -5.527485104517776, lng: 105.24876520952364 }, //{'Modul 3')
  { lat: -5.527199578801762, lng: 105.24850519894598 }, //{'Pabrik Pakan Buatan')
  { lat: -5.527030795059842, lng: 105.24861683392234 }, //{'Lab Kepiting')
  { lat: -5.52702798199711, lng: 105.24875955711988 }, //{'Bangsal Pendederan & Penggelondongan')
  { lat: -5.527172807173355, lng: 105.24868448319364 }, //{'Divisi Budidaya')
  { lat: -5.527065958342814, lng: 105.2489842401734 }, //{'RAS Ikan Hias')
  { lat: -5.5269573503239915, lng: 105.24890311103296 }, //{'Lab Basah Budidaya')
  { lat: -5.527094792233295, lng: 105.2491156585632 }, //{'Lab Ikan Hias')
  { lat: -5.527156856001333, lng: 105.24930802980529 }, //{'Lab Kuda Laut')
  { lat: -5.527343018027615, lng: 105.24914122056859 }, //{'Gudang')
  { lat: -5.527297772107229, lng: 105.24934036671834 }, //{'Kantor Tim Laut')
  { lat: -5.528118903470997, lng: 105.24970623425683 }, //{'BangsalPenggelondongan')
  { lat: -5.527662948534778, lng: 105.24915098787078 }, //{'Pakan Alami')
  { lat: -5.527532484477189, lng: 105.24935619318669 }, //{'Modul 2')
  { lat: -5.528564717437792, lng: 105.24965352833938 }, //{'Gedung Genset')
  { lat: -5.5277032283280265, lng: 105.24984201818397 }, //{'Gedung Filter')
  { lat: -5.527663025472497, lng: 105.24991318271344 }, //{'Rumah Pompa')
  { lat: -5.528111966336554, lng: 105.24957774278408 }, //{'RAS')
  { lat: -5.528451319195653, lng: 105.25001287207624 }, //{'Modul 1')
  { lat: -5.528614950154468, lng: 105.24858451062317 }, //{'Gudang Pakan')
  { lat: -5.528500225957237, lng: 105.24854324457321 }, //{'Gudang Obat')
];

function BuildingMap() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyApiv-HP2d6BwTdpvyzTzQp3wplhWyaLDs">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
        {/* Child components, such as markers, info windows, etc. */}
        <>
          {" "}
          {markers.map(({ lat, lng }) => {
            return <Marker position={{ lat, lng }} />;
          })}
        </>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(BuildingMap);
