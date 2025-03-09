import React from "react";

const BookNow = ({
  setShowBookNow,
}: {
  setShowBookNow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <section>
      <div
        onClick={() => setShowBookNow(false)}
        className="h-screen w-screen flex flex-col items-center justify-center bg-black/85 absolute inset-0 z-50"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col bg-white dark:bg-gray-800 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-11/12 lg:w-1/3"
        >
          <div className="font-medium self-center text-xl sm:text-3xl text-gray-800 dark:text-white">
            Join us Now
          </div>
          <div className="text-xl sm:text-sm text-gray-800 text-center dark:text-white dark:opacity-80">
            Enter Data to Booking Now!
          </div>

          <div className="mt-5">
            <form
              method="/"
              onSubmit={(e) => e.preventDefault()}
              className="space-y-3"
            >
              <div className="flex flex-col">
                <label className="mb-1 text-xs tracking-wide text-gray-600 dark:text-white dark:opacity-80">
                  Hotel Name:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="text-sm placeholder-gray-500 dark:placeholder-gray-600 font-medium px-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Enter Hotel Name.."
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-xs tracking-wide text-gray-600 dark:text-white dark:opacity-80">
                  Guest Name:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="text-sm placeholder-gray-500 dark:placeholder-gray-600 font-medium px-4 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Enter Guest Name.."
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 dark:text-white dark:opacity-80">
                  Date In:
                </label>
                <div className="relative">
                  <input
                    type="date"
                    className="text-sm placeholder-gray-500 dark:placeholder-gray-600 font-medium px-4 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Enter Date In.."
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 dark:text-white dark:opacity-80">
                  Date Out:
                </label>
                <div className="relative">
                  <input
                    type="date"
                    className="text-sm placeholder-gray-500 dark:placeholder-gray-600 font-medium px-4 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Enter Date Out.."
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 dark:text-white dark:opacity-80">
                  Room Number:
                </label>
                <div className="relative">
                  <input
                    type="number"
                    className="text-sm placeholder-gray-500 dark:placeholder-gray-600 font-medium px-4 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Enter Room Number.."
                  />
                </div>
              </div>

              <div className="flex w-full gap-4">
                <button
                  type="submit"
                  className="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-xl py-2 w-full transition duration-150 ease-in"
                >
                  <span className="mr-2 uppercase">Submit</span>
                  <span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </button>
                <button
                  onClick={() => setShowBookNow(false)}
                  className="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-red-500 hover:bg-red-600 rounded-xl py-2 w-full transition duration-150 ease-in"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookNow;
