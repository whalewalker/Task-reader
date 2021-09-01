import React, {useState} from 'react';
import "./UserItem.css"

const UserItem = ({user, onCheck}) => {
    const [isChecked, setIsChecked] = useState(false);

    const checkHandler = (index) =>{
        setIsChecked(!isChecked);
        onCheck(index);
    }

    return (
        <div className={`user-item ${isChecked && "cross"}`}>
            <h3>{user.todo}</h3>
            <p>Priority: {user.priority}</p>
            <input type="checkbox" id="selected-todo" name="selected-todo" checked={user.isDone}  onChange={() => checkHandler(user.id)}/>
                <label htmlFor="scales">Scales</label>
        </div>
    );
};

export default UserItem;