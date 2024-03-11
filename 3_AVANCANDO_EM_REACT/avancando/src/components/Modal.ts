// import { Children, useInsertionEffect, useState } from "react";

// export function useModal(){
//     const [modalIsOpen, setModalIsOpen] = useState(false)
//     const openModal = (): void => setModalIsOpen(true)
//     const closeModal = (): void => setModalIsOpen(false)



//     return {
//         openModal,
//         closeModal,
//         Modal: ({ children}: Pick<ModalProps, "children">) => (
//             <ModalComponent closeModal={closeModal} isOpen={modalIsOpen}>
//             {children}
//             </ModalComponent>
//         ),
        
//     }

// }

// export  function App() {
//     const {Modal, closeModal, openModal} = useModal()

//     return (
//         <>
//         <button onClick={closeModal}> fechar modal </button>
//         </Modal>
//         </>
//     )
// }

