import React from "react";
import "./TopRatedMovies.css";

const TopRatedMovies = ({ movies }) => {
    const topRatedMovies = movies.filter((movie) => movie.rating >= 4.5).sort((a, b) => b.rating - a.rating).slice(0, 6);;

    return (
        <div className="top-rated-movies">
            <div className="top-rated-container">
                {topRatedMovies.map((movie) => (
                    <div key={movie.filmId} className="top-rated-item">
                        <img src={movie.poster} alt={movie.judul} className="top-rated-poster" />
                        <p className="top-rated-title">{movie.judul}</p>
                        <p className="top-rated-rating">Rating: {movie.rating} ⭐</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopRatedMovies;