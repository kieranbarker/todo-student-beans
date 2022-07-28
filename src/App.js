import { useState } from "react";
import Form from "./Form";

function App(props) {
  const [todos, setTodos] = useState(props.todos);

  const listItems = todos.map((todo) => <li key={todo.id}>{todo.name}</li>);

  function addTodo(name) {
    const newToDo = { id: window.crypto.randomUUID(), name };
    setTodos([...todos, newToDo]);
  }

  return (
    <>
      <Form onSubmit={addTodo} />
      {props.todos.length < 1 ? (
        <p>There aren't any todos yet.</p>
      ) : (
        <ul>{listItems}</ul>
      )}
    </>
  );
}

export default App;
