import { NavLink, Link } from 'react-router-dom';
import '../styles/sidebar.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const SideBar = () => (
  <div className="sidebar">
    <nav className="navbar">
      <span className="logo">RE/ROOM</span>
      <ul className="navbar-ul">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>
            Rooms
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-reservation" className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>
            Make a reservation
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-reservations" className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>
            My reservations
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-rooms" className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>
            My rooms
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-room" className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>
            Post a room
          </NavLink>
        </li>
      </ul>
    </nav>
    <div className="footer">
      <ul className="icons-ul">
        <li><Link to="https://github.com/zdnahom"><GitHubIcon className="icon" style={{ fontSize: 20 }} /></Link></li>
        <li><Link to="https://twitter.com/Mov_abd"><TwitterIcon className="icon" style={{ fontSize: 20 }} /></Link></li>
        <li><Link to="https://linkedin.com/in/nicholas-amissah-153b09154"><EmailIcon className="icon" style={{ fontSize: 20 }} /></Link></li>
      </ul>
      <span className="footer-span">©2023 FINAL CAPSTONE</span>
    </div>
  </div>
);

export default SideBar;
