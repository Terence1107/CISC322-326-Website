import React from "react";
import AssignmentCard from "./AssignmentCard";
import "./AssignmentList.css"

const assignments = [
  { id: 1, title: "Assignment 1", description: "Conceptual Architecture Report", report: "Big_Hero_6_A1_Report.pdf", presentation: "Big_Hero_6_Presentation.pdf"  },
  { id: 2, title: "Assignment 2", description: "Concrete Architecture Report", report: "CISC 322 a2.pdf", presentation: "BigHero6_Concrete_Architecture.pdf"  },
  { id: 3, title: "Assignment 3", description: "Proposal for Enhancement Report", report: "#", presentation: "#"  }
];

const AssignmentList = () => {
  return (
    
    <div className="assignment-list">
      <h2>Course Assignments</h2>
      <div className="assignment-grid">
        {assignments.map((assignment) => (
          <AssignmentCard key={assignment.id} assignment={assignment} />
        ))}
      </div>
      
    </div>
  );
};



export default AssignmentList;