import React from 'react'
import Task from './Task'



const Tasks = ({ tasks, onDelete, onToggle }) => {
  //put  alist with map, map takes a function as an input
  return (
    // <>
    //   {tasks.map((task) => (
    //     <h3 key={task.id}>{task.text}</h3>
    //   ))}
    // </>

    //this function is the same, function(task) == (task) => (return)
    <>
      {tasks.map((task) => (
        //return <h3 key={task.id}>{task.text}</h3>
        <Task 
        key={task.id} 
        task={task} 
        onDelete={onDelete} 
        onToggle={onToggle} />
      ))}
    </>
  );
};

export default Tasks