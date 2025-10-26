import "../Styles/RecentlyFoundItems.css";
import RecentImg5 from "../assets/Recent5.jpeg";
import RecentImg6 from "../assets/Recent6.jpeg";
import RecentImg7 from "../assets/Recent7.webp";
import { useNavigate } from "react-router-dom";

const RecentlyFoundItems = () => {
  const navigate = useNavigate();

  const recentItems = [
    { id: 1, title: "Headphones", date: "26 Sept 2025", img: RecentImg5 },
    { id: 2, title: "Book", date: "25 Sept 2025", img: RecentImg6 },
    { id: 3, title: "Watch", date: "24 Sept 2025", img: RecentImg7 },
  ];

  const handleShowMore = () => {
    navigate("/recently-found");
  };

  return (
    <section className="recently-found">
      <h2 className="section-title">Recently Found Items</h2>
      <div className="recent-items-container">
        {recentItems.map((item) => (
          <div key={item.id} className="recent-card">
            <img src={item.img} alt={item.title} />
            <h3 className="item-title">{item.title}</h3>
            <p>{item.date}</p>
          </div>
        ))}
      </div>
      <button className="show-more-btn" onClick={handleShowMore}>
        Show More Details
      </button>
    </section>
  );
};

export default RecentlyFoundItems;
