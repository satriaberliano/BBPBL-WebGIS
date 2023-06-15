import React, { useEffect, useState } from "react";
import FacilityList from "../components/FacilityList";
import FacilityMap from "../FacilityMap";
import { AiOutlineSearch } from "react-icons/ai";
import { BASE_URL_FACILITIES } from "../api";

function FacilityPage() {
  const [facilities, setFacilities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  async function fetchFacilities() {
    const response = await fetch(BASE_URL_FACILITIES);
    const responseJson = await response.json();
    return setFacilities(responseJson);
  }

  useEffect(() => {
    fetchFacilities();
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
      <FacilityList facilities={facilities} searchTerm={searchTerm} />
    </div>
  );
}

export default FacilityPage;
