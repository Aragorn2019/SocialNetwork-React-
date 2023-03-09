import React from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import DialogShow from "./DialogShow/DialogShow";

const Dialogs = (props) => {

    let newMessage = React.createRef();

    let addMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }

    let dialogsElements = props.state.dialogsData.map( dialogsData => <DialogItem name={dialogsData.name} id={dialogsData.id} />)

    let messagesElements = props.state.messages.map( message => <DialogShow message={message.message}/> )

    return (
        <section className={classes.dialogsBox}>
            <div className={classes.dialogsList}>
                { dialogsElements }
            </div>
            <div className={classes.dialogsShow}>
                { messagesElements }
                <textarea ref={newMessage}></textarea>
                <button onClick={addMessage}>Send a message</button>
            </div>
        </section>
    )
}

export default Dialogs;