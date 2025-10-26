import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- useNavigate
import lostImage from "../assets/lost.jpg";
import "../Styles/LostSection.css";

const LostSection = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();  // <-- hook

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".lost-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 30) {
          setShow(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToLostPage = () => {
    navigate("/lost-report");  // <-- navigate to full page
  };

  return (
    <section id="lost" className={`lost-section ${show ? "show" : ""}`}>
      <h2>Lost Items</h2>
      <img src={lostImage} alt="Lost item" />
      <p>If you lost something, report it here and help us return it to you.</p>
      <button onClick={goToLostPage}>Report Lost Item</button>
    </section>
  );
};

export default LostSection;
