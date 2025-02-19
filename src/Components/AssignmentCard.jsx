import React, {useState} from "react";
import "./AssignmentCard.css"


const AssignmentCard = ({ assignment }) => {
  const [hover, setHover] = useState(false);

  return (
    <div 
      className="assignment-card" 
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)}
    >
      
      {!hover ? (
        <>
          <h3 className="assignment-title">{assignment.title}</h3>
          <p className="assignment-description">{assignment.description}</p>
        </>
      ) : (
        <div className="assignment-overlay">
            <img src="armbaymax.webp" alt="Baymax" className="armbaymax-webp" />
          <a href={assignment.report} className="assignment-link">Access Report</a>
          <a href={assignment.presentation} className="assignment-link">Access Presentation</a>
        </div>
      )}
    </div>
  );
};

export default AssignmentCard;