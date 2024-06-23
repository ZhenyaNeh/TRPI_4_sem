//import './App.css';

import { Route, Routes } from "react-router-dom";
import { MovieLibrary } from "../info/MovieLibrary";
import MovieItem from "./MovieItem";
import Home from "./Home";
import NotFound from "./NotFound";
import Layout from "./Layout";
import { useState } from "react";

interface PropsType {
  movieLib: MovieLibrary
}

const Catalog = ({ movieLib }: PropsType) => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='films' element={<MovieItem movieType='films' movie={movieLib.films} />} />
          <Route path='cartoons' element={<MovieItem movieType='cartoons' movie={movieLib.cartoons} />} />
          <Route path='series' element={<MovieItem movieType='series' movie={movieLib.series} />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Catalog;
