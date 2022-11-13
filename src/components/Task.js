import React from 'react'
import {FaTimes} from 'react-icons/fa' //these are fonts

const Task = ({ task, onDelete, onToggle }) => {
  return (
    //we're sending ondelete function down to this level, then onclick here we fire the function
    //this bullshit is to get the taskid from the original state --- onClick={() => onDelete(task.id)
    //reminder is just a css class
    <div className={`task ${task.reminder == true ? 'reminder' : ""}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task