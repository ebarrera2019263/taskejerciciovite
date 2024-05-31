import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TaskForm = ({ addTask, setRoute }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description });
    setRoute('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Task</h1>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
  setRoute: PropTypes.func.isRequired,
};

export default TaskForm;
