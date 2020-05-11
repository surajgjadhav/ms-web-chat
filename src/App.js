import React from "react";
import "./App.css";
import MinimizableWebChat from "./MinimizableWebChat";
import NavBar from "./components/navbar";
import Jumbotron from "./components/jumbotron";
import Card from "./components/card";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
      <Card />
      <MinimizableWebChat />
    </div>
  );
}

export default App;
