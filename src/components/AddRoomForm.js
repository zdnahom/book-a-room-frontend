import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createRoom } from '../redux/reducers/room';
import styles from '../styles/add_room_form.module.css';

const AddRoomForm = () => {
  const [roomData, setRoomData] = useState({
    description: '',
    num: '',
    room_type: '',
    night_cost: '',
    image: '',
    user_id: 1,
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createRoom(roomData));
    setRoomData({
      description: '',
      num: '',
      room_type: '',
      night_cost: '',
      image: '',
      user_id: 1,
    });
  };
  return (
    <div className={styles['form-container']}>
      <h2 className={styles['header-text']}>Add A NEW ROOM</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={roomData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="night_cost">Room Price:</label>
          <input
            type="number"
            id="night_cost"
            name="night_cost"
            value={roomData.night_cost}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="num">Room Number:</label>
          <input
            type="number"
            id="num"
            name="num"
            value={roomData.num}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="room_type">Room Type:</label>
          <select
            id="room_type"
            name="room_type"
            value={roomData.room_type}
            onChange={handleChange}
            required
          >
            <option value="">Select Room Type</option>
            <option value="Standard">Standard</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite</option>
            <option value="Single">Single</option>
            <option value="Twin">Twin</option>
            <option value="Double">Double</option>
            <option value="Queen">Queen</option>
            <option value="King">King</option>
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="image">Room Image:</label>
          <input
            type="text"
            id="image"
            name="image"
            placeholder="Enter room image URL"
            onChange={handleChange}
            accept="image/*"
            required
          />
        </div>
        <div className={styles['button-container']}>
          <span className={styles['left-round']} />
          <button type="submit" className={styles.button}>ADD ROOM</button>
          <span className={styles['right-round']} />
        </div>
      </form>
    </div>
  );
};

export default AddRoomForm;
