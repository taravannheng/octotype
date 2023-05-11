import React, { FC, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./routes/landing/index.component";
import ProgressIndicator from "./components/progress-indicator/index.component";
import { CurrentLetterIndexContextProvider } from "./contexts/current-letter-index-context";
import { WordCounterProvider } from "./contexts/word-counter-context";
import { TimerProvider } from "./contexts/timer-context";
import { FirstKeyPressedProvider } from "./contexts/first-key-pressed-context";
import { TotalLetterTypedProvider } from "./contexts/total-letter-typed";
import { AccuracyProvider } from "./contexts/accuracy-context";
import { ThemeProvider } from "./contexts/theme-context";
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
            <TotalLetterTypedProvider>
              <AccuracyProvider>
                <ThemeProvider>
                  <Router>
                    <Routes>
                      <Route path={ROUTES.LANDING} element={<LandingPage />} />
                      <Route
                      path={ROUTES.SUMMARY}
                      element={<SummaryPagePrivate />}
                    >
                      <Route
                        path={ROUTES.SUMMARY}
                        element={
                          <Suspense fallback={<ProgressIndicator />}>
                            <SummaryPage />
                          </Suspense>
                        }
                      />
                      </Route>
                    </Routes>
                  </Router>
                </ThemeProvider>
              </AccuracyProvider>
            </TotalLetterTypedProvider>
          </FirstKeyPressedProvider>
        </TimerProvider>
      </WordCounterProvider>
    </CurrentLetterIndexContextProvider>
  );
};

export default App;
