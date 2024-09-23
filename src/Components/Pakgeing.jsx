// import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Pakgeing = ({ data, onDelete, onhandleCheck }) => {
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
          {/* // eslint-disable-next-line react/prop-types */}
          {data &&
            data.map((item) => {
              return (
                <div key={item.id}>
                  <li>
                    <span
                      onClick={() => onhandleCheck(item.id)}
                      style={
                        item.packed ? { textDecoration: "Line-through" } : {}
                      }
                    >
                      {item.quntity}. {item.desc}
                    </span>
                    <button onClick={() => onDelete(item.id)}>❌</button>
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
