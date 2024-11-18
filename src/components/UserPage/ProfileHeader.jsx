import React from "react";
import "./ProfileHeader.css"

const ProfileHeader = ({ username, photo }) => {
    return (
        <div className="profile-header">
            <img src={photo} alt="User Profile" className="profile-photo" />
            <h2 className="profile-username">{username}</h2>
        </div>
    );
};

export default ProfileHeader;