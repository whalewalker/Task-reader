import React, {useState} from 'react';
import EditingTemplate from "./EditingTemplate";
import ViewTemplate from "./ViewTemplate";

const Todo = ({name, completed, id, onToggle, onDelete, onEdit}) => {
    const [isEditing, setIsEditing] = useState(false);

    const editHandler = () =>{
        setIsEditing(true)
    }

    const onCancelEditHandler = () =>{
        setIsEditing(false);
    }
    return (
            <li className="todo stack-small">
                {isEditing ? <EditingTemplate
                    onCancel={onCancelEditHandler}
                    id={id}
                    name={name}
                    onEdit={onEdit}/>
                    : <ViewTemplate
                        id={id}
                        complated={completed}
                        onToggle={onToggle} name={name}
                        onDelete={onDelete}
                        editHandler={editHandler}/>}
            </li>
    );
};

export default Todo;