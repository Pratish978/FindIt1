import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // <-- import Link
import foundImage from "../assets/find.jpg"; 
import "../Styles/FoundItems.css";

const FoundSection = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".found-section");
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

  return (
    <section id="find" className={`found-section ${show ? "show" : ""}`}>
      <h2>Found Items</h2>
      <img src={foundImage} alt="Found item" />
      <p>If you found something, report it here and help return it to the owner.</p>
      <Link to="/signup">
        <button>Report Found Item</button>
      </Link>
    </section>
  );
};

export default FoundSection;
