import React, { useState } from 'react';
import '../Pages/CSS/Custom CSS/RadioStyles.css'; // Assuming your custom styles are in this file

const RadioButton = ({ name = 'example', options = [], value, onChange, ispassed=false }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
// Determine which value to use for checked
  const currentValue = ispassed ? value : selectedOption;
   const handleChange = (option) => {
    if (ispassed) {
      onChange?.(option); // Use parent callback if passed
    } else {
      setSelectedOption(option); // Internal state update
    }
  };
  return (
    <div className="py" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize:"0.9rem" }}>
      {options.map((option, index) => (
        <label key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop:"0.2rem", fontSize:"0.9rem" }}>
          <input
            type="radio"
            className="option-input radio"
            name={name}
            value={option}
           checked={currentValue === option}
            onChange={() => handleChange(option)}
          />
          <span style={{fontSize:"0.9rem", marginTop:"0.09rem"}}>{option}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
