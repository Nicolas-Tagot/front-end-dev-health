import React from "react";
import Popup from './Popup'
import SearchBar from './SearchBar';
import './Patient.css'
class Patient extends React.Component {  
  


  render() {
    return (
      <div className="homePatient">
        <header>
          <div className = 'navbar'>
            <img src="/svg/logo.svg" alt="logo" className ="logo"/> 

            <div className='patientMenu-container'>
              <li className="patientMenu">
                <ul>mon compte </ul>
                <ul>mes documents</ul>
                <ul>mes rendez-vous</ul>
             </li>
            <img src="https://randomuser.me/api/portraits/women/96.jpg" alt="user id" className ="patientLog" />       
            </div>  
            </div>
          <div className="patientTitle">
            <h1 >DOC RDV</h1>
          </div>
        
          </header>
          <div className='bodySearch'>
          <div className='introduction'>
      <h2>Prenez un rendez-vous en consultation physique ou consultation vidéo</h2>
      </div>
             <div className='searchBar'>
        <SearchBar/>
        </div>
        </div>
        <section className='rdv'>
          <h3 className='rdvTitle'>
            mes rendez-vous à venir
          </h3>
        <article className='docCard'>
        <img src="/svg/avatar.svg" alt="user id" className ="patientLog" />

        <div className='rdvDescription'>
        <h4>Dr DAROT</h4>
        <p className='date'>
          vendredi 26 juin 2020
        </p>
        <p className='heure'>
          Heure du rendez-vous: 14h</p>
        <p>
        adresse: 9 place du Capitole <br/> 
        31000 - Toulouse <br/> 
        </p>
       </div>

        </article>
        

        </section>
       <div >
       < Popup/>
       </div>
       </div>
    );
  }
}

export default Patient;