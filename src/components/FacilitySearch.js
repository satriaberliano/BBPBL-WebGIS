import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function FacilitySearch({ setSearchTerm }) {
  return (
    <>
      <div className="facility-search">
        <span className="facility-search_logo">
          <AiOutlineSearch />
        </span>
        <input
          type="text"
          id="facility-input"
          className="facility-input_search"
          placeholder="Cari fasilitas"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        ></input>
      </div>
    </>
  );
}

export default FacilitySearch;
