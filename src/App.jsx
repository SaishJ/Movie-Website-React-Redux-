import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/movie/:tmdbId" Component={MovieDetail} />
          <Route path="*" Component={PageNotFound} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
