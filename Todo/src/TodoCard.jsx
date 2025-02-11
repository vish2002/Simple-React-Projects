import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Correct Hook for Navigation

const TodoCard = (props) => {
  let navigate = useNavigate(); // ✅ Use useNavigate() instead of useHistory()
  const { todo } = props;
  const { id, title, completed } = todo;

  return (
    <div
    style={{
        background: "#4caf50", // Green background
        color: "white", // White text
        padding: "20px",
        margin: "15px",
        width: "250px",
        borderRadius: "10px", // Rounded corners
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Subtle shadow
        transition: "transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out",
        cursor: "pointer",
        textAlign: "center"
      }}
      onClick={() => navigate(`/todo/${id}`)} // ✅ Correct navigation syntax
    >
      <h4>{title}</h4>
      <h6>{completed ? "Yes" : "No"}</h6>
    </div>
  );
};

export default TodoCard;
