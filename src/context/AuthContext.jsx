import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const savedUser = localStorage.getItem("travelcraft_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    
    // Create demo user if not exists
    const users = JSON.parse(localStorage.getItem("travelcraft_users") || "[]");
    if (!users.find((u) => u.email === "demo@travelcraft.com")) {
      users.push({
        id: "demo",
        name: "Demo User",
        email: "demo@travelcraft.com",
        password: "demo123",
        avatar: { initials: "DU", color: "#6366f1" },
        joinedDate: new Date().toISOString(),
        tripsPlanned: 5,
      });
      localStorage.setItem("travelcraft_users", JSON.stringify(users));
    }
    
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Get all users from localStorage
    const users = JSON.parse(localStorage.getItem("travelcraft_users") || "[]");
    const existingUser = users.find((u) => u.email === email);

    if (existingUser) {
      if (existingUser.password === password) {
        const userData = { ...existingUser };
        delete userData.password; // Don't store password in session
        setUser(userData);
        localStorage.setItem("travelcraft_user", JSON.stringify(userData));
        return { success: true };
      } else {
        return { success: false, error: "Invalid password" };
      }
    } else {
      return { success: false, error: "User not found" };
    }
  };

  const signup = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem("travelcraft_users") || "[]");
    
    // Check if user already exists
    if (users.find((u) => u.email === email)) {
      return { success: false, error: "Email already registered" };
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password,
      avatar: generateAvatar(name),
      joinedDate: new Date().toISOString(),
      tripsPlanned: 0,
    };

    users.push(newUser);
    localStorage.setItem("travelcraft_users", JSON.stringify(users));

    // Auto login
    const userData = { ...newUser };
    delete userData.password;
    setUser(userData);
    localStorage.setItem("travelcraft_user", JSON.stringify(userData));

    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("travelcraft_user");
  };

  const updateProfile = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem("travelcraft_user", JSON.stringify(updatedUser));

    // Update in users list
    const users = JSON.parse(localStorage.getItem("travelcraft_users") || "[]");
    const userIndex = users.findIndex((u) => u.id === user.id);
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...updates };
      localStorage.setItem("travelcraft_users", JSON.stringify(users));
    }
  };

  const incrementTrips = () => {
    const tripsPlanned = (user.tripsPlanned || 0) + 1;
    updateProfile({ tripsPlanned });
  };

  // Reset password — verifies email exists, stores new password
  const resetPassword = (email, newPassword) => {
    const users = JSON.parse(localStorage.getItem("travelcraft_users") || "[]");
    const idx = users.findIndex((u) => u.email === email);
    if (idx === -1) return { success: false, error: "No account found with this email." };
    users[idx].password = newPassword;
    localStorage.setItem("travelcraft_users", JSON.stringify(users));
    return { success: true };
  };

  // Check if email is registered
  const checkEmail = (email) => {
    const users = JSON.parse(localStorage.getItem("travelcraft_users") || "[]");
    return !!users.find((u) => u.email === email);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, updateProfile, incrementTrips, resetPassword, checkEmail, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Generate avatar based on name initials
function generateAvatar(name) {
  const colors = ["#6366f1", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981", "#3b82f6", "#ef4444"];
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  const color = colors[Math.floor(Math.random() * colors.length)];
  return { initials, color };
}
