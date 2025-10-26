import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- import useNavigate
import "../Styles/LostSectionPage.css";
import lostImage from "../assets/lost.jpg";

const LostSectionPage = () => {
  const navigate = useNavigate(); // initialize navigate
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    file: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // redirect to SignUp page instead of submitting
    navigate("/signup");
  };

  return (
    <div className="lost-section-page">
      <h1 className="title">Report a Lost Item</h1>
      <div className="lost-section-container">
        <div className="image-preview">
          <img src={formData.file ? URL.createObjectURL(formData.file) : lostImage} alt="Lost preview" />
        </div>

        <form className="lost-form" onSubmit={handleSubmit}>
          <label>
            Item Name
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>

          <label>
            Description
            <textarea name="description" value={formData.description} onChange={handleChange} required />
          </label>

          <label>
            Location
            <input type="text" name="location" value={formData.location} onChange={handleChange} required />
          </label>

          <label className="file-input-label">
            Upload Image
            <input type="file" name="file" accept="image/*" onChange={handleChange} />
          </label>

          <button type="submit">Report Lost Item</button>
        </form>
      </div>
    </div>
  );
};

export default LostSectionPage;
