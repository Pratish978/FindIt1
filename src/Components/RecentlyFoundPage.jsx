import React, { useEffect, useState } from "react";
import "../Styles/RecentlyFoundItems.css"; // same styling
import RecentImg5 from "../assets/Recent5.jpeg";
import RecentImg6 from "../assets/Recent6.jpeg";
import RecentImg7 from "../assets/Recent7.webp";

const foundItems = [
  {
    id: 1,
    name: "Sunglasses",
    image: RecentImg5,
    location: "Universal College of Engineering",
    date: "26 Sept 2025",
    description: "Black aviator sunglasses found in cafeteria.",
    contact: "9876543210",
  },
  {
    id: 2,
    name: "Water Bottle",
    image: RecentImg6,
    location: "Universal College of Engineering",
    date: "25 Sept 2025",
    description: "Blue steel water bottle near library entrance.",
    contact: "9123456780",
  },
  {
    id: 3,
    name: "Notebook",
    image: RecentImg7,
    location: "Universal College of Engineering",
    date: "24 Sept 2025",
    description: "Math notebook with red cover.",
    contact: "9988776655",
  },
];

const RecentlyFoundPage = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".recently-found-page");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 30) setShow(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`recently-found-page ${show ? "show" : ""}`}>
      <h1 className="page-title">Recently Found Items</h1>
      <div className="found-items-container">
        {foundItems.map((item, index) => (
          <div
            key={item.id}
            className="found-card"
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <img src={item.image} alt={item.name} />
            <div className="found-info">
              <h3>{item.name}</h3>
              <p className="location">
                <strong>Location:</strong> {item.location}
              </p>
              <p className="date">
                <strong>Date Found:</strong> {item.date}
              </p>
              <p className="description">{item.description}</p>
              <p className="contact">
                <strong>Contact:</strong> {item.contact}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyFoundPage;
