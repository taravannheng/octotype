import { FC, ReactNode, useContext } from 'react'

import ThemeContext from '../../contexts/theme-context';

interface ModalProps {
  modalStyle?: string;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ modalStyle = '', children }) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 w-screen h-screen ${modalStyle}`}>
      <div className={`${isDarkTheme ? 'bg-dark-darkest' : 'bg-light-light'} p-6 rounded-md shadow-lg w-full h-full`}>
        <div className={`flex justify-center items-center flex-col w-full h-full`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
