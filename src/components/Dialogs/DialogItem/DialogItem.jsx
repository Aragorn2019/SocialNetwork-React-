import classes from "./DialogItem.module.css"
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    
    let path = "/dialgs/" + props.id;

    return (
        <div className={classes.dialogsList__item}>
            <img className={classes.dialogsList__itemAva} src="aragorn.jpg"/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>)
}

export default DialogItem