import React from 'react';

//components

import NavBar from '../components/NavBar';
import Carousel from '../components/Carousels';
import TodayList from '../components/TodayList';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';





function Home() {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <TodayList />
      <Footer />
    </div>
  );
}


export default Home;