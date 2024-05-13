const List = ({ item, setList }) => {
  return (
    <li className="list-item">
      <label className="list-item-label">
        <input
          type="checkbox"
          data-list-item-checkbox
          checked={item.completed}
          onChange={(e) => {
            setList((prevList) =>
              prevList.map((list) => {
                if (list.id == item.id) {
                  return {
                    ...list,
                    completed: e.target.checked,
                  };
                } else {
                  return list;
                }
              })
            );
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
