import { useState } from "react";
import useAddTodo from "../../../hooks/useAddTodo";

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
      <button
        onClick={handleAddTodo}
        disabled={isPending}
        style={{
          padding: "8px 12px",
          backgroundColor: isPending ? "#aaa" : "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: isPending ? "not-allowed" : "pointer",
        }}
      >
        {isPending ? "Adding..." : "Add Todo"}
      </button>
      {error && <p style={{ color: "red", marginTop: "8px" }}>{error}</p>}
    </div>
  );
};

export default AddTodoForm;