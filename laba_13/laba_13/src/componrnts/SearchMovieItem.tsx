//import './App.css';

import { Movie } from "../info/MovieLibrary";
import { MovieType } from "../info/api";

interface PropsType {
  movie: MovieType[],
}

const SearchMovieItem = ({ movie }: PropsType) => {
  if (movie === undefined) {
    return null;
  }

  return (
    <div className="contenier">
      {movie.map((item, index) => (
        <div className="ItemMovie" key={index}>
          <img className="ImageItem" src={item.Poster} />
          <p className="MoviesName">{item.Title}</p>
          <div className="info">
            <div className="info type">{item.Type}</div>
            <div className="info year">{item.Year}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchMovieItem;
