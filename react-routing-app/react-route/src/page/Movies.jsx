import { useEffect, useState } from "react";
import Card from "../components/card";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => setMovies(data.slice(0, 20)));
  }, []);

  return (
    <div className="container">
      <h2>Movies</h2>
      <div className="grid">
        {movies.map((movie) => (
          <Card
            key={movie.id}
            title={movie.name}
            image={movie.image?.medium}
            extra={`Rating: ${movie.rating?.average || "N/A"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Movies;
