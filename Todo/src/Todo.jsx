import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import { CircularProgress } from "@mui/material";

export default function Todo() {
  const { id } = useParams();
  const[tododetails,settododetails]=useState({});
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) => {
      const responseTodo = res.data;
      settododetails(responseTodo);
    });
  }, []);

  const {id:todoid,userId,title,completed}=tododetails;


  console.log(tododetails);

  return (
    tododetails ? (
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
      >
        <h1>{todoid}</h1>
        <h1>{userId}</h1>
        <h1>{title}</h1>
        <h1>{completed ? "Yes" : "No"}</h1>
      </div>
    ) : (
      <CircularProgress />
    )
  );
  
}
