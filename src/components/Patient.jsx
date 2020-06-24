import React from "react";
import Popup from './Popup'
import SearchBar from './SearchBar';
import './Patient.css'
class Patient extends React.Component {  
  


  render() {
    return (
      <div className="homePatient">
        <header>
         <img src="/svg/logo.svg" alt="logo" className ="logo"/> 
          <div className="patientTitle">
            <h1 >DOC RDV</h1>
          </div>
          <img src="https://randomuser.me/api/portraits/women/96.jpg" alt="user id" className ="patientLog" />       
             </header>
             <div className='searchBar'>
        <SearchBar/>
        </div>
       <div >
       < Popup/>
       </div>
       </div>
    );
  }
}

export default Patient;