import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/sidebar.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';

const SideBar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openMenu = () => {
    setMenuOpened(true);
  };
  const closeMenu = () => {
    setMenuOpened(false);
  };

  return (
    <div className={isMobile && !menuOpened ? 'no-sidebar' : 'sidebar'}>
      <nav className="navbar">
        <div className="logo-container">
          <span className={isMobile && !menuOpened ? 'hidden' : 'logo'}>
            RE/ROOM
          </span>
          {isMobile && (
            <>
              <button
                type="button"
                className={!menuOpened ? 'button' : 'hidden'}
                onClick={openMenu}
                aria-label="Open Menu"
              >
                <DragHandleIcon className="icon" style={{ fontSize: 40 }} />
              </button>
              <button
                type="button"
                className={menuOpened ? 'button' : 'hidden'}
                onClick={closeMenu}
                aria-label="Close Menu"
              >
                <CloseIcon className="icon" style={{ fontSize: 40 }} />
              </button>
            </>
          )}
        </div>
        <ul className={isMobile && !menuOpened ? 'hidden' : 'navbar-ul'}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
              onClick={closeMenu}
            >
              Rooms
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-reservation"
              className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
              onClick={closeMenu}
            >
              Make a reservation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-reservations"
              className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
              onClick={closeMenu}
            >
              My reservations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-rooms"
              className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
              onClick={closeMenu}
            >
              My rooms
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-room"
              className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
              onClick={closeMenu}
            >
              Post a room
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={isMobile && !menuOpened ? 'hidden' : 'footer'}>
        <ul className="icons-ul">
          <li>
            <Link to="https://github.com/zdnahom">
              <GitHubIcon className="icon" style={{ fontSize: 20 }} />
            </Link>
          </li>
          <li>
            <Link to="https://twitter.com/Mov_abd">
              <TwitterIcon className="icon" style={{ fontSize: 20 }} />
            </Link>
          </li>
          <li>
            <Link to="https://linkedin.com/in/nicholas-amissah-153b09154">
              <EmailIcon className="icon" style={{ fontSize: 20 }} />
            </Link>
          </li>
        </ul>
        <span className="footer-span">©2023 FINAL CAPSTONE</span>
      </div>
    </div>
  );
};

export default SideBar;
