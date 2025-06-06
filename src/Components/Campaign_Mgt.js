import { useState } from 'react';
import '../Pages/CSS/Custom CSS/createcampaign.css'
import Mobile from './Mobile';

import SMSCampaign from './SMSCampaign';
import RCSCampaign from './RCSCampaign';
import WABACampaign from './WABACampaign';
import VoiceCampaign from './VoiceCampaign';

export default function Campaign_Mgt() {
    const [servicetype, setServiceType] = useState("SMS");
    const [tabname, settabname] = useState("Quick");
    const [senderid, setsenderid] = useState("");
    const [quickmsgtext, setquickmsgtext] = useState("");
    const [dynmaicmsgtext, setdynamicmsgtext] = useState("");
    const [dynamicsenderid, setdynamicsenderid] = useState("");
    const [uploadmsgtext, setuploadmsgtext] = useState("");
    const [uploadsenderid, setuploadsenderid] = useState("");
    const [groupmsgtext, setgroupmsgtext] = useState("");
    const [groupsenderid, setgroupsenderid] = useState("");

    const renderCampaignComponent = () => {
  switch (servicetype) {
    case "SMS":
      return (
        <SMSCampaign
          senderid={senderid}
          setsenderid={setsenderid}
          dynamicsenderid={dynamicsenderid}
          setdynamicsenderid={setdynamicsenderid}
          uploadsenderid={uploadsenderid}
          setuploadsenderid={setuploadsenderid}
          groupsenderid={groupsenderid}
          setgroupsenderid={setgroupsenderid}
          dynmaicmsgtext={dynmaicmsgtext}
          setdynamicmsgtext={setdynamicmsgtext}
          tabname={tabname}
          settabname={settabname}
          quickmsgtext={quickmsgtext}
          setquickmsgtext={setquickmsgtext}
          uploadmsgtext={uploadmsgtext}
          setuploadmsgtext={setuploadmsgtext}
          groupmsgtext={groupmsgtext}
          setgroupmsgtext={setgroupmsgtext}
        />
      );

    case "RCS":
      return <RCSCampaign />;

    case "WABA":
      return <WABACampaign />;

      case "Voice":
        return <VoiceCampaign />;
  }
};



    return (
        <div style={{ position: "relative" }}>
            <div className="content-body mb-0" >
                <div className="">
                    <div className="col-12 pr-0" style={{ position: "relative" }} >
                        <div className="mb-2" style={{ position: 'fixed', top: "11.6%", backgroundColor: "#fff", zIndex: "10000", display: "flex", width: "78%", boxShadow: "0 0px 12px rgba(8, 70, 243, 0.4)" }} >
                            <div className="card-header" style={{ width: "24%", height: "100%" }}>
                                <h5 className="card-title" style={{ fontWeight: "600", marginTop:"0.2rem" }}>CAMPAIGN MANAGEMENT</h5>
                            </div>

                            <div className="" style={{ width: "76%", position: "relative", display: "flex", alignItems: 'center', columnGap: '1.8rem', paddingLeft: '1rem' }}>
                                {/* vertical line using a pseudo-element */}
                                <div style={{
                                    position: 'absolute',
                                    left: "-1%",
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    height: '30px', // Set your custom height
                                    borderLeft: '2px solid rgb(181, 183, 185)'

                                }}></div>
                                <span style={{ fontWeight: "600", fontSize: "1.02rem" }}>Choose Service:-</span>
                                <img src='images/sms.png' style={{ width: '2.3rem', cursor: "pointer" }} onClick={() => setServiceType("SMS")} />
                                <img src='images/waba-removebg-preview.png' style={{ width: '3.2rem', cursor: "pointer" }} onClick={() => setServiceType("WABA")}/>
                                <img src='images/rcslogo1.png' style={{ width: '3.2rem', cursor: "pointer",marginLeft: "-0.3rem"  }} onClick={() => setServiceType("RCS")}  />
                                <i class="fa-solid fa-microphone-lines" style={{color: "#FFD43B", cursor:"pointer", fontSize:"2rem"}} onClick={() => setServiceType("Voice")}></i>

                            </div>

                        </div>

                        <div style={{ display: "flex", flex: "0 0 100%", maxWidth: "100%", overflowY: "auto", marginTop: "4rem" }} >
                            <div className='card card-left mb-0  ' style={{ boxShadow: "0 0px 12px rgba(8, 70, 243, 0.4)" }} >
                              {renderCampaignComponent()}
                            </div>

                            <div className=' card-right mb-0' >
                                <Mobile
                                    message={
                                        tabname === 'Quick' ? quickmsgtext :
                                            tabname === 'Dynamic' ?
                                                dynmaicmsgtext
                                                : tabname === 'Group' ? groupmsgtext :
                                                    tabname === 'Upload' ?
                                                        uploadmsgtext
                                                        : ''
                                    }
                                    senderid={
                                        tabname === 'Quick' ? senderid :
                                            tabname === 'Dynamic' ?
                                                dynamicsenderid
                                                : tabname === 'Group' ? groupsenderid :
                                                    tabname === 'Upload' ?
                                                        uploadsenderid
                                                        : ''
                                    }

                                    serviceType={servicetype}
                                />

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
}