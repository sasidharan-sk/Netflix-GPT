import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovie: null,
        trailerVideo: null,
        popularMovies: null,
        upComingMovies:null,
        topRatedMovies:null,
        movieDetails: null,
    },
    reducers:{
        addNowPlayingMovie : (state,action)=>{
            state.nowPlayingMovie=action.payload
        } ,
        addTrailerVideo: (state , action) => {
            state.trailerVideo = action.payload
        } ,
        addPopularMovies:(state , action )=>{
            state.popularMovies= action.payload
        },
        addTopRatedMovies:(state , action)=>{
            state.topRatedMovies=action.payload;
        },
        addUpComingMovies:(state , action )=>{
            state.upComingMovies=action.payload
        },
        clearTrailerVideo: (state, action) => {
            state.trailerVideo = null;
          },
          addMovieDetails: (state, action) => {
            state.movieDetails = action.payload;
          },
    }

})
export const {addNowPlayingMovie,addTrailerVideo,addPopularMovies,addUpComingMovies,addTopRatedMovies, clearTrailerVideo, addMovieDetails} = movieSlice.actions
export default movieSlice.reducer