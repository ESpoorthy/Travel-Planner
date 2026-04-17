import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import "./UserProfile.css";

export default function UserProfile() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!user) return null;

  return (
    <div className="user-profile" ref={dropdownRef}>
      <button className="user-avatar-btn" onClick={() => setIsOpen(!isOpen)}>
        <div className="user-avatar" style={{ background: user.avatar.color }}>
          {user.avatar.initials}
        </div>
        <span className="user-chevron">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="user-dropdown">
          <div className="user-dropdown-header">
            <div className="user-avatar-large" style={{ background: user.avatar.color }}>
              {user.avatar.initials}
            </div>
            <div className="user-info">
              <div className="user-name">{user.name}</div>
              <div className="user-email">{user.email}</div>
            </div>
          </div>

          <div className="user-stats">
            <div className="user-stat">
              <span className="user-stat-icon">✈️</span>
              <div>
                <div className="user-stat-value">{user.tripsPlanned || 0}</div>
                <div className="user-stat-label">Trips Planned</div>
              </div>
            </div>
            <div className="user-stat">
              <span className="user-stat-icon">📅</span>
              <div>
                <div className="user-stat-value">
                  {new Date(user.joinedDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                </div>
                <div className="user-stat-label">Member Since</div>
              </div>
            </div>
          </div>

          <div className="user-dropdown-divider"></div>

          <button className="user-dropdown-item" onClick={() => setIsOpen(false)}>
            <span className="user-dropdown-icon">⚙️</span>
            Settings
          </button>
          <button className="user-dropdown-item" onClick={() => setIsOpen(false)}>
            <span className="user-dropdown-icon">💾</span>
            Saved Trips
          </button>
          <button className="user-dropdown-item" onClick={() => setIsOpen(false)}>
            <span className="user-dropdown-icon">❤️</span>
            Favorites
          </button>

          <div className="user-dropdown-divider"></div>

          <button className="user-dropdown-item logout" onClick={logout}>
            <span className="user-dropdown-icon">🚪</span>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
