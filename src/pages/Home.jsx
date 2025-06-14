import { useState, useEffect, useActionState } from "react";
import "../css/Home.css";

import { searchMovies, getPopularMovies } from "../services/api";
import MovieCard from "../components/MovieCard";

function Home() {
  const [searchQuery, setSearchQuery] = useState();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
        console.log(popularMovies);
      } catch (err) {
        console.log("ERROR:", err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if(!searchQuery.trim()) return;
    if(loading) return;

    setLoading(true);
    try{
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    }
    catch(err){
      console.log("ERROR :", err)
      setError("Failed to search movie ...");
    }
    finally{
      setLoading(false);
    }
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
          className="search-input"
        />
        <button type="submit" className="serch-button">
          Search
        </button>
      </form>
      {error && <div className="error-message"> Loading ... </div>}
      {loading ? (
        <div className="loading"> Loading ... </div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
      {/* <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div> */}
    </div>
  );
}

export default Home;
