import "../styles/App.scss";
import { Home } from "../pages/Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Header } from "../components/Header";
import { MovieDetails } from "../pages/MovieDetails";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              Hola
            </Route>
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
