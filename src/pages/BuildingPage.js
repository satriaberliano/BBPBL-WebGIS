import React, { useEffect, useState } from "react";
import BuildingList from "../components/BuildingList";
import BuildingMap from "../BuildingMap";
import { AiOutlineSearch } from "react-icons/ai";
import { BASE_URL_BUILDINGS } from "../api";

function BuildingPage() {
  const [buildings, setBuildings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  async function fetchBuildings() {
    const response = await fetch(BASE_URL_BUILDINGS);
    const responseJson = await response.json();
    return setBuildings(responseJson);
  }

  useEffect(() => {
    fetchBuildings();
  }, []);

  return (
    <div className="building-container">
      <h3>Gedung</h3>
      <BuildingMap />
      <div className="building-search">
        <span className="building-search_logo">
          <AiOutlineSearch />
        </span>
        <input
          id="building-input"
          className="building-input_search"
          placeholder="Cari gedung"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        ></input>
      </div>
      <BuildingList buildings={buildings} searchTerm={searchTerm} />
    </div>
  );
}

export default BuildingPage;
