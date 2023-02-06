import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css"

function Navbar() {
    return (
      <nav className={classes.mainNav}>
        <ul className={classes.mainNav__list}>
          <li className={classes.mainNav__li}>
            <NavLink to='/content' className={classes.mainNav__a}>profile</NavLink>
          </li>
          <li className={classes.mainNav__li}>
            <NavLink to='/dialogs' className={classes.mainNav__a}>messages</NavLink>
          </li>
          <li className={classes.mainNav__li}>
            <NavLink to='/news' className={classes.mainNav__a}>news</NavLink>
          </li>
          <li className={classes.mainNav__li}>
            <NavLink to='/music' className={classes.mainNav__a}>music</NavLink>
          </li>
        </ul>
        <NavLink to='/settings' className={classes.mainNav__settings}>
          settings
        </NavLink>
      </nav>
    )
}

export default Navbar;