// SelectBox.jsx
import React from 'react';

export default function SelectBox({ label, options, value, onChange, isreq = false, placeholder = '', maxLength = 0, width,disabled = false }) {
    return (
        <div style={{ marginTop:"-0.11rem", marginBottom:"1rem"}}>
            
            <label style={{fontSize:"0.9rem"}}>
               <strong> {label}</strong>
                {isreq && (
                    <span
                        className="text-danger"
                        style={{
                            fontSize: '1rem',
                            fontWeight: '600',
                            marginLeft: '0.2rem',
                        }}
                    >
                        *
                    </span>
                )}
            </label>

            <select
                value={value}
                onChange={onChange}
                className="form-control"
                style={{
                    padding: '0.3rem 0.75rem',
                    margin: '0.1rem 0',
                    width: width || '100%',
                    fontSize:"0.9rem",
                    height:"2.7rem"
                }}
                disabled={disabled}
            >
                <option value="" disabled>
                    {placeholder || `Select ${label.toLowerCase()}`}
                </option>
                {options.map((opt) => {
                    const displayLabel = maxLength > 0 ? opt.label.slice(0, maxLength) : opt.label;
                    return (
                        <option key={opt.value} value={opt.value}>
                            {displayLabel}
                        </option>
                    );
                })}
            </select>
        </div>

    );
}
