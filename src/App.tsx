import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

interface Letter {
  lastLetter: boolean;
  character: string;
  status: "pressed" | "unpressed";
}

function App() {
  const words = ["hello", "world!", "asdf", "monkey"];
  const [wordCounter, setWordCounter] = useState<number>(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState<number>(0);
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [letterList, setLetterList] = useState<Letter[]>([]);

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
    setLetterList(tempLetterList);
    containerRef.current?.focus();
  }, []);

  useEffect(() => {
    console.log('current word counter:  ' + wordCounter)
  }, [wordCounter]);

  // TODO: should update the event type to KeyboardEvent, however it poses an issue: KeyboardEvent is not generic
  const handleKeyDown = (event: any) => {
    console.log("key: " + event.key);
    console.log("letter: " + letterList[currentLetterIndex].character);
    if (event.key === letterList[currentLetterIndex].character && currentLetterIndex !== letterList.length) {
      // update key press status
      const tempLetterList = [...letterList];
      tempLetterList[currentLetterIndex] = {
        ...letterList[currentLetterIndex],
        status: "pressed",
      };
      setLetterList(tempLetterList);

      // increment current letter index
      setCurrentLetterIndex((prevLetterIndex) => prevLetterIndex + 1);

      // update word counter
      if (letterList[currentLetterIndex].lastLetter) {
        setWordCounter(prevWordCounter => prevWordCounter + 1);
      }
    }

    // unfocus if reaches last letter
    if (currentLetterIndex === letterList.length - 1) {
      containerRef.current?.blur();
    }
  };

  return (
    <div className="App p-24">
      {/* GENERATE WORDS */}
      <p
        className="text-h3 outline-none"
        onKeyDown={handleKeyDown}
        tabIndex={0}
        ref={containerRef}
      >
        {letterList.map((letter, index) => {
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
    </div>
  );
}

export default App;
