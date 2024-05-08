import UserCard from "./Components/UserCard";
import "./user.css";
import user from "./user.json";

const App = () => <UserCard {...user} />;

export default App;
