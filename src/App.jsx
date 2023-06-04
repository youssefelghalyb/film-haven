import React, { useEffect, useState } from "react";

//Components 

import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import HomeBody from "./components/MainBody/HomeBody";
import MovieDetails from "./components/MoveList/MovieDeatils/MovieDetails";
import Footer from "./components/Footer/Footer";
import TvShows from "./components/TvShows/TvShows";
import TvDetails from "./components/TvShows/TvDetails/TvDetails";

import MovieList from "./components/MoveList/MovieList";

import NavBarTv from "./components/NavBar/NavBartv/NavBarTv";
//Components 


import axios from "axios";


//Routers 
import { BrowserRouter, Route, Routes } from "react-router-dom";


//Loader 
import { ScaleLoader } from "react-spinners";



function App() {
  //********************************Movies Section******************************** //

  //--------------------------------------


  //Get All Movies 

  const [allmovies, setAllmovies] = useState([])

  const getAllMovies = async () => {
    const allMoviesRes = await axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&&language=en-US&&api_key=c1b5fd97952f3dea6c7384b5c2fd1767&&page=1');

    setAllmovies(allMoviesRes.data.results)
  }

  useEffect(() => {
    getAllMovies();


  }, [])


  //--------------------------------------


  // Get Current Page Movies  
  const getCurrentPage = async (page) => {
    const allMoviesPages = await axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&&language=en-US&&api_key=c1b5fd97952f3dea6c7384b5c2fd1767&&page=${page}`);

    setAllmovies(allMoviesPages.data.results)
  }

  //--------------------------------------

  //Search Function MovieList 

  const searchFun = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const searchRes = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c1b5fd97952f3dea6c7384b5c2fd1767&query=${word}`)
      setAllmovies(searchRes.data.results)
    }
  }


  //********************************Movies Section******************************** //


  //********************************Tv section********************************// 

  //--------------------------------------

  //Get TV Shows  

  const [shows, setShows] = useState([]);
  const getAllTvShows = async () => {
    const allTvRes = await axios.get('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&api_key=c1b5fd97952f3dea6c7384b5c2fd1767');
    setShows(allTvRes.data.results)
  }

  useEffect(() => {
    getAllTvShows();
  }, []);



  //--------------------------------------


  // Get Current Page tv  
  const getCurrentPageTv = async (page) => {
    const allTvPages = await axios.get(`https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&&language=en-US&&api_key=c1b5fd97952f3dea6c7384b5c2fd1767&&page=${page}`);

    setShows(allTvPages.data.results)
  }

  //--------------------------------------
  //Search Function Tv 

  const searchFunTv = async (word) => {
    if (word === "") {
      getAllTvShows();
    } else {
      const searchRes = await axios.get(`https://api.themoviedb.org/3/search/tv?query=${word}g&include_adult=false&language=en-US&page=1
      &api_key=c1b5fd97952f3dea6c7384b5c2fd1767`)
      setShows(searchRes.data.results)
    }
  }

  //********************************Tv section********************************// 

  //*********************************Loading ***********************************//

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 3000)

  }, [])


  return (
    <>
      {
        loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h2 style={{ color: '#95a1f1', marginTop: '20%' }}> Film Haven is Loading .. </h2>
            <ScaleLoader color="#95a1f1" />

          </div>
        ) :
          <div className="mainApp">
            <div className="main-body">

              <BrowserRouter>
                <Routes>

                  <Route
                    path="/"
                    element={
                      <>
                        <div className='Header'>
                          <NavBar searchFun={searchFun} />
                          <Header />
                        </div>
                        <HomeBody />
                      </>
                    } />

                  <Route
                    path="/MovieList"
                    element={
                      <>
                        <div className='nav-all'>
                          <NavBar searchFun={searchFun} />
                        </div>
                        <MovieList allmovies={allmovies} searchFun={searchFun} getCurrentPage={getCurrentPage} />
                      </>
                    } />


                  <Route
                    path="/movie/:Movid"
                    element={
                      <>
                        <div className='nav-all'>
                          <NavBar searchFun={searchFun} />
                        </div>
                        <MovieDetails allmovies={allmovies} />
                      </>
                    } />

                  <Route
                    path="/TvShows"
                    element={
                      <>

                        <div className='nav-all'>
                          <NavBarTv searchFunTv={searchFunTv} />
                        </div>
                        <TvShows shows={shows} getCurrentPageTv={getCurrentPageTv} />
                      </>
                    }
                  />

                  <Route
                    path="/tv/:Tvid"
                    element={
                      <>
                        <div className='nav-all'>
                          <NavBar />
                        </div>
                        <TvDetails shows={shows} />
                      </>
                    } />

                </Routes>
              </BrowserRouter>

//             </div>
//             <Footer />
//           </div>
      }



    </>
  );
}


export default App;
