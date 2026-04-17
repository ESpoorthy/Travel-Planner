import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import "./Panels.css";

const POPULAR_DESTINATIONS = [
  { name: "Goa", country: "India", icon: "🏖️", tag: "Beach", color: "#f97316" },
  { name: "Hyderabad", country: "India", icon: "🕌", tag: "Heritage", color: "#8b5cf6" },
  { name: "Bali", country: "Indonesia", icon: "🌴", tag: "Tropical", color: "#10b981" },
  { name: "Paris", country: "France", icon: "🗼", tag: "Romantic", color: "#ec4899" },
  { name: "Tokyo", country: "Japan", icon: "🗻", tag: "Culture", color: "#ef4444" },
  { name: "Dubai", country: "UAE", icon: "🏙️", tag: "Luxury", color: "#f59e0b" },
  { name: "Manali", country: "India", icon: "🏔️", tag: "Adventure", color: "#3b82f6" },
  { name: "Maldives", country: "Maldives", icon: "🐠", tag: "Luxury", color: "#06b6d4" },
  { name: "Rajasthan", country: "India", icon: "🏰", tag: "Heritage", color: "#d97706" },
  { name: "Singapore", country: "Singapore", icon: "🦁", tag: "City", color: "#6366f1" },
  { name: "Santorini", country: "Greece", icon: "🌊", tag: "Romantic", color: "#3b82f6" },
  { name: "New York", country: "USA", icon: "🗽", tag: "City", color: "#64748b" },
];

export default function Favourites({ onClose, onSelectDestination }) {
  const { user } = useAuth();
  const [favs, setFavs] = useState([]);
  const [toast, setToast] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(`favs_${user?.id}`) || "[]");
    setFavs(stored);
  }, [user]);

  const toggleFav = (dest) => {
    const exists = favs.find((f) => f.name === dest.name);
    let updated;
    if (exists) {
      updated = favs.filter((f) => f.name !== dest.name);
      showToast(`${dest.name} removed from favourites`);
    } else {
      updated = [...favs, { ...dest, savedAt: new Date().toISOString() }];
      showToast(`${dest.name} added to favourites ❤️`);
    }
    setFavs(updated);
    localStorage.setItem(`favs_${user?.id}`, JSON.stringify(updated));
  };

  const isFav = (name) => favs.some((f) => f.name === name);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  const handlePlan = (dest) => {
    onSelectDestination(dest.name);
    onClose();
  };

  return (
    <div className="panel-overlay" onClick={onClose}>
      <div className="panel-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="panel-header">
          <div className="panel-header-left">
            <span className="panel-header-icon">❤️</span>
            <div>
              <h2 className="panel-title">Favourites</h2>
              <p className="panel-subtitle">{favs.length} destination{favs.length !== 1 ? "s" : ""} saved</p>
            </div>
          </div>
          <button className="panel-close" onClick={onClose}>✕</button>
        </div>

        <div className="panel-body">
          {/* Saved Favourites */}
          {favs.length > 0 && (
            <div className="fav-section">
              <div className="fav-section-title">❤️ Your Favourites</div>
              <div className="fav-grid">
                {favs.map((dest) => (
                  <div key={dest.name} className="fav-card fav-card--saved">
                    <div className="fav-card-icon" style={{ background: dest.color + "22" }}>
                      {dest.icon}
                    </div>
                    <div className="fav-card-info">
                      <div className="fav-card-name">{dest.name}</div>
                      <div className="fav-card-country">{dest.country}</div>
                    </div>
                    <div className="fav-card-actions">
                      <button className="fav-plan-btn" onClick={() => handlePlan(dest)}>
                        Plan ✈️
                      </button>
                      <button
                        className="fav-heart-btn active"
                        onClick={() => toggleFav(dest)}
                        title="Remove from favourites"
                      >❤️</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Discover */}
          <div className="fav-section">
            <div className="fav-section-title">🌍 Discover Destinations</div>
            <div className="fav-grid">
              {POPULAR_DESTINATIONS.map((dest) => (
                <div key={dest.name} className="fav-card">
                  <div className="fav-card-icon" style={{ background: dest.color + "22" }}>
                    {dest.icon}
                  </div>
                  <div className="fav-card-info">
                    <div className="fav-card-name">{dest.name}</div>
                    <div className="fav-card-country">{dest.country}</div>
                    <span className="fav-card-tag" style={{ background: dest.color + "22", color: dest.color }}>
                      {dest.tag}
                    </span>
                  </div>
                  <div className="fav-card-actions">
                    <button className="fav-plan-btn" onClick={() => handlePlan(dest)}>
                      Plan ✈️
                    </button>
                    <button
                      className={`fav-heart-btn ${isFav(dest.name) ? "active" : ""}`}
                      onClick={() => toggleFav(dest)}
                      title={isFav(dest.name) ? "Remove" : "Add to favourites"}
                    >
                      {isFav(dest.name) ? "❤️" : "🤍"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Toast */}
        {toast && <div className="panel-toast">{toast}</div>}
      </div>
    </div>
  );
}
