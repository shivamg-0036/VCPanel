import './App.css';
import { useState,useEffect } from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import './Pages/CSS/Bootstrap/bootstrap-extended.css'
import './Pages/CSS/Bootstrap/bootstrap.css'
import './Pages/CSS/Bootstrap/bootstrap.min.css'
import './Pages/CSS/Bootstrap/colors.css'
import './Pages/CSS/Bootstrap/components.css'
import './Pages/CSS/Bootstrap/vertical-content-menu.css'
import './Pages/CSS/Bootstrap/vertical-content-menu.min.css'  
import { Route, Routes } from 'react-router-dom';
import Client_Creation from './Components/Client-Creation';
import User_Creation from './Components/User-Creation';
import Campaign_Mgt from './Components/Campaign_Mgt';


function App() {
   const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 767);

  // Listen to window resize
  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth > 767);
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App-container">
     <div className='App-outermost-container'>
      <div className='Navbar-container'>
       <Navbar toggleSidebar={() => setSidebarOpen(prev => !prev)} />
      </div>

      <div className='content-div'>
        <div className={`Sidebar-container ${sidebarOpen ? 'open-side' : 'close-side'}`}>
          <Sidebar isSidebarOpen={sidebarOpen} />
        </div>

        <div className={`Main-content-div ${sidebarOpen ? 'open-side' : 'close-side'}`}>
          
          <Routes>
            <Route path='/' element={<Client_Creation />} />
            <Route path='/usercreation' element={<User_Creation />} />
            <Route path='/campaignmgt' element={<Campaign_Mgt />} />
          </Routes>
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;
