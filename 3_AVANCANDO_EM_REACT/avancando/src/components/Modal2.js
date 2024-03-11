// import "./App.css"
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

// Adicionando estilos padrões globais
Modal.defaultStyles.overlay.backgroundColor = '#ff06';
Modal.defaultStyles.content.backgroundColor = 'green';

function ModalDois() {
  // Criamos dois gerenciadores de estados para duas modais diferentes
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalIsOpen2, setIsOpen2] = React.useState(false);

  function abrirModal() {
    setIsOpen(true);
  }

  function fecharModal() {
    setIsOpen(false);
  }

  function abrirModal2() {
    setIsOpen2(true);
  }

  function fecharModal2() {
    setIsOpen2(false);
  }

  return (
    <div>
      <button onClick={abrirModal}>Abrir modal 1</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={fecharModal}
        contentLabel="Modal de exemplo"
      >
        <h2>Olá 1</h2>
        <button onClick={fecharModal}>Fechar 1</button>
        <div>Eu sou uma modal 1</div>
      </Modal>

      <button onClick={abrirModal2}>Abrir modal 2</button>
      <Modal
        isOpen={modalIsOpen2}
        onRequestClose={fecharModal2}
        contentLabel="Modal de exemplo"
      >
        <h2>Olá 2</h2>
        <button onClick={fecharModal2}>Fechar 2</button>
        <div>Eu sou uma modal 2</div>
      </Modal>
    </div>
  );
}

export default ModalDois;