import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { MovieHeader, MovieContext } from "./styles";
import WatchedToggle from "./watchedToggle";

const DETAILS_LIST_URL = "https://api.themoviedb.org/3/movie/500?api_key=29b93bae8c2da9ca4afabbd1384e3cc0";

function Details({ id, closeDetails, setWatchedMovie, getWatchedMovie }) {
    const [movie, setMovie] = useState({});

    function getNameFromArray(array) {
        return array.map(item => item.name).join(", ")
    }

    useEffect(() => {
        // Load Movies
        axios
          .get(`${DETAILS_LIST_URL}`)
          .then((res) => setMovie(res.data));
    
    }, []);

    return id ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <MovieHeader>
                    {movie.title}
                  </MovieHeader>
                  <WatchedToggle id={id} toggle={getWatchedMovie(id)} setWatchedMovie={setWatchedMovie}></WatchedToggle>
                </div>
                <div className="relative p-6 flex-auto">
                  <MovieContext>
                    {movie.overview}
                  </MovieContext>
                  <MovieContext>
                    Budget: {movie.budget}
                  </MovieContext>
                  <MovieContext>
                    Genres: {getNameFromArray(movie.genres)}
                  </MovieContext>
                  <MovieContext>
                    URL: {movie.homepage}
                  </MovieContext>
                  <MovieContext>
                    Production Companies: {getNameFromArray(movie.production_companies)}
                  </MovieContext>
                  <MovieContext>
                    Production Countries: {getNameFromArray(movie.production_countries)}
                  </MovieContext>
                  <MovieContext>
                    Release date: {movie.release_date}
                  </MovieContext>
                  <MovieContext>
                    Languages: {getNameFromArray(movie.spoken_languages)}
                  </MovieContext>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => closeDetails()}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    ) : null
}

export default Details;