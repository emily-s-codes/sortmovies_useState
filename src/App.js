import './App.css';
import MovieList from './components/movies/Movies';
import movies from "./components/data/Data"
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
