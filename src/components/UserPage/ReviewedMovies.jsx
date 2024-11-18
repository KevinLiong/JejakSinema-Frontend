import React from "react";
import "./ReviewedMovies.css";

const ReviewedMovies = ({ reviews }) => {
    return (
        <div className="reviewed-movies">
            <h3>Reviewed Movies</h3>
            <div className="reviewed-container">
                {reviews.slice(0, 4).map((review) => (
                    <div key={review.filmId} className="reviewed-item">
                        <div className="reviewed-card">
                            <div className="reviewed-card-front">
                                <img src={review.poster} alt={review.judul} className="reviewed-movie-poster" />
                                <h4 className="reviewed-movie-title">{review.judul}</h4>
                                <p className="reviewed-movie-info">User's Rating: {review.rating} ⭐</p>
                                <p className="reviewed-movie-info">Logged Date: {review.loggedDate}</p>
                            </div>
                            <div className="reviewed-card-back">
                                <p className="review-summary-title">Ringkasan Review:</p>
                                <p className="reviewed-review-text">{review.ulasan}</p>
                                <button className="see-full-review">Click here to see full review</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewedMovies;
