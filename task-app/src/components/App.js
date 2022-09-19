import React, { useState } from "react";
import Overview from "./Overview"

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleChange(e) {
    setTask(e.target.value);
  }

  function onSubmitTask(e) {
    e.preventDefault();
    setTasks(tasks.concat(task));
    setTask("");
  }

  return (
    <div>
      <form onSubmit={onSubmitTask}>
        <label htmlFor="taskInput">Enter Task: </label>
        <input onChange={handleChange} value={task.text} type="text" id="taskInput"/>
        <button type="submit">Add Task</button>
      </form>
      <Overview tasks={task}/>
    </div>
  );
}

export default App;
