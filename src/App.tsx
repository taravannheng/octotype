import React, { FC, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./routes/landing/index.component";
import { CurrentLetterIndexContextProvider } from "./contexts/current-letter-index-context";
import { WordCounterProvider } from "./contexts/word-counter-context";
import { TimerProvider } from "./contexts/timer-context";
import { FirstKeyPressedProvider } from "./contexts/first-key-pressed-context";
import { ROUTES } from "./utils/constants";
import SummaryPagePrivate from "./routes/private-summary/index.component";

// LAZY LOADING
const SummaryPage = React.lazy(
  () => import("./routes/summary/index.component")
);

const App: FC = () => {
  return (
    <CurrentLetterIndexContextProvider>
      <WordCounterProvider>
        <TimerProvider>
          <FirstKeyPressedProvider>
            <Router>
              <Routes>
                <Route path={ROUTES.LANDING} element={<LandingPage />} />
                <Route path={ROUTES.SUMMARY} element={<SummaryPagePrivate />}>
                  <Route
                    path={ROUTES.SUMMARY}
                    element={
                      <Suspense fallback={"Loading..."}>
                        <SummaryPage />
                      </Suspense>
                    }
                  />
                </Route>
              </Routes>
            </Router>
          </FirstKeyPressedProvider>
        </TimerProvider>
      </WordCounterProvider>
    </CurrentLetterIndexContextProvider>
  );
};

export default App;
