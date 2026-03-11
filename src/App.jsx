import React from "react";
import { PostProvider } from "./context/PostContext";
import Home from "./pages/Home";
import "./index.css";

function App() {
  return (
    <PostProvider>
      <Home />
    </PostProvider>
  );
}

export default App;