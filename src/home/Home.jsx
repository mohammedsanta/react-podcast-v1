import React from 'react';
import './home.css';
import HeaderSection from './components/headerSection/HeaderSection';
import LatestProduct from './components/latestProduct/LatestProduct';
import Weekly from './components/weekly/Weekly';
import RecentProduct from './components/recentProduct/RecentProduct';
import EpisodeHeader from './allEpisode/allEpisodeHeader/EpisodeHeader';
import Episodes from './allEpisode/Episodes/Episodes';
import Footer from './footer/Footer';

const Home = () => {
  return (
    <>

      <HeaderSection />

      <LatestProduct />

      <Weekly />

      <RecentProduct />

      <Footer />

    </>
  )
}

export default Home;