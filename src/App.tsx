import Dashboard from "./components/dashboard/index.component";
import WordCounter from "./components/word-counter/index.component";
import Timer from "./components/timer/index.component";
import WordDisplay from "./components/word-display/index.component";
import Header from "./components/header/index.component";
import { CurrentLetterIndexContextProvider } from "./contexts/current-letter-index-context";
import { WordCounterProvider } from "./contexts/word-counter-context";
import { TimerProvider } from "./contexts/timer-context";
import { FirstKeyPressedProvider } from "./contexts/first-key-pressed-context";

function App() {
  return (
    <CurrentLetterIndexContextProvider>
      <WordCounterProvider>
        <TimerProvider>
          <FirstKeyPressedProvider>
            <div className="App">
              <Header headerStyle="mb-24" />
              <Dashboard dashboardStyle="flex items-center flex-row px-12 sm:px-24 lg:px-64 mb-12" />
              <div className="flex justify-between items-center px-12 sm:px-24 lg:px-64 mb-4">
                <Timer />
                <WordCounter />
              </div>
              <WordDisplay
                numWords={200}
                maxWordLength={5}
                wordDisplayStyle="px-12 sm:px-24 lg:px-64 text-justify"
              />
            </div>
          </FirstKeyPressedProvider>
        </TimerProvider>
      </WordCounterProvider>
    </CurrentLetterIndexContextProvider>
  );
}

export default App;
