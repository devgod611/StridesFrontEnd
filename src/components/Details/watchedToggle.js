import React from "react";

function WatchedToggle({ toggle, setWatchedMovie, id }) {
    const toggleClass = ' transform translate-x-5 ';

    return (
        <div className="flex">
            <span className="text-black float-left mr-2">Watched</span>
            <div
                className={"md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer"
                    + (toggle ? ' bg-blue-500': null)}
                onClick={() => {
                    setWatchedMovie(id);
                }}
            >
                <div
                    className = {"bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform" +  (toggle ? toggleClass : null)}
                >
                </div>
            </div>
        </div>
    );
}

export default WatchedToggle;