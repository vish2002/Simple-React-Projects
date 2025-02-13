import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import EditPage from "./pages/EditPage";

const App = () => {
  return (
    <div>
      Meme Generator
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<EditPage />} /> // ✅ No ":url"
      </Routes>
    </div>
  );
};

export default App;
