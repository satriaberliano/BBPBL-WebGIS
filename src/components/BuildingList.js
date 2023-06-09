import React from "react";
import BuildingItem from "./BuildingItem";

function BuildingList({ buildings, searchTerm }) {
  return (
    <div className="building-list">
      {buildings
        .filter((value) => {
          if (searchTerm === "") {
            return value;
          } else if (
            value.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return value;
          }
          return null;
        })
        .map(({ title, desc, image, status }, index) => {
          return (
            <BuildingItem
              key={index}
              buildingTitle={title}
              buildingDesc={desc}
              buildingImage={image}
              buildingStatus={status}
            />
          );
        })}
    </div>
  );
}

export default BuildingList;
