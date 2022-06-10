// Library
import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { FaInfo } from "react-icons/fa";

// Style
import "./Details.css";
import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button
          className="remove-task-button"
          onClick={() => handleTaskDeletion(task.id)}
        >
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
};

export default Task;
