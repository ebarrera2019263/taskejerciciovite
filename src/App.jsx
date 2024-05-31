import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import PropTypes from 'prop-types';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [route, setRoute] = useState('/');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const renderComponent = () => {
    switch (route) {
      case '/add':
        return <TaskForm addTask={addTask} setRoute={setRoute} />;
      case '/':
      default:
        return <TaskList tasks={tasks} deleteTask={deleteTask} />;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setRoute('/')}>Task List</button>
        <button onClick={() => setRoute('/add')}>Add Task</button>
      </nav>
      {renderComponent()}
    </div>
  );
};

export default App;
