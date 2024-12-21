import { useState } from "react";
import useAddTodo from "../../../hooks/useAddTodo";
import Button from "../../../ui/Button/ButtonComponent";  

const AddTodoForm = () => {
  const [title, setTitle] = useState("");
  const { addTodoMutation, isPending, error, setError } = useAddTodo();

  const handleAddTodo = async () => {
    if (!title.trim()) {
      setError("Title cannot be empty");
      return;
    }
    setError(null);

    try {
      await addTodoMutation({ title });
      setTitle(""); 
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div style={{ margin: "16px 0" }}>
      <input
        type="text"
        placeholder="Add a new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          padding: "8px",
          marginRight: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <Button
        onClick={handleAddTodo}
        disabled={isPending}
        variant={ "add" } 
      >
        {isPending ? "Adding..." : "Add Todo"}
      </Button>
      {error && <p style={{ color: "red", marginTop: "8px" }}>{error}</p>}
    </div>
  );
};

export default AddTodoForm;