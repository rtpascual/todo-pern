import React from "react";
import Header from "./components/Header.jsx";
import Todo from "./components/Todo.jsx";

function App() {
  return (
    <div className="flex flex-col container mx-auto">
      <Header />
      <Todo />
    </div>
  );
}

export default App;
