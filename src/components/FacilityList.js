import React from "react";
import FacilityItem from "./FacilityItem";

function FacilityList({ facilities, searchTerm }) {
  return (
    <div className="facility-list">
      {facilities
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
        .map(({ title, desc, image }, index) => {
          return (
            <FacilityItem
              key={index}
              facilityTitle={title}
              facilityDesc={desc}
              facilityImage={image}
            />
          );
        })}
    </div>
  );
}

export default FacilityList;
