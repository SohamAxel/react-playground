import { ReactNode } from "react";

type ChildGenericListDisplay<T> = {
  items: T[];
  getItemId: (item: T) => React.Key;
  renderItem: (item: T) => ReactNode;
};

function ChildGenericListDisplay<T>({
  items,
  getItemId,
  renderItem,
}: ChildGenericListDisplay<T>) {
  return (
    <div>
      {items.map((item) => (
        <div key={getItemId(item)}>{renderItem(item)}</div>
      ))}
      ;
    </div>
  );
}

export default ChildGenericListDisplay;
