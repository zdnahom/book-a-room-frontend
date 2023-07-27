import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations, deleteReservation } from '../redux/reducers/reservation';

const MyReservations = () => {
  const { reservations, loading } = useSelector((store) => store.reservation);

  const { user } = useSelector((store) => store.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReservations(user.user.id));
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteReservation(id));
  };

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div className="overflow-x-auto max-w-6xl mx-auto flex min-h-screen pt-20 justify-center">
      <table className="min-w-full divide-y-2 divide-gray-200 text-sm bg-slate-500/10 rounded-2xl h-fit">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Room</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date Start</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date End</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Cost</th>
            <th className="whitespace-nowrap px-[42px] py-2 font-medium text-gray-900">Unbook</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {reservations.map((reservation) => (
            <tr key={reservation.id}>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {reservation.room_id}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{reservation.start}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{reservation.end}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{reservation.cost}</td>
              <td className="whitespace-nowrap px-4 py-2">
                <button
                  type="submit"
                  className="inline-block rounded bg-lime-600 px-4 py-2 text-xs font-medium text-white hover:bg-lime-700"
                  onClick={() => handleDelete(reservation.id)}
                >
                  Unbook
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyReservations;
