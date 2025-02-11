import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todos from "./Todos"; // ✅ Check file location
import Todo from "./Todo";   // ✅ Check file location

export default function App() {
  return (
    <div className="App" style={{textAlign:'center'}}>
      <h1>Hello</h1> {/* Add this to check if App.js is rendering */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Todos />} />
          <Route exact path="/todo/:id" element={<Todo />} />
        </Routes>
      </Router>
    </div>
  );
}
