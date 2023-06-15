import React from "react";
import building from "../assets/small-building.jpg";

function BuildingItem({ buildingTitle, buildingDesc }) {
  return (
    <div className="building-item">
      <img src={building} loading="lazy" alt="dummy"></img>
      <div className="building-item_text">
        <p className="building-item_text-title">{buildingTitle}</p>
        <p className="building-item_text-desc">{buildingDesc}</p>
      </div>
    </div>
  );
}

export default BuildingItem;
