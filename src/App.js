import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SideBar from './components/SideBar';
import Rooms from './components/Rooms';
import AddRoomForm from './components/AddRoomForm';
import AddReservationForm from './components/AddReservationForm';
import MyReservations from './components/MyReservations';
import MyRooms from './components/MyRooms';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<Rooms />} />
          <Route path="/add-reservation" element={<AddReservationForm />} />
          <Route path="/my-reservations" element={<MyReservations />} />
          <Route path="/my-rooms" element={<MyRooms />} />
          <Route path="/add-room" element={<AddRoomForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
