import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/FoundReport.css"; 
import foundImage from "../assets/find.jpg"; 

const FoundSectionPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    file: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now redirect to SignUp page
    navigate("/signup");
  };

  return (
    <div className="found-section-page">
      <h1 className="title">Report a Found Item</h1>
      <div className="found-section-container">
        
        {/* Image Preview */}
        <div className="image-preview">
          <img 
            src={formData.file ? URL.createObjectURL(formData.file) : foundImage} 
            alt="Found preview" 
          />
        </div>

        {/* Form */}
        <form className="found-form" onSubmit={handleSubmit}>
          <label>
            Item Name
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </label>

          <label>
            Description
            <textarea 
              name="description" 
              value={formData.description} 
              onChange={handleChange} 
              required 
            />
          </label>

          <label>
            Location
            <input 
              type="text" 
              name="location" 
              value={formData.location} 
              onChange={handleChange} 
              required 
            />
          </label>

          <label className="file-input-label">
            Upload Image
            <input 
              type="file" 
              name="file" 
              accept="image/*" 
              onChange={handleChange} 
            />
          </label>

          <button type="submit">Report Found Item</button>
        </form>
      </div>
    </div>
  );
};

export default FoundSectionPage;
