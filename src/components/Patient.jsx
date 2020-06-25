import React from "react";
import Popup from './Popup'
import SearchBar from './SearchBar';
import './Patient.css'
import Contact from'./contact'

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
        <section>
          <h3 className="libraryTitle">Les docteurs disponibles dans votre ville</h3>
          <div className = "docLibrary">
          <Contact
           img_url = "https://cdn.pixabay.com/photo/2020/04/15/17/34/medical-5047624_960_720.png"
           nom = "Dr J. Avinard"
           pratique = "Gynécologie"
           adresse = "14 rue Paul Vidal 31000 Toulouse"
           tel = "05.34.10.16.48"
           />
           <Contact
           img_url = "https://cdn.pixabay.com/photo/2020/04/15/17/34/medical-5047624_960_720.png"
           nom = "Dr R. Daricau"
           pratique = "Ophtalmologie"
           adresse = "20 rue Paul Vidal- 31000 Toulouse"
           tel = "05.34.10.16.48"
           />
           <Contact
           img_url = "https://image.freepik.com/vecteurs-libre/icone-medecin-avatar-blanc_136162-58.jpg"
           nom = "Dr O. Tisserand"
           pratique = "médecine générale"
           adresse = "8 rue de l'église 31200 Toulouse"
           tel = "05.34.13.59.66"
           />
           <Contact
           img_url = "https://cdn.pixabay.com/photo/2020/04/15/17/34/medical-5047624_960_720.png"
           nom = "Dr R. Guichard"
           pratique = "ORL"
           adresse = "20 rue de l'industrie  31000 Toulouse"
           tel = "05.34.83.12.36"
           />
           <Contact
           img_url = "https://image.freepik.com/vecteurs-libre/icone-medecin-avatar-blanc_136162-58.jpg"
           nom = "Dr T. Morillon"
           pratique = "médecine générale"
           adresse = "9 rue guarisson  31300 Toulouse"
           tel = "05.34.19.16.08"
           />
           <Contact
           img_url = "https://cdn.pixabay.com/photo/2020/04/15/17/34/medical-5047624_960_720.png"
           nom = "Dr B. Trioux"
           pratique = "médecine générale"
           adresse = "5 place Wilson 31000 Toulouse"
           tel = "05.34.28.42.16"
           />
           <Contact
           img_url = "https://image.freepik.com/vecteurs-libre/icone-medecin-avatar-blanc_136162-58.jpg"
           nom = "Dr O. Pilandon"
           pratique = "Radiologie"
           adresse = "20 rue de Metz 31000 Toulouse"
           tel = "05.34.33.52.96"
           />
           <Contact
           img_url = "https://image.freepik.com/vecteurs-libre/icone-medecin-avatar-blanc_136162-58.jpg"
           nom = "Dr M. Béthancourt"
           pratique = "Gynécologie"
           adresse = "17 rue Alsace Lorraine 31000 Toulouse"
           tel = "05.34.45.02.38"
           />
           <Contact
           img_url = "https://image.freepik.com/vecteurs-libre/icone-medecin-avatar-blanc_136162-58.jpg"
           nom = "Dr P. Marin"
           pratique = "Ophtalmologie"
           adresse = "1 rue Aubuisson 31400 Toulouse"
           tel = "05.34.58.20.11"
           />
           <Contact
           img_url = "https://image.freepik.com/vecteurs-libre/icone-medecin-avatar-blanc_136162-58.jpg"
           nom = "Dr L. Lamirand"
           pratique = "médecine générale"
           adresse = "6 rue Coussort 31300 Toulouse"
           tel = "05.34.29.14.16"
           />
           <Contact
           img_url = "https://cdn.pixabay.com/photo/2020/04/15/17/34/medical-5047624_960_720.png"
           nom = "Dr M. Iguenard"
           pratique = "Gynécologie"
           adresse = "20 rue des Couteliers 31000 Toulouse"
           tel = "05.34.63.18.06"
           />
            <Contact
           img_url = "https://image.freepik.com/vecteurs-libre/icone-medecin-avatar-blanc_136162-58.jpg"
           nom = "Dr R. Desjardins"
           pratique = "médecine générale"
           adresse = "3 rue Bertal 31300 Toulouse"
           tel = "05.34.83.18.16"
           />
           </div>

          </section>
       <div >
       < Popup/>
       </div>
       </div>
    );
  }
}

export default Patient;