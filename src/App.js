import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {

  pageSize = 6;

  static propTypes = {
    category: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired,
  }

  static defaultProps = {
    category: 'general',
    country: 'in',
    pageSize: 6,
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path='/'
            element={<News key='general' country='in' pageSize = {this.pageSize} category='general' />}
          />
          <Route
            exact
            path='/business'
            element={<News key='business' country='in' pageSize = {this.pageSize} category='business' />}
          />
          <Route
            exact
            path='/entertainment'
            element={<News key='entertainment' country='in' pageSize = {this.pageSize} category='entertainment' />}
          />
          <Route
            exact
            path='/health'
            element={<News key='health' country='in' pageSize = {this.pageSize} category='health' />}
          />
          <Route
            exact
            path='/science'
            element={<News key='science' country='in' pageSize = {this.pageSize} category='science' />}
          />
          <Route
            exact
            path='/sports'
            element={<News key='sports' country='in' pageSize = {this.pageSize} category='sports' />}
          />
          <Route
            exact
            path='/technology'
            element={<News key='technology' country='in' pageSize = {this.pageSize} category='technology' />}
          />
        </Routes>
      </Router>
    );
  }
}
