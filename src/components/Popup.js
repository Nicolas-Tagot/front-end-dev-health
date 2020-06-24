import React, { useState } from 'react';
import Modal from 'react-modal';


Modal.setAppElement('#root');
function Popup () {
    const [modalIsOpen, setModalOpen] = useState(false);

    return (
        <div>
            <div className="resultDiv">
                <button type="button" className="resultButton" onClick={() => setModalOpen(true)}>
                    BOT button
                </button>
            </div>
            <Modal 
            className="Modal" 
            overlayClassName="Overlay"
            isOpen={modalIsOpen} 
            onRequestClose={() => setModalOpen(false)}
            >
                <div>
                    <div  className="ModalQuote">
                        <span>BOT system</span>
                    </div>
                    <button 
                    className="ModalButton"
                    type="button" 
                    onClick={() => setModalOpen(false)} 
                    >
                      quitter
                    </button>
                </div>
            </Modal>
        </div>
    )
}

export default Popup;