/* eslint-disable react/prop-types */
import { useState } from 'react';

const TodoForm = ({ addTask }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTask(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="container d-flex justify-content-center">
            <button type="button" className="btn addTaskBtn mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">+</button>
        </div>
        
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add New Task</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label for="recipient-name" className="col-form-label">Task:</label>
                                    <input className="form-control shadow" type="text" value={text} onChange={handleChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                        <button className="btn btn-success rounded p-3 shadow" type="submit">Add Task</button>
                        </div>
                    </div>
                </div>
            </div>
    </form>
  );
};

export default TodoForm;