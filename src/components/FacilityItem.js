import React from "react";
import building from "../assets/small-building.jpg";
import { AiFillCloseCircle } from "react-icons/ai";

function FacilityItem({
  facilityTitle,
  facilityDesc,
  facilityImage,
  facilityStatus,
}) {
  return (
    <div className="facility-item">
      <img
        src={facilityImage ? facilityImage : building}
        loading="lazy"
        alt={facilityTitle}
      ></img>
      <div className="facility-item_text">
        <p className="facility-item_text-title">{facilityTitle}</p>
        {facilityStatus ? null : (
          <p className="facility-item-text-status false_status">
            <AiFillCloseCircle /> Restricted Area
          </p>
        )}
        <p className="facility-item_text-desc">{facilityDesc}</p>
      </div>
    </div>
  );
}

export default FacilityItem;
