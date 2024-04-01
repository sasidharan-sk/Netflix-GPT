import React from "react";
import { IMG_CDN } from "../utils/constants";
import { Link } from "react-router-dom";
import "./moviecard.css";


const MovieCard = ({ posterPath, id}) => {
  if (!posterPath) return null;

  return (
    <div className="group w-full sm:w-48 md:w-56 pr-4 overflow-hidden transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-lg movie-card">
      <Link to={`/browse/${id}`}>
      <img
           className="w-full h-auto rounded-lg shadow-md transform scale-100 transition-transform duration-500 ease-out group-hover:scale-110 movie-poster"
        src={IMG_CDN + posterPath}
        alt="Movie-card"
      />
      </Link>
    </div>
  );
};

export default MovieCard;
