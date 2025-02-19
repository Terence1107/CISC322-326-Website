import React, { useState } from "react";
import "./ProfileCircles.css";

const ProfileCircles = () => {
const [copiedEmail, setCopiedEmail] = useState(null);

const members = [
{ name: "Terence Jiang", imgSrc: "tj.png", email: "21twxj@queensu.ca" },
{ name: "Carter Gillam", imgSrc: "cg.png", email: "21cng3@queensu.ca" },
{ name: "Kavin Arasu", imgSrc: "ka.jpg", email: "21kla5@queensu.ca" },
{ name: "Alex Zhao", imgSrc: "az.jpg", email: "21atxz@queensu.ca" },
{ name: "Daniel Gao", imgSrc: "dg.png", email: "21dg59@queensu.ca" },
{ name: "Kevin Chen", imgSrc: "kc.png", email: "21kzc2@queensu.ca" },
];

const copyToClipboard = (email) => {
navigator.clipboard.writeText(email).then(() => {
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 400);
});
};

return (
<div className="profile-circles-wrapper">
    <div className="profile-circles-container">
        {members.map((member, index) => (
            <div key={index} className="profile-circle" onClick={() => copyToClipboard(member.email)}>
            <img src={member.imgSrc} alt={member.name} />
            <p>{member.name}</p>
            {copiedEmail === member.email && (
              <span className="copied-message">Copied Email!</span>
            )}
            </div>
        ))}
    </div>
</div>
);
};

export default ProfileCircles;