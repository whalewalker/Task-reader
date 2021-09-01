import React, {useState} from 'react';

const EditingTemplate = (props) => {
    const [newName, setNewName] = useState('');

    const nameHandler = e =>{
        setNewName(e.target.value);
    }

    const submitHandler = e =>{
        e.preventDefault();
        props.onEdit(props.id, newName);
        setNewName("");
        props.onCancel(false);
    }

    return (
        <form className="stack-small" onSubmit={submitHandler}>
            <div className="form-group">
                <label className="todo-label" htmlFor={props.id}>
                    New name for {props.name}
                </label>
                <input id={props.id} value={newName} className="todo-text" type="text" onChange={nameHandler}/>
            </div>
            <div className="btn-group">
                <button type="button" className="btn todo-cancel" onClick={props.onCancel} >
                    Cancel
                    <span className="visually-hidden">renaming {props.name}</span>
                </button>
                <button type="submit" className="btn btn__primary todo-edit">
                    Save
                    <span className="visually-hidden">new name for {props.name}</span>
                </button>
            </div>
        </form>
    );
};

export default EditingTemplate;