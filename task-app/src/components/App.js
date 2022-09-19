import React, { useState } from "react";
import Overview from "./Overview"

function App() {

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  function handleChange(e) {
    setTask(e.target.value);
    console.log(task);
  }

  function onSubmitTask(e) {
    e.preventDefault();
    setTasks(tasks.concat(task));
    setTask("");
    console.log(tasks);
  }

  return (
    <div>
      <form onSubmit={onSubmitTask}>
        <label htmlFor="taskInput">Enter Task: </label>
        <input onChange={handleChange} type="text" id="taskInput"/>
        <button type="submit">Add Task</button>
      </form>
      <Overview tasklist={tasks}/>
    </div>
  );
}

export default App;
