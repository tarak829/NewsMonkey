import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  let pageSize = 6;
  let country = "in";

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          exact
          path='/'
          element={<News key='general' country={country} pageSize={pageSize} category='general' />}
        />
        <Route
          exact
          path='/business'
          element={<News key='business' country={country} pageSize={pageSize} category='business' />}
        />
        <Route
          exact
          path='/entertainment'
          element={
            <News key='entertainment' country={country} pageSize={pageSize} category='entertainment' />
          }
        />
        <Route
          exact
          path='/health'
          element={<News key='health' country={country} pageSize={pageSize} category='health' />}
        />
        <Route
          exact
          path='/science'
          element={<News key='science' country={country} pageSize={pageSize} category='science' />}
        />
        <Route
          exact
          path='/sports'
          element={<News key='sports' country={country} pageSize={pageSize} category='sports' />}
        />
        <Route
          exact
          path='/technology'
          element={<News key='technology' country={country} pageSize={pageSize} category='technology' />}
        />
      </Routes>
    </Router>
  );
};

export default App;

App.propTypes = {
  category: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  pageSize: PropTypes.number.isRequired,
};

App.defaultProps = {
  category: "general",
  country: "in",
  pageSize: 6,
};
