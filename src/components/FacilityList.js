import React from "react";
import FacilityItem from "./FacilityItem";

function FacilityList() {
  let items = [
    "Fasilitas 1",
    "Fasilitas 2",
    "Fasilitas 3",
    "Fasilitas 4",
    "Fasilitas 5",
    "Fasilitas 6",
  ];

  let facilityList = items.map((facilityTitle, index) => {
    return <FacilityItem key={index} facilityTitle={facilityTitle} />;
  });

  return <div className="facility-list">{facilityList}</div>;
}

export default FacilityList;
