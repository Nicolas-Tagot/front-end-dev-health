import React from "react";
import Popup from './Popup'
import SearchBar from './SearchBar';

class Patient extends React.Component {  
  


  render() {
    return (
      <div className="homePatient">
        <header>
         <img src="/svg/logo.svg" alt="logo" className ="logo"/> 
          <div>
            <h1 className="patientName">DOC RDV</h1>
          </div>
          <img src="https://randomuser.me/api/portraits/women/84.jpg"alt="user id" className ="patientLog" />       
             </header>
        <SearchBar/>
       <div id="wrapper">
       < Popup/>
       </div>
       </div>
    );
  }
}

export default Patient;