import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import SavedTrips from "./panels/SavedTrips";
import Favourites from "./panels/Favourites";
import Settings from "./panels/Settings";
import "./UserProfile.css";

export default function UserProfile({ onSelectDestination }) {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [panel, setPanel] = useState(null); // "settings" | "saved" | "favs"
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const openPanel = (name) => {
    setIsOpen(false);
    setPanel(name);
  };

  if (!user) return null;

  const savedCount = JSON.parse(localStorage.getItem(`trips_${user.id}`) || "[]").length;
  const favCount   = JSON.parse(localStorage.getItem(`favs_${user.id}`)  || "[]").length;

  return (
    <>
      <div className="user-profile" ref={dropdownRef}>
        <button className="user-avatar-btn" onClick={() => setIsOpen(!isOpen)}>
          <div className="user-avatar" style={{ background: user.avatar.color }}>
            {user.avatar.initials}
          </div>
          <span className="user-name-pill">{user.name.split(" ")[0]}</span>
          <span className="user-chevron">{isOpen ? "▲" : "▼"}</span>
        </button>

        {isOpen && (
          <div className="user-dropdown">
            {/* Profile Header */}
            <div className="user-dropdown-header">
              <div className="user-avatar-large" style={{ background: user.avatar.color }}>
                {user.avatar.initials}
              </div>
              <div className="user-info">
                <div className="user-name">{user.name}</div>
                <div className="user-email">{user.email}</div>
                <div className="user-joined">
                  Member since {new Date(user.joinedDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="user-stats">
              <div className="user-stat">
                <span className="user-stat-icon">✈️</span>
                <div>
                  <div className="user-stat-value">{user.tripsPlanned || 0}</div>
                  <div className="user-stat-label">Planned</div>
                </div>
              </div>
              <div className="user-stat">
                <span className="user-stat-icon">💾</span>
                <div>
                  <div className="user-stat-value">{savedCount}</div>
                  <div className="user-stat-label">Saved</div>
                </div>
              </div>
              <div className="user-stat">
                <span className="user-stat-icon">❤️</span>
                <div>
                  <div className="user-stat-value">{favCount}</div>
                  <div className="user-stat-label">Favourites</div>
                </div>
              </div>
            </div>

            <div className="user-dropdown-divider" />

            {/* Menu Items */}
            <button className="user-dropdown-item" onClick={() => openPanel("settings")}>
              <span className="user-dropdown-icon">⚙️</span>
              <span className="user-dropdown-label">Settings</span>
              <span className="user-dropdown-arrow">›</span>
            </button>

            <button className="user-dropdown-item" onClick={() => openPanel("saved")}>
              <span className="user-dropdown-icon">💾</span>
              <span className="user-dropdown-label">Saved Trips</span>
              {savedCount > 0 && <span className="user-dropdown-badge">{savedCount}</span>}
              <span className="user-dropdown-arrow">›</span>
            </button>

            <button className="user-dropdown-item" onClick={() => openPanel("favs")}>
              <span className="user-dropdown-icon">❤️</span>
              <span className="user-dropdown-label">Favourites</span>
              {favCount > 0 && <span className="user-dropdown-badge">{favCount}</span>}
              <span className="user-dropdown-arrow">›</span>
            </button>

            <div className="user-dropdown-divider" />

            <button className="user-dropdown-item logout" onClick={logout}>
              <span className="user-dropdown-icon">🚪</span>
              <span className="user-dropdown-label">Sign Out</span>
            </button>
          </div>
        )}
      </div>

      {/* Panels */}
      {panel === "settings" && <Settings onClose={() => setPanel(null)} />}
      {panel === "saved"    && <SavedTrips onClose={() => setPanel(null)} />}
      {panel === "favs"     && (
        <Favourites
          onClose={() => setPanel(null)}
          onSelectDestination={(dest) => {
            onSelectDestination?.(dest);
            setPanel(null);
          }}
        />
      )}
    </>
  );
}
