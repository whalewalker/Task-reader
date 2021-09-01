import React, {useState} from 'react';
import Card from "../Ui/Card";
import styles from "./AddUser.module.css"
import Button from "../Ui/Button";
import ErrorModal from "../Ui/ErrorModal";

const AddUsers = ({addUser}) => {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [errors, setErrors] = useState();

    const cancelHandler= () =>{
        setErrors(null);
    }

    const usernameHandler = e => {
        setUsername(e.target.value);
    }

    const ageHandler = e => {
        setAge(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const user = {
            id: Math.random().toString(),
            username,
            age,
            isDone: false
        }

        if (username.trim().length === 0 || age.trim().length === 0) {
            setErrors({
                message: 'Please enter a valid name and age (non-empty values)',
                title: "Invalid input!"
            })
            return;
        }

        if (+age < 1) {
            setErrors({
                message: 'Please enter a valid age ( > 0 )',
                title: "Invalid age"
            }
            )
            return;
        }
        setUsername('');
        setAge('');
        addUser(user);
    }

    return (
        <>
            {errors &&   <ErrorModal title={errors.title} message={errors.message} onCancel={cancelHandler}/>}
            <Card className={styles.input}>
                <form onSubmit={submitHandler}>
                    <div className={styles.formControl}>
                        <label>username</label>
                        <input type="text" value={username} onChange={usernameHandler}/>
                    </div>

                    <div className="form-control">
                        <label>Age(Years)</label>
                        <input type="text" value={age} onChange={ageHandler}/>
                    </div>

                    <Button type='submit'>Add user</Button>
                </form>
            </Card>
        </>
    );
};

export default AddUsers;