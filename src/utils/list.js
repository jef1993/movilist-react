// require("dotenv").config();
const movieAPIKey = process.env.REACT_APP_API_KEY;

export const trendingMovies = async (setter) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=b7cb96b2c3e86cd23a777c56ffafe65c`,

      {
        method: "GET",
      }
    );
    const data = await response.json();
    await setter(data.results);
  } catch (error) {
    console.log(error);
  }
};

export const nowPlaying = async (setter) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=b7cb96b2c3e86cd23a777c56ffafe65c&language=en-GB`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    await setter(data.results);
  } catch (error) {
    console.log(error);
  }
};

export const topRated = async (setter) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=b7cb96b2c3e86cd23a777c56ffafe65c&region=GB`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    await setter(data.results);
  } catch (error) {
    console.log(error);
  }
};

export const upComingMovies = async (setter) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=b7cb96b2c3e86cd23a777c56ffafe65c&region=GB`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    await setter(data.results);
  } catch (error) {
    console.log(error);
  }
};

export const movieDetails = async (setter, movieID) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}?api_key=b7cb96b2c3e86cd23a777c56ffafe65c`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    await setter(data);
  } catch (error) {
    console.log(error);
  }
};

export const movieCredits = async (setter, movieID) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
