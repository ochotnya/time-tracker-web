import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import MyActivityPage from "./pages/MyActivityPage";
import DashboardPage from "./pages/DashboardPage";
import ActivityTypesPage from "./pages/ActivityTypesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/myactivity" element={<MyActivityPage />} />
        <Route path="/activitytypes" element={<ActivityTypesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
