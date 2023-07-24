import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms } from '../redux/reducers/room';
import styles from '../styles/rooms.module.css';
import Carousel from './Carousel';

const Rooms = () => {
  const { rooms, loading } = useSelector((store) => store.rooms);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  return (
    <div className={styles['rooms-container']}>
      <h2 className={styles['rooms-header']}>All AVAILABLE ROOMS</h2>
      <span className={styles['select-room-text']}>Please select your favorite room</span>
      {
        loading ? (
          <p>loading...</p>) : (<Carousel rooms={rooms} />)
      }
    </div>
  );
};

export default Rooms;
