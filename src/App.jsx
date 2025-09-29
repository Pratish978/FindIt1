import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import LostSection from "./Components/LostSection";
import FoundSection from "./Components/FoundItems";
import RecentlyFoundSection from "./Components/RecentlyFoundSection";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import LostSectionPage from "./Components/LostSectionPage";
import FoundReport from "./Components/FoundReport";
import RecentlyLostPage from "./Components/RecentlyLostPage";


// Wrapper to conditionally show Navbar
const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbarPaths = ["/lost-report", "/found-report","/recently-lost"]; // paths where navbar is hidden
  const hideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <LostSection />
                <FoundSection />
                <RecentlyFoundSection />
                <Footer />
              </>
            }
          />

          {/* Login / Signup */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Lost / Found Report Pages (Navbar hidden) */}
          <Route path="/lost-report" element={<LostSectionPage />} />
          <Route path="/found-report" element={<FoundReport />} />

          <Route path="/recently-lost" element={<RecentlyLostPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
