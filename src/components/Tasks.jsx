// Library
import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, onClick, onDelete }) => {
  return tasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      handleTaskClick={onClick}
      handleTaskDeletion={onDelete}
    />
  ));
};

export default Tasks;
