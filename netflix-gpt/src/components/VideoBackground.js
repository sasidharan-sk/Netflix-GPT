import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const VideoBackground = ({ movieId }) => {
  

  const trailerVideo = useSelector(store => store.movies?.trailerVideo)  
  const dispatch = useDispatch()
  const getMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filtertrailer = json.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filtertrailer.length ? filtertrailer[0] : json.results[0];


    dispatch(addTrailerVideo(trailer))

  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="">
    <iframe
      className="w-screen aspect-square md:aspect-video"
      src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  </div>
  
  );
};

export default VideoBackground;
