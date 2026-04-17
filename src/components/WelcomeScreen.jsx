import React, { useEffect, useState } from "react";
import "./WelcomeScreen.css";

export default function WelcomeScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 300);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="welcome-screen">
      <div className="welcome-content">
        <div className="welcome-icon-group">
          <span className="welcome-icon" style={{ animationDelay: "0s" }}>✈️</span>
          <span className="welcome-icon" style={{ animationDelay: "0.2s" }}>🌍</span>
          <span className="welcome-icon" style={{ animationDelay: "0.4s" }}>🗺️</span>
        </div>
        
        <h1 className="welcome-title">TravelCraft</h1>
        <p className="welcome-subtitle">Your Journey Begins Here</p>
        
        <div className="welcome-progress-bar">
          <div className="welcome-progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        
        <p className="welcome-loading-text">{progress < 100 ? "Loading..." : "Ready!"}</p>
      </div>
    </div>
  );
}
