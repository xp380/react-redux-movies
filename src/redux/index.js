import axios from "axios";
import { startMovie, successMovie, errorMovie } from "./action";

export const allMovies = () => (dispatch) => {
  dispatch(startMovie());
  return axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=30582d63e1f78f53711360b533a5d861&page=1`
    )
    .then(({ data }) => {
      dispatch(successMovie(data.results));
    })
    .catch((error) => {
      dispatch(errorMovie(error));
    });
};
