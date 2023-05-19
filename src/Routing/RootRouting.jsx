import React, { useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import FinalPage from "../Components/FinalPage";
import Home from "../Components/Home";
import Quiz from "../Components/Quiz";

function RootRouting() {
  const [currentScore, setCurrentScore] = useState(0);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/quiz"
          element={
            <Quiz
              currentScore={currentScore}
              setCurrentScore={setCurrentScore}
            />
          }
        />
        <Route
          path="/finish"
          element={
            <FinalPage
              currentScore={currentScore}
              setCurrentScore={setCurrentScore}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default RootRouting;
