import React, { useEffect } from "react";
import ProfileHeader from "../components/UserPage/ProfileHeader";
import FavoriteMovies from "../components/UserPage/FavoriteMovies";
import ReviewedMovies from "../components/UserPage/ReviewedMovies";
import ButtonToHome from "../components/UserPage/ButtonToHome";
import { favoriteMovies, userReviews } from "../data/userData";
import "./UserPage.css";
import { useNavigate } from "react-router-dom";
import foto1 from "../assets/profilepicture.png";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from '../axios.js'

const UserPage = () => {
    const { currentUser, userToken, setCurrentUser, setUserToken } = useStateContext()

    const navigate = useNavigate();

    const handleViewReview = (review) => {
        alert(`User Review:\n${review.ulasan}`);
    };

    useEffect(() => {
        axiosClient.get('/me')
          .then(({ data }) => {
            setCurrentUser(data);
          })
          .catch(() => {
            setUserToken(null);
          });
    }, [userToken]);
    

    return (
        <div className="user-profile">
            <ProfileHeader username={currentUser.name || 'Loading...'} photo={foto1} />

            <hr className="section-divider" />
            <FavoriteMovies movies={favoriteMovies} />

            <hr className="section-divider" />
            <ReviewedMovies reviews={userReviews} onClickReview={handleViewReview} />

            <button className="log-button" onClick={() => navigate("/add-review")}>+LOG</button>

            <ButtonToHome />
        </div>
    );
};

export default UserPage;