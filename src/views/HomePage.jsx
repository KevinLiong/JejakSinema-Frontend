import React from "react";
import Podium from "../components/HomePage/Podium";
import RecentReviews from "../components/HomePage/RecentReviews";
import TopRatedMovies from "../components/HomePage/TopRatedMovies";
import ButtonToProfile from "../components/HomePage/ButtonToProfile";
import { mostReviewedMovies, recentReviews } from "../data/listMovie";
import "./HomePage.css";

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Welcome to JejakSinema</h1>

            <h2>Movie of the Month</h2>
            <Podium movies={mostReviewedMovies}/>

            <hr className="section-divider" />

            <h2>Recent Reviews</h2>
            <RecentReviews reviews={recentReviews}/>

            <hr className="section-divider" />

            <h2>Top Rated Movies</h2>
            <TopRatedMovies movies={recentReviews}/>

            <hr className="section-divider" />
            <ButtonToProfile />
        </div>
    );
};

export default HomePage;