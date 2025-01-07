import { ReactNode } from 'react';
type ModalProps = {
    titleModal: string;
    children: ReactNode;
};
export type ModalHandles = {
    openModal: () => void;
    closeModal: () => void;
};
declare const Modal: import("react").ForwardRefExoticComponent<ModalProps & import("react").RefAttributes<ModalHandles>>;
export default Modal;
