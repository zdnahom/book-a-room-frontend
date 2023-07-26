const AddReservationForm = () => {
  const rooms = [
    { id: 1, name: 'Room 1' },
    { id: 2, name: 'Room 2' },
    { id: 3, name: 'Room 3' },
  ];
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:gap-x-16">
          <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm ">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 md:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Type</dt>
                <dd className="text-gray-700 sm:col-span-2">Single</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Room Number</dt>
                <dd className="text-gray-700 sm:col-span-2">007</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Cost/night</dt>
                <dd className="text-gray-700 sm:col-span-2">$100</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Description</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis
                  explicabo doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia
                  fugit aperiam aspernatur neque molestiae labore aliquam soluta architecto?
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
                >
                  <option value>Please Select A Room</option>
                  {rooms.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name}
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
                  />
                </div>
              </div>
              <div className="pt-10 lg:pt-20 text-center">
                The Total Cost for your
                <span className="font-bold"> 3 </span>
                nights stay is
                <span className="font-bold"> $300</span>
              </div>
              <div className="mt-4 flex justify-center">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg hover:bg-black px-5 py-3 font-bold sm:w-auto hover:text-white  border-2 border-black transition"
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
