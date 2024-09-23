const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Book", quantity: 2, packed: false },
  { id: 4, description: "Charger", quantity: 1, packed: false },
  { id: 5, description: "Laptops", quantity: 2, packed: true },
];

// import { useState } from "react";

const Pakgeing = () => {
  //   const [initialItems, setInitialItems] = useState([
  //     {
  //       id: 1,
  //       description: "Demo1",
  //       quantity: 2,
  //       packed: false,
  //     },
  //   ]);
  return (
    <>
      <div className="list">
        {" "}
        <ul>
          {initialItems.map((item) => {
            return (
              <div key={item.id}>
                <li>
                  <span
                    //   onClick={handlPackege}
                    style={
                      item.packed ? { textDecoration: "Line-through" } : {}
                    }
                  >
                    {item.quantity}. {item.description}
                  </span>
                  <button>❌</button>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Pakgeing;
