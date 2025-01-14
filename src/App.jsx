import { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { getAppSettingsApi } from "./api/app-settings";
import Courses from "./pages/Courses";
import Course from "./pages/Course";

function App() {
  useEffect(() => {
    const cachedSettings = localStorage.getItem("app_settings");
    if (!cachedSettings) {
      getAppSettingsApi().then((response) => {
        console.log(response);
        if (response.status === 200) {
          localStorage.setItem(
            "app_settings",
            JSON.stringify(response.data.app_settings)
          );
        }
      });
    }
  }, []);

  return (
    <>
      <Router>
        <Routes>
          {/* Main Routes */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<Course />} />

          {/* Redirect all other routes to /courses */}
          <Route path="*" element={<Navigate to="/courses" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
