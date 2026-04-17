import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { login, signup } = useAuth();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    // Validation
    const newErrors = {};
    if (!isLogin && !formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!validatePassword(formData.password)) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    // Attempt login/signup
    const result = isLogin
      ? login(formData.email, formData.password)
      : signup(formData.name, formData.email, formData.password);

    if (!result.success) {
      setErrors({ general: result.error });
    }

    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error for this field
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div className="login-root">
      {/* Animated Background */}
      <div className="login-bg">
        <div className="login-bg-gradient"></div>
        <div className="login-bg-pattern"></div>
        <div className="floating-icon" style={{ top: "10%", left: "15%", animationDelay: "0s" }}>✈️</div>
        <div className="floating-icon" style={{ top: "20%", right: "20%", animationDelay: "1s" }}>🏖️</div>
        <div className="floating-icon" style={{ bottom: "15%", left: "10%", animationDelay: "2s" }}>🗺️</div>
        <div className="floating-icon" style={{ bottom: "25%", right: "15%", animationDelay: "1.5s" }}>🎒</div>
        <div className="floating-icon" style={{ top: "40%", left: "5%", animationDelay: "0.5s" }}>🌍</div>
        <div className="floating-icon" style={{ top: "60%", right: "10%", animationDelay: "2.5s" }}>🏔️</div>
      </div>

      {/* Login Card */}
      <div className="login-container">
        <div className="login-card">
          {/* Logo Section */}
          <div className="login-header">
            <div className="login-logo">
              <span className="login-logo-icon">✈️</span>
              <span className="login-logo-text">TravelCraft</span>
            </div>
            <h2 className="login-title">{isLogin ? "Welcome Back!" : "Join TravelCraft"}</h2>
            <p className="login-subtitle">
              {isLogin ? "Plan your next adventure" : "Start planning amazing trips"}
            </p>
          </div>

          {/* Form */}
          <form className="login-form" onSubmit={handleSubmit}>
            {errors.general && <div className="login-error-banner">{errors.general}</div>}

            {!isLogin && (
              <div className="login-field">
                <label className="login-label">Full Name</label>
                <div className="login-input-wrap">
                  <span className="login-input-icon">👤</span>
                  <input
                    type="text"
                    name="name"
                    className={`login-input ${errors.name ? "error" : ""}`}
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                {errors.name && <span className="login-error">{errors.name}</span>}
              </div>
            )}

            <div className="login-field">
              <label className="login-label">Email Address</label>
              <div className="login-input-wrap">
                <span className="login-input-icon">📧</span>
                <input
                  type="email"
                  name="email"
                  className={`login-input ${errors.email ? "error" : ""}`}
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              {errors.email && <span className="login-error">{errors.email}</span>}
            </div>

            <div className="login-field">
              <label className="login-label">Password</label>
              <div className="login-input-wrap">
                <span className="login-input-icon">🔒</span>
                <input
                  type="password"
                  name="password"
                  className={`login-input ${errors.password ? "error" : ""}`}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              {errors.password && <span className="login-error">{errors.password}</span>}
            </div>

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? (
                <span className="login-spinner"></span>
              ) : isLogin ? (
                "Sign In"
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Switch Mode */}
          <div className="login-switch">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button type="button" className="login-switch-btn" onClick={switchMode}>
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </div>

          {/* Demo Credentials */}
          {isLogin && (
            <div className="login-demo">
              <p className="login-demo-title">Demo Account:</p>
              <p className="login-demo-text">Email: demo@travelcraft.com</p>
              <p className="login-demo-text">Password: demo123</p>
            </div>
          )}
        </div>

        {/* Features */}
        <div className="login-features">
          <div className="login-feature">
            <span className="login-feature-icon">🗺️</span>
            <span className="login-feature-text">Smart Itineraries</span>
          </div>
          <div className="login-feature">
            <span className="login-feature-icon">💰</span>
            <span className="login-feature-text">Budget Planning</span>
          </div>
          <div className="login-feature">
            <span className="login-feature-icon">🌍</span>
            <span className="login-feature-text">Global Destinations</span>
          </div>
        </div>
      </div>
    </div>
  );
}
