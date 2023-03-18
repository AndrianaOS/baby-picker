import React from "react";
// import BabyNamesData from "./directory/babyNamesData.json";

function BabyNames(info) {
  //   console.log(info);
  return (
    <section className="nameContainer">
      {info.names
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map((eachName) => (
          <p
            key={eachName.id}
            className={eachName.sex === "m" ? "boyNames" : "girlNames"}
          >
            {eachName.name}
          </p>
        ))}
    </section>
  );
}

export default BabyNames;
