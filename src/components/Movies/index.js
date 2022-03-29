import { MoviesContainer, MoviesTitle, MoviesRow, MoviesPoster, MoviesTitlePoster, MoviesContextPoster } from "./styles";

function Movies({ title, movies, showDetails }) {
    return (
        <MoviesContainer>
            <MoviesTitle>{title}</MoviesTitle>
            <MoviesRow>
                {movies.map((movie) => (
                    <MoviesPoster key={movie.id}>
                        <MoviesTitlePoster onClick={(e) => showDetails(e, movie.id)}>
                            {movie.original_title}
                        </MoviesTitlePoster>
                        <MoviesContextPoster 
                            src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
                            alt={movie.original_title}
                        />
                    </MoviesPoster>
                ))}
            </MoviesRow>
        </MoviesContainer>
    );
}
  
export default Movies;