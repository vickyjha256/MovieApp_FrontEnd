import './App.css';
// import api from "./api/axiosConfig";
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/HomeComp/Home';
import Header from './Components/HeaderComp/Header';
import Trailer from './Components/TrailerComp/Trailer';
import Review from './Components/ReviewComp/Review';
import NotFound from './Components/NotFoundComp/NotFound';

function App() {
  const [movies, setmovies] = useState([]);
  const [movie, setmovie] = useState([]);
  const [reviews, setreviews] = useState();

  const getMovies = async () => {
    try {
      // const response = await api.get("/api/route/movies");
      const response = await fetch("http://localhost:8080/api/route/movies");
      const json = await response.json();

      console.log(json);


      setmovies(json);

    } catch (error) {
      console.log(error);
    }
  }

  const getMovieData = async (movieId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/route/movies/${movieId}`);
      const json = await response.json();

      setmovie(json);

      setreviews(json.reviewIds);
    } catch (error) {
        console.error(error);
    }
  }

  useEffect(() => {
    getMovies();
  }, [])


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<Home movies={movies} />} />
          <Route path='/trailer/:ytTrailerId' element={<Trailer />} />
          <Route path='/reviews/:movieId' element={<Review getMovieData={getMovieData} movie={movie} reviews={reviews} setreviews={setreviews} />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
