import { ModalHandles } from '../Modal';
type Props = {
    isSendSuccess: boolean | null;
    onClose: () => void;
};
declare const ModalMessage: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<ModalHandles>>;
export default ModalMessage;
