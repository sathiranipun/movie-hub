import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <>
      test
      <MovieCard
        movie={{ title: "Test1", url: "#", release_date: "2025.12.02" }}
      />
      <MovieCard
        movie={{ title: "Test1", url: "#", release_date: "2025.12.02" }}
      />
    </>
  );
}

export default App;
