import { useEffect, useState } from "react"
import '../Pages/CSS/Custom CSS/ClientCreation.css'
import InputBox from "./InputBox";
import SelectBox from "./SelectBox";
import Textarea from "./Textarea";
import RadioGroup from "./RadioGroup";
import Table from "./Table";
import Modal from "./Modal";

export default function Client_Creation() {

    const inititaldepartmentvalues = { clientname: "", departmentname: "", demail: "", dcontact: "", mnumber: "", dstatus: "" }

    const [tabname, settabname] = useState("add");
    const [billingcycle, setbillingcycle] = useState("");
    const [billingtype, setbillingtype] = useState("");
    const [status, setstatus] = useState("Active");
    const [Dstatus, setDstatus] = useState("");
    const [address, setaddress] = useState("");
    const [defaultdepartment, setdefaultdepartment] = useState("Yes");
    const [DepartmentformData, setDepartmentformData] = useState(inititaldepartmentvalues);
    const [selectedRow, setSelectedRow] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);

    console.log("laoding:", loading)

    const [data, setData] = useState([
        {
            clientname: "Shivam", username: "shivam1", password: "pass123",
            contactnumber: "1234567890",
            emailid: "shivam@example.com",
            customertype: "Retail",
            createdate: "2024-01-01",
            expirydate: "2025-01-01",
            status: "Active",
            Action: <button type="button" style={{ margin: "0rem", marginTop: "-0.5rem", marginBottom: "-0.3rem" }} class="btn btn-outline-info round btn-glow btn-sm"><i class="fa fa-edit"></i></button>
        },
        {
            clientname: "Amit", username: "shivam2", password: "amit@123",
            contactnumber: "9876543210",
            emailid: "amit@example.com",
            customertype: "Corporate",
            createdate: "2024-02-15",
            expirydate: "2025-02-15",
            status: "Inactive",
            Action: <button type="button" style={{ margin: "0rem", marginTop: "-0.5rem", marginBottom: "-0.3rem" }} class="btn btn-outline-info round btn-glow btn-sm"><i class="fa fa-edit"></i></button>

        },
        {
            clientname: "Zara", username: "shivam3", password: "z@raPass",
            contactnumber: "9123456789",
            emailid: "zara@example.com",
            customertype: "Retail",
            createdate: "2024-03-10",
            expirydate: "2025-03-10",
            status: "Active",
            Action: <button type="button" style={{ margin: "0rem", marginTop: "-0.5rem", marginBottom: "-0.3rem" }} class="btn btn-outline-info round btn-glow btn-sm"><i class="fa fa-edit"></i></button>
        }
    ]);


    const handleEdit = (rowData) => {
        setSelectedRow(rowData);     // set the data you want to edit
        setShowModal(true);          // open the modal
    };

    const handletab = (name) => {
        settabname(name);
    };

    const handleInputChange = (key, value) => {
        setSelectedRow((prev) => ({ ...prev, [key]: value }));
    };

    const handleDepartmentChange = (key, value) => {
        setDepartmentformData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSave = () => {
        setLoading(true); // Show spinner

        const updated = data.map((row) =>
            row.username === selectedRow.username ? selectedRow : row
        );

        console.log("Updated selected row:", selectedRow); // ✅ This logs only the changed row
        setData(updated);
        setShowModal(false);
    };

    const handleclose = () => {
        setLoading(false);
        setShowModal(false);
        setDepartmentformData(inititaldepartmentvalues)
    };



    return (
        <div class="content-body" style={{ fontSize: "0.8rem" }}>
            <section class="inputmask" id="inputmask">
                <div class="row">
                    <div class="col-12">
                        <div class="card" style={{ minHeight: "98%" }} >
                            <div class="card-header">
                                <h6 class="card-title font-weight-bold">Enterprise & Department - View / Add</h6>
                            </div>

                            <div class="card-content collapse show">
                                <div class="card-body">
                                    <ul class="nav nav-tabs">
                                        <li class="nav-item" onClick={() => handletab("add")}>
                                            <a class="nav-link active show" id="base-tab1" data-toggle="tab"
                                                aria-controls="tab1" href="#tab1" aria-expanded="true">ADD</a>
                                        </li>
                                        <li class="nav-item" onClick={() => handletab("client")}>
                                            <a class="nav-link" id="base-tab2" data-toggle="tab"
                                                aria-controls="tab2" href="#tab2" aria-expanded="false">CLIENT
                                                VIEW</a>
                                        </li>
                                        <li class="nav-item" onClick={() => handletab("department")}>
                                            <a class="nav-link" id="base-tab3" data-toggle="tab"
                                                aria-controls="tab3" href="#tab3" aria-expanded="false">DEPARTMENT
                                                VIEW</a>
                                        </li>
                                    </ul>


                                </div>
                            </div>

                            {tabname === "add" &&
                                <div class="tab-content px-2 pb-4" style={{ marginTop: "-0.6rem", overflow: "auto", paddingTop: ".7rem" }}>
                                    <div role="tabpanel" class="tab-pane active show" id="tab1"
                                        aria-expanded="true" aria-labelledby="base-tab1" style={{ position: "relative" }}>
                                        <div class="row"
                                            style={{
                                                display: "flex",
                                                flexWrap: "wrap",
                                                columnGap: "1.7rem",
                                                justifyContent: "flex-start"
                                            }} >

                                          



                                            <InputBox
                                                label="Enterprise Name"
                                                type="text"
                                                placeholder="Enterprise Name"
                                                maxLength={25}
                                                isreq={true}
                                            />

                                            <InputBox
                                                label="Email ID"
                                                type="email"
                                                placeholder="Email ID"
                                                maxLength={27}
                                                isreq={true}
                                            />

                                            <InputBox
                                                label="Phone Number"
                                                type="text"
                                                placeholder="Phone Number"
                                                maxLength={20}
                                                isreq={true}
                                            />


                                            <InputBox
                                                label="Primary Contact Number"
                                                type="text"
                                                placeholder="Primary Contact Number"
                                                maxLength={25}
                                                isreq={false}
                                            />

                                            <InputBox
                                                label="GST Number"
                                                type="text"
                                                placeholder="GST Number"
                                                maxLength={25}
                                                isreq={false}
                                            />

                                            <SelectBox
                                                label="Billing Cycle"
                                                options={[
                                                    { label: '30 Days', value: '30' },
                                                    { label: '45 Days', value: '45' },
                                                    { label: '60 Days', value: '60' }
                                                ]}
                                                value={billingcycle}
                                                onChange={(e) => setbillingcycle(e.target.value)}
                                                isreq={false}
                                                placeholder="Select Billing Cycle"
                                                maxLength={15}
                                                width="16rem"
                                            />

                                            <SelectBox
                                                label="Billing Type"
                                                options={[
                                                    { label: 'Prepaid', value: 'Prepaid' },
                                                    { label: 'Postpaid', value: 'Postpaid' }
                                                ]}
                                                value={billingtype}
                                                onChange={(e) => setbillingtype(e.target.value)}
                                                isreq={false}
                                                placeholder="Select Billing Type"
                                                maxLength={20}
                                                width="16rem"
                                            />


                                            <SelectBox
                                                label="Status"
                                                options={[
                                                    { label: 'Active', value: 'Active' },
                                                    { label: 'InActive', value: 'InActive' }
                                                ]}
                                                value={status}
                                                onChange={(e) => setstatus(e.target.value)}
                                                isreq={false}
                                                placeholder=""
                                                maxLength={20}
                                                width="14rem"
                                            />

                                            <Textarea
                                                label="Address"
                                                placeholder="Enter Address"
                                                value={address}
                                                onChange={(e) => setaddress(e.target.value)}
                                                maxLength={2000}
                                            />

                                            <RadioGroup
                                                label="Department by Default"
                                                name="defaultdepartment"
                                                options={[
                                                    { label: "Yes", value: "Yes" },
                                                    { label: "No", value: "No" }
                                                ]}
                                                selectedValue={defaultdepartment}
                                                onChange={(e) => setdefaultdepartment(e.target.value)}
                                                isreq={true}
                                            />



                                        </div>

                                        {defaultdepartment === "No" && <div class="card-header " style={{ marginLeft: '-1.4rem', marginTop: "-0.6rem", paddingBottom: "1.3rem" }}>
                                            <h6 class="card-title font-weight-bold">Department</h6>
                                        </div>}

                                        {defaultdepartment === "No" && <div class="row mt-1 mb-2"
                                            style={{
                                                display: "flex",
                                                flexWrap: "wrap",
                                                columnGap: "1.7rem",
                                                justifyContent: "flex-start",
                                                paddingBottom: "0.4rem"

                                            }}
                                        >
                                            <InputBox
                                                label="Department Name"
                                                type="text"
                                                placeholder="Department Name"
                                                maxLength={20}
                                                isreq={true}
                                            />

                                            <InputBox
                                                label="Email ID"
                                                type="email"
                                                placeholder="Email ID"
                                                maxLength={30}
                                                isreq={true}
                                            />

                                            <InputBox
                                                label="Mobile Number"
                                                type="text"
                                                placeholder="Mobile Number"
                                                maxLength={20}
                                                isreq={true}
                                            />

                                            <SelectBox
                                                label="Select Status"
                                                options={[
                                                    { label: 'Option 1', value: 'Option 1' },
                                                    { label: 'Option 2', value: 'Option 2' }
                                                ]}
                                                value={Dstatus}
                                                onChange={(e) => setDstatus(e.target.value)}
                                                isreq={false}
                                                placeholder="Select Status"
                                                maxLength={20}
                                                width="17rem"
                                            />

                                        </div>}



                                        <div className="button-div" >
                                            <button className="btn btn-info btn-min-width btn-glow mr-1 mb-1" type="button" >
                                                Submit
                                            </button>

                                            <button className="btn btn-warning btn-min-width box-shadow-4 mr-1 mb-1" type="button"  >
                                                Reset
                                            </button>
                                        </div>



                                    </div>
                                </div>
                            }

                            {tabname === "client" &&
                                <div class="tab-pane my-1" id="tab2" aria-labelledby="base-tab2">
                                    <div class="container-fluid">
                                        <div class="container-fluid">
                                            <Table
                                                columns={[{ key: "clientname", label: "Client Name" }
                                                    , { key: "username", label: "User Name" }
                                                    , { key: "password", label: "Password" }
                                                    , { key: "contactnumber", label: "Contact Number" }
                                                    , { key: "emailid", label: "Email ID" }
                                                    , { key: "customertype", label: "Customer Type" }
                                                    , { key: "createdate", label: "Created Date" }
                                                    , { key: "expirydate", label: "Expiry Date" }
                                                    , { key: "status", label: "Status" }
                                                    , { key: "Action", label: "Action", disableFilter: true }
                                                ]}
                                                data={[
                                                    {
                                                        clientname: "Shivam", username: "shivam1", password: "pass123",
                                                        contactnumber: "1234567890",
                                                        emailid: "shivam@example.com",
                                                        customertype: "Retail",
                                                        createdate: "2024-01-01",
                                                        expirydate: "2025-01-01",
                                                        status: "Active",
                                                        Action: <button type="button" style={{ margin: "0rem", marginTop: "-0.5rem", marginBottom: "-0.3rem" }} class="btn btn-outline-info round btn-glow btn-sm"><i class="fa fa-edit"></i></button>
                                                    },
                                                    {
                                                        clientname: "Amit", username: "shivam2", password: "amit@123",
                                                        contactnumber: "9876543210",
                                                        emailid: "amit@example.com",
                                                        customertype: "Corporate",
                                                        createdate: "2024-02-15",
                                                        expirydate: "2025-02-15",
                                                        status: "Inactive",
                                                        Action: <button type="button" style={{ margin: "0rem", marginTop: "-0.5rem", marginBottom: "-0.3rem" }} class="btn btn-outline-info round btn-glow btn-sm"><i class="fa fa-edit"></i></button>

                                                    },
                                                    {
                                                        clientname: "Zara", username: "shivam3", password: "z@raPass",
                                                        contactnumber: "9123456789",
                                                        emailid: "zara@example.com",
                                                        customertype: "Retail",
                                                        createdate: "2024-03-10",
                                                        expirydate: "2025-03-10",
                                                        status: "Active",
                                                        Action: <button type="button" style={{ margin: "0rem", marginTop: "-0.5rem", marginBottom: "-0.3rem" }} class="btn btn-outline-info round btn-glow btn-sm"><i class="fa fa-edit"></i></button>
                                                    }
                                                ]}
                                                onEdit={handleEdit}
                                            />


                                            <Modal
                                                show={showModal}
                                                onClose={handleclose}
                                                data={selectedRow || {}}
                                                onChange={handleInputChange}
                                                onSave={handleSave}
                                                title="Edit Client"
                                                loading={loading}
                                                fields={[
                                                    { key: "clientname", label: "Client Name", isreq: true },
                                                    { key: "username", label: "User Name", isreq: true },
                                                    { key: "password", label: "Pass Word", isreq: true },
                                                    { key: "contactnumber", label: "Contact Number", isreq: true },
                                                    { key: "emailid", label: "Email ID", isreq: true },
                                                    { key: "customertype", label: "Customer Type", isreq: true },
                                                    { key: "createdate", label: "Created Date", isreq: true },
                                                    { key: "expirydate", label: "Expiry Date", isreq: true },
                                                    { key: "status", label: "Status", isreq: true },
                                                ]}
                                            />



                                        </div>
                                    </div>
                                </div>
                            }

                            {tabname === "department" &&
                                <div class="tab-pane" id="tab3" aria-labelledby="base-tab3">
                                    <div class="container-fluid">

                                        <div className="row mb-2 mr-2" style={{ justifyContent: "flex-end" }}>
                                            <button className="btn btn-success btn-min-width btn-glow " data-target="#exampleModal"
                                                data-toggle="modal" >Add Department
                                                <i class="fa-solid fa-circle-plus" style={{ marginLeft: "0.5rem" }}></i>

                                            </button>

                                        </div>

                                        <Table
                                            columns={
                                                [
                                                    { key: "departmentname", label: "Department Name" },
                                                    { key: "chooseclient", label: "Choose Client" },
                                                    { key: "emailid", label: "Email ID" },
                                                    { key: "contactnumber", label: "Contact Number" },
                                                    { key: "mobilenumber", label: "Mobile Number" },
                                                    { key: "status", label: "Status" },
                                                ]
                                            }

                                            data={
                                                [
                                                    { departmentname: "Operations", chooseclient: "Netwin", emailid: "netwin.ops@gmail.com", contactnumber: "918788373872", mobilenumber: "918273827399", status: "InActive" },
                                                    { departmentname: "Accounts", chooseclient: "Netwin", emailid: "netwin.accounts@gmail.com", contactnumber: "918788373872", mobilenumber: "918676822882", status: "Active" }
                                                ]
                                            }
                                        />

                                        <Modal
                                            show={showModal}
                                            onClose={handleclose}
                                            title="Add Department"
                                            loading={loading}
                                            fields={[
                                                { key: "clientname", label: "Client Name", isreq: true, inputtype: "select", options: ["Option 1", "Option 2"] },
                                                { key: "departmentname", label: "Department Name", isreq: true, placeholder: "Department Name" },
                                                { key: "demail", label: "Email ID", isreq: true, placeholder: "Email ID" },
                                                { key: "dcontact", label: "Contact Number", isreq: true, placeholder: "Contact Number" },
                                                { key: "mnumber", label: "Mobile Number", isreq: true, placeholder: "Mobile Number" },
                                                { key: "dstatus", label: "Status", isreq: true, placeholder: "Status" },
                                            ]}
                                            data={DepartmentformData}
                                            onChange={handleDepartmentChange}

                                        />

                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}