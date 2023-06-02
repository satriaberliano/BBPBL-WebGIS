import React from "react";
import building from "../assets/small-building.jpg";

function FacilityItem({ facilityTitle }) {
  return (
    <div className="facility-item">
      <img src={building} loading="lazy" alt="dummy"></img>
      <div className="facility-item_text">
        <p className="facility-item_text-title">{facilityTitle}</p>
        <p className="facility-item_text-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          porta metus nec ex tempus, sed elementum nulla feugiat.
        </p>
      </div>
    </div>
  );
}

export default FacilityItem;
