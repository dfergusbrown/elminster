import * as React from "react";
import { Routes, Route } from "react-router-dom";
import CoverPage from "./pages/CoverPage";
import Inside from "./pages/Inside";
import Intro from "./components/Intro";
import QuizGame from "./components/QuizGame";



function App() {
  return (
    <Routes>
      <Route path='/' element={<CoverPage />} />
      <Route path='Inside/*' element={<Inside />}>
        <Route path='Intro' element={<Intro />} />
        <Route path='QuizGame' element={<QuizGame />} />
      </Route>
    </Routes>
  );
}

export default App;
