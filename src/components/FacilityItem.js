import React from "react";
import building from "../assets/small-building.jpg";

function FacilityItem({ facilityTitle, facilityDesc, facilityImage }) {
  return (
    <div className="facility-item">
      <img
        src={facilityImage ? facilityImage : building}
        loading="lazy"
        alt={facilityTitle}
      ></img>
      <div className="facility-item_text">
        <p className="facility-item_text-title">{facilityTitle}</p>
        <p className="facility-item_text-desc">{facilityDesc}</p>
      </div>
    </div>
  );
}

export default FacilityItem;
