import randomWords from "random-words";
import { FC, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Span from "../span/index.component";

interface WordDisplayProps {
  numWords: number;
  maxWordLength: number;
  wordDisplayStyle?: string;
}

interface Letter {
  lastLetter: boolean;
  character: string;
}

const WordDisplay: FC<WordDisplayProps> = ({ numWords, wordDisplayStyle, maxWordLength }) => {
  const words: string[] = randomWords({ exactly: numWords, maxLength: maxWordLength });
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
    <div
      className={`text-h4 outline-none overflow-hidden ${wordDisplayStyle}`}
    >
      {letterList.map((letter: any, index: any) => {
        return (
          <Span
            index={index}
            isLastLetter={letter.lastLetter}
            key={uuidv4()}
            text={letter.character}
          />
        );
      })}
    </div>
  );
};

export default WordDisplay;
