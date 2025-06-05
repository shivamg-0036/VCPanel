import { useState, useEffect, useRef, useMemo } from 'react';
import '../Pages/CSS/Custom CSS/UserCreation.css'
import SelectBox from './SelectBox';
import InputBox from './InputBox';
import { DatePicker } from 'antd';
import Textarea from './Textarea';
import { Link } from 'react-router-dom';
import SMSUserCreation from './SMSUserCreation';
import RCSUserCreation from './RCSUserCreation';
import WABAUserCreation from './WABAUserCreation';
import VoiceUserCreation from './VoiceUserCreation';

export default function User_Creation() {
    const [usertype, setusertype] = useState("");
    const [accounttype, setaccounttype] = useState("");
    const [enterprise, setenterprise] = useState("");
    const [reseller, setreseller] = useState("");
    const [seller, setseller] = useState("");
    const [selectionOrder, setSelectionOrder] = useState([]);
    const [assignaccounts, setassignaccounts] = useState([]);
    const [status, setstatus] = useState("");
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [AccselectedOptions, setAccSelectedOptions] = useState([]);
    const [UserAccselectedOptions, setUserAccselectedOptions] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isAccOpen, setIsAccOpen] = useState(false);
    const [isUserAccOpen, setisUserAccOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    const [searchETerm, setESearchTerm] = useState("");
    const [EDropdownVisible, setEDropdownVisible] = useState(false);
    const [isESelecting, setisESelecting] = useState(false);

    const [searchRTerm, setRSearchTerm] = useState("");
    const [RDropdownVisible, setRDropdownVisible] = useState(false);
    const [isRSelecting, setisRSelecting] = useState(false);

    const [searchSTerm, setSSearchTerm] = useState("");
    const [SDropdownVisible, setSDropdownVisible] = useState(false);
    const [isSSelecting, setisSSelecting] = useState(false);

    const [searchUTerm, setSearchUTerm] = useState("");

    const isDisabled = usertype === "reportuser" || usertype === "accountmanager";

    const dropdownRef = useRef(null);
    const dropdownRefAssign = useRef();
    const dropdownRefAssignRU = useRef();


    const handleSubmit = () => {
        console.log("Submitting with:", selectedOptions);
        // Final form submission logic here
    };

    // Prioritize SMS if included
    const getOrderedOptions = () => {
        let ordered = selectionOrder.filter(opt => selectedOptions.includes(opt));
        if (ordered.includes('SMS')) {
            ordered = ['SMS', ...ordered.filter(opt => opt !== 'SMS')];
        }
        return ordered;
    };

    const orderedOptions = getOrderedOptions();

    const goToNext = () => {
        setCurrentIndex(prev => prev + 1);
    };

    const goToPrevious = () => {
        setCurrentIndex(prev => Math.max(0, prev - 1));
    };

    useEffect(() => {
        if (
            usertype === 'Reseller' &&
            !selectedOptions.includes('SMS') &&
            !selectedOptions.includes('RCS')
        ) {
            setusertype('');
        }
    }, [selectedOptions, usertype]);


    const options = [
        { label: 'SMS', value: 'SMS' },
        { label: 'RCS', value: 'RCS' },
        { label: 'WhatsApp', value: 'WABA' },
        { label: 'Voice', value: 'Voice' },
    ];

    const Accoptions = [

        { label: 'User 1', value: 'User1' },
        { label: 'User 2', value: 'User2' },
        { label: 'User 3', value: 'User3' },
        { label: 'User 4', value: 'User4' },
        { label: 'RCS User 1', value: 'RUser1' },
        { label: 'RCS User 2', value: 'RUser2' },
        { label: 'RCS User 3', value: 'RUser3' },
        { label: 'WABA User 4', value: 'WUser4' },
        { label: 'Voice 1', value: 'VUser1' },
        { label: 'Voice 2', value: 'VUser2' },
        { label: 'Voice 3', value: 'VUser3' },
        { label: 'Voice User 4', value: 'VUser4' },
        { label: 'Voice User 1', value: 'VRUser1' },
        { label: 'Voice User 2', value: 'VRUser2' },
        { label: 'Voice User 3', value: 'VRUser3' },
        { label: 'Voice User 4', value: 'VWUser4' }
    ];

    const backndData = [
        { enterprise: "Netwin", reseller: "", seller: "Net-seller1", user: "DHNSRI" },
        { enterprise: "Lombard", reseller: "Reseller3", user: "Prlbard" },
        { enterprise: "Lombard", reseller: "Reseller1", user: "trlbard" },
        { enterprise: "Universalinfo", reseller: "Reseller2", seller: "Univ-seller1", user: "univ-User1" }
    ]

    const enterprisefilterOptions = useMemo(() => {
        return Array.from(new Set(
            backndData
                .filter(opt => opt.enterprise?.trim()) // Step 1
                .filter(opt => opt.enterprise.toLowerCase().includes(searchETerm.toLowerCase())) // Step 2
                .map(opt => opt.enterprise.trim()) // Step 3
        ));
    }, [searchETerm]);

    const resellerfilterOptions = useMemo(() => {
        return Array.from(new Set(
            backndData
                .filter(opt => opt.reseller?.trim())
                .filter(opt =>
                    opt.reseller.toLowerCase().includes(searchRTerm.toLowerCase()) &&
                    (
                        searchETerm?.trim() === "" ||
                        opt.enterprise?.trim() === searchETerm.trim()
                    )
                )
                .map(opt => opt.reseller.trim())
        ));
    }, [searchRTerm, searchETerm]);

    const sellerfilterOptions = useMemo(() => {
        return Array.from(new Set(
            backndData
                .filter(opt => opt.seller?.trim())
                .filter(opt =>
                    opt.seller.toLowerCase().includes(searchSTerm.toLowerCase()) &&
                    (
                        (enterprise?.trim() === "" || opt.enterprise?.trim() === searchETerm.trim()) &&
                        (reseller?.trim() === "" || opt.reseller?.trim() === searchRTerm.trim())
                    )
                )
                .map(opt => opt.seller.trim())
        ));
    }, [searchSTerm, searchETerm, searchRTerm]);

    const userFilterOptions = useMemo(() => {
        const users = backndData
            .filter(opt => opt.user?.trim()) // Ensure 'user' exists and is not empty
            .filter(opt =>
                opt.user.toLowerCase().includes(searchUTerm.toLowerCase()) && // Filter by user search term
                (
                    (enterprise?.trim() === "" || opt.enterprise?.trim() === searchETerm.trim()) &&
                    (reseller?.trim() === "" || opt.reseller?.trim() === searchRTerm.trim()) &&
                    (seller?.trim() === "" || opt.seller?.trim() === searchSTerm.trim())
                )
            )
            .map(opt => opt.user.trim());

        // Create a unique list and map to { label, value } structure
        return Array.from(new Set(users)).map(user => ({
            label: user,
            value: user
        }));
    }, [searchUTerm, searchETerm, searchRTerm, searchSTerm]);




    // const filteredOptions = backndData.filter(opt =>
    //     opt.enterprise.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    const filteredOptions = Accoptions.filter(opt =>
        opt.label.toLowerCase().includes(searchTerm.toLowerCase())
    );



    const toggleAssignOption = (value) => {
        setAccSelectedOptions(prev =>
            prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
        );
    };

    const toggleUserAssignOption = (value) => {
        setUserAccselectedOptions(prev =>
            prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
        );
    };

    const toggleOption = (value) => {
        setSelectedOptions(prev => {
            const isSelected = prev.includes(value);
            let newSelected;

            if (isSelected) {
                newSelected = prev.filter(v => v !== value);
                setSelectionOrder(order => order.filter(v => v !== value));
            } else {
                newSelected = [...prev, value];
                setSelectionOrder(order => {
                    const without = order.filter(v => v !== value);
                    return [...without, value]; // Add to end
                });
            }

            // Handle SMS logic
            if (prev.includes('SMS') && !newSelected.includes('SMS')) {
                setaccounttype('');
            }

            // Determine correct new index
            const currentValue = orderedOptions[currentIndex];
            const newOrderedOptions = getOrderedOptionsFromSelectionOrder(newSelected); // See below

            if (!newSelected.includes(currentValue)) {
                // Current value removed
                const fallbackIndex = Math.min(currentIndex, newOrderedOptions.length - 1);
                setCurrentIndex(fallbackIndex);
            }

            return newSelected;
        });
    };

    const getOrderedOptionsFromSelectionOrder = (customSelected) => {
        let ordered = selectionOrder.filter(opt => customSelected.includes(opt));
        if (ordered.includes('SMS')) {
            ordered = ['SMS', ...ordered.filter(opt => opt !== 'SMS')];
        }
        return ordered;
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const renderComponent = () => {
        const current = orderedOptions[currentIndex];

        switch (current) {
            case 'SMS':
                // Only render SMSUserCreation if accounttype is 'User' or 'Reseller'
                if (usertype === 'User' || usertype === 'Reseller') {
                    return <SMSUserCreation accounttype={accounttype} setaccounttype={setaccounttype} />;
                } else {
                    return <div></div>;
                }
            case 'RCS':
                return <RCSUserCreation />;
            case 'WABA':
                return <WABAUserCreation />;
            case 'Voice':
                return <VoiceUserCreation />;
            default:
                return <div></div>;
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        if (currentIndex >= orderedOptions.length) {
            setCurrentIndex(prev => Math.max(0, orderedOptions.length - 1));
        } else {
            const currentValue = orderedOptions[currentIndex];
            if (!selectedOptions.includes(currentValue)) {
                // current value is no longer selected, move to next one
                setCurrentIndex(0); // or smart logic: find next still-included one
            }
        }
    }, [selectedOptions, orderedOptions, currentIndex]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRefAssign.current && !dropdownRefAssign.current.contains(event.target)) {
                setIsAccOpen(false);
            }

            if (dropdownRefAssignRU.current && !dropdownRefAssignRU.current.contains(event.target)) {
                setisUserAccOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        if (usertype === "reportuser" || usertype === "accountmanager") {
            setSelectedOptions([]);
        }

        setEDropdownVisible(false);
        setenterprise("");
        setESearchTerm("");
        setisESelecting(false);

        setRDropdownVisible(false);
        setreseller("");
        setRSearchTerm("");
        setisRSelecting(false);

        setSDropdownVisible(false);
        setseller("");
        setSSearchTerm("");
        setisSSelecting(false);
    }, [usertype]);

    console.log("SearchETerm:" + searchETerm);
    console.log("enterprise:" + enterprise);

    return (
        <div style={{ position: "relative" }}  >
            <div className="content-body mb-2" >
                <div className="">
                    <div className="col-12"  >
                        <div className="card" style={{boxShadow:  "0 0px 12px rgba(8, 70, 243, 0.4)"}} >
                            <div className="card-header">
                                <h5 className="card-title" style={{ fontWeight: "600" }}>USER MANAGEMENT PANEL</h5>
                            </div>

                            <div className="card-content collapse show" style={{ fontSize: "0.9rem", position: "relative" }}>
                                <div className="card-body" >
                                    <div className="row mb-1" style={{ display: "flex", flexWrap: "wrap", columnGap: "1.7rem", justifyContent: "flex-start" }} >
                                        <div style={{ display: "block", marginTop: "0.25rem" }}>
                                            <label>
                                                <strong>Service Type</strong>
                                            </label>

                                            <br />

                                            <div className="multi-select-dropdown" ref={dropdownRef}>
                                                <div className={`dropdown-header ${isDisabled ? 'disabled' : ''}`} onClick={() => {
                                                    if (!isDisabled) setIsOpen(!isOpen);
                                                }}>
                                                    {selectedOptions.length > 0 ? (
                                                        <div className="selected-tags" onClick={e => e.stopPropagation()}>
                                                            {selectedOptions.map((value) => {
                                                                const label = options.find(opt => opt.value === value)?.label;
                                                                return (
                                                                    <div className="tag" key={value}>
                                                                        {label}
                                                                        <span className="remove-tag" onClick={() => !isDisabled && toggleOption(value)}>×</span>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    ) : (
                                                        'Select Service Type'
                                                    )}
                                                    <span className="arrow">
                                                        {isOpen ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                                                    </span>
                                                </div>

                                                {isOpen && !isDisabled && (
                                                    <div className="dropdown-list">
                                                        {options.map(opt => (
                                                            <label key={opt.value} className="dropdown-item">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={selectedOptions.includes(opt.value)}
                                                                    onChange={() => toggleOption(opt.value)}
                                                                    className="form-check-input"
                                                                    disabled={isDisabled}
                                                                />
                                                                <span className="custom-checkbox" />
                                                                {opt.label}
                                                            </label>
                                                        ))}
                                                    </div>
                                                )}

                                            </div>
                                        </div>

                                        <SelectBox
                                            label="User Type"
                                            options={[
                                                { label: 'User Creation', value: 'User' },
                                                selectedOptions.includes('SMS') || selectedOptions.includes('Voice')
                                                    ? { label: 'Reseller', value: 'Reseller' }
                                                    : null,
                                                { label: 'Reporting User Creation', value: 'reportuser' },
                                                { label: 'Account Manager', value: 'accountmanager' },
                                            ].filter(Boolean)}
                                            value={usertype}
                                            onChange={(e) => setusertype(e.target.value)}
                                            isreq={false}
                                            placeholder="Select User Type"
                                            maxLength={15}
                                            width="14rem"
                                        />

                                        <InputBox
                                            label="User Name"
                                            type="text"
                                            placeholder="User Name"
                                            maxLength={24}
                                            isreq={false}
                                        />

                                        <InputBox
                                            label="Password"
                                            type="password"
                                            placeholder="Password"
                                            maxLength={25}
                                            isreq={false}
                                        />

                                        <InputBox
                                            label="Email ID"
                                            type="email"
                                            placeholder="Email ID"
                                            maxLength={35}
                                            isreq={true}
                                        />

                                        <InputBox
                                            label="Phone Number"
                                            type="text"
                                            placeholder="Phone Number"
                                            maxLength={22}
                                            isreq={false}
                                        />

                                        <SelectBox
                                            label="Select Status"
                                            options={[
                                                { label: 'Option 1', value: 'Option 1' },
                                                { label: 'Option 2', value: 'Option 2' }
                                            ]}
                                            value={status}
                                            onChange={(e) => setstatus(e.target.value)}
                                            isreq={false}
                                            placeholder="Select Status"
                                            maxLength={20}
                                            width="15rem"
                                        />

                                        <div style={{ display: "block", marginTop: "0.3rem", maxHeight: "15rem", overflowY: "auto", width: "15.3rem" }}>
                                            <label >
                                                <strong>Expiry Date</strong>
                                            </label>
                                            <br />
                                            <DatePicker size='middle' style={{ padding: "0.55rem 1.3rem", margin: "0", border: "1px solid gray", width: "100%" }} />
                                        </div>

                                        {(usertype === "accountmanager") &&
                                            <div style={{ display: "block", marginTop: "0.25rem" }}>
                                                <label>
                                                    <strong>Assign Accounts</strong>
                                                </label>

                                                {usertype === "accountmanager" &&
                                                    <div className="multi-select-dropdown-accounts" ref={dropdownRefAssign}>
                                                        <div className="dropdown-header" onClick={() => setIsAccOpen(!isAccOpen)}>
                                                            {AccselectedOptions.length > 0 ? (
                                                                <div className="selected-tags" onClick={e => e.stopPropagation()}>
                                                                    {AccselectedOptions.map((value) => {
                                                                        const label = Accoptions.find(opt => opt.value === value)?.label;
                                                                        return (
                                                                            <div className="tag" key={value}>
                                                                                {label}
                                                                                <span className="remove-tag" onClick={() => toggleAssignOption(value)}>×</span>
                                                                            </div>
                                                                        );
                                                                    })}
                                                                </div>
                                                            ) : (
                                                                'Select Assign Accounts'
                                                            )}

                                                            <span className="arrow">
                                                                {isAccOpen ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                                                            </span>
                                                        </div>


                                                        {isAccOpen && (
                                                            <div className="dropdown-list">
                                                                <input
                                                                    type="text"
                                                                    placeholder="Search Enterprise accounts..."
                                                                    className="dropdown-search"
                                                                    value={searchTerm}
                                                                    onChange={(e) => setSearchTerm(e.target.value)}
                                                                    style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }}
                                                                />


                                                                {filteredOptions.map(opt => (
                                                                    <label key={opt} className="dropdown-item">
                                                                        <input
                                                                            type="checkbox"
                                                                            checked={AccselectedOptions.includes(opt.value)}
                                                                            onChange={() => toggleAssignOption(opt.value)}
                                                                            className="form-check-input"
                                                                        />
                                                                        <span className="custom-checkbox" />
                                                                        {opt.label}
                                                                    </label>
                                                                ))}
                                                                {/* {filteredOptions.map(opt => {
                                                                    const label = opt.enterprise;
                                                                    const value = opt.enterprise; // Or use another unique field

                                                                    return (
                                                                        <label key={value} className="dropdown-item">
                                                                            <input
                                                                                type="checkbox"
                                                                                checked={AccselectedOptions.includes(value)}
                                                                                onChange={() => toggleAssignOption(value)}
                                                                                className="form-check-input"
                                                                            />
                                                                            <span className="custom-checkbox" />
                                                                            {label}
                                                                        </label>
                                                                    );
                                                                })} */}
                                                            </div>
                                                        )}
                                                    </div>
                                                }
                                            </div>
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-body mb-0 pb-0">
                <div className="row">
                    <div className="col-12"  >
                        <div className="card mb-0 pb-0" style={{ marginBottom:{} }} >
                            <div className="card-content collapse show" style={{ fontSize: "0.9rem", position: "relative" }}>
                                <div className="card-body p-0 m-0 " >
                                    {/* {selectedOptions.includes("SMS") && (usertype === "User" || usertype === "Reseller") &&
                                        <>
                                        </>
                                    } */}

                                    {usertype === "reportuser" && (
                                        <>
                                            <div className='row'  >
                                                <div className="card-header mb-1" style={{ borderTop: "1px solid rgba(0, 0, 0, .06)", backgroundColor: "#3BAFDA", width: "100%" }}>
                                                    <h6 className="card-title" style={{ fontWeight: "600" }}>Assign Accounts</h6>
                                                </div>
                                            </div>

                                            {/* Reporting Assign Accounts  */}
                                            <div className='row ml-2 mb-2' style={{ display: "flex", flexWrap: "wrap", columnGap: "1.7rem", justifyContent: "flex-start" }}>
                                                <div style={{ position: "relative", width: "31%", marginTop: "0.4rem" }}>
                                                    <strong> <label>Select Enterprise</label></strong>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Select Enterprise"
                                                        value={searchETerm}
                                                        style={{ fontSize: "0.9rem" }}
                                                        onFocus={() => setEDropdownVisible(true)} // Show dropdown on focus
                                                        onBlur={() => {
                                                            if (!isESelecting) {
                                                                setEDropdownVisible(false); // Only hide if not selecting
                                                            }
                                                        }}
                                                        onChange={(e) => {
                                                            setESearchTerm(e.target.value)
                                                            setenterprise(e.target.value)
                                                        }}
                                                    />

                                                    {EDropdownVisible && (
                                                        <div
                                                            style={{
                                                                position: "absolute",
                                                                top: "100%", // Position dropdown below the input
                                                                width: "100%",
                                                                maxHeight: "150px",
                                                                overflowY: "auto",
                                                                border: "1px solid #ccc",
                                                                borderRadius: "5px",
                                                                backgroundColor: "white",
                                                                zIndex: 1000,
                                                            }}
                                                            onMouseDown={() => setisESelecting(true)} // Mark as selecting
                                                            onMouseUp={() => setisESelecting(false)} // Reset after selecting
                                                        >
                                                            {enterprisefilterOptions?.length > 0 ? (
                                                                enterprisefilterOptions.map((tid, index) => (
                                                                    <div
                                                                        key={index}
                                                                        onClick={() => {
                                                                            setenterprise(tid); // Update templateid
                                                                            setESearchTerm(tid); // Update searchTerm to reflect selected value
                                                                            setEDropdownVisible(false); // Hide dropdown after selection
                                                                        }}
                                                                        style={{
                                                                            padding: "5px",
                                                                            cursor: "pointer",
                                                                            fontSize: "0.9rem",
                                                                            backgroundColor:
                                                                                enterprise === tid ? "#f0f0f0" : "white",
                                                                            borderRadius: "3px",
                                                                        }}
                                                                    >
                                                                        {tid}
                                                                    </div>
                                                                ))
                                                            )
                                                                : (
                                                                    <div style={{ padding: "8px 5px" }}>No Enterprise Found</div>
                                                                )}
                                                        </div>
                                                    )}
                                                </div>

                                                <div style={{ position: "relative", width: "31%", marginTop: "0.4rem" }}>
                                                    <strong> <label>Select Re-Seller</label></strong>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Select Reseller"
                                                        value={searchRTerm}
                                                        style={{ fontSize: "0.9rem" }}
                                                        onFocus={() => setRDropdownVisible(true)} // Show dropdown on focus
                                                        onBlur={() => {
                                                            if (!isRSelecting) {
                                                                setRDropdownVisible(false); // Only hide if not selecting
                                                            }
                                                        }}
                                                        onChange={(e) => {
                                                            setRSearchTerm(e.target.value);
                                                            setreseller(e.target.value);
                                                        }}


                                                    />

                                                    {RDropdownVisible && (
                                                        <div
                                                            style={{
                                                                position: "absolute",
                                                                top: "100%", // Position dropdown below the input
                                                                width: "100%",
                                                                maxHeight: "150px",
                                                                overflowY: "auto",
                                                                border: "1px solid #ccc",
                                                                borderRadius: "5px",
                                                                backgroundColor: "white",
                                                                zIndex: 1000,
                                                            }}
                                                            onMouseDown={() => setisRSelecting(true)} // Mark as selecting
                                                            onMouseUp={() => setisRSelecting(false)} // Reset after selecting
                                                        >
                                                            {resellerfilterOptions?.length > 0 ? (
                                                                resellerfilterOptions.map((tid, index) => (
                                                                    <div
                                                                        key={index}
                                                                        onClick={() => {
                                                                            setreseller(tid); // Update templateid
                                                                            setRSearchTerm(tid); // Update searchTerm to reflect selected value
                                                                            setRDropdownVisible(false); // Hide dropdown after selection
                                                                        }}
                                                                        style={{
                                                                            padding: "5px",
                                                                            cursor: "pointer",
                                                                            fontSize: "0.9rem",
                                                                            backgroundColor:
                                                                                reseller === tid ? "#f0f0f0" : "white",
                                                                            borderRadius: "3px",
                                                                        }}
                                                                    >
                                                                        {tid}
                                                                    </div>
                                                                ))
                                                            )
                                                                : (
                                                                    <div style={{ padding: "8px 5px" }}>No Re Seller Found</div>
                                                                )}
                                                        </div>
                                                    )}
                                                </div>

                                                <div style={{ position: "relative", width: "31%", marginTop: "0.4rem" }}>
                                                    <strong> <label>Select Seller</label></strong>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Select Seller"
                                                        value={searchSTerm}
                                                        style={{ fontSize: "0.9rem" }}
                                                        onFocus={() => setSDropdownVisible(true)} // Show dropdown on focus
                                                        onBlur={() => {
                                                            if (!isSSelecting) {
                                                                setSDropdownVisible(false); // Only hide if not selecting
                                                            }
                                                        }}
                                                        onChange={(e) => {
                                                            setSSearchTerm(e.target.value)
                                                            setseller(e.target.value)
                                                        }}
                                                    />

                                                    {SDropdownVisible && (
                                                        <div
                                                            style={{
                                                                position: "absolute",
                                                                top: "100%", // Position dropdown below the input
                                                                width: "100%",
                                                                maxHeight: "150px",
                                                                overflowY: "auto",
                                                                border: "1px solid #ccc",
                                                                borderRadius: "5px",
                                                                backgroundColor: "white",
                                                                zIndex: 1000,
                                                            }}
                                                            onMouseDown={() => setisSSelecting(true)} // Mark as selecting
                                                            onMouseUp={() => setisSSelecting(false)} // Reset after selecting
                                                        >
                                                            {sellerfilterOptions?.length > 0 ? (
                                                                sellerfilterOptions.map((tid, index) => (
                                                                    <div
                                                                        key={index}

                                                                        onClick={() => {
                                                                            setseller(tid); // Update templateid
                                                                            setSSearchTerm(tid); // Update searchTerm to reflect selected value
                                                                            setSDropdownVisible(false); // Hide dropdown after selection
                                                                        }}
                                                                        style={{
                                                                            padding: "8px 5px",
                                                                            cursor: "pointer",
                                                                            fontSize: "0.9rem",
                                                                            backgroundColor:
                                                                                seller === tid ? "#f0f0f0" : "white",
                                                                            borderRadius: "3px",
                                                                        }}
                                                                    >
                                                                        {tid}
                                                                    </div>
                                                                ))
                                                            )
                                                                : (
                                                                    <div style={{ padding: "8px 5px" }}>No Seller Found</div>
                                                                )}
                                                        </div>
                                                    )}
                                                </div>

                                                <div style={{ position: "relative", minWidth: "31%", marginTop: "1.4rem",width:"auto", maxWidth:"98%" }}>
                                                    <strong> <label>Select Assign Accounts</label></strong>
                                                    <div className="multi-select-dropdown-accounts" ref={dropdownRefAssignRU}>
                                                        <div className="dropdown-header" onClick={() => setisUserAccOpen(!isUserAccOpen)}>
                                                            {UserAccselectedOptions.length > 0 ? (
                                                                <div className="selected-tags" onClick={e => e.stopPropagation()}>
                                                                    {UserAccselectedOptions.map((value) => {
                                                                        const label = UserAccselectedOptions.find(opt => opt.value === value)?.label || value;
                                                                        return (
                                                                            <div className="tag" key={value}>
                                                                                {label}
                                                                                <span className="remove-tag" onClick={() => toggleUserAssignOption(value)}>×</span>
                                                                            </div>
                                                                        );
                                                                    })}

                                                                </div>
                                                            ) : (
                                                                'Select Assign Accounts'
                                                            )}

                                                            <span className="arrow">
                                                                {isUserAccOpen ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                                                            </span>
                                                        </div>

                                                        {isUserAccOpen && (
                                                            <div className="dropdown-list">
                                                                <input
                                                                    type="text"
                                                                    placeholder="Search User accounts..."
                                                                    className="dropdown-search"
                                                                    value={searchUTerm}
                                                                    onChange={(e) => setSearchUTerm(e.target.value)}
                                                                    style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }}
                                                                />

                                                                {userFilterOptions.length > 0 ?  (
                                                                    userFilterOptions.map(opt => (
                                                                    <label key={opt.value} className="dropdown-item">
                                                                        <input
                                                                            type="checkbox"
                                                                            checked={UserAccselectedOptions.includes(opt.value)}
                                                                            onChange={() => toggleUserAssignOption(opt.value)}
                                                                            className="form-check-input"
                                                                        />
                                                                        <span className="custom-checkbox" />
                                                                        {opt.label}
                                                                    </label>
                                                                ))
                                                                ) : (
                                                                    <div style={{ padding: "6px 5px",paddingTop:"2px" }}>No User Account Found</div>
                                                                )}



                                                            </div>


                                                        )}
                                                    </div>
                                                </div>




                                            </div>


                                        </>
                                    )}

                                    {renderComponent()}

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            {((selectedOptions.length > 0 && currentIndex !== 0) || (usertype === "reportuser")) && <div className='mb-2'></div>}

            <div style={{
                position: "sticky",
                bottom: "0",
                textAlign: "right",
                paddingRight: "2rem",
                zIndex: 10,
                marginTop: selectedOptions.includes("SMS") && (usertype === 'Reseller' || usertype === 'User') ? '1.8rem' : '0',
            }}>
                {currentIndex < selectedOptions.length - 1 ? (
                    <button className="btn btn-info  btn-glow mr-1 " type="button" onClick={goToNext}  >
                        Next
                    </button>
                ) : (
                    <button className="btn btn-info  btn-glow mr-1 " type="button" >
                        Submit
                    </button>
                )}


                {selectedOptions.length > 1 && currentIndex !== 0 && <button className="btn btn-warning btn-glow box-shadow-4 mr-1" type="button" onClick={goToPrevious}  >
                    Back
                </button>}
            </div>
        </div>
    );
}