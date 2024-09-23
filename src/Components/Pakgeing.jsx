const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
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
                  <span>
                    {item.quantity} {item.description}
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
