import '../Pages/CSS/Custom CSS/Navbar.css'
export default function Navbar({toggleSidebar}) {
    return (
        <nav class="header-navbar navbar-expand-md navbar navbar-with-menu navbar-light navbar-border navbar-shadow navbar-brand-center" style={{ height: "100%" }} >
            <div class="navbar-wrapper" >
                <div class="">
                    <ul class="nav navbar-nav flex-row ul-div" >
                        <li class="nav-item mobile-menu "><a
                            class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"
                             onClick={e => {
                                    e.preventDefault();
                                    toggleSidebar(); // <-- call the toggle
                                }}
                            ><i
                                class="fa-solid fa-bars" style={{ fontSize: "1.4rem", marginLeft:"0.8rem" }}></i></a></li>

                        <li class="nav-item" >
                            <a class="navbar-brand">
                                <img class="brand-logo img-class" alt="" src='images/v-connect Logo.png' />

                            </a>
                        </li>

                        <li className="nav-item d-md-none dropdown"  >
                            <a
                                className="nav-link "
                                href="#"
                                role="button"
                                data-toggle="dropdown"
                                
                            >
                                <i className="fa fa-ellipsis-v" style={{ fontSize: "1.4rem", marginTop: "-0.2rem" }}></i>
                            </a>
                            <div className="dropdown-menu" style={{ top: "105%", left: "0" , right:"auto" ,position:"absolute"}} 
                           
                            >

                                <a className="dropdown-item" href="#">
                                     <img src='images/Icon-Images/user.png' style={{width:"1.4rem"}} />
                                     Edit Profile</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#"><i className="ft-power"></i> Mobile Logout</a>
                            </div>
                        </li>


                        <li className='nav-item non-mobile'>
                            <ul class=" navbar-nav float-right">
                                <li class="dropdown  nav-item" >
                                    <a class="dropdown-toggle nav-link dropdown-user-link"
                                        href="#" data-toggle="dropdown">

                                        <span class=" avatar-online" >
                                            <img
                                                src="images/avatar-s-1.png"
                                                alt="avatar"
                                                style={{ width: "3.3rem", height: "3rem", borderRadius: "50%" }}
                                            />
                                        </span>

                                        <span class="user-name" style={{ lineHeight: "0", marginLeft: "0.4rem" }}>User Name</span>

                                    </a>

                                    <div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#"><i
                                        class="ft-user"></i> Edit Profile</a>
                                        <div class="dropdown-divider"></div><a class="dropdown-item" href="#"><i
                                            class="ft-power"></i> Logout</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>


            </div>
        </nav>
    )
}