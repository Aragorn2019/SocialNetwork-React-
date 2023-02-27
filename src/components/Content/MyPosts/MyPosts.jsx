import classes from "./MyPosts.module.css"
import Post from './Post/Post'

function MyPosts(props) {

    let postsElements = 
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)

    return(
        <div className={classes.box}>
            <div className={classes.LeaveMessage}>
                <textarea className={classes.textarea}></textarea>
                <button>Add post</button>
            </div>
            <div className="classes.posts">
                { postsElements } 
            </div>
        </div>
    )
}

export default MyPosts;