import "../Styles/Recently.css";
import recentImg1 from "../assets/Recent1.webp";
import recentImg2 from "../assets/Recent2.jpeg";
import recentImg3 from "../assets/Recent3.jpeg";
import { useNavigate } from "react-router-dom"; // <-- import useNavigate

const RecentlyFoundSection = () => {
  const navigate = useNavigate(); // hook to navigate programmatically

  const recentItems = [
    { id: 1, title: "Wallet", date: "24 Sept 2025", img: recentImg1 },
    { id: 2, title: "Keys", date: "23 Sept 2025", img: recentImg2 },
    { id: 3, title: "Backpack", date: "22 Sept 2025", img: recentImg3 },
  ];

  const handleShowMore = () => {
    navigate("/recently-lost"); // <-- navigate to full Recently Lost Items page
  };

  return (
    <section className="recently-found">
      <h2 className="section-title">Recently Lost Items</h2>
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

export default RecentlyFoundSection;
