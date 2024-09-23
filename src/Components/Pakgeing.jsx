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
            // eslint-disable-next-line react/prop-types
            data.map((item) => {
              return (
                <>
                  {" "}
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
                </>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Pakgeing;
