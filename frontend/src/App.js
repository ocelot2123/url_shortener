import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Redirect from "./pages/Redirect";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/:id" element={<Redirect />} />
      </Routes>
    </Router>
  );
};

export default App;
