import React from "react";

export default function InputBox({ label, type = "text", placeholder = "", maxLength = 20, isreq = false,disable=false,text="" }) {
    // Calculate input width based on maxLength
    const getInputWidth = (maxLen) => `${maxLen + 5}ch`;

    return (
        <div className="form-group" style={{marginTop:"-0.1rem"}} >
            <label style={{  fontWeight: "600", color: "", fontSize:"0.9rem"}}>
                <strong>{label}</strong>
            </label>

            {isreq ? <span class="text-danger" style={{ fontSize: "1rem", fontWeight: "600", marginLeft: "0.2rem" }} >*</span> : <span style={{ fontSize: "1.14rem", fontWeight: "600", marginLeft: "0.2rem" }}></span>}


            <input
                type={type}
                className="form-control"
                placeholder={placeholder}
                maxLength={maxLength}
                style={{ width: getInputWidth(maxLength), fontSize:"0.9rem", marginTop:"0.1rem" }}
                boxSizing='content-box'
                disabled={disable}
            />
            <p style={{fontSize:"0.82rem", marginTop:"0.3rem"}}>{text}</p>
        </div>
    );
}
