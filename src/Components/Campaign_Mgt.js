import { useState } from 'react';
import '../Pages/CSS/Custom CSS/createcampaign.css'
import Mobile from './Mobile';
import SelectBox from './SelectBox';
import InputBox from './InputBox';
import Textarea from './Textarea';
import RadioButton from './RadioButton';
import { DatePicker } from 'antd';

import FileInput from './FileInput';

export default function Campaign_Mgt() {
    const [servicetype, setServiceType] = useState("SMS");
    const [tabname, settabname] = useState("Quick");
    const [senderid, setsenderid] = useState("");
    const [mobilearray, setmobilearray] = useState([]);
    const [templatename, settemplatename] = useState("");
    const [msgtext, setmsgtext] = useState("");
    const [fileName, setFileName] = useState("");
    const [mobilelist, setmobilelist] = useState("");
    const [columnlist, setcolumnlist] = useState("");
    const [group,setgroup] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
        } else {
            setFileName("");
        }
    };

    const { RangePicker } = DatePicker;


    const handletab = (name) => {
        settabname(name);
    };

    return (
        <div style={{ position: "relative" }}>
            <div className="content-body mb-0" >
                <div className="">
                    <div className="col-12 pr-0"  >
                        <div className="card mb-1"  >
                            <div className="card-header" >
                                <h5 className="card-title" style={{ fontWeight: "600" }}>CAMPAIGN MANAGEMENT</h5>
                            </div>
                        </div>

                        <div style={{ display: "flex", flex: "0 0 100%", maxWidth: "100%", overflowY: "auto" }}>
                            <div className='card card-left mb-0 py-1 px-2' >
                                {/* <div className='row' style={{ justifyContent: "flex-start" }}>
                                    <SelectBox
                                        label="Select Service Type"
                                        options={[
                                            { label: 'SMS', value: 'SMS' },
                                            { label: 'RCS', value: 'RCS' },
                                            { label: 'WhatsApp', value: 'WhatsApp' },
                                            { label: "Voice", value: 'Voice' }
                                        ]}
                                        value={servicetype}
                                        onChange={(e) => setServiceType(e.target.value)}
                                        isreq={false}
                                        placeholder="Select Service type"
                                        maxLength={20}
                                        width="23rem"
                                    />
                                </div> */}


                                <ul class="nav nav-tabs mt-1" style={{ fontSize: '0.8rem', width: "100%" }}>
                                    <li class="nav-item" onClick={() => handletab("Quick")}>
                                        <a class="nav-link active show" id="base-tab1" data-toggle="tab"
                                            aria-controls="tab1" href="#tab1" aria-expanded="true">QUICK CAMPAIGN</a>
                                    </li>
                                    <li class="nav-item" onClick={() => handletab("Dynamic")}>
                                        <a class="nav-link" id="base-tab2" data-toggle="tab"
                                            aria-controls="tab2" href="#tab2" aria-expanded="false">DYNAMIC CAMPAIGN
                                        </a>
                                    </li>
                                    <li class="nav-item" onClick={() => handletab("Upload")}>
                                        <a class="nav-link" id="base-tab3" data-toggle="tab"
                                            aria-controls="tab3" href="#tab3" aria-expanded="false">UPLOAD CAMPAIGN</a>
                                    </li>

                                    <li class="nav-item" onClick={() => handletab("Group")}>
                                        <a class="nav-link" id="base-tab3" data-toggle="tab"
                                            aria-controls="tab3" href="#tab3" aria-expanded="false">GROUP CAMPAIGN</a>
                                    </li>
                                </ul>

                                {tabname === "Quick" && <>
                                    <div className='row mt-2 ' style={{ display: "flex", flexWrap: "wrap", columnGap: "1.9rem", justifyContent: "flex-start", paddingLeft: "0.5rem" }}>
                                        <InputBox
                                            label="Campaign Name"
                                            type="text"
                                            placeholder="Campaign Name"
                                            maxLength={60}
                                            isreq={true}
                                            text={"Note: Special characters are not allowed in campaign name like SPACE, [ ] | ; : \" ' . ? / ~ `"}
                                        />

                                        <SelectBox
                                            label="Sender ID"
                                            options={[
                                            ]}
                                            value={senderid}
                                            onChange={(e) => setsenderid(e.target.value)}
                                            isreq={true}
                                            placeholder="Select Sender ID"
                                            maxLength={15}
                                            width="16rem"
                                        />

                                        <Textarea
                                            label="Mobile Numbers"
                                            placeholder="Mobile Numbers [ with country code ]"
                                            value={mobilearray}
                                            onChange={(e) => setmobilearray(e.target.value)}
                                            maxLength={2000}
                                            rows='3'
                                            overflow='auto'
                                        />
                                    </div>

                                    <div className='row' style={{ display: "flex", flexWrap: "wrap", columnGap: "1.9rem", justifyContent: "flex-start", paddingLeft: "0.5rem" }}>
                                        <InputBox
                                            label="Entity ID"
                                            type="text"
                                            placeholder="Entity ID"
                                            maxLength={25}
                                            isreq={true}
                                        />

                                        <SelectBox
                                            label="Template Name"
                                            options={[
                                            ]}
                                            value={templatename}
                                            onChange={(e) => settemplatename(e.target.value)}
                                            isreq={false}
                                            placeholder="Select Template Name"
                                            maxLength={15}
                                            width="16rem"
                                        />

                                        <InputBox
                                            label="Template ID"
                                            type="text"
                                            placeholder="Template ID"
                                            maxLength={26}
                                            isreq={true}
                                        />
                                    </div>

                                    <div className='row' style={{ display: "flex", flexWrap: "wrap", columnGap: "1.9rem", justifyContent: "flex-start", paddingLeft: "0.5rem" }}>
                                        <InputBox
                                            label="Message Type"
                                            type="text"
                                            placeholder="Select template Name"
                                            maxLength={25}
                                            isreq={true}
                                            disable={true}
                                        />

                                        <InputBox
                                            label="Template Part"
                                            type="text"
                                            placeholder="Select template Name"
                                            maxLength={26}
                                            isreq={true}
                                            disable={true}
                                        />

                                        <InputBox
                                            label="Message Encoding"
                                            type="text"
                                            placeholder="Select Template Name"
                                            maxLength={26}
                                            isreq={true}
                                            disable={true}
                                        />
                                    </div>

                                    <div className='row' style={{ display: "flex", flexWrap: "wrap", columnGap: "1.9rem", justifyContent: "flex-start", paddingLeft: "0.5rem" }}>
                                        <Textarea
                                            label="Message Text"
                                            placeholder="Message Text"
                                            value={msgtext}
                                            onChange={(e) => setmsgtext(e.target.value)}
                                            maxLength={2000}
                                            rows='3'
                                            overflow='auto'
                                        />
                                    </div>

                                    <div className='row' style={{ display: "flex", flexWrap: "wrap", columnGap: "1.9rem", justifyContent: "flex-start", paddingLeft: "0.5rem" }}>
                                        <div style={{ display: "block" }}>
                                            <label style={{ fontWeight: "600", fontSize: "0.9rem", marginBottom: "0.8rem" }}>
                                                <strong>Is ShortUrl Selected</strong>
                                            </label>
                                            <RadioButton
                                                name="Is ShortUrl Selected"
                                                options={['Yes', 'No']}
                                            />
                                        </div>
                                    </div>
                                </>}

                                {tabname === "Dynamic" && <>
                                    <div className='row mt-2 ' style={{ display: "flex", flexWrap: "wrap", columnGap: "1.9rem", justifyContent: "flex-start", paddingLeft: "0.5rem" }}>
                                        <InputBox
                                            label="Campaign Name"
                                            type="text"
                                            placeholder="Campaign Name"
                                            maxLength={59}
                                            isreq={true}
                                            text={"Note: Special characters are not allowed in campaign name like SPACE, [ ] | ; : \" ' . ? / ~ `"}
                                        />

                                        <SelectBox
                                            label="Sender ID"
                                            options={[
                                            ]}
                                            value={senderid}
                                            onChange={(e) => setsenderid(e.target.value)}
                                            isreq={true}
                                            placeholder="Select Sender ID"
                                            maxLength={15}
                                            width="16rem"
                                        />

                                        <div style={{ marginTop: "-0.2rem", width: "50%" }}>
                                            <label style={{ fontWeight: "600", color: "", fontSize: "0.9rem" }}>
                                                <strong>Upload File</strong>
                                            </label>
                                            <FileInput fileName={fileName} onFileChange={handleFileChange} />
                                        </div>

                                        <div style={{ marginTop: "-0.25rem" }}>
                                            <label style={{ fontWeight: "600", fontSize: "0.9rem", marginBottom: "1.3rem" }}>
                                                <strong>Message Type</strong>
                                            </label>
                                            <RadioButton
                                                name="Message type"
                                                options={['Promotional', 'Transactional', 'Service']}
                                            />
                                        </div>




                                    </div>

                                    <div className='row' style={{ display: "flex", flexWrap: "wrap", columnGap: "1.9rem", justifyContent: "flex-start", paddingLeft: "0.5rem", marginTop: "1.8rem" }}>
                                        <SelectBox
                                            label="Template Name"
                                            options={[
                                            ]}
                                            value={templatename}
                                            onChange={(e) => settemplatename(e.target.value)}
                                            isreq={true}
                                            placeholder="Select Template Name"
                                            maxLength={15}
                                            width="15.35rem"
                                        />

                                        <InputBox
                                            label="Entity ID"
                                            type="text"
                                            placeholder="Select Sender ID"
                                            maxLength={26}
                                            isreq={true}
                                            disable={true}
                                        />

                                        <InputBox
                                            label="Template ID"
                                            type="text"
                                            placeholder="Select Template Name"
                                            maxLength={26}
                                            isreq={true}
                                            disable={true}
                                        />


                                        <Textarea
                                            label="Message Text"
                                            placeholder="Message Text"
                                            value={msgtext}
                                            onChange={(e) => setmsgtext(e.target.value)}
                                            maxLength={2000}
                                            rows='3'
                                            overflow='auto'
                                        />



                                        {/* <InputBox
                                            label="Message Type"
                                            type="text"
                                            placeholder="Select template Name"
                                            maxLength={26}
                                            isreq={true}
                                            disable={true}
                                        /> */}

                                        <div style={{ display: "block", width: "30%" }}>
                                            <label style={{ fontWeight: "600", fontSize: "0.9rem", marginBottom: "0.8rem" }}>
                                                <strong>Message Encoding</strong>
                                            </label>
                                            <RadioButton
                                                name="Message Encoding"
                                                options={['SMS', 'Flash']}
                                            />
                                        </div>

                                        <div style={{ display: "block", width: "30%" }}>
                                            <label style={{ fontWeight: "600", fontSize: "0.9rem", marginBottom: "1rem" }}>
                                                <strong>Is ShortUrl Selected</strong>
                                            </label>
                                            <RadioButton
                                                name="Is ShortUrl Selected"
                                                options={['Yes', 'No']}
                                            />
                                        </div>

                                        <div style={{ display: "block", width: "30%", marginBottom: "0.8rem" }}>
                                            <label style={{ fontWeight: "600", fontSize: "0.9rem", marginBottom: "1rem" }}>
                                                <strong>Schedule Message</strong>
                                            </label>
                                            <RadioButton
                                                name="Schedule Message"
                                                options={['Yes', 'No']}
                                            />
                                        </div>




                                        <SelectBox
                                            label="Mobile List"
                                            options={[
                                            ]}
                                            value={mobilelist}
                                            onChange={(e) => setmobilelist(e.target.value)}
                                            isreq={true}
                                            placeholder="Select Mobile Option"
                                            maxLength={15}
                                            width="15.35rem"
                                        />


                                        <SelectBox
                                            label="Column List"
                                            options={[
                                            ]}
                                            value={columnlist}
                                            onChange={(e) => setcolumnlist(e.target.value)}
                                            isreq={true}
                                            placeholder="Select Column Option"
                                            maxLength={15}
                                            width="15.8rem"
                                        />

                                        <div style={{ display: "block", marginTop: "-0.2rem" }}>
                                            <div>
                                                <label style={{ fontWeight: "600", fontSize: "0.9rem", marginBottom: "0.8rem" }}>
                                                    <strong>Schedule Time</strong>
                                                </label>
                                            </div>
                                            <DatePicker
                                                size='middle' style={{ padding: "0.6rem 1.3rem", margin: "0", border: "1px solid gray" }}
                                                showTime
                                                placeholder="Select date and time"
                                                onChange={(value, dateString) => {
                                                    console.log('Selected Time: ', value);
                                                    console.log('Formatted Selected Time: ', dateString);
                                                }}
                                            />
                                        </div>



                                    </div>






                                </>}


                                {tabname === "Upload" && <>
                                    <div className='row mt-2 ' style={{ display: "flex", flexWrap: "wrap", columnGap: "1.9rem", justifyContent: "flex-start", paddingLeft: "0.5rem" }}>
                                        <InputBox
                                            label="Campaign Name"
                                            type="text"
                                            placeholder="Campaign Name"
                                            maxLength={59}
                                            isreq={true}
                                            text={"Note: Special characters are not allowed in campaign name like SPACE, [ ] | ; : \" ' . ? / ~ `"}
                                        />

                                        <SelectBox
                                            label="Sender ID"
                                            options={[
                                            ]}
                                            value={senderid}
                                            onChange={(e) => setsenderid(e.target.value)}
                                            isreq={true}
                                            placeholder="Select Sender ID"
                                            maxLength={15}
                                            width="16rem"
                                        />

                                        <div>
                                            <label style={{ fontWeight: "600", color: "", fontSize: "0.9rem" }}>
                                                <strong>Upload File</strong>
                                            </label>

                                        </div>
                                    </div>
                                </>}

                                {tabname === "Group" && <>
                                    <div className='row mt-2 ' style={{ display: "flex", flexWrap: "wrap", columnGap: "1.9rem", justifyContent: "flex-start", paddingLeft: "0.5rem" }}>
                                         <InputBox
                                            label="Campaign Name"
                                            type="text"
                                            placeholder="Campaign Name"
                                            maxLength={59}
                                            isreq={true}
                                            text={"Note: Special characters are not allowed in campaign name like SPACE, [ ] | ; : \" ' . ? / ~ `"}
                                        />

                                        <SelectBox
                                            label="Sender ID"
                                            options={[
                                            ]}
                                            value={senderid}
                                            onChange={(e) => setsenderid(e.target.value)}
                                            isreq={true}
                                            placeholder="Select Sender ID"
                                            maxLength={15}
                                            width="16rem"
                                        />

                                         <SelectBox
                                            label=" Select Group"
                                            options={[
                                            ]}
                                            value={group}
                                            onChange={(e) => setgroup(e.target.value)}
                                            isreq={true}
                                            placeholder="Select Group"
                                            maxLength={15}
                                            width="16rem"
                                        />
                                    </div>
                                </>}

                            </div>

                            <div className=' card-right mb-0' >
                                <Mobile />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
}