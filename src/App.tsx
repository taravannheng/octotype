import { useState, useEffect } from "react";

import WordCounter from "./components/word-counter/index.component";
import WordDisplay from "./components/word-display/index.component";
import Header from "./components/header/index.component";
import { CurrentLetterIndexContextProvider } from "./contexts/current-letter-index-context";
import { WordCounterProvider } from "./contexts/word-counter-context";

// interface Letter {
//   lastLetter: boolean;
//   character: string;
// }

function App() {
  const [wordCounter, setWordCounter] = useState<number>(0);

  return (
    <CurrentLetterIndexContextProvider>
      <WordCounterProvider>
        <div className="App">
          <Header headerStyle="mb-24" />
          <WordCounter />
          <WordDisplay numWords={200} wordDisplayStyle="px-12 sm:px-24" />
        </div>
      </WordCounterProvider>
    </CurrentLetterIndexContextProvider>
  );
}

export default App;
