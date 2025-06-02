import { RotateSpinner } from "react-spinners-kit";

export default function Modal({ show, onClose, data, onChange, onSave, title, fields, loading }) {

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" >
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content" style={{ position: "relative" }}>

                    {/* Spinner Overlay */}
                    {loading && (
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: "rgba(255, 255, 255, 0.7)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 100000
                            }}
                        >
                            <RotateSpinner color="black" />
                        </div>
                    )}

                    <div className="modal-header" style={{ backgroundColor: "#2392e0" }}>
                        <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                        <button type="button" onClick={onClose} className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <form>
                            <div className="row modal-div">
                                {fields.map(({ key, label, isreq, inputtype = "input", options = [], placeholder = "" }) => (
                                    <div className="form-group input-div" key={key}>
                                        <label style={{ fontSize: "1.01rem", fontWeight: "600" }}>
                                            {label}
                                            {isreq ? (
                                                <span className="text-danger" style={{ fontSize: "1.27rem", fontWeight: "600", marginLeft: "0.2rem" }}>*</span>
                                            ) : (
                                                <span style={{ fontSize: "1.27rem", fontWeight: "600", marginLeft: "0.2rem" }}></span>
                                            )}
                                        </label>

                                        {/* Text input */}
                                        {inputtype === "input" && (
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data[key] || ""}
                                                onChange={(e) => onChange(key, e.target.value)}
                                                required={isreq}
                                                disabled={loading}
                                                placeholder={placeholder}
                                            />
                                        )}

                                        {/* Select dropdown */}
                                        {inputtype === "select" && (
                                            <select
                                                value={data[key] || ""}
                                                 onChange={(e) => onChange(key, e.target.value)}
                                                className="form-control"
                                                required={isreq}
                                                disabled={loading}
                                            >
                                                <option value="" disabled>Select {label}</option>
                                                {options.map((option, idx) => (
                                                    <option key={idx} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>
                                        )}
                                    </div>
                                ))}

                            </div>
                        </form>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-warning btn-glow" onClick={onClose} data-dismiss="modal" aria-label="Close" disabled={loading}>
                            Close
                        </button>
                        <button type="button" className="ml-1 btn btn-info btn-glow" onClick={onSave} disabled={loading}>
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

