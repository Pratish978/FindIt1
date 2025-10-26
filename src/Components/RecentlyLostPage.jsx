import React, { useEffect, useState } from "react";
import "../Styles/RecentlyLostPage.css";
import lost1 from "../assets/Recent1.webp";
import lost2 from "../assets/Recent2.jpeg";
import lost3 from "../assets/Recent3.jpeg";

const lostItems = [
  {
    id: 1,
    name: "Wallet",
    image: lost1,
    location: "Universal College of Engineering",
    date: "24 Sept 2025",
    description: "Black leather wallet with multiple cards inside.",
    contact: "9876543210",
  },
  {
    id: 2,
    name: "Keys",
    image: lost2,
    location: "Universal College of Engineering",
    date: "23 Sept 2025",
    description: "Set of house keys with a red keychain.",
    contact: "9123456780",
  },
  {
    id: 3,
    name: "Bag",
    image: lost3,
    location: "Universal College of Engineering",
    date: "22 Sept 2025",
    description: "Blue backpack containing books and laptop.",
    contact: "9988776655",
  },
];

const RecentlyLostPage = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".recently-lost-page");
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
    <div className={`recently-lost-page ${show ? "show" : ""}`}>
      <h1 className="page-title">Recently Lost Items</h1>

      <div className="lost-items-container">
        {lostItems.map((item, index) => (
          <div
            key={item.id}
            className="lost-card"
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <img src={item.image} alt={item.name} />
            <div className="lost-info">
              <h3>{item.name}</h3>
              <p className="location">
                <strong>Location:</strong> {item.location}
              </p>
              <p className="date">
                <strong>Date Lost:</strong> {item.date}
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

export default RecentlyLostPage;
