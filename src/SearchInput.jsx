import React, { useState } from "react";

function SearchInput(props) {
  const [searchInput, setSearchInput] = useState("");

  function handleSearchInput(event) {
    console.log(event);
    setSearchInput(event.target.value);
    props.search(event.target.value);
  }
  return (
    <input
      placeholder="Type a name"
      className="searchInput"
      value={searchInput}
      onChange={handleSearchInput}
    />
  );
}

export default SearchInput;