import React from 'react';
import Card from "./Card";
import styles from "./Users.module.css";
import UserItem from "./UserItem";

const UsersUI = ({users, onChecked}) => {
    return (
        <Card className={styles.users}>
            {users.map(user => <UserItem onCheck={onChecked} key={user.id} user={user}/>)}
        </Card>
    );
};

export default UsersUI;