function Navbar() {
    return (
        <nav className='main-nav'>
        <ul className='main-nav__list'>
          <li className='main-nav__li'>
            <a className='main-nav__a' href='#'>profile</a>
          </li>
          <li className='main-nav__li'>
          <a className='main-nav__a' href='#'>messages</a>
          </li>
          <li className='main-nav__li'>
            <a className='main-nav__a' href='#'>news</a>
          </li>
          <li className='main-nav__li'>
            <a className='main-nav__a' href='#'>music</a>
          </li>
        </ul>
        <a className='main-nav__settings' href='#'>
          settings
        </a>
      </nav>
    )
}

export default Navbar;