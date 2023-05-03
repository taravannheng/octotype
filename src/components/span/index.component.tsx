import { FC, useState, useContext, useEffect } from 'react'

import CurrentLetterIndexContext from '../../contexts/current-letter-index-context';

interface SpanProps {
  spanStyle: string;
  text: string;
  index: number;
}

const Span: FC<SpanProps> = ({ spanStyle, text, index }) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const { currentLetterIndex } = useContext(CurrentLetterIndexContext);

  useEffect(() => {
    if (currentLetterIndex === index) {
      setIsPressed(true);
    }
  }, [currentLetterIndex]);

  return (
    <span className={`${spanStyle}  ${isPressed && 'text-primary'}`}>{text}</span>
  )
}

export default Span