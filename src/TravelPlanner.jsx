import React, { useState } from "react";
import { useAuth } from "./context/AuthContext";
import UserProfile from "./components/UserProfile";
import { CURRENCIES, findDestination, getDestinationNames, buildItineraryFromDayPlans } from "./data/destinations";
import "./TravelPlanner.css";

/* ─── Activity Data ─────────────────────────────────────────────────── */
const POOLS = {
  adventure: [
    { name: "Mountain Trekking", cost: 2500, hours: 6, diff: "Hard", icon: "🏔️" },
    { name: "River Rafting", cost: 1800, hours: 4, diff: "Medium", icon: "🚣" },
    { name: "Zipline Adventure", cost: 2000, hours: 2, diff: "Medium", icon: "🪂" },
    { name: "Desert Safari", cost: 2200, hours: 5, diff: "Medium", icon: "🐪" },
    { name: "Scuba Diving", cost: 4000, hours: 4, diff: "Hard", icon: "🤿" },
    { name: "Kayaking", cost: 900, hours: 3, diff: "Easy", icon: "🛶" },
    { name: "ATV Ride", cost: 1300, hours: 2, diff: "Medium", icon: "🏍️" },
    { name: "Rock Climbing", cost: 1200, hours: 3, diff: "Hard", icon: "🧗" },
    { name: "Wildlife Safari", cost: 2100, hours: 6, diff: "Medium", icon: "🦁" },
    { name: "Caving Expedition", cost: 1500, hours: 4, diff: "Hard", icon: "🕳️" },
    { name: "Paragliding", cost: 3500, hours: 2, diff: "Hard", icon: "🪂" },
    { name: "Bungee Jumping", cost: 3000, hours: 1, diff: "Hard", icon: "⬇️" },
  ],
  sightseeing: [
    { name: "City Highlights Tour", cost: 800, hours: 4, diff: "Easy", icon: "🏙️" },
    { name: "Famous Museum Visit", cost: 700, hours: 3, diff: "Easy", icon: "🏛️" },
    { name: "Scenic Boat Ride", cost: 900, hours: 2, diff: "Easy", icon: "⛵" },
    { name: "Local Heritage Walk", cost: 300, hours: 2, diff: "Easy", icon: "🚶" },
    { name: "Panoramic Viewpoint", cost: 450, hours: 1.5, diff: "Easy", icon: "🌅" },
    { name: "Architectural Tour", cost: 600, hours: 3, diff: "Easy", icon: "🏰" },
    { name: "Cultural Performance", cost: 1000, hours: 2.5, diff: "Easy", icon: "🎭" },
    { name: "Historic Fort Entry", cost: 350, hours: 2, diff: "Easy", icon: "🏯" },
    { name: "Botanical Garden Visit", cost: 150, hours: 2, diff: "Easy", icon: "🌿" },
    { name: "Observation Deck", cost: 700, hours: 2, diff: "Easy", icon: "🔭" },
    { name: "Night City Walk", cost: 200, hours: 2, diff: "Easy", icon: "🌃" },
    { name: "Photography Tour", cost: 500, hours: 3, diff: "Easy", icon: "📸" },
  ],
  food: [
    { name: "Street Food Tour", cost: 600, hours: 3, diff: "Easy", icon: "🌮" },
    { name: "Fine Dining Experience", cost: 2500, hours: 2, diff: "Easy", icon: "🍽️" },
    { name: "Cooking Class", cost: 1800, hours: 3.5, diff: "Medium", icon: "👨‍🍳" },
    { name: "Night Food Market", cost: 500, hours: 3, diff: "Easy", icon: "🌙" },
    { name: "Seafood Special", cost: 1500, hours: 2, diff: "Easy", icon: "🦞" },
    { name: "Bakery & Pastry Walk", cost: 300, hours: 1.5, diff: "Easy", icon: "🥐" },
    { name: "Market-to-Plate Visit", cost: 1200, hours: 3, diff: "Medium", icon: "🛒" },
    { name: "Chef's Table", cost: 3000, hours: 2.5, diff: "Hard", icon: "⭐" },
    { name: "Wine & Cheese Tasting", cost: 1400, hours: 2, diff: "Easy", icon: "🍷" },
    { name: "Local Breakfast Spot", cost: 400, hours: 1.5, diff: "Easy", icon: "☕" },
  ],
  relax: [
    { name: "Beach Day & Sunbathing", cost: 0, hours: 6, diff: "Easy", icon: "🏖️" },
    { name: "Luxury Spa & Massage", cost: 2000, hours: 3, diff: "Easy", icon: "💆" },
    { name: "Yoga & Meditation", cost: 1200, hours: 2, diff: "Easy", icon: "🧘" },
    { name: "Resort Pool Day", cost: 1500, hours: 5, diff: "Easy", icon: "🏊" },
    { name: "Countryside Drive", cost: 300, hours: 4, diff: "Easy", icon: "🚗" },
    { name: "Stargazing Evening", cost: 0, hours: 2, diff: "Easy", icon: "🌟" },
    { name: "Thermal Springs", cost: 1300, hours: 3, diff: "Easy", icon: "♨️" },
    { name: "Sunset Cruise", cost: 1800, hours: 2.5, diff: "Easy", icon: "🌇" },
    { name: "Hammock & Reading", cost: 0, hours: 3, diff: "Easy", icon: "📚" },
  ],
};

const CATEGORY_META = {
  adventure: { label: "Adventure", icon: "⛰️", color: "#f97316", bg: "#fff7ed" },
  sightseeing: { label: "Sightseeing", icon: "🏛️", color: "#3b82f6", bg: "#eff6ff" },
  food: { label: "Food & Drink", icon: "🍜", color: "#ef4444", bg: "#fff5f5" },
  relax: { label: "Relaxation", icon: "🌴", color: "#10b981", bg: "#f0fdf4" },
};

const DIFF_COLOR = { Easy: "#10b981", Medium: "#f59e0b", Hard: "#ef4444" };

/* ─── Helpers ───────────────────────────────────────────────────────── */
function shuffle(a) {
  const arr = [...a];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function formatINR(n) {
  if (!n && n !== 0) return "₹0";
  return "₹" + Number(n).toLocaleString("en-IN");
}

function formatCurrency(amount, currencyCode) {
  if (!amount && amount !== 0) return CURRENCIES[currencyCode].symbol + "0";
  const curr = CURRENCIES[currencyCode];
  const converted = amount * curr.rate;
  return curr.symbol + Number(converted).toLocaleString(undefined, { 
    minimumFractionDigits: 0, 
    maximumFractionDigits: 0 
  });
}

function getGoogleMapsLink(location, coordinates) {
  if (coordinates) {
    return `https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`;
  }
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
}

function buildDailySchedule(pool, days) {
  const need = days * 3;
  const big = shuffle([...pool, ...pool, ...pool]);
  const unique = [];
  for (let i = 0; i < big.length && unique.length < need; i++) {
    if (!unique.some((u) => u.name === big[i].name)) unique.push(big[i]);
  }
  while (unique.length < need)
    unique.push({ name: "Free Exploration", cost: 0, hours: 3, diff: "Easy", icon: "🗺️" });
  return Array.from({ length: days }, (_, d) => unique.slice(d * 3, d * 3 + 3));
}

const SLOTS = ["🌅 Morning", "☀️ Afternoon", "🌙 Evening", "🌃 Night"];

/* ─── Component ─────────────────────────────────────────────────────── */
export default function TravelPlanner() {
  const { user, incrementTrips } = useAuth();
  const [place, setPlace] = useState("");
  const [days, setDays] = useState(3);
  const [category, setCategory] = useState("sightseeing");
  const [budget, setBudget] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [travelers, setTravelers] = useState(1);
  const [itinerary, setItinerary] = useState([]);
  const [total, setTotal] = useState(0);
  const [msg, setMsg] = useState({ text: "", type: "" });
  const [generated, setGenerated] = useState(false);
  const [activeDay, setActiveDay] = useState(null);
  const [copied, setCopied] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [saveToast, setSaveToast] = useState(false);

  const generate = (e) => {
    e && e.preventDefault();
    const n = Math.max(1, Math.min(30, Math.floor(Number(days) || 1)));
    const t = Math.max(1, Math.floor(Number(travelers) || 1));
    const curr = CURRENCIES[currency];
    const userBudgetInCurrency = Math.max(0, Number(budget) || 0);
    const userBudgetINR = userBudgetInCurrency > 0
      ? Math.round((userBudgetInCurrency / curr.rate) * 83)
      : 0;
    const destData = findDestination(place);
    runGenerate(n, t, userBudgetINR, userBudgetInCurrency, curr, destData, place);
  };

  const runGenerate = (n, t, userBudgetINR, userBudgetInCurrency, curr, destData, resolvedPlace) => {
    let dayObjects;

    if (destData && destData.dayPlans) {
      const baseItinerary = buildItineraryFromDayPlans(destData, n);

      if (userBudgetINR > 0) {
        const budgetPerDay = Math.floor(userBudgetINR / n);
        const mealsTransport = Math.min(300, Math.floor(budgetPerDay * 0.2));

        dayObjects = baseItinerary.map(day => {
          let activityBudget = budgetPerDay - mealsTransport;
          const sorted = [...day.activities].sort((a, b) => (a.cost || 0) - (b.cost || 0));
          const picked = [];
          let spent = 0;
          for (const act of sorted) {
            const actCost = (act.cost || 0) * t;
            if (spent + actCost <= activityBudget || picked.length === 0) {
              picked.push({ ...act, cost: act.cost || 0 });
              spent += actCost;
            } else {
              picked.push({
                ...act,
                cost: 0,
                name: `${act.name} (self-guided / free entry)`,
                description: act.description + " — Free/self-guided visit to stay within budget."
              });
            }
          }
          const dayCost = picked.reduce((s, a) => s + (a.cost || 0), 0) * t + mealsTransport * t;
          return { day: day.day, activities: picked, dayCost };
        });
      } else {
        dayObjects = baseItinerary.map(day => ({
          ...day,
          activities: day.activities.map(a => ({ ...a })),
          dayCost: day.dayCost * t
        }));
      }
    } else {
      const pool = POOLS[category] || POOLS.sightseeing;

      if (userBudgetINR > 0) {
        const budgetPerDay = Math.floor(userBudgetINR / n);
        const mealsTransport = Math.min(300, Math.floor(budgetPerDay * 0.2));
        const actBudgetPerDay = budgetPerDay - mealsTransport;
        const affordable = pool
          .filter(a => (a.cost || 0) * t <= actBudgetPerDay)
          .sort((a, b) => (b.cost || 0) - (a.cost || 0));
        const fallbackPool = affordable.length >= 3 ? affordable : pool.sort((a, b) => a.cost - b.cost);
        const daysSchedule = buildDailySchedule(fallbackPool, n);
        dayObjects = daysSchedule.map((acts, idx) => {
          const activities = acts.map(a => ({ ...a }));
          const dayCost = activities.reduce((s, a) => s + (a.cost || 0), 0) * t + mealsTransport * t;
          return { day: idx + 1, activities, dayCost };
        });
      } else {
        const daysSchedule = buildDailySchedule(pool, n);
        dayObjects = daysSchedule.map((acts, idx) => {
          const activities = acts.map(a => ({ ...a }));
          const dayCost = activities.reduce((s, a) => s + (a.cost || 0), 0) * t + 300 * t;
          return { day: idx + 1, activities, dayCost };
        });
      }
    }

    dayObjects.sort((a, b) => a.day - b.day);
    const finalTotalINR = dayObjects.reduce((s, d) => s + d.dayCost, 0);
    const finalTotalDisplay = Math.round((finalTotalINR / 83) * curr.rate);

    setItinerary(dayObjects);
    setTotal(finalTotalINR);
    setGenerated(true);
    setActiveDay(null);

    if (user) incrementTrips();

    const hasRealPlan = !!(destData && destData.dayPlans);
    if (!budget) {
      setMsg({ text: hasRealPlan ? `Curated ${n}-day plan for ${resolvedPlace} ready!` : "No budget set — showing a suggested plan.", type: "info" });
    } else if (finalTotalINR <= userBudgetINR) {
      setMsg({ text: `✅ Plan fits within your ${formatCurrency(userBudgetInCurrency, currency)} budget!`, type: "success" });
    } else {
      setMsg({ text: `⚠️ Estimated ${formatCurrency(finalTotalDisplay, currency)} — slightly over budget. Expensive activities marked as self-guided.`, type: "warn" });
    }
  };

  const reset = () => {
    setItinerary([]);
    setGenerated(false);
    setMsg({ text: "", type: "" });
    setTotal(0);
    setActiveDay(null);
  };

  const copyPlan = () => {
    if (!itinerary.length) return;
    const lines = [`✈️ Trip to ${place} — ${days} days (${CATEGORY_META[category].label})\n`];
    itinerary.forEach((d) => {
      lines.push(`Day ${d.day}:`);
      d.activities.forEach((a, i) => lines.push(`  ${SLOTS[i]}: ${a.icon} ${a.name} (${formatINR(a.cost)}, ${a.hours}h)`));
      lines.push(`  Day Total: ${formatINR(d.dayCost)}\n`);
    });
    lines.push(`Grand Total: ${formatINR(total)}`);
    navigator.clipboard.writeText(lines.join("\n")).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const saveTrip = () => {
    if (!itinerary.length) return;
    const trip = {
      id: Date.now(),
      place,
      days,
      category,
      budget,
      currency,
      travelers,
      itinerary,
      total,
      savedAt: new Date().toISOString(),
    };
    const existing = JSON.parse(localStorage.getItem(`trips_${user?.id}`) || "[]");
    const saved = [...existing, trip];
    if (user) {
      localStorage.setItem(`trips_${user.id}`, JSON.stringify(saved));
    }
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 3000);
  };

  // Called from Favourites "Plan ✈️" — sets destination and immediately generates
  const planFromFavourite = (dest) => {
    setPlace(dest);
    setShowSuggestions(false);
    // Use a tiny timeout so state flushes before generate reads `place`
    setTimeout(() => {
      generateForPlace(dest);
    }, 50);
  };

  // generate that accepts an explicit place override (for programmatic calls)
  const generateForPlace = (overridePlace) => {
    const n = Math.max(1, Math.min(30, Math.floor(Number(days) || 1)));
    const t = Math.max(1, Math.floor(Number(travelers) || 1));
    const curr = CURRENCIES[currency];
    const userBudgetInCurrency = Math.max(0, Number(budget) || 0);
    const userBudgetINR = userBudgetInCurrency > 0
      ? Math.round((userBudgetInCurrency / curr.rate) * 83)
      : 0;
    const destData = findDestination(overridePlace || place);
    runGenerate(n, t, userBudgetINR, userBudgetInCurrency, curr, destData, overridePlace || place);
  };

  const curr = CURRENCIES[currency];
  const userBudgetInCurrency = Number(budget) || 0;
  const userBudgetINR = userBudgetInCurrency > 0 ? Math.round((userBudgetInCurrency / curr.rate) * 83) : 0;
  const budgetPct = userBudgetINR > 0 ? Math.min(100, (total / userBudgetINR) * 100) : 0;
  const overBudget = userBudgetINR > 0 && total > userBudgetINR;
  const catMeta = CATEGORY_META[category];

  return (
    <div className="tp-root">
      {/* ── Navbar ── */}
      <nav className="tp-nav">
        <div className="tp-nav-inner">
          <div className="tp-logo">
            <span className="tp-logo-icon">✈️</span>
            <span className="tp-logo-text">TravelCraft</span>
          </div>
          <div className="tp-nav-links">
            <span className="tp-nav-badge">Smart Planner</span>
            {user && <UserProfile onSelectDestination={planFromFavourite} />}
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="tp-hero">
        <div className="tp-hero-inner">
          <h1 className="tp-hero-title">Plan Your Perfect Trip</h1>
          <p className="tp-hero-sub">
            Enter your destination, budget & preferences — get a personalised day-by-day itinerary instantly.
          </p>
        </div>
      </section>

      {/* ── Form Card ── */}
      <main className="tp-main">
        <div className="tp-form-card">
          <form onSubmit={generate}>
            <div className="tp-form-grid">
              {/* Destination */}
              <div className="tp-field">
                <label className="tp-label">📍 Destination</label>
                <div className="tp-autocomplete-wrap">
                  <input
                    className="tp-input"
                    value={place}
                    onChange={(e) => {
                      setPlace(e.target.value);
                      setShowSuggestions(e.target.value.length > 0);
                    }}
                    onFocus={() => setShowSuggestions(place.length > 0)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                    placeholder="e.g. Goa, Paris, Bali"
                    required
                  />
                  {showSuggestions && (
                    <div className="tp-suggestions">
                      {getDestinationNames()
                        .filter(name => name.toLowerCase().includes(place.toLowerCase()))
                        .slice(0, 5)
                        .map(name => (
                          <div
                            key={name}
                            className="tp-suggestion-item"
                            onClick={() => {
                              setPlace(name);
                              setShowSuggestions(false);
                            }}
                          >
                            📍 {name}
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Days */}
              <div className="tp-field">
                <label className="tp-label">🗓️ Number of Days</label>
                <input
                  className="tp-input"
                  type="number"
                  min="1"
                  max="30"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  required
                />
              </div>

              {/* Travelers */}
              <div className="tp-field">
                <label className="tp-label">👥 Travelers</label>
                <input
                  className="tp-input"
                  type="number"
                  min="1"
                  max="20"
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                />
              </div>

              {/* Currency */}
              <div className="tp-field">
                <label className="tp-label">💱 Currency</label>
                <select
                  className="tp-input tp-select"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  {Object.entries(CURRENCIES).map(([code, curr]) => (
                    <option key={code} value={code}>
                      {curr.symbol} {curr.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget */}
              <div className="tp-field">
                <label className="tp-label">💰 Total Budget ({CURRENCIES[currency].symbol})</label>
                <input
                  className="tp-input"
                  type="number"
                  min="0"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder={`e.g. ${currency === 'INR' ? '50000' : currency === 'USD' ? '600' : '500'}`}
                />
              </div>
            </div>

            {/* Category Picker */}
            <div className="tp-cat-section">
              <label className="tp-label">🎯 Trip Style</label>
              <div className="tp-cat-grid">
                {Object.entries(CATEGORY_META).map(([key, meta]) => (
                  <button
                    key={key}
                    type="button"
                    className={`tp-cat-btn ${category === key ? "active" : ""}`}
                    style={category === key ? { borderColor: meta.color, background: meta.bg, color: meta.color } : {}}
                    onClick={() => setCategory(key)}
                  >
                    <span className="tp-cat-icon">{meta.icon}</span>
                    <span className="tp-cat-label">{meta.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="tp-form-actions">
              {generated && (
                <button type="button" className="tp-btn-secondary" onClick={reset}>
                  🔄 Reset
                </button>
              )}
              <button className="tp-btn-primary" type="submit">
                🚀 Generate Itinerary
              </button>
            </div>
          </form>
        </div>

        {/* ── Results ── */}
        {generated && (
          <div className="tp-results">
            {/* Stats Row */}
            <div className="tp-stats-row">
              {[
                { label: "Destination", value: place || "—", icon: "📍" },
                { label: "Duration", value: `${itinerary.length} days`, icon: "🗓️" },
                { label: "Travelers", value: travelers, icon: "👥" },
                { label: "Trip Style", value: catMeta.label, icon: catMeta.icon },
                { label: "Est. Total", value: formatCurrency(Math.round((total / 83) * curr.rate), currency), icon: "💰" },
              ].map((s) => (
                <div className="tp-stat-card" key={s.label}>
                  <div className="tp-stat-icon">{s.icon}</div>
                  <div className="tp-stat-label">{s.label}</div>
                  <div className="tp-stat-value">{s.value}</div>
                </div>
              ))}
            </div>

            {/* Message */}
            {msg.text && (
              <div className={`tp-msg tp-msg-${msg.type}`}>
                {msg.type === "success" && "✅ "}
                {msg.type === "warn" && "⚠️ "}
                {msg.type === "info" && "ℹ️ "}
                {msg.text}
              </div>
            )}

            {/* Budget Progress */}
            {budget && (
              <div className="tp-budget-bar-wrap">
                <div className="tp-budget-bar-header">
                  <span>Budget Usage</span>
                  <span style={{ color: overBudget ? "#ef4444" : "#10b981", fontWeight: 700 }}>
                    {formatCurrency(Math.round((total / 83) * curr.rate), currency)} / {formatCurrency(userBudgetInCurrency, currency)}
                  </span>
                </div>
                <div className="tp-budget-track">
                  <div
                    className="tp-budget-fill"
                    style={{
                      width: `${budgetPct}%`,
                      background: overBudget
                        ? "linear-gradient(90deg,#ef4444,#dc2626)"
                        : "linear-gradient(90deg,#10b981,#059669)",
                    }}
                  />
                </div>
                <div className="tp-budget-pct">{Math.round(budgetPct)}% of budget used · {formatCurrency(userBudgetInCurrency, currency)} total budget for {days} days</div>
              </div>
            )}

            {/* Actions */}
            <div className="tp-result-actions">
              <button className="tp-action-btn" onClick={copyPlan}>
                {copied ? "✅ Copied!" : "📋 Copy Plan"}
              </button>
              {user && (
                <button className="tp-action-btn" onClick={saveTrip}>
                  💾 Save Trip
                </button>
              )}
              <button className="tp-action-btn" onClick={generate}>
                🔀 Regenerate
              </button>
            </div>

            {/* Day Cards */}
            <div className="tp-days-grid">
              {itinerary.map((day, di) => (
                <div
                  key={day.day}
                  className={`tp-day-card cat-${category} ${activeDay === day.day ? "expanded" : ""}`}
                  style={{ animationDelay: `${di * 0.07}s` }}
                  onClick={() => setActiveDay(activeDay === day.day ? null : day.day)}
                >
                  <div className="tp-day-header">
                    <div className="tp-day-badge" style={{ background: catMeta.color }}>
                      Day {day.day}
                    </div>
                    <div className="tp-day-cost">{formatCurrency(Math.round((day.dayCost / 83) * curr.rate), currency)}</div>
                    <div className="tp-day-chevron">{activeDay === day.day ? "▲" : "▼"}</div>
                  </div>

                  <div className="tp-day-preview">
                    {day.activities.map((a) => a.icon).join("  ")}
                    <span className="tp-day-preview-names">
                      {day.activities.map((a) => a.name).join(" · ")}
                    </span>
                  </div>

                  {activeDay === day.day && (
                    <div className="tp-day-body">
                      {day.activities.map((a, i) => (
                        <div className="tp-activity" key={i}>
                          <div className="tp-activity-slot">{SLOTS[i]}</div>
                          <div className="tp-activity-info">
                            <div className="tp-activity-header">
                              <div className="tp-activity-name">
                                {a.icon} {a.name}
                              </div>
                              {a.location && (
                                <a
                                  href={getGoogleMapsLink(a.location, a.coordinates)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="tp-maps-link"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  🗺️ Directions
                                </a>
                              )}
                            </div>
                            {a.location && (
                              <div className="tp-activity-location">📍 {a.location}</div>
                            )}
                            {a.description && (
                              <div className="tp-activity-description">{a.description}</div>
                            )}
                            <div className="tp-activity-meta">
                              <span className="tp-tag tp-tag-cost">{formatCurrency(Math.round((a.cost / 83) * curr.rate), currency)}</span>
                              <span className="tp-tag tp-tag-hours">⏱ {a.hours}h</span>
                              <span
                                className="tp-tag tp-tag-diff"
                                style={{ background: DIFF_COLOR[a.diff] + "22", color: DIFF_COLOR[a.diff] }}
                              >
                                {a.diff}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="tp-day-footer">
                        <span>🍽️ Meals + 🚌 Transport included</span>
                        <span className="tp-day-total">Day Total: {formatCurrency(Math.round((day.dayCost / 83) * curr.rate), currency)}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="tp-footer">
        <div className="tp-footer-content">
          <div className="tp-footer-section">
            <span className="tp-footer-icon">✈️</span>
            <span>Made with ❤️ by TravelCraft</span>
          </div>
          <div className="tp-footer-divider">·</div>
          <div className="tp-footer-section">
            <span className="tp-footer-icon">💡</span>
            <span>Pro Tip: Book flights on Tuesdays for best deals</span>
          </div>
        </div>
      </footer>

      {/* Save Toast */}
      {saveToast && (
        <div className="tp-save-toast">
          💾 Trip saved! Open your profile → Saved Trips to view it.
        </div>
      )}
    </div>
  );
}
