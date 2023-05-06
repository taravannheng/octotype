import { FC } from 'react'

interface ModalProps {
  modalStyle?: string;
  text: string;
  logoSrc?: string;
}

const Modal: FC<ModalProps> = ({ modalStyle = '', text, logoSrc }) => {
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 w-screen h-screen ${modalStyle}`}>
      <div className="bg-neutral-light p-6 rounded-md shadow-lg w-full h-full">
        <div className={`flex justify-center items-center flex-col w-full h-full`}>
          {logoSrc && <img src={logoSrc} alt="logo" className="h-8 mb-12" />}
          <h1 className='text-h4 text-neutral-dark text-status-error'>{text}</h1>
        </div>
      </div>
    </div>
  );
};

export default Modal;
