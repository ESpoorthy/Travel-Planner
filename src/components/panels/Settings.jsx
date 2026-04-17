import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./Panels.css";

const AVATAR_COLORS = [
  "#6366f1", "#8b5cf6", "#ec4899", "#f59e0b",
  "#10b981", "#3b82f6", "#ef4444", "#06b6d4",
  "#84cc16", "#f97316",
];

export default function Settings({ onClose }) {
  const { user, updateProfile, logout } = useAuth();

  const [name, setName] = useState(user?.name || "");
  const [selectedColor, setSelectedColor] = useState(user?.avatar?.color || "#6366f1");
  const [currency, setCurrency] = useState(user?.preferredCurrency || "INR");
  const [notifications, setNotifications] = useState(user?.notifications ?? true);
  const [darkMode, setDarkMode] = useState(user?.darkMode ?? false);
  const [saved, setSaved] = useState(false);
  const [tab, setTab] = useState("profile");

  const handleSave = () => {
    const initials = name.trim()
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

    updateProfile({
      name: name.trim() || user.name,
      avatar: { initials, color: selectedColor },
      preferredCurrency: currency,
      notifications,
      darkMode,
    });

    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This cannot be undone.")) {
      const users = JSON.parse(localStorage.getItem("travelcraft_users") || "[]");
      const updated = users.filter((u) => u.id !== user.id);
      localStorage.setItem("travelcraft_users", JSON.stringify(updated));
      localStorage.removeItem(`trips_${user.id}`);
      localStorage.removeItem(`favs_${user.id}`);
      logout();
    }
  };

  const CURRENCIES = [
    { code: "INR", label: "₹ Indian Rupee" },
    { code: "USD", label: "$ US Dollar" },
    { code: "EUR", label: "€ Euro" },
    { code: "GBP", label: "£ British Pound" },
    { code: "JPY", label: "¥ Japanese Yen" },
    { code: "AED", label: "د.إ UAE Dirham" },
    { code: "SGD", label: "S$ Singapore Dollar" },
    { code: "AUD", label: "A$ Australian Dollar" },
  ];

  return (
    <div className="panel-overlay" onClick={onClose}>
      <div className="panel-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="panel-header">
          <div className="panel-header-left">
            <span className="panel-header-icon">⚙️</span>
            <div>
              <h2 className="panel-title">Settings</h2>
              <p className="panel-subtitle">Manage your account & preferences</p>
            </div>
          </div>
          <button className="panel-close" onClick={onClose}>✕</button>
        </div>

        {/* Tabs */}
        <div className="settings-tabs">
          {[
            { id: "profile", label: "Profile", icon: "👤" },
            { id: "preferences", label: "Preferences", icon: "🎛️" },
            { id: "account", label: "Account", icon: "🔐" },
          ].map((t) => (
            <button
              key={t.id}
              className={`settings-tab ${tab === t.id ? "active" : ""}`}
              onClick={() => setTab(t.id)}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        <div className="panel-body">

          {/* ── Profile Tab ── */}
          {tab === "profile" && (
            <div className="settings-section-group">
              {/* Avatar Preview */}
              <div className="settings-avatar-preview">
                <div className="settings-avatar-circle" style={{ background: selectedColor }}>
                  {(name.trim() || user?.name || "U")
                    .split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)}
                </div>
                <div className="settings-avatar-info">
                  <div className="settings-avatar-name">{name || user?.name}</div>
                  <div className="settings-avatar-email">{user?.email}</div>
                </div>
              </div>

              <div className="settings-section">
                <label className="settings-label">Display Name</label>
                <input
                  className="settings-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  maxLength={40}
                />
              </div>

              <div className="settings-section">
                <label className="settings-label">Avatar Color</label>
                <div className="settings-color-grid">
                  {AVATAR_COLORS.map((color) => (
                    <button
                      key={color}
                      className={`settings-color-swatch ${selectedColor === color ? "selected" : ""}`}
                      style={{ background: color }}
                      onClick={() => setSelectedColor(color)}
                    >
                      {selectedColor === color && <span className="settings-color-check">✓</span>}
                    </button>
                  ))}
                </div>
              </div>

              <div className="settings-section">
                <label className="settings-label">Email Address</label>
                <input
                  className="settings-input settings-input--disabled"
                  value={user?.email}
                  disabled
                />
                <span className="settings-hint">Email cannot be changed</span>
              </div>

              <div className="settings-section">
                <label className="settings-label">Member Since</label>
                <input
                  className="settings-input settings-input--disabled"
                  value={new Date(user?.joinedDate).toLocaleDateString("en-US", {
                    day: "numeric", month: "long", year: "numeric"
                  })}
                  disabled
                />
              </div>
            </div>
          )}

          {/* ── Preferences Tab ── */}
          {tab === "preferences" && (
            <div className="settings-section-group">
              <div className="settings-section">
                <label className="settings-label">Default Currency</label>
                <select
                  className="settings-input settings-select"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  {CURRENCIES.map((c) => (
                    <option key={c.code} value={c.code}>{c.label}</option>
                  ))}
                </select>
              </div>

              <div className="settings-section">
                <label className="settings-label">App Preferences</label>
                <div className="settings-toggles">
                  <div className="settings-toggle-row">
                    <div className="settings-toggle-info">
                      <span className="settings-toggle-icon">🔔</span>
                      <div>
                        <div className="settings-toggle-title">Trip Reminders</div>
                        <div className="settings-toggle-desc">Get notified about your saved trips</div>
                      </div>
                    </div>
                    <button
                      className={`settings-toggle-btn ${notifications ? "on" : ""}`}
                      onClick={() => setNotifications(!notifications)}
                    >
                      <span className="settings-toggle-knob" />
                    </button>
                  </div>

                  <div className="settings-toggle-row">
                    <div className="settings-toggle-info">
                      <span className="settings-toggle-icon">🌙</span>
                      <div>
                        <div className="settings-toggle-title">Dark Mode</div>
                        <div className="settings-toggle-desc">Switch to dark theme</div>
                      </div>
                    </div>
                    <button
                      className={`settings-toggle-btn ${darkMode ? "on" : ""}`}
                      onClick={() => setDarkMode(!darkMode)}
                    >
                      <span className="settings-toggle-knob" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="settings-section">
                <label className="settings-label">Trip Statistics</label>
                <div className="settings-stats-grid">
                  <div className="settings-stat-card">
                    <div className="settings-stat-val">{user?.tripsPlanned || 0}</div>
                    <div className="settings-stat-lbl">Trips Planned</div>
                  </div>
                  <div className="settings-stat-card">
                    <div className="settings-stat-val">
                      {JSON.parse(localStorage.getItem(`trips_${user?.id}`) || "[]").length}
                    </div>
                    <div className="settings-stat-lbl">Trips Saved</div>
                  </div>
                  <div className="settings-stat-card">
                    <div className="settings-stat-val">
                      {JSON.parse(localStorage.getItem(`favs_${user?.id}`) || "[]").length}
                    </div>
                    <div className="settings-stat-lbl">Favourites</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── Account Tab ── */}
          {tab === "account" && (
            <div className="settings-section-group">
              <div className="settings-section">
                <label className="settings-label">Account Info</label>
                <div className="settings-info-card">
                  <div className="settings-info-row">
                    <span>Account ID</span>
                    <span className="settings-info-val mono">{user?.id?.slice(0, 8)}...</span>
                  </div>
                  <div className="settings-info-row">
                    <span>Account Type</span>
                    <span className="settings-info-val">
                      <span className="settings-badge">Free</span>
                    </span>
                  </div>
                  <div className="settings-info-row">
                    <span>Data Storage</span>
                    <span className="settings-info-val">Local Device</span>
                  </div>
                </div>
              </div>

              <div className="settings-section">
                <label className="settings-label">Data Management</label>
                <div className="settings-action-list">
                  <button
                    className="settings-action-btn"
                    onClick={() => {
                      const data = {
                        profile: user,
                        trips: JSON.parse(localStorage.getItem(`trips_${user?.id}`) || "[]"),
                        favs: JSON.parse(localStorage.getItem(`favs_${user?.id}`) || "[]"),
                      };
                      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement("a");
                      a.href = url;
                      a.download = `travelcraft-data-${user?.name?.replace(/\s/g, "-")}.json`;
                      a.click();
                    }}
                  >
                    <span>📥</span>
                    <div>
                      <div className="settings-action-title">Export My Data</div>
                      <div className="settings-action-desc">Download all your trips and favourites</div>
                    </div>
                    <span className="settings-action-arrow">›</span>
                  </button>

                  <button
                    className="settings-action-btn"
                    onClick={() => {
                      if (window.confirm("Clear all saved trips? This cannot be undone.")) {
                        localStorage.removeItem(`trips_${user?.id}`);
                        alert("Saved trips cleared.");
                      }
                    }}
                  >
                    <span>🗑️</span>
                    <div>
                      <div className="settings-action-title">Clear Saved Trips</div>
                      <div className="settings-action-desc">Remove all saved itineraries</div>
                    </div>
                    <span className="settings-action-arrow">›</span>
                  </button>
                </div>
              </div>

              <div className="settings-section">
                <label className="settings-label danger-label">Danger Zone</label>
                <button className="settings-danger-btn" onClick={handleDeleteAccount}>
                  🗑️ Delete Account
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Save Button */}
        {(tab === "profile" || tab === "preferences") && (
          <div className="panel-footer">
            <button className="panel-save-btn" onClick={handleSave}>
              {saved ? "✅ Saved!" : "Save Changes"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
