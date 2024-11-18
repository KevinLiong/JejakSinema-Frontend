import React from "react";
import "./Podium.css";

const Podium = ({ movies }) => {
    const podiumOrder = [movies[1], movies[0], movies[2]];

    return (
        <div className="podium-container">
            <div className="movies-row">
                {podiumOrder.map((movie, index) => (
                    <div key={movie.filmId} className={`podium-item podium-item-${index + 1}`}>
                        <img src={movie.poster} alt={movie.judul} className="podium-poster" />
                        <p className="podium-title">{movie.judul}</p>
                        <p className="podium-reviews">{movie.reviews} reviews</p>
                    </div>
                ))}
            </div>
            <div className="podium-base">
                <div className="podium-level level-2">2</div>
                <div className="podium-level level-1">1</div>
                <div className="podium-level level-3">3</div>
            </div>
        </div>
    );
};

export default Podium;