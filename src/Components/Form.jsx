import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const Form = ({ onhandleAdd }) => {
  const [desc, setDesc] = useState(""); // get description from iput value
  const [quntity, setQuantity] = useState(1); //gett quantity value from select dropdown of numbers
  const handleSubmit = (e) => {
    e.preventDefault(); //it's not reload page after submiting form
    if (!desc) return alert("Emty item..🥵");
    console.log(desc); //print a data of desc in console.log
    // after data get from input it's clear input in screen
    console.log(quntity);

    const newItem = { desc, quntity, packed: false, id: Date.now() };
    console.log(newItem);
    onhandleAdd(newItem);
    setDesc("");
    setQuantity(1);
  };

  const handleChange = (e) => {
    setDesc(e.target.value);
  };
  const handleQuantity = (e) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you want 👼 for trip ? </h3>
        <select value={quntity} onChange={handleQuantity}>
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
