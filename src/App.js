import React, { useState, useEffect } from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Login from "./components/Login";
import TravelPlanner from "./TravelPlanner";
import WelcomeScreen from "./components/WelcomeScreen";

function AppContent() {
  const { user, loading } = useAuth();
  const [showWelcome, setShowWelcome] = useState(true);
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    // Check if user has seen welcome screen in this session
    const hasSeenWelcome = sessionStorage.getItem("hasSeenWelcome");
    if (hasSeenWelcome) {
      setShowWelcome(false);
      setAppReady(true);
    }
  }, []);

  const handleWelcomeComplete = () => {
    sessionStorage.setItem("hasSeenWelcome", "true");
    setShowWelcome(false);
    setAppReady(true);
  };

  if (showWelcome && !appReady) {
    return <WelcomeScreen onComplete={handleWelcomeComplete} />;
  }

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh',
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        color: 'white',
        fontSize: '1.5rem',
        fontWeight: 'bold'
      }}>
        ✈️ Loading TravelCraft...
      </div>
    );
  }

  return user ? <TravelPlanner /> : <Login />;
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
