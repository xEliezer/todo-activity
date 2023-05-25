/* eslint-disable react/prop-types */
import TodoItem from './TodoItem';

const TodoList = ({ tasks, completeTask, deleteTask }) => {

    const todolist = tasks.map((task, index) => (
        <TodoItem
            key={task.complete}
            tasknumber={index + 1}
            task={task}
            completeTask={completeTask}
            deleteTask={deleteTask}
        />
    ));

    return (
        <>
            {todolist}
        </>

    );
};

export default TodoList;