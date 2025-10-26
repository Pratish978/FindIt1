import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import LostSection from "./Components/LostSection";
import FoundSection from "./Components/FoundItems";
import RecentlyFoundSection from "./Components/RecentlyFoundSection";
import RecentlyFoundItems from "./Components/RecentlyFoundItems";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import LostSectionPage from "./Components/LostSectionPage";
import FoundReport from "./Components/FoundReport";
import RecentlyLostPage from "./Components/RecentlyLostPage";
import RecentlyFoundPage from "./Components/RecentlyFoundPage";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Layout wrapper
const Layout = ({ children }) => {
  const location = useLocation();

  // Only hide Navbar on report pages
  const hideNavbarPaths = ["/lost-report", "/found-report"];
  const hideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <ScrollToTop />
      <div style={{ paddingTop: !hideNavbar ? "60px" : "0" }}>
        {children}
      </div>
      {!hideNavbar && <Footer />}
    </>
  );
};

const AppRoutes = () => (
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
            <RecentlyFoundItems />
          </>
        }
      />

      {/* Login / Signup */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Lost / Found Report Pages (Navbar hidden) */}
      <Route path="/lost-report" element={<LostSectionPage />} />
      <Route path="/found-report" element={<FoundReport />} />

      {/* Recently Lost / Recently Found Full Pages (Navbar visible) */}
      <Route path="/recently-lost" element={<RecentlyLostPage />} />
      <Route path="/recently-found" element={<RecentlyFoundPage />} />
    </Routes>
  </Layout>
);

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
