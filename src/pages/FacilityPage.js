import React, { useEffect, useState } from "react";
import FacilityList from "../components/FacilityList";
// import FacilitySearch from "../components/FacilitySearch";
import FacilityMap from "../FacilityMap";
import { AiOutlineSearch } from "react-icons/ai";

function FacilityPage() {
  const [facilities, setFacilities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const items = [
      "Lab Kualitas Air",
      "Lab Keskanling",
      "POKJA",
      "Kantor",
      "Green House Rumput Laut",
      "Fasilitas 6",
    ];

    setFacilities(items);
  }, []);

  return (
    <div className="facility-container">
      <h3>Fasilitas</h3>
      <FacilityMap />
      <div className="facility-search">
        <span className="facility-search_logo">
          <AiOutlineSearch />
        </span>
        <input
          id="facility-input"
          className="facility-input_search"
          placeholder="Cari fasilitas"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        ></input>
      </div>
      {/* <FacilitySearch setSearchTerm={setSearchTerm} /> */}
      <FacilityList facilities={facilities} searchTerm={searchTerm} />
    </div>
  );
}

export default FacilityPage;
