import '../Pages/CSS/Custom CSS/Mobile.css'

// export default function Mobile(props) {
export default function Mobile({ message = '',senderid='' }) {
  return (
    <div className='mobile-div'>
      <div className='mobile-border-div'>
      </div>
      <div className='vol-div'></div>
      <div className='vol-down-div'></div>
      <div className='power-div'></div>

      <div className='sender-div' >
        <i class="fa-solid fa-angle-left " style={{ fontSize: "0.8rem", marginLeft: "0.6rem" }}></i>
        <i class="fa-solid fa-circle-user" style={{ fontSize: "1.8rem", marginLeft: "0.6rem", marginRight: "0.7rem", marginTop: "-0.15rem" }}></i>
        <span style={{ marginTop: "-0.15rem", marginRight: "2rem",minWidth:'4rem',fontWeight:"700" }}>{senderid}</span>
        <i class="fa-solid fa-video" style={{ marginRight: "1rem" }}></i>
        <i class="fa-solid fa-phone" style={{ marginRight: "1rem" }}></i>
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>

      <div className='msg-div'>
        <div class="imessage" >
          <p class="from-me">
            {message.length > 540 ? `${message.slice(0, 540)}...` : message}
          </p>
        </div>

      </div>

      <div className='submit-button'>
        <button className="btn btn-info btn-glow" type="button" >
          Submit
        </button>
      </div>

    </div>


  );
}
