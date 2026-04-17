import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./Panels.css";

export default function SavedTrips({ onClose }) {
  const { user } = useAuth();
  const [expandedTrip, setExpandedTrip] = useState(null);
  const [deleted, setDeleted] = useState(null);

  const trips = JSON.parse(localStorage.getItem(`trips_${user?.id}`) || "[]");

  const deleteTrip = (id) => {
    const updated = trips.filter((t) => t.id !== id);
    localStorage.setItem(`trips_${user?.id}`, JSON.stringify(updated));
    setDeleted(id);
    setTimeout(() => setDeleted(null), 300);
  };

  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });

  const CATEGORY_COLORS = {
    adventure: "#f97316", sightseeing: "#3b82f6", food: "#ef4444", relax: "#10b981",
  };
  const CATEGORY_ICONS = {
    adventure: "⛰️", sightseeing: "🏛️", food: "🍜", relax: "🌴",
  };

  return (
    <div className="panel-overlay" onClick={onClose}>
      <div className="panel-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="panel-header">
          <div className="panel-header-left">
            <span className="panel-header-icon">💾</span>
            <div>
              <h2 className="panel-title">Saved Trips</h2>
              <p className="panel-subtitle">{trips.length} trip{trips.length !== 1 ? "s" : ""} saved</p>
            </div>
          </div>
          <button className="panel-close" onClick={onClose}>✕</button>
        </div>

        {/* Body */}
        <div className="panel-body">
          {trips.length === 0 ? (
            <div className="panel-empty">
              <div className="panel-empty-icon">🗺️</div>
              <h3>No saved trips yet</h3>
              <p>Generate an itinerary and click "Save Trip" to store it here.</p>
            </div>
          ) : (
            <div className="saved-trips-list">
              {trips.map((trip) => (
                <div
                  key={trip.id}
                  className={`saved-trip-card ${deleted === trip.id ? "deleting" : ""}`}
                >
                  {/* Card Header */}
                  <div
                    className="saved-trip-header"
                    onClick={() => setExpandedTrip(expandedTrip === trip.id ? null : trip.id)}
                  >
                    <div
                      className="saved-trip-cat-bar"
                      style={{ background: CATEGORY_COLORS[trip.category] || "#6366f1" }}
                    />
                    <div className="saved-trip-info">
                      <div className="saved-trip-dest">
                        {CATEGORY_ICONS[trip.category] || "✈️"} {trip.place}
                      </div>
                      <div className="saved-trip-meta">
                        <span className="saved-trip-badge">{trip.days} days</span>
                        <span className="saved-trip-badge">{trip.travelers} traveler{trip.travelers > 1 ? "s" : ""}</span>
                        {trip.budget && (
                          <span className="saved-trip-badge budget">
                            {trip.currency || "₹"}{Number(trip.budget).toLocaleString()} budget
                          </span>
                        )}
                      </div>
                      <div className="saved-trip-date">Saved {formatDate(trip.savedAt)}</div>
                    </div>
                    <div className="saved-trip-actions">
                      <button
                        className="saved-trip-delete"
                        onClick={(e) => { e.stopPropagation(); deleteTrip(trip.id); }}
                        title="Delete trip"
                      >🗑️</button>
                      <span className="saved-trip-chevron">
                        {expandedTrip === trip.id ? "▲" : "▼"}
                      </span>
                    </div>
                  </div>

                  {/* Expanded Day List */}
                  {expandedTrip === trip.id && trip.itinerary && (
                    <div className="saved-trip-days">
                      {trip.itinerary.map((day) => (
                        <div key={day.day} className="saved-trip-day">
                          <div className="saved-trip-day-label"
                            style={{ color: CATEGORY_COLORS[trip.category] || "#6366f1" }}>
                            Day {day.day}
                          </div>
                          <div className="saved-trip-day-acts">
                            {day.activities.map((a, i) => (
                              <div key={i} className="saved-trip-act">
                                <span>{a.icon}</span>
                                <span className="saved-trip-act-name">{a.name}</span>
                                {a.location && (
                                  <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${a.coordinates ? `${a.coordinates.lat},${a.coordinates.lng}` : encodeURIComponent(a.location)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="saved-trip-maps"
                                    onClick={(e) => e.stopPropagation()}
                                  >🗺️</a>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
