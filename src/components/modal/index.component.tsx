import { FC, ReactNode } from 'react'

interface ModalProps {
  modalStyle?: string;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ modalStyle = '', children }) => {
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 w-screen h-screen ${modalStyle}`}>
      <div className="bg-dark-darkest p-6 rounded-md shadow-lg w-full h-full">
        <div className={`flex justify-center items-center flex-col w-full h-full`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
