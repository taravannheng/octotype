import { FC, useContext } from 'react'

import WordCounterContext from '../../contexts/word-counter-context';

interface WordCounterProps {
  style?: string;
}

const WordCounter: FC<WordCounterProps> = ({ style }) => {
  const { wordCounter } = useContext(WordCounterContext);

  return (
    <p className={`word-counter text-h4 flex justify-center items-center mb-4 text-neutral-light ${style}`}>WORD COUNT: {wordCounter}</p>
  )
}

export default WordCounter