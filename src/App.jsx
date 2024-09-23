import { useState } from "react";
import "./App.css";
import { Form } from "./Components/Form";
import Logo from "./Components/Logo";
import Pakgeing from "./Components/Pakgeing";
import { Status } from "./Components/Status";

const App = () => {
  const [data, setData] = useState([]);
  const handleItems = (item) => {
    setData((items) => [...items, item]);
  };
  const handleDelete = (id) => {
    setData((data) => data.filter((item) => item.id !== id));
  };

  const handleCheck = (id) => {
    setData((data) =>
      data.map((i) => (i.id === id ? { ...i, packed: !i.packed } : i))
    );
  };
  return (
    <>
      <div className="app">
        <Logo />
        <Form onhandleAdd={handleItems} />
        <Pakgeing
          data={data}
          onDelete={handleDelete}
          onhandleCheck={handleCheck}
        />
        <Status />
      </div>
    </>
  );
};

export default App;
