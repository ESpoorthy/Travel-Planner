import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

// Generate a 6-digit OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// ── Screens ──────────────────────────────────────────────────────────
// "login" | "signup" | "forgot" | "otp" | "reset"

export default function Login() {
  const { login, signup, resetPassword, checkEmail } = useAuth();

  const [screen, setScreen]     = useState("login");
  const [formData, setFormData] = useState({ name: "", email: "", password: "", confirm: "" });
  const [errors, setErrors]     = useState({});
  const [loading, setLoading]   = useState(false);
  const [showPwd, setShowPwd]   = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // OTP state
  const [otp, setOtp]           = useState(["", "", "", "", "", ""]);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otpEmail, setOtpEmail] = useState("");
  const [otpTimer, setOtpTimer] = useState(60);
  const [otpExpired, setOtpExpired] = useState(false);
  const [mockEmailVisible, setMockEmailVisible] = useState(false);
  const otpRefs = useRef([]);
  const timerRef = useRef(null);

  // Password strength
  const [pwdStrength, setPwdStrength] = useState(0);

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  // ── Helpers ──────────────────────────────────────────────────────
  const validateEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const getPasswordStrength = (pwd) => {
    let score = 0;
    if (pwd.length >= 6)  score++;
    if (pwd.length >= 10) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    return score;
  };

  const strengthLabel = ["", "Weak", "Fair", "Good", "Strong", "Very Strong"];
  const strengthColor = ["", "#ef4444", "#f59e0b", "#eab308", "#10b981", "#059669"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === "password" || name === "confirm") {
      setPwdStrength(getPasswordStrength(name === "password" ? value : formData.password));
    }
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const startOtpTimer = () => {
    setOtpTimer(60);
    setOtpExpired(false);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setOtpTimer(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setOtpExpired(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const sendOtp = (email) => {
    const code = generateOTP();
    setGeneratedOtp(code);
    setOtpEmail(email);
    setOtp(["", "", "", "", "", ""]);
    setMockEmailVisible(true);
    startOtpTimer();
    // Auto-hide mock email after 8s
    setTimeout(() => setMockEmailVisible(false), 8000);
    return code;
  };

  // ── Login ─────────────────────────────────────────────────────────
  const handleLogin = (e) => {
    e.preventDefault();
    setErrors({});
    const errs = {};
    if (!validateEmail(formData.email)) errs.email = "Enter a valid email address";
    if (!formData.password)             errs.password = "Password is required";
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    setTimeout(() => {
      const result = login(formData.email, formData.password);
      if (!result.success) setErrors({ general: result.error });
      setLoading(false);
    }, 600);
  };

  // ── Sign Up ───────────────────────────────────────────────────────
  const handleSignup = (e) => {
    e.preventDefault();
    setErrors({});
    const errs = {};
    if (!formData.name.trim())              errs.name     = "Name is required";
    if (!validateEmail(formData.email))     errs.email    = "Enter a valid email address";
    if (formData.password.length < 6)       errs.password = "Minimum 6 characters";
    if (formData.password !== formData.confirm) errs.confirm = "Passwords do not match";
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    setTimeout(() => {
      const result = signup(formData.name, formData.email, formData.password);
      if (!result.success) setErrors({ general: result.error });
      setLoading(false);
    }, 600);
  };

  // ── Forgot — step 1: enter email ──────────────────────────────────
  const handleForgotSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    if (!validateEmail(formData.email)) {
      setErrors({ email: "Enter a valid email address" });
      return;
    }
    if (!checkEmail(formData.email)) {
      setErrors({ email: "No account found with this email" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      sendOtp(formData.email);
      setScreen("otp");
      setLoading(false);
    }, 800);
  };

  // ── OTP — step 2: verify code ─────────────────────────────────────
  const handleOtpChange = (idx, val) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp];
    next[idx] = val;
    setOtp(next);
    if (val && idx < 5) otpRefs.current[idx + 1]?.focus();
    if (!val && idx > 0) otpRefs.current[idx - 1]?.focus();
  };

  const handleOtpPaste = (e) => {
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (pasted.length === 6) {
      setOtp(pasted.split(""));
      otpRefs.current[5]?.focus();
    }
  };

  const handleVerifyOtp = () => {
    const entered = otp.join("");
    if (entered.length < 6) { setErrors({ otp: "Enter all 6 digits" }); return; }
    if (otpExpired)          { setErrors({ otp: "OTP expired. Please resend." }); return; }
    if (entered !== generatedOtp) { setErrors({ otp: "Incorrect OTP. Try again." }); return; }
    clearInterval(timerRef.current);
    setErrors({});
    setScreen("reset");
  };

  const handleResendOtp = () => {
    sendOtp(otpEmail);
    setErrors({});
  };

  // ── Reset — step 3: new password ──────────────────────────────────
  const handleResetSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    const errs = {};
    if (formData.password.length < 6)           errs.password = "Minimum 6 characters";
    if (formData.password !== formData.confirm)  errs.confirm  = "Passwords do not match";
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    setTimeout(() => {
      const result = resetPassword(otpEmail, formData.password);
      if (result.success) {
        setScreen("login");
        setFormData({ name: "", email: otpEmail, password: "", confirm: "" });
        setErrors({ success: "Password reset! Sign in with your new password." });
      } else {
        setErrors({ general: result.error });
      }
      setLoading(false);
    }, 600);
  };

  const goBack = () => {
    setErrors({});
    setFormData({ name: "", email: formData.email, password: "", confirm: "" });
    setScreen("login");
  };

  // ── Render ────────────────────────────────────────────────────────
  return (
    <div className="login-root">
      {/* Background */}
      <div className="login-bg">
        <div className="login-bg-gradient" />
        <div className="login-bg-pattern" />
        {["✈️","🏖️","🗺️","🎒","🌍","🏔️"].map((icon, i) => (
          <div key={i} className="floating-icon" style={{
            top: i < 3 ? `${10 + i * 15}%` : undefined,
            bottom: i >= 3 ? `${15 + (i - 3) * 10}%` : undefined,
            left:  i % 2 === 0 ? `${5 + i * 3}%` : undefined,
            right: i % 2 !== 0 ? `${10 + i * 3}%` : undefined,
            animationDelay: `${i * 0.5}s`
          }}>{icon}</div>
        ))}
      </div>

      {/* Mock Email Notification */}
      {mockEmailVisible && (
        <div className="mock-email-toast">
          <div className="mock-email-header">
            <span className="mock-email-icon">📧</span>
            <div>
              <div className="mock-email-from">TravelCraft &lt;no-reply@travelcraft.com&gt;</div>
              <div className="mock-email-subject">Your Password Reset OTP</div>
            </div>
            <button className="mock-email-close" onClick={() => setMockEmailVisible(false)}>✕</button>
          </div>
          <div className="mock-email-body">
            Hi there! Your one-time password is:
            <div className="mock-email-otp">{generatedOtp}</div>
            <div className="mock-email-note">Valid for 60 seconds. Do not share this code.</div>
          </div>
        </div>
      )}

      <div className="login-container">
        <div className="login-card">

          {/* ── Logo ── */}
          <div className="login-header">
            <div className="login-logo">
              <span className="login-logo-icon">✈️</span>
              <span className="login-logo-text">TravelCraft</span>
            </div>
            <h2 className="login-title">
              {screen === "login"  && "Welcome Back!"}
              {screen === "signup" && "Join TravelCraft"}
              {screen === "forgot" && "Forgot Password?"}
              {screen === "otp"    && "Verify Your Email"}
              {screen === "reset"  && "Set New Password"}
            </h2>
            <p className="login-subtitle">
              {screen === "login"  && "Plan your next adventure"}
              {screen === "signup" && "Start planning amazing trips"}
              {screen === "forgot" && "Enter your email to receive a reset code"}
              {screen === "otp"    && `Code sent to ${otpEmail}`}
              {screen === "reset"  && "Choose a strong new password"}
            </p>
          </div>

          {/* ── Success banner ── */}
          {errors.success && (
            <div className="login-success-banner">✅ {errors.success}</div>
          )}

          {/* ══════════════ LOGIN ══════════════ */}
          {screen === "login" && (
            <form className="login-form" onSubmit={handleLogin}>
              {errors.general && <div className="login-error-banner">⚠️ {errors.general}</div>}

              <div className="login-field">
                <label className="login-label">Email Address</label>
                <div className="login-input-wrap">
                  <span className="login-input-icon">📧</span>
                  <input type="email" name="email" className={`login-input ${errors.email ? "error" : ""}`}
                    placeholder="you@example.com" value={formData.email} onChange={handleChange} />
                </div>
                {errors.email && <span className="login-error">{errors.email}</span>}
              </div>

              <div className="login-field">
                <div className="login-label-row">
                  <label className="login-label">Password</label>
                  <button type="button" className="login-forgot-link"
                    onClick={() => { setErrors({}); setScreen("forgot"); }}>
                    Forgot password?
                  </button>
                </div>
                <div className="login-input-wrap">
                  <span className="login-input-icon">🔒</span>
                  <input type={showPwd ? "text" : "password"} name="password"
                    className={`login-input ${errors.password ? "error" : ""}`}
                    placeholder="••••••••" value={formData.password} onChange={handleChange} />
                  <button type="button" className="login-eye" onClick={() => setShowPwd(!showPwd)}>
                    {showPwd ? "🙈" : "👁️"}
                  </button>
                </div>
                {errors.password && <span className="login-error">{errors.password}</span>}
              </div>

              <button type="submit" className="login-btn" disabled={loading}>
                {loading ? <span className="login-spinner" /> : "Sign In"}
              </button>
            </form>
          )}

          {/* ══════════════ SIGN UP ══════════════ */}
          {screen === "signup" && (
            <form className="login-form" onSubmit={handleSignup}>
              {errors.general && <div className="login-error-banner">⚠️ {errors.general}</div>}

              <div className="login-field">
                <label className="login-label">Full Name</label>
                <div className="login-input-wrap">
                  <span className="login-input-icon">👤</span>
                  <input type="text" name="name" className={`login-input ${errors.name ? "error" : ""}`}
                    placeholder="John Doe" value={formData.name} onChange={handleChange} />
                </div>
                {errors.name && <span className="login-error">{errors.name}</span>}
              </div>

              <div className="login-field">
                <label className="login-label">Email Address</label>
                <div className="login-input-wrap">
                  <span className="login-input-icon">📧</span>
                  <input type="email" name="email" className={`login-input ${errors.email ? "error" : ""}`}
                    placeholder="you@example.com" value={formData.email} onChange={handleChange} />
                </div>
                {errors.email && <span className="login-error">{errors.email}</span>}
              </div>

              <div className="login-field">
                <label className="login-label">Password</label>
                <div className="login-input-wrap">
                  <span className="login-input-icon">🔒</span>
                  <input type={showPwd ? "text" : "password"} name="password"
                    className={`login-input ${errors.password ? "error" : ""}`}
                    placeholder="Min. 6 characters" value={formData.password} onChange={handleChange} />
                  <button type="button" className="login-eye" onClick={() => setShowPwd(!showPwd)}>
                    {showPwd ? "🙈" : "👁️"}
                  </button>
                </div>
                {formData.password && (
                  <div className="pwd-strength">
                    <div className="pwd-strength-bar">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className="pwd-strength-seg"
                          style={{ background: i <= pwdStrength ? strengthColor[pwdStrength] : "#e2e8f0" }} />
                      ))}
                    </div>
                    <span className="pwd-strength-label" style={{ color: strengthColor[pwdStrength] }}>
                      {strengthLabel[pwdStrength]}
                    </span>
                  </div>
                )}
                {errors.password && <span className="login-error">{errors.password}</span>}
              </div>

              <div className="login-field">
                <label className="login-label">Confirm Password</label>
                <div className="login-input-wrap">
                  <span className="login-input-icon">🔒</span>
                  <input type={showConfirm ? "text" : "password"} name="confirm"
                    className={`login-input ${errors.confirm ? "error" : ""}`}
                    placeholder="Re-enter password" value={formData.confirm} onChange={handleChange} />
                  <button type="button" className="login-eye" onClick={() => setShowConfirm(!showConfirm)}>
                    {showConfirm ? "🙈" : "👁️"}
                  </button>
                </div>
                {errors.confirm && <span className="login-error">{errors.confirm}</span>}
              </div>

              <button type="submit" className="login-btn" disabled={loading}>
                {loading ? <span className="login-spinner" /> : "Create Account"}
              </button>
            </form>
          )}

          {/* ══════════════ FORGOT ══════════════ */}
          {screen === "forgot" && (
            <form className="login-form" onSubmit={handleForgotSubmit}>
              <div className="login-info-box">
                🔐 We'll send a 6-digit verification code to your registered email address.
              </div>

              <div className="login-field">
                <label className="login-label">Registered Email</label>
                <div className="login-input-wrap">
                  <span className="login-input-icon">📧</span>
                  <input type="email" name="email" className={`login-input ${errors.email ? "error" : ""}`}
                    placeholder="you@example.com" value={formData.email} onChange={handleChange} autoFocus />
                </div>
                {errors.email && <span className="login-error">{errors.email}</span>}
              </div>

              <button type="submit" className="login-btn" disabled={loading}>
                {loading ? <span className="login-spinner" /> : "Send Reset Code"}
              </button>

              <button type="button" className="login-back-btn" onClick={goBack}>
                ← Back to Sign In
              </button>
            </form>
          )}

          {/* ══════════════ OTP ══════════════ */}
          {screen === "otp" && (
            <div className="login-form">
              <div className="login-info-box">
                📧 A 6-digit code was sent to <strong>{otpEmail}</strong>. Check the notification at the top of your screen.
              </div>

              {errors.otp && <div className="login-error-banner">⚠️ {errors.otp}</div>}

              {/* OTP Boxes */}
              <div className="otp-boxes" onPaste={handleOtpPaste}>
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    ref={el => otpRefs.current[i] = el}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className={`otp-box ${digit ? "filled" : ""} ${errors.otp ? "error" : ""}`}
                    value={digit}
                    onChange={e => handleOtpChange(i, e.target.value)}
                    onKeyDown={e => {
                      if (e.key === "Backspace" && !otp[i] && i > 0) {
                        otpRefs.current[i - 1]?.focus();
                      }
                    }}
                  />
                ))}
              </div>

              {/* Timer */}
              <div className="otp-timer">
                {otpExpired ? (
                  <span className="otp-expired">Code expired</span>
                ) : (
                  <span>Code expires in <strong>{otpTimer}s</strong></span>
                )}
              </div>

              <button className="login-btn" onClick={handleVerifyOtp}
                disabled={otp.join("").length < 6}>
                Verify Code
              </button>

              <div className="otp-resend-row">
                Didn't receive it?
                <button type="button" className="login-switch-btn" onClick={handleResendOtp}>
                  Resend Code
                </button>
              </div>

              <button type="button" className="login-back-btn" onClick={() => setScreen("forgot")}>
                ← Change Email
              </button>
            </div>
          )}

          {/* ══════════════ RESET ══════════════ */}
          {screen === "reset" && (
            <form className="login-form" onSubmit={handleResetSubmit}>
              {errors.general && <div className="login-error-banner">⚠️ {errors.general}</div>}

              <div className="login-info-box success">
                ✅ Email verified! Set a new password for <strong>{otpEmail}</strong>
              </div>

              <div className="login-field">
                <label className="login-label">New Password</label>
                <div className="login-input-wrap">
                  <span className="login-input-icon">🔒</span>
                  <input type={showPwd ? "text" : "password"} name="password"
                    className={`login-input ${errors.password ? "error" : ""}`}
                    placeholder="Min. 6 characters" value={formData.password} onChange={handleChange} autoFocus />
                  <button type="button" className="login-eye" onClick={() => setShowPwd(!showPwd)}>
                    {showPwd ? "🙈" : "👁️"}
                  </button>
                </div>
                {formData.password && (
                  <div className="pwd-strength">
                    <div className="pwd-strength-bar">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className="pwd-strength-seg"
                          style={{ background: i <= pwdStrength ? strengthColor[pwdStrength] : "#e2e8f0" }} />
                      ))}
                    </div>
                    <span className="pwd-strength-label" style={{ color: strengthColor[pwdStrength] }}>
                      {strengthLabel[pwdStrength]}
                    </span>
                  </div>
                )}
                {errors.password && <span className="login-error">{errors.password}</span>}
              </div>

              <div className="login-field">
                <label className="login-label">Confirm New Password</label>
                <div className="login-input-wrap">
                  <span className="login-input-icon">🔒</span>
                  <input type={showConfirm ? "text" : "password"} name="confirm"
                    className={`login-input ${errors.confirm ? "error" : ""}`}
                    placeholder="Re-enter new password" value={formData.confirm} onChange={handleChange} />
                  <button type="button" className="login-eye" onClick={() => setShowConfirm(!showConfirm)}>
                    {showConfirm ? "🙈" : "👁️"}
                  </button>
                </div>
                {errors.confirm && <span className="login-error">{errors.confirm}</span>}
              </div>

              <button type="submit" className="login-btn" disabled={loading}>
                {loading ? <span className="login-spinner" /> : "Reset Password"}
              </button>
            </form>
          )}

          {/* ── Switch login/signup ── */}
          {(screen === "login" || screen === "signup") && (
            <div className="login-switch">
              {screen === "login" ? "Don't have an account?" : "Already have an account?"}
              <button type="button" className="login-switch-btn"
                onClick={() => { setErrors({}); setFormData({ name:"", email:"", password:"", confirm:"" }); setScreen(screen === "login" ? "signup" : "login"); }}>
                {screen === "login" ? "Sign Up" : "Sign In"}
              </button>
            </div>
          )}

          {/* Demo credentials */}
          {screen === "login" && (
            <div className="login-demo">
              <p className="login-demo-title">Demo Account</p>
              <p className="login-demo-text">📧 demo@travelcraft.com</p>
              <p className="login-demo-text">🔒 demo123</p>
            </div>
          )}
        </div>

        {/* Feature pills */}
        {(screen === "login" || screen === "signup") && (
          <div className="login-features">
            {[["🗺️","Smart Itineraries"],["💰","Budget Planning"],["🌍","Global Destinations"]].map(([icon, text]) => (
              <div key={text} className="login-feature">
                <span className="login-feature-icon">{icon}</span>
                <span className="login-feature-text">{text}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
