import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Movies from "./components/Movies";
import Header from "./components/Header";
import Details from "./components/Details";

const MOVIES_LIST_URL = "https://api.themoviedb.org/3/movie/500/similar?api_key=29b93bae8c2da9ca4afabbd1384e3cc0";

function App() {
  const [movies, setMovies] = useState([]);
  const [toggleWatchedList, setToggleWatchedList] = useState([]);
  const [toggledMovie, setToggledMovie] = useState(false);

  function setWatchedMovie(id) {
    if(toggleWatchedList.find(row => row.id === id)) {
      setToggleWatchedList(toggleWatchedList.map(item => {
        if(item.id === id) {
          return {
            ...item,
            watched: !item.watched
          }
        }
        else return item;
      }));
    }
    else {
      setToggleWatchedList(toggleWatchedList.concat([{ id: id, watched: true }]));
    }
  }

  function getWatchedMovie(id) {
    const movie = toggleWatchedList.find(row => row.id === id);
    if(movie) return movie.watched;
    else return false;
  }
    
  function showDetails(e, movie_id) {
      e.preventDefault();
      setToggledMovie(movie_id);
  }

  function closeDetails() {
    setToggledMovie(null);
  }

  useEffect(() => {
    // Load Movies
    axios
      .get(`${MOVIES_LIST_URL}`)
      .then((res) => setMovies(res.data.results));

  }, []);

  return (
    <div className="App">
      <Header />
      <Movies title="Movies" movies={movies} showDetails={showDetails} />
      <Details 
        closeDetails={closeDetails} 
        id={toggledMovie} 
        setWatchedMovie={setWatchedMovie}
        getWatchedMovie={getWatchedMovie}
      />
    </div>
  );
}

export default App;
