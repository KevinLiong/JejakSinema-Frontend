import React from "react";
import { useNavigate } from "react-router-dom";
import "./ButtonToHome.css";

const ButtonToHome = () => {
    const navigate = useNavigate();

    return (
        <button className="button-to-home" onClick={() => navigate("/")}>Home</button>
    );
};

export default ButtonToHome;