import React, { useState } from "react";
import "./RecentReviews.css";

const RecentReviews = ({ reviews }) => {
    const [curIndex, setCurIndex] = useState(0);
    const itemsPerPage = 4;

    const uniqueReviews = reviews.filter(
        (review, index, self) =>
            index === self.findIndex((r) => r.filmId === review.filmId)
    );

    const totalMovies = uniqueReviews.length;

    const handleNext = () => {
        if (curIndex + itemsPerPage < totalMovies) {
            setCurIndex(curIndex + itemsPerPage);
        }
    };

    const handleBack = () => {
        if (curIndex - itemsPerPage >= 0) {
            setCurIndex(curIndex - itemsPerPage);
        }
    };

    const visibleReviews = reviews.slice(curIndex, curIndex + itemsPerPage);

    return (
        <div className="recent-reviews">
            {curIndex > 0 && (
                <button className="pagination-arrow back-arrow" onClick={handleBack}>
                    &#8592;
                </button>
            )}
            <div className="reviews-container">
                {visibleReviews.map((review) => (
                    <div key={review.forumId} className="review-item">
                        <img src={review.poster} alt={review.judul} className="review-poster" />
                        <div className="review-details">
                            <h4>{review.judul}</h4>
                            <p>"{review.ulasan}"</p>
                            <p className="review-user">by {review.userId}</p>
                            <div className="review-meta">
                                <span>Rating: {review.rating} ⭐</span>
                                <span>Likes: {review.like}</span>
                                <span>Dislikes: {review.dislike}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {curIndex + itemsPerPage < totalMovies && (
                <button className="pagination-arrow next-arrow" onClick={handleNext}>
                    &#8594;
                </button>
            )}
        </div>
    );
};

export default RecentReviews;
