import "./styles.css";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const handleAdd = () => {
    if (editIndex !== null) {
      // If editIndex is not null, it means we're editing an existing item
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = value;
      setTodos(updatedTodos);
      setEditIndex(null); // Clear the editIndex
    } else {
      // Otherwise, we're adding a new item
      setTodos([...todos, value]);
    }
    setValue(""); // Clear the input field after adding/editing a todo.
  };
  const handleEdit = (index) => {
    // Set the value and editIndex when editing an item
    setValue(todos[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index); // Remove the item at the specified index
    setTodos(updatedTodos);
  };

  console.log(todos);
  return (
    <div className="App">
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={handleAdd}>
        {editIndex !== null ? "Edit" : "Add"}{" "}
        {/* Change button label based on edit mode */}
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
