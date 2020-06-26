import React,{ useState } from "react";
import './mobile.css';
import Modal from 'react-modal';
import ChatbotPregnant from './ChatbotPregnant';
Modal.setAppElement('#root');
function Mobile () {
    const [modalIsOpen, setModalOpen,] = useState(false);

    return (
        <div className='botContainer'>
      <div className="phone">
        <img src="/pics/hackphone.png"  alt="mobile" />
   </div>
   <div className="botbot">
   <img src="/pics/bot2.png"  alt="bot" onClick={() => setModalOpen(true) } className="bot2Pic" />
  </div>
  <div className='titleContainer'>
      <p className="botTitle">DoctoBot</p>
  </div>
    <div className="wrapper">      
            </div>
            <Modal 
            className="phoneModal" 
            overlayClassName="Overlay"
            isOpen={modalIsOpen} 
            onRequestClose={() => setModalOpen(false)}
            >
                <div> <button 
                    className="ModalButton"
                    type="button" 
                    onClick={() => setModalOpen(false)} 
                    >
                      <img src="/svg/close.svg" alt="icon close" width='8px'/>
                    </button>
                    <div  className="ModalQuote">
                      <ChatbotPregnant /> {/* /mettre ici l'appel du module bot */}
                    </div>
                   
                </div>
            </Modal>
        </div>
    );
  }

export default Mobile;
