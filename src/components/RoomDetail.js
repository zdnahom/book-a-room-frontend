import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import ChangeHistorySharpIcon from '@mui/icons-material/ChangeHistorySharp';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import styles from '../styles/roomDetail.module.css';

const RoomDetail = () => {
  const { roomId } = useParams();
  const { rooms, loading } = useSelector((store) => store.room);
  const singleRoom = rooms.find((room) => room.id === Number(roomId));

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className={styles['detail-container']}>
          <div className={styles['left-detail']}>
            <div className={styles['image-container']}>
              <img className={styles['room-image']} src={singleRoom.image} alt="room pic" />
            </div>
            <Link className={styles['back-button']} to="/">
              <ChangeHistorySharpIcon className={styles.back} style={{ fontSize: 20 }} />
            </Link>
          </div>
          <div className={styles['right-detail']}>
            <p className={styles['room-description']}>{singleRoom.description}</p>
            <p className={styles['room-type']}>
              ROOM TYPE
              <span>Twin</span>
            </p>
            <p className={styles['price-container']}>
              PRICE
              <p>
                <span>$</span>
                {singleRoom.night_cost}
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