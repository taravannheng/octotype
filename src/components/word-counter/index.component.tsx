import { FC, useContext } from 'react'

import WordCounterContext from '../../contexts/word-counter-context';

interface WordCounterProps {
  wordCounterStyle?: string;
  wordCounterTextStyle?: string;
}

const WordCounter: FC<WordCounterProps> = ({ wordCounterStyle, wordCounterTextStyle }) => {
  const { wordCounter } = useContext(WordCounterContext);

  return (
    <p className={`word-counter text-h5 text-dark-white ${wordCounterStyle}`}>WORD COUNT: <span className={`word-counter__text ${wordCounterTextStyle}`}>{wordCounter}</span></p>
  )
}

export default WordCounter