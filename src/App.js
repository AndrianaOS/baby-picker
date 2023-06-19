import React, { useState, useEffect } from "react";
import "./App.css";
import BabyNames from "./BabyNames";
import Heading from "./Heading";
import SearchInput from "./SearchInput";
import AddNames from "./AddNames";

function App() {
  const [allNames, setAllNames] = useState([]);
  const [searchResults, setSearchResults] = useState(allNames);
  // const [handleError, setHandleError] = useState(null);

  function Search(searchVal) {
    const searchValue = searchVal.toLowerCase();
    const filteredNames = allNames.filter((eachName) => {
      return eachName.name.toLowerCase().includes(searchValue);
    });
    console.log(filteredNames);
    setSearchResults(filteredNames, searchVal);
  }

  function getAllNames() {
    fetch("http://localhost:4000/names")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setAllNames(data);
        setSearchResults(data);
        // setHandleError(data.message);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getAllNames();
  }, []);

  return (
    <div className="App">
      <Heading />
      <AddNames setNames={setAllNames} getAllNames={getAllNames} />
      <SearchInput search={Search} />
      <BabyNames names={searchResults} />
    </div>
  );
}

export default App;
