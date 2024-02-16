import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import './index.css';
import searchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=d2810b91';

const movie1 = {
    "Title": "Mission: Impossible - Rogue Nation",
    "Year": "2015",
    "imdbID": "tt2381249",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTFmNDA3ZjMtN2Y0MC00NDYyLWFlY2UtNTQ4OTQxMmY1NmVjXkEyXkFqcGdeQXVyNTg4NDQ4NDY@._V1_SX300.jpg"
}

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch (`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies("Mission Impossible");
    }, []);
  return (
    <div className="app">
        <h1>MovieNav</h1>

        <div className="search">
            <input
                placeholder="Search here"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img
                src={searchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}
            />
        </div>

        {movies?.length > 0
            ? (
                <div className="container">
                    {movies.map((movie) =>(
                        <MovieCard movie={movie}/>
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>why dont you try searching for something else.</h2>
                </div>
            )}

    </div>
  );
}

export default App;