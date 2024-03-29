import classes from "./Content.module.css"
import MainContent__personal from './MainContent__personal/MainContent__personal'
import MyPosts from "./MyPosts/MyPosts";

function Content(props) {
    return (
        <section className={classes.content}>
            <MainContent__personal name="Witch King" side="Dark" age="over 4,000 years old"/>
            <MyPosts posts={props.profilePage.posts} 
                    newPostText={props.profilePage.newPostText}
                    updateNewPostText={props.updateNewPostText}
                    addPost={props.addPost}/>
        </section>
    )
}

export default Content;