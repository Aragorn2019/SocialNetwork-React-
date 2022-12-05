import classes from "./Post.module.css"

function Post(props) {
    return(
        <div className={classes.post}>
            <img className={classes.avatar} src="/aragorn.jpg"></img>
            <p className={classes.text}>{props.message}</p>
            <div className={classes.likesBox}>
                <span className={classes.likes}>like</span>
                <span className={classes.likesCount}>{props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;