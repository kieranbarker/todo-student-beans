import { useState } from "react";
import "./Form.css";

function Form(props) {
  const [name, setName] = useState("");

  function onChange(event) {
    setName(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    props.onSubmit(name);
    setName("");
  }

  return (
    <form onSubmit={onSubmit}>
      <p>
        <label htmlFor="new-todo">What do you need to do?</label>
        <input id="new-todo" type="text" value={name} onChange={onChange} />
      </p>
      <p>
        <button type="submit">Add todo</button>
      </p>
    </form>
  );
}

export default Form;
