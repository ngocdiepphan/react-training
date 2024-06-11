import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Task from "./components/Tasks/Task";
import { title } from "process";

const task = {
  id: "1",
  title: "Test Task",
  state: "TASK_INBOX",
};
function App() {
  return (
    <div className="App">
      <Task task={task} />
    </div>
  );
}

export default App;
