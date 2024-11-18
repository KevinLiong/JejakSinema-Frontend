import React from "react";
import { useNavigate } from "react-router-dom";
import "./ButtonToProfile.css";

const ButtonToProfile = () => {
    const navigate = useNavigate();

    return (
        <button className="button-to-profile" onClick={() => navigate("/user-profile")}>Profile</button>
    );
};

export default ButtonToProfile;