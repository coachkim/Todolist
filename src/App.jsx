import React from "react";
import "./App.css";
import Addform from "./components/Addform";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  return (
    <div className="layout">
      <Header></Header>
      <Addform />
      <List />
    </div>
  );
}

export default App;
