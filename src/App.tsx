import React, { useState, useEffect, useRef } from "react";


import WordCounter from "./components/word-counter/index.component";
import WordDisplay from "./components/word-display/index.component";

interface Letter {
  lastLetter: boolean;
  character: string;
  status: "pressed" | "unpressed";
}

function App() {
  const [wordCounter, setWordCounter] = useState<number>(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState<number>(0);
  const [letterList, setLetterList] = useState<Letter[]>([]);

  useEffect(() => {
    
  }, []);

  // TODO: should update the event type to KeyboardEvent, however it poses an issue: KeyboardEvent is not generic
  const handleKeyDown = (event: any) => {
    console.log("key: " + event.key);
    console.log("letter: " + letterList[currentLetterIndex].character);

    if (
      event.key === letterList[currentLetterIndex].character &&
      currentLetterIndex !== letterList.length
    ) {
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
        setWordCounter((prevWordCounter) => prevWordCounter + 1);
      }
    }

    // unfocus if reaches last letter
    // if (currentLetterIndex === letterList.length - 1) {
    //   containerRef.current!.blur();
    // }
  };

  return (
    <div className="App p-24">
      <WordCounter wordCount={wordCounter} />
      <WordDisplay numWords={200} keyHandler={handleKeyDown} setLetterList={setLetterList} letterList={letterList}/>
    </div>
  );
}

export default App;
