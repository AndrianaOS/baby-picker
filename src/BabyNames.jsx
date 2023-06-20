import React from "react";

function BabyNames(props) {
  return (
    <section className="nameContainer">
      {props.names
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map((eachName) => {
          let className = "";
          if (eachName.sex === "m") {
            className = "boyNames";
          } else if (eachName.sex === "f") {
            className = "girlNames";
          } else {
            className = "neutralNames";
          }
          return (
            <p key={eachName.id} className={className}>
              {eachName.name}
            </p>
          );
        })}
    </section>
  );
}

export default BabyNames;
