import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SideBar from './components/SideBar';
import Rooms from './components/Rooms';
import AddRoomForm from './components/AddRoomForm';
import AddReservationForm from './components/AddReservationForm';
import MyReservations from './components/MyReservations';
import MyRooms from './components/MyRooms';
import RoomDetail from './components/RoomDetail';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Protected from './utils/protected';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route path="/" element={<Protected><Rooms /></Protected>} />
        <Route path="/add-reservation" element={<Protected><AddReservationForm /></Protected>} />
        <Route path="/my-reservations" element={<Protected><MyReservations /></Protected>} />
        <Route path="/my-rooms" element={<Protected><MyRooms /></Protected>} />
        <Route path="/add-room" element={<Protected><AddRoomForm /></Protected>} />
        <Route path="/rooms/:roomId" element={<Protected><RoomDetail /></Protected>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </div>
);


export default App;
