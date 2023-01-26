import classes from "./Dialogs.module.css"

function Dialogs(props) {
    return (
        <section className={classes.dialogsBox}>
            <div className={classes.dialogsList}>
                <div className={classes.dialogsList__item + " " + classes.active}>
                    Gendalf
                </div>
                <div className={classes.dialogsList__item}>
                    Sauron
                </div>
                <div className={classes.dialogsList__item}>
                    Saruman
                </div>
            </div>
            <div className={classes.dialogsShow}>
                <div>
                    Hi!
                </div>
                <div>
                    Hi!2
                </div>
                <div>
                    Hi!3
                </div>
            </div>
        </section>
    )
}

export default Dialogs;