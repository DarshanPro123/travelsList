const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Book", quantity: 2, packed: true },
];

const Pakgeing = () => {
  return (
    <>
      <div className="list">
        {" "}
        <ul>
          {initialItems.map((item) => {
            return (
              <>
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
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Pakgeing;
