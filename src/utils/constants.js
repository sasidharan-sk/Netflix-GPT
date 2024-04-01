

export const USER_AVATAR =
"https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg";

  export const API_OPTIONS ={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
    }
  };

  export const IMG_CDN = "https://image.tmdb.org/t/p/w300";

  export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "tamil", name: "Tamil" },
];

export const SEARCH_MOVIES = "https://api.themoviedb.org/3/search/movie?query=";

export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;