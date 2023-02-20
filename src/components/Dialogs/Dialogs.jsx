import classes from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    
    let path = "/dialgs/" + props.id;

    return (
        <div className={classes.dialogsList__item}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>)
}

const DialogShow = (props) => {
    return (
        <div className="dialogsShow__meassage">
            {props.message}
        </div>
    )
}

function Dialogs(props) {

    let dialogsData = [
        {id: 1, name: 'Gendalf'},
        {id: 2, name: 'Arven'},
        {id: 3, name: 'Legolas'},
        {id: 4, name: 'Frodo'},
    ]

    let dialogsElements = dialogsData.map( dialogsData => <DialogItem name={dialogsData.name} id={dialogsData.id} />)

    let messages = [
        {id: 1, message: 'Hi. Where is Frodo? Is he still Alive?'},
        {id: 2, message: 'Hi. Yeah. Seems like he is'},
        {id: 3, message: 'How can we hekp him achive Mordor?'},
        {id: 4, message: "All what we can do for him it's try to take attention of Dark Lord of ourselves"},
    ]

    let messagesElements = messages.map( message => <DialogShow message={message.message}/> )

    return (
        <section className={classes.dialogsBox}>
            <div className={classes.dialogsList}>
                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[2].id} /> */}
                { dialogsElements }
            </div>
            <div className={classes.dialogsShow}>
                {/* <DialogShow message={messages[0].message} />
                <DialogShow message={messages[1].message} />
                <DialogShow message={messages[2].message} />
                <DialogShow message={messages[3].message} /> */}
                { messagesElements }
            </div>
        </section>
    )
}

export default Dialogs;