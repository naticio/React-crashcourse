import "./App.css";
import Header from "./components/Header";
import React from "react";
import Tasks from "./components/Tasks";
import { useState } from "react"; //this is a react hook for state
import AddTask from "./components/AddTask";
//import Button from './components/Button';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  //this is a state function, both use the state model defined below
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "whatever",
      day: "Feb 5th at 2:30 pm",
      reminder: false,
    },
    {
      id: 2,
      text: "whatever 2",
      day: "Feb 5th at 2:30 pm",
      reminder: false,
    },
  ]);

  //Add task
  const addTask = (task) => {
    console.log(task);

    //as we don't have a backend we just get a ranmdom id
    const id = Math.floor(Math.random) * 10000 + 1;

    //create new Task and merge new id with the task object using spread
    const newTask = { id, ...task };
    //we call the setTasks state method and merge existing tasks in the state + the recently created task
    setTasks([...tasks, newTask]);
  };

  //delete task function
  const deleteTask = (id) => {
    console.log("delete", id);
    //setTask alters the immutable tasks elements
    //filter is an array method, accepts a function input and returns tasks.id that are different than the...
    //id provided
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle reminder
  const toggleReminder = (id) => {
    console.log("reminder", id);

    //state for tasks
    setTasks(
      tasks.map((task) =>
        //this spread all attributes of the task, except the reminder attribute gets toggled (!) to the opposite value
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />

      {/*AdTask is the rendered UI component with the input fields, I pass a addTask function as well as
      onAdd is to add a new field in an array of fields
      this says if showAddTask == true then (aka &&) show addTask component*/}
      {showAddTask === true && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
