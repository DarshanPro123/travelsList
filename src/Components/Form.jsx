import { useState } from "react";

export const Form = () => {
  const [desc, setDesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); //it's not reload page after submiting form
    console.log(desc); //print a data of desc in console.log
    // after data get from input it's clear input in screen
    setDesc("");
  };

  const handleChange = (e) => {
    setDesc(e.target.value);
  };

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you want 👼 for trip ? </h3>
        <select>
          {Array.from({ length: 15 }, (c, i) => i + 1).map((no) => (
            <option value={no} key={no}>
              {no}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="add Item.."
          value={desc}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </>
  );
};
