import React from "react";
import MovieCard from "./MovieCard";
import { IMG_CDN } from "../utils/constants";
import "./movielist.css"

const MovieList = ({ title, movies }) => {

  // Check if movies is truthy and has at least one item
  if (!movies || movies.length === 0 || !movies[0]) {
    return (
      <div>
        <h1>{title}</h1>
        <p>No movies available</p>
      </div>
    );
  }

  return (
    <div className=" p-2">
      <h1 className="py-4 text-3xl px-2 text-white ">{title}</h1>
      <div className="flex custom-scrollbar">
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} id={movie?.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
