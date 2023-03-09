import classes from "./MainContent__personal.module.css"

function MainContent__personal(props) {
    return (
        <div className={classes.mainContent__area}>
            <img className={classes.photo} src="avatar.jpg" alt='photo'></img>
            <span className={classes.property}>Name: {props.name}</span>
            <span className={classes.property}>Side: {props.side}</span>
            <span className={classes.property}>Age: {props.age}</span>
        </div>
    )
}

export default MainContent__personal