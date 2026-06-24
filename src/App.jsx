import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";

import Dashboard from "./pages/Dashboard";
import Candidates from "./pages/Candidates";
import Analytics from "./pages/Analytics";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import Settings from "./pages/Settings";

import AIAssistant from "./components/ui/AIAssistant";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add(
        "dark"
      );
      localStorage.setItem(
        "theme",
        "dark"
      );
    } else {
      document.documentElement.classList.remove(
        "dark"
      );
      localStorage.setItem(
        "theme",
        "light"
      );
    }
  }, [darkMode]);

  return (
    <div
      className="
        min-h-screen
        bg-slate-50
        dark:bg-slate-950
        transition-colors
        duration-300
      "
    >
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Layout */}
   <div
  className="
    flex
    flex-col
    min-h-screen
    lg:ml-[304px]
  "
>
      
        {/* Navbar */}
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          toggleSidebar={() =>
            setSidebarOpen(
              !sidebarOpen
            )
          }
        />

        {/* Content */}
      <main
  className="
    flex-1
    p-4
    md:p-6
    lg:p-8
  "
  style={{ paddingTop: "100px" }}
>   
          <Routes>
            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/candidates"
              element={<Candidates />}
            />

            <Route
              path="/analytics"
              element={<Analytics />}
            />

            <Route
              path="/resume-analyzer"
              element={
                <ResumeAnalyzer />
              }
            />

            <Route
              path="/settings"
              element={<Settings />}
            />
          </Routes>
        </main>

        {/* Floating AI Assistant */}
        <AIAssistant />
      </div>
    </div>
  );
}

export default App;