import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';
import styles from '../styles/sidebar.module.css';

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
    <div className={isMobile && !menuOpened ? styles['no-sidebar'] : styles.sidebar}>
      <nav className={styles.navbar}>
        <div className={styles['logo-container']}>
          <span className={isMobile && !menuOpened ? styles.hidden : styles.logo}>RE/ROOM</span>
          { isMobile && (
            <>
              <button
                type="button"
                className={!menuOpened ? styles.button : styles.hidden}
                onClick={openMenu}
                aria-label="Open Menu"
              >
                <DragHandleIcon className={styles.icon} style={{ fontSize: 40 }} />
              </button>
              <button
                type="button"
                className={menuOpened ? styles.button : styles.hidden}
                onClick={closeMenu}
                aria-label="Close Menu"
              >
                <CloseIcon className={styles.icon} style={{ fontSize: 40 }} />
              </button>
            </>
          )}
        </div>
        <ul className={isMobile && !menuOpened ? styles.hidden : styles['navbar-ul']}>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? styles['active-link'] : styles['nav-link'])} onClick={closeMenu}>
              Rooms
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-reservation" className={({ isActive }) => (isActive ? styles['active-link'] : styles['nav-link'])} onClick={closeMenu}>
              Make a reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-reservations" className={({ isActive }) => (isActive ? styles['active-link'] : styles['nav-link'])} onClick={closeMenu}>
              My reservations
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-rooms" className={({ isActive }) => (isActive ? styles['active-link'] : styles['nav-link'])} onClick={closeMenu}>
              My rooms
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-room" className={({ isActive }) => (isActive ? styles['active-link'] : styles['nav-link'])} onClick={closeMenu}>
              Post a room
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={isMobile && !menuOpened ? styles.hidden : styles.footer}>
        <ul className={styles['icons-ul']}>
          <li><Link to="https://github.com/zdnahom"><GitHubIcon className={styles.icon} style={{ fontSize: 20 }} /></Link></li>
          <li><Link to="https://twitter.com/Mov_abd"><TwitterIcon className={styles.icon} style={{ fontSize: 20 }} /></Link></li>
          <li><Link to="https://linkedin.com/in/nicholas-amissah-153b09154"><EmailIcon className={styles.icon} style={{ fontSize: 20 }} /></Link></li>
        </ul>
        <span className={styles['footer-span']}>©2023 FINAL CAPSTONE</span>
      </div>
    </div>
  );
};

export default SideBar;

