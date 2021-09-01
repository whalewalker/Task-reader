import React from 'react';
import Todo from "./Todo";

const TodoList = ({tasks, onToggle, onDelete, onEdit}) => {
    console.log(tasks)
    return (
        <div>
            <ul
                role="list"
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading">

                {tasks.map(task =>  <Todo
                    id={task.id}
                    name={task.name}
                    completed={task.completed}
                    key={task.id}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />)}

            </ul>
        </div>
    );
};

export default TodoList;