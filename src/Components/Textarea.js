import React, { useState, useRef, useEffect } from 'react';

export default function Textarea({ label, placeholder, value, onChange, maxLength,col="12",rows="2", disable=false, overflow="hidden" }) {
  const textareaRef = useRef(null);

  // Adjust height when value changes
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // reset height
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'; // set to scrollHeight
    }
  }, [value]);

  return (
    <div className={`col-${col} pr-1`} style={{padding:"0",marginTop:"0.13rem",marginBottom:"1.2rem"}}>
      {label && <label style={{fontSize:"0.9rem"}}>
        <strong>
        {label} </strong></label>}
      <textarea
      className='form-control'
        ref={textareaRef}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        disabled={disable}
        style={{
          width: "100%",
          resize: 'none', // prevent manual resizing, optional
          overflowY: overflow, // hide scrollbar
          fontSize: '0.9rem',
          marginTop:"0.15rem",
        }}
        rows={rows}
      />
    </div>
  );
}
