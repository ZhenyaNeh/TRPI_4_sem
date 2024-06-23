import { ChangeEvent } from "react";

interface PropsTypes{
    searchText: string,
    typeOfMovies: 'movie' | 'series' | '',
    onSearchTextChange: (filterText: string) => void,
    onTypeOfMoviesChange: (typeOfMovies: 'movie' | 'series' | '') => void,
    onSearch: () => void,
}

const SearchBar = ({searchText, typeOfMovies, onSearchTextChange, onTypeOfMoviesChange, onSearch}: PropsTypes) => {
    const handleSearchTextChange = (e: ChangeEvent<HTMLInputElement>): void => {
        onSearchTextChange(e.target.value);
      }
    
      const handleTypeOfMoviesChange = (e: ChangeEvent<HTMLInputElement>): void => {
        onTypeOfMoviesChange(e.target.id as 'movie' | 'series' | '');
      }

  return (
    <>
      <div className="searchArea">
        <div className="searchBox">
          <input className="searchInput" placeholder="Search" onChange={handleSearchTextChange}/>
          <button className="searchButton" onClick={onSearch}>Search</button>
        </div>
        <div className="searchBox radio">
          <input className="radioInput" type="radio" id="" name="type" onChange={handleTypeOfMoviesChange} defaultChecked />
          <label htmlFor="">All</label>

          <input className="radioInput" type="radio" id="movie" onChange={handleTypeOfMoviesChange} name="type" />
          <label htmlFor="movie">Movies only</label>

          <input className="radioInput" type="radio" id="series" onChange={handleTypeOfMoviesChange} name="type" />
          <label htmlFor="series">Seriers only</label>
        </div>
      </div>
    </>
  );
}

export default SearchBar;