import React from "react";
import BuildingItem from "./BuildingItem";

function BuildingList() {
  let items = [
    "Gedung 1",
    "Gedung 2",
    "Gedung 3",
    "Gedung 4",
    "Gedung 5",
    "Gedung 6",
  ];

  let buildingList = items.map((buildingTitle, index) => {
    return <BuildingItem key={index} buildingTitle={buildingTitle} />;
  });

  return <div className="building-list">{buildingList}</div>;
}

export default BuildingList;
