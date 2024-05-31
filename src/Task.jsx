import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ task, index, deleteTask }) => {
  return (
    <li>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Task;
