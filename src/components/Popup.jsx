import React, { useState } from 'react';
import Modal from 'react-modal';
import './Popup.css'

Modal.setAppElement('#root');
function Popup () {
    const [modalIsOpen, setModalOpen,] = useState(false);
    
    

    return (
        <div>
            <div className="resultDiv">
              
                <img src="/svg/stethoscope-icon.svg" alt="icon bot" onClick={() => setModalOpen(true) } className={modalIsOpen === true ? "BotButtonOff" :"BotButtonOn"} />
               
            </div>
            <Modal 
            className="Modal" 
            overlayClassName="Overlay"
            isOpen={modalIsOpen} 
            onRequestClose={() => setModalOpen(false)}
            >
                <div>
                    <div  className="ModalQuote">
                      <span>BOT system</span> {/* /mettre ici l'appel du module bot */}
                    </div>
                    <button 
                    className="ModalButton"
                    type="button" 
                    onClick={() => setModalOpen(false)} 
                    >
                      <img src="/svg/close.svg" alt="icon close" />
                    </button>
                </div>
            </Modal>
        </div>
    )
}

export default Popup;
