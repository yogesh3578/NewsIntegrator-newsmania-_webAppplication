import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/Business"
            element={<News key="business" country="in" category="business" />}
          ></Route>
          <Route
            exact
            path="/Entertainment"
            element={
              <News key="entertainment" country="in" category="entertainment" />
            }
          ></Route>
          <Route
            exact
            path="/General"
            element={<News key="general" country="in" category="general" />}
          ></Route>
          <Route
            exact
            path="/Health"
            element={<News key="health" country="in" category="health" />}
          ></Route>
          <Route
            exact
            path="/Science"
            element={<News key="science" country="in" category="science" />}
          ></Route>
          <Route
            path="/Sports"
            element={<News key="sports" country="in" category="sports" />}
          ></Route>
          <Route
            exact
            path="/Technology"
            element={
              <News key="technology" country="in" category="technology" />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};
export default App;