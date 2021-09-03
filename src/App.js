import "./App.css"
import AddTodo from "./Todo/AddTodo";
import FilterButton from "./Todo/FilterButton";
import TodoList from "./Todo/TodoList";
import {useState} from "react";
import {nanoid} from "nanoid";

const FILTER_MAP = {
    All: () => true,
    Active: todo => !todo.completed,
    Completed: todo => todo.completed
}

const FILTER_NAMES = Object.keys(FILTER_MAP);


function App() {

    const DATA = [
        { id: "todo-0", name: "Eat", completed: false },
        { id: "todo-1", name: "Sleep", completed: false },
        { id: "todo-2", name: "Repeat", completed: false }
    ];

    const [todoList, setTodoList] = useState(DATA);
    const [filter, setFilter] = useState('All');

    const todoNoun = todoList.length !== 1 ? 'todos' : 'todo';
    const headingText = `${todoList.length} ${todoNoun} remaining`;

    const filterNameHandler = (name) => {
      setFilter(name);
    }



    const filterButtons = FILTER_NAMES.map(name => <FilterButton
            name={name}
            key={name}
            isPressed={name === filter}
            setFilter={filterNameHandler}
        />
    )

    const taskCompleteHandler = id =>{
        const updatedTodos = todoList.map(todo =>{
            if (id === todo.id)
                return {...todo, completed: !todo.completed}
            return todo;
        })
        setTodoList(updatedTodos);
    }

    const deleteHandler = id => {
        const remainingTodos = todoList.filter(todo => todo.id !== id);
        setTodoList(remainingTodos);
    }

    const addTodoHandler = (name) =>{
        const newTodo = {
            id: "todo-" + nanoid(),
            name,
            completed: false
        }
        setTodoList(prevTodo => [...prevTodo, newTodo]);
    }

    const editHandler = (id, newName) =>{
        const editedTodoList = todoList.map(todo =>{
           if (id === todo.id)
               return {...todo, name: newName};
           return todo;
        });
        setTodoList(editedTodoList);
    }

    const filterList = todoList.filter(FILTER_MAP[filter]);


    return (
        <div>
            <div className="todoapp stack-large">
                <h1>TodoMatic</h1>
                <AddTodo onSubmit={addTodoHandler}/>
                <div className="filters btn-group stack-exception">
                    {filterButtons}
                </div>
                <h2 id="list-heading">{headingText}</h2>
                <TodoList onEdit={editHandler} tasks={filterList} onDelete={deleteHandler} onToggle={taskCompleteHandler}/>
            </div>
        </div>
    );
}

export default App;
