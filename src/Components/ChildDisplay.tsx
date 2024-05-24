import { useContext } from "react";
import { Context, User, getUserContext } from "./ChildContextExample";

const ChildDisplay = () => {
  // This shows error as users can be null
  // const { users } = useContext(Context);

  // This will not show error as we are already doing a null check on getUserContext function.
  const { users } = getUserContext();
  return (
    <div>
      {users.map((user: User) => (
        <p>{user.name}</p>
      ))}
    </div>
  );
};

export default ChildDisplay;
