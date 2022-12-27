import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieDetail from "./components/MovieDetail";
import PageNotFound from "./components/PageNotFound";
import axios from "axios";

const movieAPI = "https://www.omdbapi.com";
axios.defaults.baseURL = movieAPI;

const App = () => {
  return (
    <div>
      <main className="">
        <header>
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <footer className='bg-black'>
          <Footer />
        </footer>
      </main>
    </div>
  );
};

export default App;
