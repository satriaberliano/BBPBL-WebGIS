import React, { useEffect, useState } from "react";
import BuildingList from "../components/BuildingList";
// import BuildingSearch from "../components/BuildingSearch";
import BuildingMap from "../BuildingMap";
import { AiOutlineSearch } from "react-icons/ai";

function BuildingPage() {
  const [buildings, setBuildings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const items = [
      "Gedung 1",
      "Gedung 2",
      "Gedung 3",
      "Gedung 4",
      "Gedung 5",
      "Gedung 6",
    ];

    setBuildings(items);
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
