//import './App.css';

import { Movie } from "../info/MovieLibrary";

interface PropsType {
  movieType: string,
  movie: Movie[],
}

const MovieItem = ({ movieType, movie }: PropsType) => {
  return (
    <div className="contenier">
      {movie.map((item, index) => (
        <div className="ItemMovie" key={index}>
          <img className="ImageItem" src={item.srcImg} alt={item.name} />
          <p className="MoviesName">{item.name}</p>
          <div className="info">
            <div className="info type">{movieType}</div>
            <div className="info year">{item.year}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieItem;
