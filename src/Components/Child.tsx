import type { ReactNode } from "react";

type ChildProps = {
  name: string;
  age: number;
  children?: ReactNode;
};

const ChildOne = ({ name, age, children }: ChildProps) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      {children}
    </div>
  );
};

const ChildTwo: React.FC<ChildProps> = ({ name, age }) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  );
};

export default ChildOne;
