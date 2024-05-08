import "./App.css";
import Name from "./Components/Name";
import { NameClass } from "./Components/NameClass";
import TodoList from "./Components/TodoList";
import TodoListItem from "./Components/TodoListItem";

const App = () => (
  <>
    <div id="largeDiv" className="large">
      <label htmlFor="ur-input">Your Input</label>
      <input type="number" value={3} id="ur-input" />
    </div>
    <div>
      <h1>Todo List</h1>
      <TodoList />
    </div>
    <div>
      <Name name="John Doe"/>
      <NameClass name="Jenn Doe"/>
    </div>
    <div>
      <TodoListItem isComplete >Test Checkbox</TodoListItem>
    </div>
  </>
);
export default App;

/**
 * Notes:
 *  1. React components should have the first letter capitalized. If not, react compiler will treat that component
 *  as a normal html component.
 * 
 *  2. undefied, false, null will not print any content in the page.
 * 
 *  3. Multiple components can be in a single class, in general all components should be in seperate files unless
 *  we need a tightly coupled architechture.
 * 
 *  4. A prop with no value defaults to true.
 * 
 *  5. DOM should not be manupulated directly in React, React is a declarative UI but vanilla JS is imperative UI.
 * 
 *  6. Import assests(css, images, json, ... ) directly to jsx
 */
