import MovieItem from "./MovieItem";
import { MovieLibrary } from "../info/MovieLibrary";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { MovieType, moviesAPI } from "../info/api";
import SearchMovieItem from "./SearchMovieItem";

const Home = () => {
  const[movies, setMovies] = useState<MovieType[]>([]);
  const [searchText, setSearchText] = useState('');
  const [typeOfMovies, setTypeOfMovies] = useState<'movie' | 'series' | ''>('');

  const handleSearchTextChange = (searchText: string): void => {
    setSearchText(searchText);
  }

  const handleTypeOfMoviesChange = (typeOfMovies: 'movie' | 'series' | ''): void => {
    setTypeOfMovies(typeOfMovies);
  }

  const fetchMovies = async (_searchText: string, _typeOfMovies: 'movie' | 'series' | '') => {
    const resultsMovie = await moviesAPI.getMovies(searchText, typeOfMovies)
    setMovies(resultsMovie);
  }

  // useEffect(() =>{
  //   fetchMovies(searchText, typeOfMovies)
  // });

  const search = () => {
    fetchMovies(searchText, typeOfMovies)
  }

  return (
    <>
      <SearchBar searchText={searchText} typeOfMovies={typeOfMovies} onSearchTextChange={handleSearchTextChange} onTypeOfMoviesChange={handleTypeOfMoviesChange} onSearch={search}/>
      <SearchMovieItem movie={movies} />
    </>
  );
}

export default Home;
