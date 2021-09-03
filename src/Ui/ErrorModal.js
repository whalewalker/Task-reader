import React from 'react';
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) =>{
   return (
       <div className={styles.backdrop} onClick={props.onCancel}/>
   );
}

const ModalOverlay = (props) =>{
    return(
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onCancel} >Okay</Button>
            </footer>
        </Card>
    )
}

const ErrorModal = ({title, message, onCancel}) => {

    return (
        <>
            {
                ReactDOM.createPortal(
                    <Backdrop onClick={onCancel}/>,
                    document.getElementById("backdrop-root"))}
            {
                ReactDOM.createPortal(
                    <ModalOverlay title={title} onClick={onCancel} message={message}/>,
                     document.getElementById("overlay -root"))
            }
        </>
    );
};

export default ErrorModal;