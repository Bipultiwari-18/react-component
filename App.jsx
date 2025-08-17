
import React, { useState } from 'react';
import SharedInput from './sharedinput.jsx';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    agreeToTerms: false,
    gender: '',
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <SharedInput
        type="text"
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleChange}
      />

      <SharedInput
        type="textarea"
        name="description"
        label="Description"
        value={formData.description}
        onChange={handleChange}
      />

      <SharedInput
        type="checkbox"
        name="agreeToTerms"
        label="Agree to terms"
        value={formData.agreeToTerms}
        onChange={handleChange}
      />

      <SharedInput
        type="radio"
        name="gender"
        label="Gender"
        value={formData.gender}
        options={[
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
        ]}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;

  