import { GetMoviesAPI } from "../constants/APIConstants";

export const GetMovies = async () => {
  const response = await fetch(GetMoviesAPI);
  if (!response.ok) {
    throw new Error("Something went wrong!");
  }
  const data = await response.json();
  const movies = [];
  for (let key in data) {
    console.log(data[key]);
    movies.push({
      id: key,
      title: data[key].title,
      releaseDate: data[key].releaseDate,
      openingText: data[key].openingText,
    });
  }

  return movies;
};
export const AddMovie = async () => {};
