import { React, useState } from 'react'
import SelectBox from './SelectBox';
import InputBox from './InputBox';
import Textarea from './Textarea';
import RadioButton from './RadioButton';
import { DatePicker } from 'antd';

import FileInput from './FileInput';
import UploadFileInput from './UploadFileInput';

export default function SMSCampaign(
    { senderid, setsenderid, dynamicsenderid, setdynamicsenderid, uploadsenderid, setuploadsenderid, groupsenderid, setgroupsenderid
        , dynmaicmsgtext, setdynamicmsgtext, tabname, settabname, quickmsgtext, setquickmsgtext, uploadmsgtext, setuploadmsgtext, setgroupmsgtext, groupmsgtext
    }
) {

    const [mobilearray, setmobilearray] = useState([]);
    const [templatename, settemplatename] = useState("");
    const [msgtext, setmsgtext] = useState("");
    const [fileName, setFileName] = useState("");
    const [mobilelist, setmobilelist] = useState("");
    const [columnlist, setcolumnlist] = useState("");
    const [groupname, setgroupname] = useState("");
    const [group, setgroup] = useState("");
    const [domain, setdomain] = useState("");
    const [callbackurl, setcallbackurl] = useState("");
    const [isshorturl, setisshorturl] = useState("No");
    const [filename, setfilename] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [dynamictemplatename, setdynamictemplatename] = useState("");
    const [isdynamicshorturl, setisdynamicshorturl] = useState("No");
    const [dynamicallbackurl, setdynamiccallbackurl] = useState("");
    const [dynamicdomain, setdynamicdomain] = useState("");
    const [isschedulemsg, setisschedulemsg] = useState("No");
    const [uploadcallbackurl, setuploadcallbackurl] = useState("");
    const [uploaddomain, setuploaddomain] = useState("");
    const [isuploadshorturl, setisuploadshorturl] = useState("No");
    const [uploadtemplatename, setuploadtemplatename] = useState("");
    const [groupcallbackurl, setgroupcallbackurl] = useState("");
    const [groupdomain, setgroupdomain] = useState("");
    const [isgroupshorturl, setisgroupshorturl] = useState("No");
    const [grouptemplatename, setgrouptemplatename] = useState("");
    const [isgroupschedulemsg, setisgroupschedulemsg] = useState("No");

    const handleFileSelect = (file) => {
        setSelectedFile(file);
        // Do something with the selected file
        if (file) {
            const fname = file.name;
            setfilename(fname);
        }
    };

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


    // // Utility functions
    // function isUnicodeMessage(text) {
    //   // Returns true if any character is not A-Z, a-z, or 0-9
    //   return /[^a-zA-Z0-9]/.test(text);
    // }

    //     const charCount = quickmsgtext.length;
    //     const isUnicode = isUnicodeMessage(quickmsgtext);
    //   const charsPerMessage = isUnicode ? 70 : 160;

    //   const messageParts = Math.ceil(charCount / charsPerMessage);

    const GSM_7_BASIC =
        '@£$¥èéùìòÇ\nØø\rÅåΔ_ΦΓΛΩΠΨΣΘΞ !"#¤%&\'()*+,-./0123456789:;<=>?' +
        '¡ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÑÜ§¿abcdefghijklmnopqrstuvwxyzäöñüà';

    const GSM_7_EXTENDED = '^{}\\[~]|€';

    // Function to strip placeholders like {#var#}
    function stripPlaceholders(text) {
        return text.replace(/\{#.*?#\}/g, '');
    }

    // Check if char is GSM-7 compatible
    function isGsm7Char(char) {
        return GSM_7_BASIC.includes(char) || GSM_7_EXTENDED.includes(char);
    }

    // Check if whole message is GSM-7 compatible
    function isGsm7Message(text) {
        for (let i = 0; i < text.length; i++) {
            if (!isGsm7Char(text[i])) {
                return false;
            }
        }
        return true;
    }

    // Count characters in GSM-7 with extended chars counted as 2
    function countGsm7Length(text) {
        let length = 0;
        for (let i = 0; i < text.length; i++) {
            if (GSM_7_EXTENDED.includes(text[i])) {
                length += 2;
            } else {
                length += 1;
            }
        }
        return length;
    }

    // Calculate SMS details based on current message
    function calculateSmsDetails(text) {
        const cleanedText = stripPlaceholders(text);
        const isGsm7 = isGsm7Message(cleanedText);

        let charCount, charsPerPart, multipartCharsPerPart;

        if (isGsm7) {
            charCount = countGsm7Length(cleanedText);
            charsPerPart = 160;
            multipartCharsPerPart = 153;
        } else {
            charCount = cleanedText.length;
            charsPerPart = 70;
            multipartCharsPerPart = 67;
        }

        const messageParts = charCount <= charsPerPart ? 1 : Math.ceil(charCount / multipartCharsPerPart);

        return {
            charCount,
            encoding: isGsm7 ? 'Plain Text' : 'Unicode',
            messageParts,
            smsCredits: messageParts,
        };
    }

    // Run calculation on current message text
    const messageMap = {
        Quick: quickmsgtext,
        Dynamic: dynmaicmsgtext,
        Group: groupmsgtext,
        Upload: uploadmsgtext
    };

    const selectedMessage = messageMap[tabname] || '';
    const { charCount, encoding, messageParts, smsCredits } = calculateSmsDetails(selectedMessage);


    return (
        <>
            <div className=" p-0 m-0 mb-1 " style={{ display: "flex", flexWrap: "wrap", columnGap: "1.7rem", justifyContent: "flex-start" }} >
                <div className="card-header" style={{ borderTop: "1px solid rgba(0, 0, 0, .06)", backgroundColor: "#3BAFDA", width: "100%" }}>
                    <h6 className="card-title" style={{ fontWeight: "600" }}>SMS</h6>
                </div>
            </div>


            <ul class="nav nav-tabs px-2" style={{ fontSize: '0.8rem', width: "100%" }}>
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
                <div className='row mt-2 px-2 ' style={{ display: "flex", flexWrap: "wrap", columnGap: "1.9rem", justifyContent: "flex-start", paddingLeft: "0.5rem" }}>
                    <InputBox
                        label="Campaign Name"
                        type="text"
                        placeholder="Campaign Name"
                        maxLength={35}
                        isreq={true}
                    // text={"Note: Special characters are not allowed in campaign name like SPACE, [ ] | ; : \" ' . ? / ~ `"}
                    />

                    <div style={{ marginTop: "-0.25rem" }}>
                        <label style={{ fontWeight: "600", fontSize: "0.89rem", marginBottom: "1rem", marginTop: "0.3rem" }}>
                            <strong>Message Type</strong>
                        </label>
                        <RadioButton
                            name="Message type"
                            options={['Promotional', 'Transactional', 'Service']}
                        />
                    </div>

                    <Textarea
                        label="Mobile Numbers"
                        placeholder="Mobile Numbers [ with country code ]"
                        value={mobilearray}
                        onChange={(e) => setmobilearray(e.target.value)}
                        maxLength={2000}
                        rows='3'
                        overflow='auto'
                    />

                    <SelectBox
                        label="Sender ID"
                        options={[
                            { label: 'VEHOST', value: 'VEHOST' },
                            { label: 'TATAMO', value: 'TATAMO' }
                        ]}
                        value={senderid}
                        onChange={(e) => setsenderid(e.target.value)}
                        isreq={true}
                        placeholder="Select Sender ID"
                        maxLength={15}
                        width="16rem"
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

                    <div style={{ display: "block", marginLeft: "0.5rem" }}>
                        <label style={{ fontWeight: "600", fontSize: "0.9rem", marginBottom: "0.8rem" }}>
                            <strong>Is ShortUrl Selected</strong>
                        </label>
                        <RadioButton
                            name="Is ShortUrl Selected"
                            value={isshorturl}
                            onChange={setisshorturl}
                            options={['Yes', 'No']}
                            ispassed={true}
                        />
                    </div>

                    {isshorturl === "Yes" && <>
                        <SelectBox
                            label="Select Domain"
                            options={[
                            ]}
                            value={domain}
                            onChange={(e) => setdomain(e.target.value)}
                            isreq={false}
                            placeholder="Select Domain Name"
                            maxLength={15}
                            width="16rem"
                        />


                        <SelectBox
                            label="Callback URL"
                            options={[
                            ]}
                            value={callbackurl}
                            onChange={(e) => setcallbackurl(e.target.value)}
                            isreq={false}
                            placeholder="--  Select  --"
                            maxLength={15}
                            width="8rem"
                        />

                        <input type="text"
                            className="form-control"
                            placeholder="URL"

                            style={{ width: "45%", fontSize: "0.9rem", height: "2.8rem", padding: "0rem 0.4rem", borderColor: "rgb(210, 210, 211)", marginTop: '1.9rem' }}
                            boxSizing='content-box'
                        />
                    </>}









                </div>

                <div className='row  px-2' style={{ display: "flex", flexWrap: "wrap", columnGap: "1.9rem", justifyContent: "flex-start", paddingLeft: "0.5rem" }}>
                    <Textarea
                        label="Message Text"
                        placeholder="Message Text"
                        value={quickmsgtext}
                        onChange={(e) => setquickmsgtext(e.target.value)}
                        maxLength={2000}
                        rows="3"
                        overflow="auto"
                        infoList={[
                            { label: "Characters", value: charCount },
                            { label: "Message Part", value: charCount === 0 ? '0' : messageParts.toString() },
                            { label: "Encoding", value: encoding },
                            { label: "SMS Credit", value: charCount === 0 ? 0 : smsCredits }
                        ]}
                    />

                </div>


            </>}

            {tabname === "Dynamic" && <>
                <div className='row mt-2 px-2' style={{ display: "flex", flexWrap: "wrap", columnGap: "1.9rem", justifyContent: "flex-start", paddingLeft: "0.5rem" }}>
                    <InputBox
                        label="Campaign Name"
                        type="text"
                        placeholder="Campaign Name"
                        maxLength={35}
                        isreq={true}
                    // text={"Note: Special characters are not allowed in campaign name like SPACE, [ ] | ; : \" ' . ? / ~ `"}
                    />

                    <div style={{ marginTop: "-0.25rem" }}>
                        <label style={{ fontWeight: "600", fontSize: "0.89rem", marginBottom: "1rem", marginTop: "0.3rem" }}>
                            <strong>Message Type</strong>
                        </label>
                        <RadioButton
                            name="Message type"
                            options={['Promotional', 'Transactional', 'Service']}
                        />
                    </div>
                </div>

                <div className='row px-2' style={{ display: "flex", flexWrap: "wrap", columnGap: "1.9rem", justifyContent: "flex-start", paddingLeft: "0.5rem" }}>
                    <label style={{ fontWeight: "600", color: "", fontSize: "0.9rem" }}>
                        <strong>Upload File</strong>
                    </label>
                    <div className='file-upload-div'>
                        <UploadFileInput onFileSelect={handleFileSelect} file={filename} />
                    </div>
                </div>

                <div className='row mt-2 px-2' style={{ display: "flex", flexWrap: "wrap", columnGap: "1.9rem", justifyContent: "flex-start", paddingLeft: "0.5rem" }}>
                    <SelectBox
                        label="Sender ID"
                        options={[
                            { label: 'VEHOST', value: 'VEHOST' },
                            { label: 'TATAMO', value: 'TATAMO' }
                        ]}
                        value={dynamicsenderid}
                        onChange={(e) => setdynamicsenderid(e.target.value)}
                        isreq={true}
                        placeholder="Select Sender ID"
                        maxLength={15}
                        width="16rem"
                    />

                    <SelectBox
                        label="Template Name"
                        options={[
                        ]}
                        value={dynamictemplatename}
                        onChange={(e) => setdynamictemplatename(e.target.value)}
                        isreq={false}
                        placeholder="Select Template Name"
                        maxLength={15}
                        width="16rem"
                    />

                    <div style={{ display: "block", marginLeft: "0.5rem" }}>
                        <label style={{ fontWeight: "600", fontSize: "0.89rem", marginBottom: "0.8rem" }}>
                            <strong>Is ShortUrl Selected</strong>
                        </label>
                        <RadioButton
                            name="Is ShortUrl Selected"
                            value={isdynamicshorturl}
                            onChange={setisdynamicshorturl}
                            options={['Yes', 'No']}
                            ispassed={true}
                        />
                    </div>

                    {isdynamicshorturl === "Yes" && <>
                        <SelectBox
                            label="Select Domain"
                            options={[
                            ]}
                            value={dynamicdomain}
                            onChange={(e) => setdynamicdomain(e.target.value)}
                            isreq={false}
                            placeholder="Select Domain Name"
                            maxLength={15}
                            width="16rem"
                        />


                        <SelectBox
                            label="Callback URL"
                            options={[
                            ]}
                            value={dynamicallbackurl}
                            onChange={(e) => setdynamiccallbackurl(e.target.value)}
                            isreq={false}
                            placeholder="--  Select  --"
                            maxLength={15}
                            width="8rem"
                        />

                        <input type="text"
                            className="form-control"
                            placeholder="URL"
                            style={{ width: "45%", fontSize: "0.9rem", height: "2.8rem", padding: "0rem 0.4rem", borderColor: "rgb(210, 210, 211)", marginTop: '1.9rem' }}
                            boxSizing='content-box'
                        />
                    </>}

                    <Textarea
                        label="Message Text"
                        placeholder="Message Text"
                        value={dynmaicmsgtext}
                        onChange={(e) => setdynamicmsgtext(e.target.value)}
                        maxLength={2000}
                        rows="3"
                        overflow="auto"
                        infoList={[
                            { label: "Characters", value: charCount },
                            { label: "Message Part", value: charCount === 0 ? '0' : messageParts.toString() },
                            { label: "Encoding", value: encoding },
                            { label: "SMS Credit", value: charCount === 0 ? 0 : smsCredits }
                        ]}
                    />

                    <SelectBox
                        label="Mobile List"
                        options={[
                        ]}
                        value={mobilelist}
                        onChange={(e) => setmobilelist(e.target.value)}
                        isreq={true}
                        placeholder="Select Mobile Option"
                        maxLength={15}
                        width="16rem"
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
                        width="16rem"
                    />

                    <div style={{ display: "block", marginLeft: "0.5rem" }}>
                        <label style={{ fontWeight: "600", fontSize: "0.89rem", marginBottom: "0.8rem" }}>
                            <strong>Schedule Message</strong>
                        </label>
                        <RadioButton
                            name="Schedule Message"
                            value={isschedulemsg}
                            onChange={setisschedulemsg}
                            options={['Yes', 'No']}
                            ispassed={true}
                        />
                    </div>

                    {isschedulemsg === "Yes" && <div style={{ display: "block", marginTop: "-0.2rem" }}>
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
                    </div>}


                </div>


            </>}

            {tabname === "Upload" && <>
                <div className='row mt-2 px-2' style={{ display: "flex", flexWrap: "wrap", columnGap: "1.9rem", justifyContent: "flex-start", paddingLeft: "0.5rem" }}>
                    <InputBox
                        label="Campaign Name"
                        type="text"
                        placeholder="Campaign Name"
                        maxLength={35}
                        isreq={true}
                    // text={"Note: Special characters are not allowed in campaign name like SPACE, [ ] | ; : \" ' . ? / ~ `"}
                    />

                    <div style={{ marginTop: "-0.25rem" }}>
                        <label style={{ fontWeight: "600", fontSize: "0.89rem", marginBottom: "1rem", marginTop: "0.3rem" }}>
                            <strong>Message Type</strong>
                        </label>
                        <RadioButton
                            name="Message type"
                            options={['Promotional', 'Transactional', 'Service']}
                        />
                    </div>
                </div>

                <div className='row px-2' style={{ display: "flex", flexWrap: "wrap", columnGap: "1.9rem", justifyContent: "flex-start", paddingLeft: "0.5rem" }}>
                    <label style={{ fontWeight: "600", color: "", fontSize: "0.9rem" }}>
                        <strong>Upload File</strong>
                    </label>
                    <div className='file-upload-div'>
                        <UploadFileInput onFileSelect={handleFileSelect} file={filename} />
                    </div>
                </div>

                <div className='row mt-2 px-2' style={{ display: "flex", flexWrap: "wrap", columnGap: "1.9rem", justifyContent: "flex-start", paddingLeft: "0.5rem" }}>
                    <SelectBox
                        label="Sender ID"
                        options={[
                            { label: 'VEHOST', value: 'VEHOST' },
                            { label: 'TATAMO', value: 'TATAMO' }
                        ]}
                        value={uploadsenderid}
                        onChange={(e) => setuploadsenderid(e.target.value)}
                        isreq={true}
                        placeholder="Select Sender ID"
                        maxLength={15}
                        width="16rem"
                    />

                    <SelectBox
                        label="Template Name"
                        options={[
                        ]}
                        value={uploadtemplatename}
                        onChange={(e) => setuploadtemplatename(e.target.value)}
                        isreq={false}
                        placeholder="Select Template Name"
                        maxLength={15}
                        width="16rem"
                    />

                    <div style={{ display: "block", marginLeft: "0.5rem" }}>
                        <label style={{ fontWeight: "600", fontSize: "0.89rem", marginBottom: "0.8rem" }}>
                            <strong>Is ShortUrl Selected</strong>
                        </label>
                        <RadioButton
                            name="Is ShortUrl Selected"
                            value={isuploadshorturl}
                            onChange={setisuploadshorturl}
                            options={['Yes', 'No']}
                            ispassed={true}
                        />
                    </div>

                    {isuploadshorturl === "Yes" && <>
                        <SelectBox
                            label="Select Domain"
                            options={[
                            ]}
                            value={uploaddomain}
                            onChange={(e) => setuploaddomain(e.target.value)}
                            isreq={false}
                            placeholder="Select Domain Name"
                            maxLength={15}
                            width="16rem"
                        />


                        <SelectBox
                            label="Callback URL"
                            options={[
                            ]}
                            value={uploadcallbackurl}
                            onChange={(e) => setuploadcallbackurl(e.target.value)}
                            isreq={false}
                            placeholder="--  Select  --"
                            maxLength={15}
                            width="8rem"
                        />

                        <input type="text"
                            className="form-control"
                            placeholder="URL"
                            style={{ width: "45%", fontSize: "0.9rem", height: "2.8rem", padding: "0rem 0.4rem", borderColor: "rgb(210, 210, 211)", marginTop: '1.9rem' }}
                            boxSizing='content-box'
                        />
                    </>}

                    <Textarea
                        label="Message Text"
                        placeholder="Message Text"
                        value={uploadmsgtext}
                        onChange={(e) => setuploadmsgtext(e.target.value)}
                        maxLength={2000}
                        rows="3"
                        overflow="auto"
                        infoList={[
                            { label: "Characters", value: charCount },
                            { label: "Message Part", value: charCount === 0 ? '0' : messageParts.toString() },
                            { label: "Encoding", value: encoding },
                            { label: "SMS Credit", value: charCount === 0 ? 0 : smsCredits }
                        ]}
                    />

                    <div style={{ display: "block" }}>
                        <label style={{ fontWeight: "600", fontSize: "0.9rem", marginBottom: "0.8rem" }}>
                            <strong>Schedule Message</strong>
                        </label>
                        <RadioButton
                            name="Schedule Message"
                            value={isschedulemsg}
                            onChange={setisschedulemsg}
                            options={['Yes', 'No']}
                            ispassed={true}
                        />
                    </div>

                    {isschedulemsg === "Yes" && <div style={{ display: "block", marginTop: "-0.1rem", marginLeft: '2rem' }}>
                        <div style={{ marginTop: '1.8rem' }}>

                        </div>
                        <DatePicker
                            size='small' style={{ padding: "0.6rem 1.3rem", margin: "0", border: "1px solid gray", width: "20rem" }}
                            showTime
                            placeholder="Select date and time"
                            onChange={(value, dateString) => {
                                console.log('Selected Time: ', value);
                                console.log('Formatted Selected Time: ', dateString);
                            }}
                        />
                    </div>}


                </div>
            </>}

            {tabname === "Group" && <>
                <div className='row mt-2 px-2' style={{ display: "flex", flexWrap: "wrap", columnGap: "1.9rem", justifyContent: "flex-start", paddingLeft: "0.5rem" }}>
                    <InputBox
                        label="Campaign Name"
                        type="text"
                        placeholder="Campaign Name"
                        maxLength={35}
                        isreq={true}
                    // text={"Note: Special characters are not allowed in campaign name like SPACE, [ ] | ; : \" ' . ? / ~ `"}
                    />

                    <div style={{ marginTop: "-0.25rem" }}>
                        <label style={{ fontWeight: "600", fontSize: "0.89rem", marginBottom: "1rem", marginTop: "0.3rem" }}>
                            <strong>Message Type</strong>
                        </label>
                        <RadioButton
                            name="Message type"
                            options={['Promotional', 'Transactional', 'Service']}
                        />
                    </div>
                </div>

                <div className='row px-2' style={{ display: "flex", flexWrap: "wrap", columnGap: "1.9rem", justifyContent: "flex-start", paddingLeft: "0.5rem" }}>
                    <SelectBox
                        label="Sender ID"
                        options={[
                            { label: 'VEHOST', value: 'VEHOST' },
                            { label: 'TATAMO', value: 'TATAMO' }
                        ]}
                        value={groupsenderid}
                        onChange={(e) => setgroupsenderid(e.target.value)}
                        isreq={true}
                        placeholder="Select Sender ID"
                        maxLength={15}
                        width="16rem"
                    />

                    <SelectBox
                        label="Template Name"
                        options={[
                        ]}
                        value={grouptemplatename}
                        onChange={(e) => setgrouptemplatename(e.target.value)}
                        isreq={false}
                        placeholder="Select Template Name"
                        maxLength={15}
                        width="16rem"
                    />

                    <SelectBox
                        label="Group Name"
                        options={[
                        ]}
                        value={groupname}
                        onChange={(e) => setgroupname(e.target.value)}
                        isreq={false}
                        placeholder="Select Group"
                        maxLength={25}
                        width="16rem"
                    />

                </div>

                <div className='row px-2' style={{ display: "flex", flexWrap: "wrap", columnGap: "1.9rem", justifyContent: "flex-start", marginTop: "0.3rem" }}>
                    <div style={{ display: "block", marginLeft: "0.5rem", marginBottom: "0.4rem", marginTop: "-0.1rem" }}>
                        <label style={{ fontWeight: "600", fontSize: "0.899rem", marginBottom: "0.8rem" }}>
                            <strong>Is ShortUrl Selected</strong>
                        </label>
                        <RadioButton
                            name="Is ShortUrl Selected"
                            value={isgroupshorturl}
                            onChange={setisgroupshorturl}
                            options={['Yes', 'No']}
                            ispassed={true}
                        />
                    </div>

                    {isgroupshorturl === "Yes" && <>
                        <SelectBox
                            label="Select Domain"
                            options={[
                            ]}
                            value={groupdomain}
                            onChange={(e) => setgroupdomain(e.target.value)}
                            isreq={false}
                            placeholder="Select Domain Name"
                            maxLength={15}
                            width="16rem"
                        />


                        <SelectBox
                            label="Callback URL"
                            options={[
                            ]}
                            value={groupcallbackurl}
                            onChange={(e) => setgroupcallbackurl(e.target.value)}
                            isreq={false}
                            placeholder="--  Select  --"
                            maxLength={15}
                            width="8rem"
                        />

                        <input type="text"
                            className="form-control"
                            placeholder="URL"
                            style={{ width: "24.8%", fontSize: "0.9rem", height: "2.8rem", padding: "0rem 0.4rem", borderColor: "rgb(210, 210, 211)", marginTop: '1.9rem' }}
                            boxSizing='content-box'
                        />
                    </>}
                </div>



                <div className=' row px-2 mb-2'>

                    <Textarea
                        label="Message Text"
                        placeholder="Message Text"
                        value={groupmsgtext}
                        onChange={(e) => setgroupmsgtext(e.target.value)}
                        maxLength={2000}
                        rows="3"
                        overflow="auto"
                        infoList={[
                            { label: "Characters", value: charCount },
                            { label: "Message Part", value: charCount === 0 ? '0' : messageParts.toString() },
                            { label: "Encoding", value: encoding },
                            { label: "SMS Credit", value: charCount === 0 ? 0 : smsCredits }
                        ]}
                    />

                    <div style={{ display: "block" }}>
                        <label style={{ fontWeight: "600", fontSize: "0.9rem", marginBottom: "0.8rem" }}>
                            <strong>Schedule Message</strong>
                        </label>
                        <RadioButton
                            name="Schedule Message"
                            value={isgroupschedulemsg}
                            onChange={setisgroupschedulemsg}
                            options={['Yes', 'No']}
                            ispassed={true}
                        />
                    </div>

                    {isgroupschedulemsg === "Yes" && <div style={{ display: "block", marginTop: "-0.1rem", marginLeft: '3rem' }}>
                        <div style={{ marginTop: '1.8rem' }}>

                        </div>
                        <DatePicker
                            size='small' style={{ padding: "0.6rem 1.3rem", margin: "0", border: "1px solid gray", width: "20rem" }}
                            showTime
                            placeholder="Select date and time"
                            onChange={(value, dateString) => {
                                console.log('Selected Time: ', value);
                                console.log('Formatted Selected Time: ', dateString);
                            }}
                        />
                    </div>}


                </div>
            </>}
        </>
    )
}