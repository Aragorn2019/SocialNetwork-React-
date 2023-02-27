import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import DialogShow from "./DialogShow/DialogShow";

const Dialogs = (props) => {

    // let dialogsData = [
    //     {id: 1, name: 'Gendalf'},
    //     {id: 2, name: 'Arven'},
    //     {id: 3, name: 'Legolas'},
    //     {id: 4, name: 'Frodo'},
    // ]

    let dialogsElements = props.dialogsData.map( dialogsData => <DialogItem name={dialogsData.name} id={dialogsData.id} />)

    // let messages = [
    //     {id: 1, message: 'Hi. Where is Frodo? Is he still Alive?'},
    //     {id: 2, message: 'Hi. Yeah. Seems like he is'},
    //     {id: 3, message: 'How can we hekp him achive Mordor?'},
    //     {id: 4, message: "All what we can do for him it's try to take attention of Dark Lord of ourselves"},
    // ]

    let messagesElements = props.messages.map( message => <DialogShow message={message.message}/> )

    return (
        <section className={classes.dialogsBox}>
            <div className={classes.dialogsList}>
                { dialogsElements }
            </div>
            <div className={classes.dialogsShow}>
                { messagesElements }
            </div>
        </section>
    )
}

export default Dialogs;