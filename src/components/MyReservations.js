const MyReservations = () => {
  const reservations = [
    {
      id: 1,
      room_id: 1,
      start_date: '2021-10-01',
      end_date: '2021-10-04',
      nights: 3,
      cost: 300,
    },
    {
      id: 2,
      room_id: 2,
      start_date: '2021-10-01',
      end_date: '2021-10-04',
      nights: 3,
      cost: 300,
    },
  ];

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
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {reservation.start_date}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{reservation.end_date}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{reservation.cost}</td>
              <td className="whitespace-nowrap px-4 py-2">
                <button
                  type="submit"
                  className="inline-block rounded bg-lime-600 px-4 py-2 text-xs font-medium text-white hover:bg-lime-700"
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
