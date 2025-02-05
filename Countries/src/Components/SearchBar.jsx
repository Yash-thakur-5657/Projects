import React from "react";
import { useState } from "react";

export default function SearchBar({setValue}) {
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        onChange={(e) => {
          setValue(e.target.value.toLowerCase())
        }}
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
}
