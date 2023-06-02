import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  aboutUsPath,
  buildingPath,
  facilityPath,
  homePath,
  rootPath,
} from "./routes";
import Home from "./pages/Home";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import FacilityPage from "./pages/FacilityPage";
import BuildingPage from "./pages/BuildingPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div>
      <AppHeader />
      <main>
        <Routes>
          {[rootPath, homePath].map((path, index) => (
            <Route path={path} element={<Home />} key={index} />
          ))}
          {/* <Route path={rootPath} element={<Home />}/> */}
          <Route path={facilityPath} element={<FacilityPage />} />
          <Route path={buildingPath} element={<BuildingPage />} />
          <Route path={aboutUsPath} element={<AboutPage />} />
        </Routes>
      </main>
      <AppFooter />
    </div>
  );
}

export default App;
