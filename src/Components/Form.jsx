import React, { useState } from "react";
import "./form.css";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
  });

  // Handle form field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData); // Pass formData to the onSubmit function provided by props
    // Optionally, you can clear the form fields after submission
    setFormData({
      title: "",
      firstName: "",
      lastName: "",
    });
    // Log the form data for demonstration purposes
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="form__container">
      <h1>Enter your details</h1>
      <form className="form__details" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <select
            id="title"
            name="title"
            value={formData.title}
            required
            onChange={handleInputChange}
          >
            <option value="">Select...</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Ms">Ms</option>
            <option value="Mx">Mx</option>
          </select>
        </div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
