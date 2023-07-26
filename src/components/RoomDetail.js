import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ChangeHistorySharpIcon from '@mui/icons-material/ChangeHistorySharp';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import styles from '../styles/roomDetail.module.css';
import { fetchRooms } from '../redux/reducers/room';

const RoomDetail = () => {
  const { rooms, loading } = useSelector((store) => store.room);
  const dispatch = useDispatch();
  const { roomId } = useParams();
  const room = rooms.find((room) => room.id === parseInt(roomId, 10));

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch, roomId]);

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className={styles['detail-container']}>
          <div className={styles['left-detail']}>
            <div className={styles['image-container']}>
              <img className={styles['room-image']} src={room?.image} alt="room pic" />
            </div>
            <button
              type="button"
              className={styles['back-button']}
              onClick={() => navigate(-1)}
              aria-label="Go back"
            >
              <ChangeHistorySharpIcon className={styles.back} style={{ fontSize: 20 }} />
            </button>
          </div>
          <div className={styles['right-detail']}>
            <p className={styles['room-description']}>{room?.description}</p>
            <p className={styles['room-type']}>
              ROOM TYPE
              <span>Twin</span>
            </p>
            <p className={styles['price-container']}>
              PRICE
              <p>
                <span>$</span>
                {room?.night_cost}
                <span>/night</span>
              </p>
            </p>
            <p className={styles['room-status']}>
              STATUS
              <span>Open</span>
            </p>

            <Link className={styles['reserve-button-container']} to="/add-reservation">
              <span className={styles['left-round']} />
              <div className={styles['reserve-button']}>BOOK NOW</div>
              <span className={styles['right-round']}>
                <ChevronRightRoundedIcon />
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default RoomDetail;
