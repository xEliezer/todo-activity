import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './index.css'

function App ({todolist}) {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      complete: Date.now(),
      text,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const completeTask = (complete) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.complete === complete) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const deleteTask = (complete) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.complete !== complete));
  };

  return (
    <>
      <div id="tasklist" className="container mx-auto my-5 p-5 shadow">
        <div className="row mb-5">
          <div className="col-md-9 my-auto">
            <h1 className="text-white">
              <span className="fw-bold display-3">Hello Boss!</span>
              <br />
              <small>What are your tasks today?</small>
            </h1>
          </div>
          <div className="col-md-3">
            <img className="img-fluid complete img-thumbnail rounded-circle shadow" src="/images/avatar.png" alt="Avatar" />
          </div>
        </div>
        <div className="taskheader container rounded p-3 shadow">
          <div className="row">
            <div className="col-md-2 d-flex justify-content-start align-items-start">
              <img className="img-flucomplete" src="images/task.png" alt="task-icon" />
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <h3 className="fw-semibold pt-2">All Tasks</h3>
            </div>
            <div className="col-md-3 d-flex justify-content-center align-items-center">
              <h3 className="fw-semibold text-center pt-2">Remark</h3>
            </div>
            <div className="col-md-1 d-flex justify-content-center align-items-center">
              <h3 className="fw-semibold text-center pt-2">...</h3>
            </div>
          </div>
        </div>
        <div className="container text-center">
          <TodoList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} todolist={todolist} />
        </div>
        <TodoForm addTask={addTask} />
      </div>
      
    </>
  );
};

export default App;
