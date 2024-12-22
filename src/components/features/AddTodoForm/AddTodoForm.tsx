import { useState } from "react";
import useAddTodo from "../../../hooks/useAddTodo";
import { TodoNames } from "../../../api"; 
import Button from "../../../ui/Button/ButtonComponent";

const AddTodoForm = () => {
  const [title, setSelectedTitle] = useState<string>("default");
  const { addTodoMutation, isPending, error, setError } = useAddTodo();


  const handleAddTodo = async () => {
    if (title=== "default") {
      setError("Please select a todo name.");
      return;
    }
    setError(null);

    try {
      await addTodoMutation({ title});
      setSelectedTitle(""); 
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div style={{ margin: "16px 0" }}>
      <select
        value={title}
        onChange={(e) => setSelectedTitle(e.target.value)}
        style={{
          padding: "8px",
          marginRight: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      >
        <option value="default">Select a Todo</option>
        {TodoNames.map((todo) => (
          <option key={todo.value} value={todo.value}>
            {todo.label}
          </option>
        ))}
      </select>

      <Button
        onClick={handleAddTodo}
        disabled={isPending}
        variant={"add"}
      >
        {isPending ? "Adding..." : "Add Todo"}
      </Button>

      {error && <p style={{ color: "red", marginTop: "8px" }}>{error}</p>}
    </div>
  );
};

export default AddTodoForm;