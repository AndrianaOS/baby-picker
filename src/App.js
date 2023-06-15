import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import BabyNames from "./BabyNames";
import Heading from "./Heading";
// import BabyNamesData from "./directory/babyNamesData.json";
// import SearchInput from "./SearchInput";
import AddNames from "./AddNames";

function App() {
  const [names, setNames] = useState([]);

  // function Search(searchVal) {
  //   const searchValue = searchVal.toLowerCase();
  //   const filteredNames = BabyNamesData.filter((eachName) => {
  //     return eachName.name.toLowerCase().includes(searchValue);
  //   });
  //   console.log(filteredNames);
  //   setNames(filteredNames, searchVal);
  // }

  function getAllNames() {
    fetch("http://localhost:4000/names")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setNames(data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getAllNames();
  }, []);

  return (
    <div className="App">
      <Heading />
      <AddNames setNames={setNames} />
      {/* <SearchInput search={Search} /> */}
      <BabyNames names={names} />
    </div>
  );
}

export default App;
