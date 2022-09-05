import { useState, useEffect } from "react";
import MoviesCard from "./MoviesCard";
import SearchIcon from "./search.svg";
import "./App.css";

const App = () => {
  const API_URL = "https://www.omdbapi.com?apikey=7b4a1615";

  const [Movies, setMovies] = useState([]);
  const [Searching, setsearching] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("batman");
  }, []);

  return (
    <div className="app">
      <h1>MOVIE LAND</h1>

      <div className="search">
        <input
          placeholder="search for movies, series, games..."
          value={Searching}
          onChange={(e) => setsearching(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(Searching)}
        />
      </div>

      <div className="container">
        {Movies?.length > 0 ? (
          Movies.map((movie, index) => <MoviesCard key={index} movie={movie} />)
        ) : (
          <div className="empty">
            <h2>No results</h2>
          </div>
        )}
      </div>

      <div className="footer">
        <footer>© copyright 2022 movieland by Thiyagu</footer>
      </div>
    </div>
  );
};

export default App;
