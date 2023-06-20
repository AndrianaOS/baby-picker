import { useState } from "react";

function AddNames({ setNames, getAllNames }) {
  const initialState = {
    name: "",
    sex: "",
  };

  const [formData, setFormData] = useState(initialState);

  // const [handleError, setHandleError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:4000/name", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        sex: formData.sex,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Print this", data);
        setNames((prevNames) => [...prevNames, data]);
        getAllNames();
        setFormData(initialState);
        // setHandleError(data.error);
      })
      .catch((error) => console.log(error));
  }

  function handleChange(event) {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <section>
      <form className="submit-form" method="post" onSubmit={handleSubmit}>
        <fieldset id="gender">
          <legend>Select a gender</legend>
          <aside className="gender-selection">
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              id="male"
              name="sex"
              value="m"
              checked={formData.sex === "m"}
              onChange={handleChange}
            />
          </aside>
          <aside className="gender-selection">
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              id="female"
              name="sex"
              value="f"
              checked={formData.sex === "f"}
              onChange={handleChange}
            />
          </aside>
        </fieldset>
        <aside id="name-input">
          <label htmlFor="babyname">Enter a name</label>
          <input
            type="text"
            id="babyname"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </aside>
        <button type="submit" id="submit-btn">
          Submit name
        </button>
      </form>
    </section>
  );
}

export default AddNames;
