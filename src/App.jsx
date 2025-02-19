import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import AssignmentList from "./Components/AssignmentList";
import ProfileCircles from "./Components/ProfileCircles";


const App = () => {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="page-title">Big Hero 6</h1>
        </header>
        <main>
          <AssignmentList />
          <ProfileCircles />
        </main>
        <img src="baymax.png" alt="Baymax" className="baymax-img" />
      </div>
    );
  };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
