import React from "react";
import building from "../assets/small-building.jpg";
import { AiFillCloseCircle } from "react-icons/ai";

function BuildingItem({
  buildingTitle,
  buildingDesc,
  buildingImage,
  buildingStatus,
}) {
  return (
    <div className="building-item">
      <img
        src={buildingImage ? buildingImage : building}
        loading="lazy"
        alt={buildingTitle}
      ></img>
      <div className="building-item_text">
        <p className="building-item_text-title">{buildingTitle}</p>
        {buildingStatus ? null : (
          <p className="building-item-text-status false_status">
            <AiFillCloseCircle /> Restricted Area
          </p>
        )}
        <p className="building-item_text-desc">{buildingDesc}</p>
      </div>
    </div>
  );
}

export default BuildingItem;
