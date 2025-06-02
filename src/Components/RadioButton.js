import React, { useState } from 'react';
import '../Pages/CSS/Custom CSS/RadioStyles.css'; // Assuming your custom styles are in this file

const RadioButton = ({ name = 'example', options = [] }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="py" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {options.map((option, index) => (
        <label key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          <input
            type="radio"
            className="option-input radio"
            name={name}
            value={option}
            checked={selectedOption === option}
            onChange={() => setSelectedOption(option)}
          />
          <span style={{fontSize:"0.9rem", marginTop:"0.09rem"}}>{option}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
