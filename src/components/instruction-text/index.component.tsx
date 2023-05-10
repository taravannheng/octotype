import { FC, Fragment, useContext } from 'react'

import FirstKeyPressedContext from '../../contexts/first-key-pressed-context';

interface InstructionTextProps {
  instructionTextStyle?: string;
  text: string;
}

const InstructionText: FC<InstructionTextProps> = ({ instructionTextStyle = '', text }) => {
  const { isFirstKeyPressed } = useContext(FirstKeyPressedContext);

  return (
    <Fragment>
      {!isFirstKeyPressed && <p className={`instruction-text text-dark-white text-body ${instructionTextStyle}`}>{text}</p>}
    </Fragment>
  )
}

export default InstructionText