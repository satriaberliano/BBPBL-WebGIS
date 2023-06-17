import React from "react";
import building from "../assets/small-building.jpg";

function BuildingItem({ buildingTitle, buildingDesc, buildingImage }) {
  return (
    <div className="building-item">
      <img
        src={buildingImage ? buildingImage : building}
        loading="lazy"
        alt={buildingTitle}
      ></img>
      <div className="building-item_text">
        <p className="building-item_text-title">{buildingTitle}</p>
        <p className="building-item_text-desc">{buildingDesc}</p>
      </div>
    </div>
  );
}

export default BuildingItem;
