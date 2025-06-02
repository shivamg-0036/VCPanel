import React from 'react';

export default function RadioGroup({ label, name, options, selectedValue, onChange,isreq }) {
    return (
        <div className="form-group" style={{ marginBottom: "1rem", marginTop:"-0.5rem" }}>
            {label && <label className="mb-1" style={{fontSize:"1.01rem", fontWeight:"600", color:""}}>{label}</label>}
            {isreq ? <span class="text-danger" style={{ fontSize: "1.27rem", fontWeight: "600", marginLeft: "0.2rem" }} >*</span> : <span style={{ fontSize: "1.27rem", fontWeight: "600", marginLeft: "0.2rem" }}></span>}

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                {options.map((option, index) => (
                    <label key={index} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                        <input
                            type="radio"
                            name={name}
                            value={option.value}
                            checked={selectedValue === option.value}
                            onChange={onChange}
                           
                        />
                        {option.label} <span style={{marginRight:"0.7rem"}}></span>
                    </label>
                ))}
            </div>
        </div>
    );
}
