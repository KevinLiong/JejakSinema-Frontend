import React from "react";
import "./FavoriteMovies.css"

const FavoriteMovies = ({ movies }) => {
    return (
        <div className="favorite-movies">
            <h3>Favorite Movies</h3>
            <div className="favorite-container">
                {movies.slice(0, 4).map((movie) => (
                    <div key={movie.filmId} className="favorite-item">
                        <img src={movie.poster} alt={movie.judul} className="movie-poster" />
                        <h4 className="movie-title">{movie.judul}</h4>
                        <p className="movie-info">User's Rating: {movie.rating} ⭐</p>
                        <p className="movie-info">Logged Date: {movie.loggedDate}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FavoriteMovies;