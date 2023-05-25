/* eslint-disable react/prop-types */


const TodoItem = ({ task, completeTask, deleteTask, tasknumber }) => {

  const handleComplete = () => {
    completeTask(task.complete);
  };

  const handleDelete = () => {
    deleteTask(task.complete);
  };

  return (
    <>
      <div className="row mt-3 bg-white p-3 rounded shadow">
        <div className="col-md-2 d-flex justify-content-start align-items-center">
          <h4>#️⃣ {tasknumber}</h4>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <span
            style={{
              textDecoration: task.completed ? 'line-through' : ' ',
            }}
          >
            <h3>
              {task.text}
            </h3>
          </span>
        </div>
        <div className="col-md-3 d-flex justify-content-center align-items-center">
          <button className="btn btn-success ms-3 shadow" onClick={handleComplete}>Complete</button>
        </div>
        <div className="col-md-1 d-flex justify-content-center align-items-center">
            <button className={'btn btn-danger shadow'} onClick={handleDelete}>Delete</button>
        </div>
      </div>

    </>
  );
};

export default TodoItem;