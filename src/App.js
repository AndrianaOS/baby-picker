import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import BabyNames from "./BabyNames";
import Heading from "./Heading";
import BabyNamesData from "./directory/babyNamesData.json";
import SearchInput from "./SearchInput";

function App() {
  const [names, setNames] = useState(BabyNamesData);

  function Search(searchVal) {
    const searchValue = searchVal.toLowerCase();
    const filteredNames = BabyNamesData.filter((eachName) => {
      return eachName.name.toLowerCase().includes(searchValue);
    });
    console.log(filteredNames);
    setNames(filteredNames, searchVal);
  }

  return (
    <div className="App">
      <Heading />
      <SearchInput search={Search} />
      <BabyNames names={names} />
    </div>
  );
}

export default App;
