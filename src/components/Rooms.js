import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRooms } from '../redux/features/rooms/roomsSlice';
import '../styles/rooms.css';
import Carousel from './Carousel';

const Rooms = () => {
  const { rooms, isLoading } = useSelector((store) => store.rooms);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);

  return (
    <div className="rooms-container">
      <h2 className="rooms-header">All AVAILABLE ROOMS</h2>
      <span className="select-room-text">Please select your favorite room</span>
      {
        isLoading ? (
          <p>loading...</p>) : (<Carousel rooms={rooms} />)
      }
    </div>
  );
};

export default Rooms;
