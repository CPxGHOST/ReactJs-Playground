export const GetMovies = () => {
  fetch("https://swapi.dev/api/films/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const transformedMovies = data.results.map((result) => {
        const newResult = {
          id: result.episode_id,
          title: result.title,
          openingText: result.opening_crawl,
          releaseDate: result.release_date,
        };
        return newResult;
      });
      return transformedMovies;
    })
    .catch((error) => console.log(`Error in get films call ${error}`));
};
