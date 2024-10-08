// import { useState } from "react";
import PropTypes from "prop-types";

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
                  {" "}
                  <li>
                    <input
                      type="checkbox"
                      onClick={() => onhandleCheck(item.id)}
                    />
                    <span
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

Pakgeing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      desc: PropTypes.string.isRequired, // Corrected property name
      quntity: PropTypes.number.isRequired, // Corrected property name
      packed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onhandleCheck: PropTypes.func.isRequired,
};

export default Pakgeing;
