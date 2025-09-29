import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- import useNavigate
import "../Styles/FoundReport.css";

const FoundReport = () => {
  const navigate = useNavigate(); // initialize navigate
  const [formData, setFormData] = useState({
    itemName: "",
    description: "",
    location: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Found Item Data:", formData);
    // redirect to SignUp page
    navigate("/signup");
  };

  return (
    <div className="found-report-page">
      <h2>Report Found Item</h2>
      <form onSubmit={handleSubmit} className="found-form">
        <label>
          Item Name
          <input
            type="text"
            name="itemName"
            value={formData.itemName}
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
          ></textarea>
        </label>

        <label>
          Location Found
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Upload Image
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FoundReport;


