import randomWords from "random-words";
import { FC, useEffect, useRef } from "react";
import { Dispatch, SetStateAction } from "react";
import { v4 as uuidv4 } from "uuid";

interface WordDisplayProps {
  numWords: number;
  setLetterList: Dispatch<SetStateAction<Letter[]>>;
  keyHandler: (event: any) => void;
  letterList: Letter[];
}

interface Letter {
  lastLetter: boolean;
  character: string;
  status: "pressed" | "unpressed";
}

const DEFAULT_NUM_WORDS = 200;

const WordDisplay: FC<WordDisplayProps> = (props) => {
  const words: string[] = randomWords(props.numWords);
  const containerRef = useRef<HTMLParagraphElement>(null);

  // split the words into letters
  let tempLetterList: Letter[] = [];
  words.map((word, wordIndex) => {
    const letters: string[] = word.split("");

    letters.map((letter, letterIndex) => {
      const letterObject: Letter = {
        lastLetter: letterIndex === word.length - 1 && true,
        character: letter,
        status: "unpressed",
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
          status: "unpressed",
        },
      ];
    }
  });

  useEffect(() => {
    containerRef.current!.focus();
    props.setLetterList(tempLetterList);
  }, []);

  return (
    <p
      ref={containerRef}
      onKeyDown={props.keyHandler}
      tabIndex={0}
      className="text-h3 outline-none"
    >
      {props.letterList.map((letter: any, index: any) => {
        return (
          <span
            key={uuidv4()}
            className={`text-neutral-grey-4 ${
              letter.status === "unpressed" ? "text-grey-4" : "text-primary"
            }`}
          >
            {letter.character}
          </span>
        );
      })}
    </p>
  );
};

export default WordDisplay;
