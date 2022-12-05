import classes from "./Navbar.module.css"

function Navbar() {
    return (
      <nav className={classes.mainNav}>
        <ul className={classes.mainNav__list}>
          <li className={classes.mainNav__li}>
            <a className={classes.mainNav__a} href='#'>profile</a>
          </li>
          <li className={classes.mainNav__li}>
            <a className={classes.mainNav__a} href='#'>messages</a>
          </li>
          <li className={classes.mainNav__li}>
            <a className={classes.mainNav__a} href='#'>news</a>
          </li>
          <li className={classes.mainNav__li}>
            <a className={classes.mainNav__a} href='#'>music</a>
          </li>
        </ul>
        <a className={classes.mainNav__settings} href='#'>
          settings
        </a>
      </nav>
    )
}

export default Navbar;