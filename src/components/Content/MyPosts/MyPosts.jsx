import React from "react";
import classes from "./MyPosts.module.css"
import Post from './Post/Post'

function MyPosts(props) {

    let postsElements = 
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return(
        <div className={classes.box}>
            <div className={classes.LeaveMessage}>
                <textarea className={classes.textarea} 
                        onChange={onPostChange} ref={newPostElement} 
                        value={props.newPostText}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                { postsElements } 
            </div>
        </div>
    )
}

export default MyPosts;