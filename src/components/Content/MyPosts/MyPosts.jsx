import classes from "./MyPosts.module.css"
import Post from './Post/Post'

function MyPosts(props) {

    let posts = [
        {id: 1, message: 'I will kick your ass', likesCount: 11},
        {id: 2, message: 'Dear Aragorn, not all so obvious', likesCount: 8}
    ]

    let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)

    return(
        <div className={classes.box}>
            <div className={classes.LeaveMessage}>
                <textarea className={classes.textarea}></textarea>
                <button>Add post</button>
            </div>
            <div className="classes.posts">
                {/* <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/> */}
                { postsElements } 
            </div>
        </div>
    )
}

export default MyPosts;