import WordCounter from "./components/word-counter/index.component";
import WordDisplay from "./components/word-display/index.component";
import Header from "./components/header/index.component";
import { CurrentLetterIndexContextProvider } from "./contexts/current-letter-index-context";
import { WordCounterProvider } from "./contexts/word-counter-context";

function App() {
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
