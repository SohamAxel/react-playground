import { useEffect, useState } from "react";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        } else {
          return Promise.reject("Sorry there was an error in api call");
        }
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <p>...Loading</p>
      ) : (
        <ul>
          {users.map((user) => (
            <User {...user} key={user.id} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Users;
