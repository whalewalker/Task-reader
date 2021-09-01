import React, {useState} from 'react';

const AddTodo = ({onSubmit}) => {

    const [name, setName] = useState('');

    const submitHandler = (e) =>{
        e.preventDefault();
        onSubmit(name)
        setName('');
    }

    const nameHandler = e => {
        setName(e.target.value);
    }

    return (
        <form onSubmit={submitHandler}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    What needs to be done?
                </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={nameHandler}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    );
};

export default AddTodo;