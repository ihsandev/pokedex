import React from "react";
import ReactDOM from "react-dom";
import { ModalWrapper, ModalContent, Close } from "./styled";

const modalRoot: any = document.querySelector("#modal");

export interface PropsModal {
  visible: boolean;
  onClose: any;
}
const ModalView: React.FC<PropsModal> = ({
  visible,
  children,
  onClose,
  ...props
}) => {
  if (visible === true) {
    return (
      <ModalWrapper>
        <ModalContent {...props}>
          <Close onClick={onClose}>&times;</Close>
          {children}
        </ModalContent>
      </ModalWrapper>
    );
  } else {
    return null;
  }
};

const Modal = (props: any) => {
  return ReactDOM.createPortal(<ModalView {...props} />, modalRoot);
};

export default Modal;
