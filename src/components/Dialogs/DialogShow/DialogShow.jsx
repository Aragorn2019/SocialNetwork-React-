import classes from "./DialogShow.module.css"


const DialogShow = (props) => {
    return (
        <div className={classes.dialogsShow__meassage}>
            {props.message}
        </div>
    )
}

export default DialogShow