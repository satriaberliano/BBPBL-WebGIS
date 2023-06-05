import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function BuildingSearch() {
  return (
    <>
      <div className="building-search">
        <span className="building-search_logo">
          <AiOutlineSearch />
        </span>
        <input
          type="text"
          id="building-input"
          className="building-input_search"
          placeholder="Cari gedung"
        ></input>
      </div>
    </>
  );
}

export default BuildingSearch;
