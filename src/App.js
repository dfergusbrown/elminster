import * as React from "react";
import { Routes, Route } from "react-router-dom";
import CoverPage from "./pages/CoverPage";
import Introduction from "./pages/Introduction";



function App() {
  return (
    <Routes>
      <Route path='/' element={<CoverPage />} />
      <Route path='Intro' element={<Introduction />} />
    </Routes>
  );
}

export default App;
