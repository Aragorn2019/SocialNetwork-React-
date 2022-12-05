import classes from "./Content.module.css"
import MainContent__personal from './MainContent__personal/MainContent__personal'
import MyPosts from "./MyPosts/MyPosts";

function Content() {
    return (
        <section className={classes.content}>
            <MainContent__personal name="Witch King" side="Evil" age="over 4,000 years old"/>
            <MyPosts />
        </section>
    )
}

export default Content;