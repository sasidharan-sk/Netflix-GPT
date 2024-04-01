import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";

const MovieDetails = () => {
  const { id } = useParams();

  useMovieDetails(id);

  const movieDetails = useSelector((store) => store?.movies?.movieDetails);

  if (!movieDetails) {
    return <Spinner />;
  }

  const {
    title,
    budget,
    genres,
    overview,
    popularity,
    release_date,
    revenue,
    vote_average,
    vote_count,
  } = movieDetails;

  return (
    <div className="text-white p-4 m-4 bg-gray-900 rounded-lg h-screen overflow-x-hidden border border-b-white">
      <h1 className="py-4 text-center text-xl md:text-2xl font-bold mb-8">
        About this Movie
      </h1>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg md:text-xl font-semibold">Name:</h2>
          <p>{title}</p>
          <h2 className="text-lg md:text-xl font-semibold mt-4">Overview:</h2>
          <p>{overview}</p>
        </div>

        <div className="md:ml-16 md:pl-20">
          <h2 className="text-lg md:text-xl font-semibold">Budget:</h2>
          <p>${budget / 1000000} million</p>
          <h2 className="text-lg md:text-xl font-semibold mt-4">Revenue:</h2>
          <p>${revenue / 1000000} million</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div>
          <h2 className="text-lg md:text-xl font-semibold">Popularity:</h2>
          <p>{popularity}</p>
          <h2 className="text-lg md:text-xl font-semibold mt-4">
            Release Date:
          </h2>
          <p>{release_date}</p>
        </div>

        <div className="md:ml-16 md:pl-20">
          <h2 className="text-lg md:text-xl font-semibold">Average Votes:</h2>
          <p>{vote_average}</p>
          <h2 className="text-lg md:text-xl font-semibold mt-4">Vote Count:</h2>
          <p>{vote_count}</p>
        </div>

        <div>
          <h2 className="text-lg md:text-xl font-semibold">Genres: </h2>
          {genres && genres.length > 0 ? (
            <ul>
              {genres.map((genre, index) => (
                <li key={index}>{genre.name}</li>
              ))}
            </ul>
          ) : (
            <p>No genres available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;