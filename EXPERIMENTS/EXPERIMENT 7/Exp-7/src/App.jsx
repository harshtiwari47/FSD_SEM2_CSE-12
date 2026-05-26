import React from "react";
import StudentCard from "./StudentCard";
import "./App.css";
function App(){
  return (
    <div className="App">
      <h1>Student Card</h1>
      <div className="student-container">
        <StudentCard name="Harshit" marks="100" course="B.Tech CSE" />
        <StudentCard name="Harshi" marks="99" course="B.Tech CSE-AI" />
        <StudentCard name="Harsh" marks="98" course="B.Tech CSE-ML" />
      </div>
    </div>
  );
}

export default App;