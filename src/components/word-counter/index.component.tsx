import { FC } from 'react'

interface WordCounterProps {
  style?: string;
  wordCount: number;
}

const WordCounter: FC<WordCounterProps> = ({ style, wordCount }) => {
  return (
    <p className="word-counter text-h4 flex justify-center items-center mb-4 text-neutral-light">WORD COUNT: {wordCount}</p>
  )
}

export default WordCounter