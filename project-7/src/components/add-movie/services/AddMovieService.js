import { AddMovieAPI } from "../constants/APIConstants";

export const AddMovieService = async (movie) => {
  const response = await fetch(AddMovieAPI, {
    method: "POST",
    body: JSON.stringify(movie),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
};
