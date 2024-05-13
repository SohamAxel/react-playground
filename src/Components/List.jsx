import { useState } from "react";

const List = ({ item, setList }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <li className="list-item">
      <label className="list-item-label">
        <input
          type="checkbox"
          data-list-item-checkbox
          checked={isChecked}
          onChange={(e) => {
            setIsChecked((currentCheckedValue) => !currentCheckedValue);
          }}
        />
        <span data-list-item-text>{item.value}</span>
      </label>
      <button
        data-button-delete
        onClick={() => {
          setList((prevList) =>
            prevList.filter((listItem) => listItem.id != item.id)
          );
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default List;
