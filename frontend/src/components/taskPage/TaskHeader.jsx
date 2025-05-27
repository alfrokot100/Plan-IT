import "./TaskHeader.css";
import { Link } from "react-router-dom";
import React from "react";


export default function TaskHeader(){

  return (
    <div className="header-container">
      <div className="header-title">
        <h1 className="header-title">Uppgifter</h1>
      </div>
      <div className="header-subtitle-right">
      <h4>
          <Link to="/dashboard" className="header-subtitle-right">BuildBoard</Link> / <Link to="/task" className="header-subtitle-right">Uppgifter</Link>
        </h4>
      </div>
      
    </div>
  );
}
  