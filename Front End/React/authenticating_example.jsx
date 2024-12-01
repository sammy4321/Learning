import React, { useState, useContext, createContext } from "react";
import { BrowserRouter as Router, Route, Navigate, Outlet, Link } from "react-router-dom";

// === Auth Context ===
// Manages authentication state globally.
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null); // Token for current session
  const [refreshToken, setRefreshToken] = useState(null); // Token for refreshing session

  const login = (token, refresh) => {
    setAuthToken(token);
    setRefreshToken(refresh);
  };

  const logout = () => {
    setAuthToken(null);
    setRefreshToken(null);
  };

  return (
    <AuthContext.Provider value={{ authToken, refreshToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// === Auth Action (Login Component) ===
const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    // Simulated token and refresh token
    const fakeAuthToken = "fake-jwt-token";
    const fakeRefreshToken = "fake-refresh-token";
    login(fakeAuthToken, fakeRefreshToken);
    alert("Logged in successfully!");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <button
        onClick={handleLogin}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Login
      </button>
    </div>
  );
};

// === Refresh Token Simulation ===
const useRefreshToken = () => {
  const { refreshToken, login, logout } = useContext(AuthContext);

  const refreshSession = () => {
    if (refreshToken) {
      // Simulate refreshing token
      const newToken = "new-fake-jwt-token";
      const newRefresh = "new-fake-refresh-token";
      login(newToken, newRefresh);
      alert("Session refreshed successfully!");
    } else {
      alert("Refresh token expired! Please login again.");
      logout();
    }
  };

  return refreshSession;
};

// === Protected Route Component ===
const ProtectedRoute = ({ children }) => {
  const { authToken } = useContext(AuthContext);

  return authToken ? children : <Navigate to="/login" />;
};

// === Dashboard Component (Protected) ===
const Dashboard = () => {
  const { logout } = useContext(AuthContext);
  const refreshSession = useRefreshToken();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome to the protected dashboard!</p>
      <button
        onClick={refreshSession}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        Refresh Token
      </button>
      <button
        onClick={logout}
        className="mt-4 ml-2 px-4 py-2 bg-red-500 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
};

// === Home Component ===
const Home = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold">Home</h1>
    <p>This is a public page.</p>
    <Link to="/login" className="text-blue-500">Go to Login</Link>
    <br />
    <Link to="/dashboard" className="text-blue-500">Go to Dashboard</Link>
  </div>
);

// === App Component ===
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Router>
    </AuthProvider>
  );
};

export default App;
