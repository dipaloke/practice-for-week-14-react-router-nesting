import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import MovieDetails from "../MovieDetails";

function Movies({ movieData }) {
  // Check if movieData is undefined or null

  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <nav>
        <ul>
          {movieData.map((movie) => (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Switch>
        <Route path="/movies/:movieId">
          <MovieDetails movies={movieData} />
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;
