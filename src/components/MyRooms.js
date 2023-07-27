import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRoom, fetchRooms } from '../redux/reducers/room';
import styles from '../styles/my_rooms.module.css';

const MyRooms = () => {
  const { rooms, loading } = useSelector((store) => store.room);
  const { user } = useSelector((store) => store.user);
  const myRooms = rooms.filter((room) => room.user_id === user.user.id);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteRoom(id));
  };

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

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
                <img className={styles['room-img']} src={room.image} alt="room pic" />
                <p className={styles['room-description']}>{room.description}</p>
                <p className={styles['room-price']}>
                  <span>$</span>
                  {room.night_cost}
                  <span>/night</span>
                </p>
              </Link>
              <button
                className="bg-lime-500 text-white px-2 py-1 rounded"
                type="button"
                onClick={() => handleDelete(room.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyRooms;
