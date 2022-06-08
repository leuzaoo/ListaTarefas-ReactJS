// Library
import React, { useState } from "react";

// Style
import "./addTask.css";

// Components
import Button from "./Button";

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = (e) => {
    e.preventDefault();
    handleTaskAddition(inputData);
    setInputData("");
  };

  return (
    <form onSubmit={handleAddTaskClick} className="add-task-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="text"
      />
      <div className="add-task-button-container">
        <Button>Adicionar</Button>
      </div>
    </form>
  );
};

export default AddTask;
