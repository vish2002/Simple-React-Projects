import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import TodoCard from "./TodoCard";

export default function Todos() {
  const [todo, setTodo] = useState();
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
      const responseTodo = res.data;
      setTodo(responseTodo);
    });
  }, []);

  console.log(todo);
  return (
    <>
      {todo ? (
        <div style={{display:'flex',flexWrap:'wrap'}}>
          {todo.slice(0,10).map((todo) => (
            <TodoCard todo={todo}/>
          ))}
        </div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
}
