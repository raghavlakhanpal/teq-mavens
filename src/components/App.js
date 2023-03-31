import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "./Login";
import Dashboard from "./Dashboard";

// Access Specifier
const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/login" />;
};
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
