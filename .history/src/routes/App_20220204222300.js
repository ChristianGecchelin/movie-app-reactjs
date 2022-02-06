import "../styles/App.scss";
import { Home } from "../pages/Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { MovieDetails } from "../pages/MovieDetails";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/moviedetails" element={<MovieDetails />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
