import { useRef, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { SEARCH_MOVIES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";
import Spinner from "./Spinner";
import genAI from "../utils/geminiAI";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const getMovieSearchRecommendations = async (movieName) => {
    const movieData = await fetch(SEARCH_MOVIES + movieName, API_OPTIONS);

    const json = await movieData.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    setIsLoading(true);

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const gptQuery =
      "Act as a movie recommendation system and suggest movies for the query : " +
      searchText.current.value +
      ". Only give me names for 5 movies, comma separated like the example result given ahead. Example Result: Shiddat, 12th Fail, Mr. Robot, The Shawshank Redemption, Spirited Away";

    const gptResults = await model.generateContent(gptQuery);
    const response = await gptResults.response.text();

    const gptMovies = response.split(",");

    const movieData = gptMovies.map((movie) =>
      getMovieSearchRecommendations(movie)
    );
    const searchResults = await Promise.all(movieData);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: searchResults })
    );

    setIsLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleGptSearchClick();
  };

  return (
    <div className="pt-[25%] md:pt-[5%] flex justify-center">
      <form
        action=""
        className="w-full m-2 md:w-1/2 bg-slate-700 grid grid-cols-12 rounded-lg"
        onSubmit={handleSubmit}
      >
        <input
          ref={searchText}
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-2 rounded-lg bg-[#E50914] text-white col-span-3"
          onClick={handleGptSearchClick}
          disabled={isLoading}
        >
          
          {isLoading ? <Spinner /> : lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;