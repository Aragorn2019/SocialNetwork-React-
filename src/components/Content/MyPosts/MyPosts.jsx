import classes from "./MyPosts.module.css"
import Post from './Post/Post'

function MyPosts() {
    return(
        <div className={classes.box}>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className="classes.posts">
                <Post message="I will kick your ass" likesCount={11}/>
                <Post message="Dear Aragorn, not all so obvious" likesCount={8}/>
            </div>
        </div>
    )
}

export default MyPosts;