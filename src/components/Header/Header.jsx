import classes from "./Header.module.css"

function Header() {
    return (
        <header className={classes.header}>
            <a className={classes.logo__a} href="#">
                <img className={classes.logo__img} alt="Logo" src="/one-ring.png"></img>
            </a>
        </header>
    )
}

export default Header;