export function TodoItem({ completed, title }) {
  return <li className={completed ? "strike-through" : undefined}>{title}</li>;
}

export function TodoItemSkeleton() {
  return <li className="skeleton"></li>;
}
