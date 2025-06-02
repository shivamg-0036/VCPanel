import React, { useState, useMemo } from "react";

export default function Table({ data, columns, onEdit }) {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
    const [filters, setFilters] = useState({});

    function naturalCompare(a, b) {
        return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
    }

    const handleSort = (key) => {
        setSortConfig((prev) => ({
            key,
            direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
        }));
    };

    const handleFilterChange = (key, value) => {
        setFilters((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const filteredData = useMemo(() => {
        return data.filter((row) =>
            columns.every(({ key, disableFilter }) => {
                if (disableFilter) return true;
                const filterValue = filters[key]?.toLowerCase() || "";
                const cellValue = (row[key] ?? "").toString().toLowerCase();
                return cellValue.includes(filterValue);
            })
        );
    }, [data, filters, columns]);

    const sortedData = useMemo(() => {
        if (!sortConfig.key) return filteredData;
        return [...filteredData].sort((a, b) => {
            const valA = a[sortConfig.key] ?? "";
            const valB = b[sortConfig.key] ?? "";
            const result = naturalCompare(String(valA), String(valB));
            return sortConfig.direction === "asc" ? result : -result;
        });
    }, [filteredData, sortConfig]);

    return (
        <div className="table-responsive">
            <table className="table table-bordered table-hover" style={{ width: "100%" }}>
                <thead>
                    <tr style={{ backgroundColor: "#3BAFDA", fontSize: "1rem", fontWeight: "500" }}>
                        {columns.map(({ key, label }) => (
                            <th
                                key={key}
                                onClick={() => handleSort(key)}
                                style={{ cursor: "pointer", whiteSpace: "nowrap", textAlign: "center" }}
                            >
                                {label}{" "}
                                <span style={{
                                    fontWeight:
                                        sortConfig.key === key && sortConfig.direction === "asc" ? "600" : "normal",
                                }}>
                                    ↑
                                </span>
                                <span style={{
                                    fontWeight:
                                        sortConfig.key === key && sortConfig.direction === "desc" ? "600" : "normal",
                                    marginLeft: "-0.1rem"
                                }}>
                                    ↓
                                </span>
                            </th>
                        ))}
                    </tr>
                    <tr style={{ fontSize: "0.8rem" }}>
                        {columns.map(({ key, disableFilter }) => (
                            <th key={`filter-${key}`} style={{ padding: "4px" }}>
                                {!disableFilter && (
                                    <input
                                        type="text"
                                        value={filters[key] || ""}
                                        onChange={(e) => handleFilterChange(key, e.target.value)}
                                        placeholder=""
                                        style={{
                                            width: "100%",
                                            padding: "4px 8px",
                                            fontSize: "0.9rem",
                                            borderRadius: "4px",
                                            border: "1px solid #ccc",
                                        }}
                                    />
                                )}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((row, idx) => (
                        <tr key={idx}>
                            {columns.map(({ key }) => (
                                <td key={key} style={{ textAlign: "center", fontSize: "1rem" }}>
                                    {key === "Action" ? (
                                        <button
                                            type="button"
                                            className="btn btn-outline-info round btn-glow btn-sm"
                                            style={{
                                                margin: "0rem",
                                                marginTop: "-0.5rem",
                                                marginBottom: "-0.3rem"
                                            }}
                                            onClick={() => onEdit?.(row)}
                                             data-toggle="modal"
                                             data-target="#exampleModal"
                                        >
                                            <i className="fa fa-edit"></i>
                                        </button>
                                    ) : (
                                        row[key]
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
