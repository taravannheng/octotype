import randomWords from "random-words";
import { FC, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Span from "../span/index.component";

interface WordDisplayProps {
  numWords: number;
  wordDisplayStyle?: string;
}

interface Letter {
  lastLetter: boolean;
  character: string;
}

const DEFAULT_NUM_WORDS = 200;

const WordDisplay: FC<WordDisplayProps> = ({ numWords, wordDisplayStyle }) => {
  const words: string[] = randomWords(numWords);
  const [letterList, setLetterList] = useState<Letter[]>([]);

  // split the words into letters
  let tempLetterList: Letter[] = [];
  words.map((word, wordIndex) => {
    const letters: string[] = word.split("");

    letters.map((letter, letterIndex) => {
      const letterObject: Letter = {
        lastLetter: letterIndex === word.length - 1 && true,
        character: letter,
      };

      tempLetterList = [...tempLetterList, letterObject];
    });

    // add space to the letter list
    if (wordIndex !== words.length - 1) {
      tempLetterList = [
        ...tempLetterList,
        {
          lastLetter: false,
          character: " ",
        },
      ];
    }
  });

  

  useEffect(() => {
    setLetterList(tempLetterList);
  }, []);

  return (
    <p
      className={`text-h3 outline-none ${wordDisplayStyle}`}
    >
      {letterList.map((letter: any, index: any) => {
        return (
          <Span
            index={index}
            isLastLetter={letter.lastLetter}
            key={uuidv4()}
            spanStyle='text-neutral-grey-4'
            text={letter.character}
          />
        );
      })}
    </p>
  );
};

export default WordDisplay;
