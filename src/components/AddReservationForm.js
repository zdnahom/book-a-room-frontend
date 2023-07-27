import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createReservation } from '../redux/reducers/reservation';

const AddReservationForm = () => {
  const { rooms } = useSelector((store) => store.room);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [reservationData, setReservationData] = useState({
    start: '',
    end: '',
    nights: '',
    cost: '',
    user_id: user.user.id,
    room_id: '',
  });

  const handleCalculateCost = (start, end) => {
    if (!reservationData.start || !reservationData.end || !selectedRoom) return;
    const startDate = start ? new Date(start) : new Date(reservationData.start);
    const endDate = end ? new Date(end) : new Date(reservationData.end);
    const nights = (endDate - startDate) / (1000 * 3600 * 24);
    const cost = nights * selectedRoom.night_cost;
    setReservationData((prevState) => ({
      ...prevState,
      nights,
      cost,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reservationData.start || !reservationData.end || !reservationData.room_id) {
      return alert('Please fill out all fields');
    }
    handleCalculateCost();
    dispatch(createReservation(reservationData));
    return navigate('/my-reservations');
  };

  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:gap-x-16">
          <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm ">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 md:grid-cols-3 sm:gap-4">
                <dt className="font-semibold text-gray-900">Type</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {selectedRoom ? selectedRoom.room_type : 'Please select a room'}
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-semibold text-gray-900">Room Number</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {selectedRoom ? selectedRoom.num : 'NA'}
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-semibold text-gray-900">Cost/night</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {selectedRoom ? `$${selectedRoom.night_cost}` : 'NA'}
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-semibold text-gray-900">Description</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {selectedRoom ? selectedRoom.description : 'NA'}
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                {/* the room image */}
                <dt className="font-semibold text-gray-900">Image</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {selectedRoom ? (
                    <img src={selectedRoom.image} alt="room" className=" object-cover rounded-lg" />
                  ) : (
                    'NA'
                  )}
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:p-12 flex-grow">
            <form className="space-y-4 lg:w-[400px]">
              <div>
                <label htmlFor="room-select" className="text-gray-700 text-sm font-bold mb-2">
                  Rooms
                </label>
                <select
                  name="room-select"
                  className="w-full rounded-lg border-gray-300/50 p-3 text-sm border"
                  onInput={(e) => {
                    setSelectedRoom(rooms.find((room) => room.id === parseInt(e.target.value, 10)));
                    setReservationData((prevState) => ({
                      ...prevState,
                      room_id: e.target.value,
                    }));
                    handleCalculateCost();
                  }}
                >
                  <option value>Please Select A Room</option>
                  {rooms.map((room) => (
                    <option key={room.id} value={room.id} className="text-black flex">
                      Room num
                      {` ${room.num} `}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col items-center justify-between space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
                {/* input reservation start date */}
                <div>
                  <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="start-date">
                    Start Date
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-300/50 p-3 text-sm border"
                    placeholder="Start Date"
                    type="date"
                    id="start-date"
                    onInput={(e) => {
                      setReservationData((prevState) => ({
                        ...prevState,
                        start: e.target.value,
                      }));
                      handleCalculateCost(e.target.value, reservationData.end);
                    }}
                  />
                </div>
                {/* input reservation end date */}
                <div>
                  <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="end-date">
                    End Date
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-300/50 p-3 text-sm border"
                    placeholder="End Date"
                    type="date"
                    id="end-date"
                    onInput={(e) => {
                      setReservationData((prevState) => ({
                        ...prevState,
                        end: e.target.value,
                      }));
                      handleCalculateCost(reservationData.start, e.target.value);
                    }}
                  />
                </div>
              </div>
              {reservationData.nights && reservationData.cost && (
                <div className="pt-10 lg:pt-20 text-center">
                  The Total Cost for your
                  <span className="font-bold mx-1">{reservationData?.nights}</span>
                  nights stay is
                  <span className="font-bold">
                    {reservationData.cost ? ` $${reservationData.cost}` : ''}
                  </span>
                </div>
              )}

              <div className="mt-4 flex justify-center">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg hover:bg-black px-5 py-3 font-bold sm:w-auto hover:text-white  border-2 border-black transition"
                  onClick={handleSubmit}
                >
                  Book
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddReservationForm;
