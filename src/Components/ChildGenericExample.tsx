import React from "react";
import ChildGenericListDisplay from "./ChildGenericListDisplay";

type Item = {
  id: React.Key;
  name: string;
};

const ChildGenericExample = () => {
  return (
    <ChildGenericListDisplay<Item>
      items={[
        {
          id: crypto.randomUUID(),
          name: "Sal",
        },
        {
          id: crypto.randomUUID(),
          name: "Penny",
        },
      ]}
      getItemId={(item) => {
        return item.id;
      }}
      renderItem={(item) => <p>{item.name}</p>}
    />
  );
};

export default ChildGenericExample;
