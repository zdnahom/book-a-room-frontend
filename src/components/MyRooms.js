import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRoom, fetchRooms } from '../redux/reducers/room';
import styles from '../styles/my_rooms.module.css';

const MyRooms = () => {
  const { rooms, myRooms, loading } = useSelector((store) => store.rooms);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);
  console.log(rooms);
  return (
    <div className={styles['rooms-container']}>
      <h2 className={styles['rooms-header']}>MY ROOMS</h2>
      {loading ? (
        <p>loading...</p>
      ) : (
        <ul className={styles.rooms}>
          {myRooms.map((room) => (
            <li className={styles.room} key={room.id}>
              <Link to={`/rooms/${room.id}`} className={styles['custom-link']}>
                <img
                  className={styles['room-img']}
                  src={room.image}
                  alt="room pic"
                />
                <p className={styles['room-description']}>{room.description}</p>
                <p className={styles['room-price']}>
                  $
                  {room.night_cost}
                  <span>/night</span>
                </p>
              </Link>
              <button type="button" className={styles['button-container']} onClick={() => dispatch(deleteRoom(room.id))}>
                <span className={styles['left-round']} />
                <div className />
                <div className={styles.button}>
                  REMOVE
                </div>
                <span className={styles['right-round']} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyRooms;
