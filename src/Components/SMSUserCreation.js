import {React,useState} from 'react';
import SelectBox from './SelectBox';
import InputBox from './InputBox';
import Textarea from './Textarea';
import '../Pages/CSS/Custom CSS/UserCreation.css'

export default function SMSUserCreation({ accounttype, setaccounttype }) {
     const [enterprise, setenterprise] = useState("");
        const [department, setdepartment] = useState("");
        const [billingon, setbillingon] = useState("");
        const [sendertype, setsendertype] = useState("");
        const [priority, setpriority] = useState("");
        const [traffictype, settraffictype] = useState("");
        const [accmanager, setaccmanager] = useState("");
        const [isotp, setisotp] = useState("");
        const [billingtype, setbillingtype] = useState("");
        const [smsservice, setsmsservice] = useState("");
        const [smppcharset, setsmppcharset] = useState("");
        const [tx, settx] = useState("");
        const [rx, setrx] = useState("");
        const [trx, settrx] = useState("");
        const [smppdroute, setsmppdroute] = useState("");
        const [webdroute, setwebdroute] = useState("");
        const [apidroute, setapidroute] = useState("");
        const [dlrurltype, setdlrurltype] = useState("");
        const [dlrpushurl, setdlrpushurl] = useState("");
        const [isipcheck, setisipcheck] = useState("");
        const [iswebipcheck, setwebisipcheck] = useState("");
        const [smppisipcheck, setsmppisipcheck] = useState("");
        const [apiwhitelisetip, setapiwhitelisetip] = useState("");
        const [webwhitelisetip, setwebwhitelisetip] = useState("");
        const [smppwhitelisetip, setsmppwhitelisetip] = useState("");
        const [dlrbody, setdlrbody] = useState("");
    return (
        <div className="row p-0 m-0" style={{ display: "flex", flexWrap: "wrap", columnGap: "1.7rem", justifyContent: "flex-start" }} >
            <div className="card-header" style={{ borderTop: "1px solid rgba(0, 0, 0, .06)", backgroundColor: "#3BAFDA", width: "100%" }}>
                <h6 className="card-title" style={{ fontWeight: "600" }}>SMS</h6>
            </div>

            <div className='card-body'>
                <div className='row' style={{ display: "flex", flexWrap: "wrap", columnGap: "1.7rem", justifyContent: "flex-start", marginLeft: "0.4rem" }}>
                    <SelectBox label="Choose Client"
                        options={[]}
                        value={enterprise}
                        onChange={(e) => setenterprise(e.target.value)}
                        isreq={false}
                        placeholder="Choose Client"
                        maxLength={50}
                        width="16rem"
                    />

                    <SelectBox label="Choose Department"
                        options={[]}
                        value={department}
                        onChange={(e) => setdepartment(e.target.value)}
                        isreq={false}
                        placeholder="Choose Department"
                        maxLength={25}
                        width="16rem"
                    />

                    <SelectBox label="Account Type"
                        options={[
                            { label: 'SMPP', value: 'SMPP' },
                            { label: 'Web', value: 'Web' },
                            { label: 'API', value: 'API' }
                        ]}
                        value={accounttype}
                        onChange={(e) => setaccounttype(e.target.value)}
                        isreq={false}
                        placeholder=""
                        maxLength={5}
                        width="16rem"
                    />

                    <SelectBox label="Credit Deduction On"
                        options={[
                            { label: 'Submission', value: 'Submission' },
                            { label: 'Delivery', value: 'Delivery' }
                        ]}
                        value={billingon}
                        onChange={(e) => setbillingon(e.target.value)}
                        isreq={false}
                        placeholder="Select Credit Deduction"
                        maxLength={25}
                        width="16rem"
                    />

                    <SelectBox label="Sender Type"
                        options={[
                            { label: 'Static', value: 'Static' },
                            { label: 'Dynamic', value: 'Dynamic' }
                        ]}
                        value={sendertype}
                        onChange={(e) => setsendertype(e.target.value)}
                        isreq={false}
                        placeholder=""
                        maxLength={10}
                        width="16rem"
                    />

                    <SelectBox label="Priority"
                        options={[
                            { label: 'High', value: 'High' },
                            { label: 'Medium', value: 'Medium' },
                            { label: 'Low', value: 'Low' }
                        ]}
                        value={priority}
                        onChange={(e) => setpriority(e.target.value)}
                        isreq={false}
                        placeholder=""
                        maxLength={10}
                        width="16rem"
                    />

                    <SelectBox label="Authentication OTP Required"
                        options={[
                            { label: 'Yes', value: 'Yes' },
                            { label: 'No', value: 'No' }
                        ]}
                        value={isotp}
                        onChange={(e) => setisotp(e.target.value)}
                        isreq={false}
                        placeholder="Select Is OTP Required"
                        maxLength={10}
                        width="16rem"
                    />

                    <SelectBox label="SMS Service"
                        options={[
                            { label: 'Domestic', value: 'Domestic' },
                            { label: 'International', value: 'International' },
                            { label: 'Both ', value: 'Both' }
                        ]}
                        value={smsservice}
                        onChange={(e) => setsmsservice(e.target.value)}
                        isreq={false}
                        placeholder=""
                        maxLength={15}
                        width="16rem"
                    />
                </div>

                <div className='row mt-0' style={{ display: "flex", flexWrap: "wrap", columnGap: "1.7rem", justifyContent: "flex-start", marginLeft: "0.4rem" }}>
                    <SelectBox
                        label="SMS Traffic Type"
                        options={[
                            { label: 'OTP', value: 'OTP' },
                            { label: 'Promotional', value: 'Promo' },
                            { label: 'Transactional', value: 'Trans' },
                            { label: 'Promo + Trans', value: 'promo_trans' }
                        ]}
                        value={traffictype}
                        onChange={(e) => settraffictype(e.target.value)}
                        isreq={false}
                        placeholder=""
                        maxLength={15}
                        width="16rem"
                    />


                    <SelectBox
                        label="Account Manager"
                        options={[

                        ]}
                        value={accmanager}
                        onChange={(e) => setaccmanager(e.target.value)}
                        isreq={false}
                        placeholder=""
                        maxLength={40}
                        width="16rem"
                    />

                    <InputBox
                        label="TM1_ID"
                        type="text"
                        placeholder="Enter TM1_ID"
                        maxLength={26}
                        isreq={false}
                    />

                    <InputBox
                        label="TM2_ID"
                        type="text"
                        placeholder="Enter TM2_ID"
                        maxLength={26}
                        isreq={false}
                    />

                    <InputBox
                        label="TD_ID"
                        type="text"
                        placeholder="Enter TD_ID"
                        maxLength={26}
                        isreq={false}
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
                        placeholder=""
                        maxLength={25}
                        width="16rem"
                    />
                </div>

                {accounttype === "SMPP" &&
                    <>
                        <div className="card-header my-1 " style={{ borderTop: "1px solid rgba(0, 0, 0, .06)", backgroundColor: "#e8fc34" }}>
                            <h6 className="card-title" style={{ fontWeight: "600" }}>SMPP</h6>
                        </div>

                        <div className='card-body p-0' style={{ marginLeft: "0.7rem" }}>
                            <div className='row' style={{ display: "flex", flexWrap: "wrap", columnGap: "1.7rem", justifyContent: "flex-start", marginTop: "0.7rem" }}>
                                <SelectBox label="SMPP Charset"
                                    options={[
                                        { label: 'ASCII', value: 'ASCII' },
                                        { label: 'GSM', value: 'GSM' }
                                    ]}
                                    value={smppcharset}
                                    onChange={(e) => setsmppcharset(e.target.value)}
                                    isreq={false}
                                    placeholder=""
                                    maxLength={7}
                                    width="16rem"
                                />

                                {/* <InputBox label="Whitelist IP"
                                                                        type="text"
                                                                        placeholder="Whitelist IPs"
                                                                        maxLength={94} isreq={false}
                                                                    /> */}





                                <SelectBox
                                    label="Tx"
                                    options={Array.from({ length: 20 }, (_, i) => ({
                                        label: `${i + 1}`,
                                        value: `${i + 1}`
                                    }))}
                                    value={tx}
                                    onChange={(e) => settx(e.target.value)}
                                    isreq={false}
                                    placeholder="Select Tx"
                                    maxLength={5}
                                    width="10rem"
                                    disabled={trx !== "" ? true : false}
                                />

                                <SelectBox
                                    label="Rx"
                                    options={Array.from({ length: 20 }, (_, i) => ({
                                        label: `${i + 1}`,
                                        value: `${i + 1}`
                                    }))}
                                    value={rx}
                                    onChange={(e) => setrx(e.target.value)}
                                    isreq={false}
                                    placeholder="Select Rx"
                                    maxLength={5}
                                    width="10rem"
                                    disabled={trx !== "" ? true : false}
                                />


                                <SelectBox
                                    label="TRx"
                                    options={Array.from({ length: 20 }, (_, i) => ({
                                        label: `${i + 1}`,
                                        value: `${i + 1}`
                                    }))}
                                    value={trx}
                                    onChange={(e) => settrx(e.target.value)}
                                    isreq={false}
                                    placeholder="Select TRx"
                                    maxLength={5}
                                    width="10rem"
                                    disabled={(tx !== "" || rx !== "") ? true : false}
                                />

                                <SelectBox
                                    label="Is IP To Check"
                                    options={[
                                        { label: 'Yes', value: 'Yes' },
                                        { label: 'No', value: 'No' }
                                    ]}
                                    value={smppisipcheck}
                                    onChange={(e) => setsmppisipcheck(e.target.value)}
                                    isreq={false}
                                    placeholder="Is IP to Check "
                                    maxLength={5}
                                    width="16rem"
                                />

                                <Textarea
                                    label="Whiteliset IPs"
                                    placeholder="Whitelist IPs"
                                    value={smppwhitelisetip}
                                    onChange={(e) => setsmppwhitelisetip(e.target.value)}
                                    maxLength={2000}
                                    rows='1'
                                    disable = {smppisipcheck === "No" ? true : false}
                                    
                                />

                                <SelectBox
                                    label="SMPP Default Route"
                                    options={[
                                        { label: 'Option 1', value: 'Option 1' },
                                        { label: 'Option 2', value: 'Option 2' }
                                    ]}
                                    value={smppdroute}
                                    onChange={(e) => setsmppdroute(e.target.value)}
                                    isreq={false}
                                    placeholder="Select Default Route"
                                    maxLength={20}
                                    width="16rem"
                                />

                                {/* <InputBox label="Session"
                                                                        type="text"
                                                                        placeholder="Enter Session"
                                                                        maxLength={20}
                                                                        isreq={false} />
 */}


                                <InputBox label="TPS"
                                    type="text"
                                    placeholder="Enter TPS"
                                    maxLength={15}
                                    isreq={false} />


                            </div>
                        </div>
                    </>
                }

                {accounttype === "Web" &&
                    <>
                        <div className="card-header my-1" style={{ borderTop: "1px solid rgba(0, 0, 0, .06)", backgroundColor: "#e8fc34" }}>
                            <h6 className="card-title" style={{ fontWeight: "600" }}>WEB</h6>
                        </div>

                        <div className='card-body p-0' style={{ marginLeft: "0.7rem" }}>
                            <div className='row' style={{ display: "flex", flexWrap: "wrap", columnGap: "1.9rem", justifyContent: "flex-start", marginTop: "0.7rem" }}>
                                <InputBox label="TPS"
                                    type="text"
                                    placeholder="Enter TPS"
                                    maxLength={25}
                                    isreq={false} />


                                <SelectBox
                                    label="Web Default Route"
                                    options={[
                                        { label: 'Option 1', value: 'Option 1' },
                                        { label: 'Option 2', value: 'Option 2' }
                                    ]}
                                    value={webdroute}
                                    onChange={(e) => setwebdroute(e.target.value)}
                                    isreq={false}
                                    placeholder="Select Default Route"
                                    maxLength={20}
                                    width="16rem"
                                />

                                <SelectBox
                                    label="Is IP To Check"
                                    options={[
                                        { label: 'Yes', value: 'Yes' },
                                        { label: 'No', value: 'No' }
                                    ]}
                                    value={iswebipcheck}
                                    onChange={(e) => setwebisipcheck(e.target.value)}
                                    isreq={false}
                                    placeholder="Is IP to Check "
                                    maxLength={5}
                                    width="16rem"
                                />

                                <Textarea
                                    label="Whiteliset IPs"
                                    placeholder="Whitelist IPs"
                                    value={webwhitelisetip}
                                    onChange={(e) => setwebwhitelisetip(e.target.value)}
                                    maxLength={2000}
                                    rows='1'
                                    disable={iswebipcheck === "No" ? true : false}
                                />


                            </div>
                        </div>
                    </>
                }

                {accounttype === "API" &&
                    <>
                        <div className="card-header my-1" style={{ borderTop: "1px solid rgba(0, 0, 0, .06)", backgroundColor: "#e8fc34" }}>
                            <h6 className="card-title" style={{ fontWeight: "600" }}>API</h6>
                        </div>

                        <div className='card-body p-0' style={{ marginLeft: "0.7rem" }}>
                            <div className='row' style={{ display: "flex", flexWrap: "wrap", columnGap: "1.9rem", justifyContent: "flex-start", marginTop: "0.7rem" }}>
                                <SelectBox
                                    label="DLR URL Method Type"
                                    options={[
                                        { label: 'Get', value: 'Get' },
                                        { label: 'Post', value: 'Post' }
                                    ]}
                                    value={dlrurltype}
                                    onChange={(e) => setdlrurltype(e.target.value)}
                                    isreq={false}
                                    placeholder="Select URL Type"
                                    maxLength={5}
                                    width="16rem"
                                />



                                <SelectBox
                                    label="API Default Route"
                                    options={[
                                        { label: 'Option 1', value: 'Option 1' },
                                        { label: 'Option 2', value: 'Option 2' }
                                    ]}
                                    value={apidroute}
                                    onChange={(e) => setapidroute(e.target.value)}
                                    isreq={false}
                                    placeholder="Select Default Route"
                                    maxLength={20}
                                    width="16rem"
                                />

                                <InputBox label="TPS"
                                    type="text"
                                    placeholder="Enter TPS"
                                    maxLength={24}
                                    isreq={false} />

                                <SelectBox
                                    label="Is IP To Check"
                                    options={[
                                        { label: 'Yes', value: 'Yes' },
                                        { label: 'No', value: 'No' }
                                    ]}
                                    value={isipcheck}
                                    onChange={(e) => setisipcheck(e.target.value)}
                                    isreq={false}
                                    placeholder="Is IP to Check "
                                    maxLength={5}
                                    width="16rem"
                                />

                                <Textarea
                                    label="Whiteliset IPs"
                                    placeholder="Whitelist IPs"
                                    value={apiwhitelisetip}
                                    onChange={(e) => setapiwhitelisetip(e.target.value)}
                                    maxLength={2000}
                                    rows='1'
                                     disable={isipcheck === "No" ? true : false}
                                />

                                <Textarea
                                    label="DLR Push URL"
                                    placeholder="Enter DLR URL"
                                    value={dlrpushurl}
                                    onChange={(e) => setdlrpushurl(e.target.value)}
                                    maxLength={2000}
                                    rows='1'
                                />

                                {dlrurltype === "Post" && <Textarea
                                    label="DLR Body"
                                    placeholder="Enter DLR Body"
                                    value={dlrbody}
                                    onChange={(e) => setdlrbody(e.target.value)}
                                    maxLength={2000}
                                    col='12'
                                />}

                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}