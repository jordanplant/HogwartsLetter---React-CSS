import React, { useState } from "react";
import Form from "./Components/Form";
import Letter from "./Components/Letter";

function App() {
  const [formData, setFormData] = useState(null);
  const [showForm, setShowForm] = useState(true); //SWAP THESE AFTER TESTING
  const [showLetter, setShowLetter] = useState(false); //SWAP THESE AFTER TESTING

  const handleFormSubmit = (data) => {
    setFormData(data);
    setShowForm(false);
    setShowLetter(true);
  };

  return (
    <div className="app">
      {showForm && <Form onSubmit={handleFormSubmit} />}
      {showLetter && <Letter formData={formData} />}
    </div>
  );
}

export default App;
