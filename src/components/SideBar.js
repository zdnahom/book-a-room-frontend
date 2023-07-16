import { NavLink, Link } from 'react-router-dom';
import '../styles/sidebar.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const SideBar = () => (
  <div className="sidebar">
    <nav>
      <span>RE</span>
      <ul>
        <li>
          <NavLink to="/">
            Rooms
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-reservation">
            Make a reservation
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-reservations">
            My reservations
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-rooms">
            My rooms
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-room">
            Post a room
          </NavLink>
        </li>
      </ul>
    </nav>
    <div>
      <ul>
        <li><Link to="https://github.com/zdnahom"><GitHubIcon /></Link></li>
        <li><Link to="https://twitter.com/Mov_abd"><TwitterIcon /></Link></li>
        <li><Link to="https://linkedin.com/in/nicholas-amissah-153b09154"><EmailIcon /></Link></li>
      </ul>
      <span>©2023 FINAL CAPSTONE</span>
    </div>
  </div>
);

export default SideBar;
