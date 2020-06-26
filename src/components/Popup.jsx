import React, { useState } from 'react';
import Modal from 'react-modal';
import './Patient.css';
import ChatbotDiabet from './ChatbotDiabet';
Modal.setAppElement('#root');
function Popup () {
    const [modalIsOpen, setModalOpen,] = useState(false);
    
    

    return (
        <div>
            <div className="wrapper">
              
                <img src="/pics/bot.jpg" alt="icon bot" onClick={() => setModalOpen(true) } className={modalIsOpen === true ? "BotButtonOff" :"BotButtonOn"} />
               
            </div>
            <Modal 
            className="Modal" 
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
                      <ChatbotDiabet /> {/* /mettre ici l'appel du module bot */}
                    </div>
                   
                </div>
            </Modal>
        </div>
    )
}

export default Popup;
