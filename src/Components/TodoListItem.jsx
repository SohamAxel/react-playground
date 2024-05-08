const TodoListItem = ({ children, isComplete}) => (
  <>
    <input type="checkbox" checked={isComplete} id="check-box"/>
    <label htmlFor="check-box">{ children }</label>
  </>
)

export default TodoListItem;